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
			// Usuario encontrado, devolvemos el id_usuario
			res.json({
				success: true,
				id_usuario: results[0].id,
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

// Ruta para extraer datos de ususaro
app.get('/api/usuario/:id', (req, res) => {
	const id = req.params.id;
	const sql =
		'SELECT Nombre, Apellido FROM Usuarios WHERE id = ?';

	db.query(sql, [id], (err, result) => {
		if (err) {
			console.error('Error al obtener el usuario:', err);
			return res
				.status(500)
				.json({ error: 'Error del servidor' });
		}
		if (result.length === 0) {
			return res
				.status(404)
				.json({ error: 'Usuario no encontrado' });
		}
		res.json(result[0]); // devuelve { nombre: "...", apellido: "..." }
	});
});

// Ruta para almacenar datos en la API de cuestions.tsx
app.post('/api/cuestions', (req, res) => {
	const { evento, id_usuario, cuestion } = req.body;
	console.log('BODY:', req.body);
	console.log('Recibido en el backend:', {
		id_usuario,
		cuestion,
		evento,
	});

	const sql =
		'INSERT INTO Preguntas (Evento,Pregunta,id_usuario) VALUES (?,?, ?)';
	db.query(
		sql,
		[evento, cuestion, id_usuario],
		(err, result) => {
			if (err) {
				console.error(
					'❌ Error al insertar pregunta:',
					err
				);
				return res.status(500).json({
					success: false,
					error: 'Error en el servidor',
				});
			}
			res.status(201).json({
				success: true,
				message: 'Pregunta registrada correctamente',
			});
		}
	);
});

// Lectura de la tabla Preguntas
app.get('/api/cuestions/:evento', (req, res) => {
	const evento = req.params.evento;
	const query = 'SELECT * FROM Preguntas WHERE Evento=?';
	db.query(query, [evento], (err, results) => {
		if (err) {
			console.error('Error al obtener registros:', err);
			return res
				.status(500)
				.json({ error: 'Error en la base de datos' });
		}
		// Comprueba si ya hay preguntas
		if (results.length > 0) {
			res.json({ existe: true, data: results });
		} else {
			res.json({ existe: false });
		}
	});
});

// API para mostrar las preguntas
app.get(
	'/api/cuestions-con-usuarios:evento',
	(req, res) => {
		const evento = req.params.evento;
		const query = `
    SELECT
      Preguntas.Pregunta,
      Preguntas.id_usuario,
      Usuarios.Nombre,
      Usuarios.Apellido
    FROM Preguntas WHERE Evento=?
    JOIN Usuarios ON Preguntas.id_usuario = Usuarios.id
  `;

		db.query(query, [evento], (err, results) => {
			if (err) {
				console.error(
					'Error al obtener cuestiones con usuarios:',
					err
				);
				return res
					.status(500)
					.json({ error: 'Error en el servidor' });
			}

			res.json(results); // Devuelve un arreglo de objetos
		});
	}
);

// Comprueba si el servidor está corriendo
app.listen(PORT, () => {
	console.log(
		`Servidor corriendo en http://localhost:${PORT}`
	);
});
