// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3300;

app.use(
	cors({
		origin: 'http://localhost:5173', // dirección de tu frontend (vite por defecto)
		credentials: true,
	})
);

app.use(express.json());

// Configura tu conexión a MySQL
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Conferencias_IPN',
});

// Ruta de API para Login.tsx
app.post('/api/login', (req, res) => {
	console.log('Cuerpo recibido', req.body);
	const { email, password } = req.body;

	const query =
		'SELECT * FROM Usuarios WHERE Correo = ? AND Contrasena = ?';
	db.query(query, [email, password], (err, results) => {
		if (err) {
			console.error('x Error en consulta SQL:', err);
			return res
				.status(500)
				.json({ error: 'Error en la base de datos' });
		}

		if (results.length > 0) {
			res.json({
				success: true,
				message: 'Login exitoso',
			});
		} else {
			res.status(401).json({
				success: false,
				message: 'Credenciales inválidas',
			});
		}
	});
});

// Ruta para la API de signup.tsx
app.post('/api/signup', (req, res) => {
	const { nombre, apellido, email, password } = req.body;

	const sql =
		'INSERT INTO Usuarios (Nombre, Apellido, Correo, Contrasena) VALUES (?, ?, ?, ?)';
	db.query(
		sql,
		[nombre, apellido, email, password],
		(err, result) => {
			if (err) {
				console.error(
					'❌ Error al insertar usuario:',
					err
				);
				return res.status(500).json({
					success: false,
					error: 'Error en el servidor',
				});
			}

			res.status(201).json({
				success: true,
				message: 'Usuario registrado correctamente',
			});
		}
	);
});

// Comprueba si el servidor está corriendo
app.listen(PORT, () => {
	console.log(
		`Servidor corriendo en http://localhost:${PORT}`
	);
});
