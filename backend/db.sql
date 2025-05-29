CREATE DATABASE IF NOT EXISTS Conferencias_IPN;

CREATE TABLE IF NOT EXISTS Usuarios(
	id int UNSIGNED NOT NULL AUTO_INCREMENT,
	Nombre varchar(30) NOT NULL,
	Apellido varchar(30) NOT NULL,
	Correo varchar(50) NOT NULL UNIQUE,
	Contrasena varchar(25) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO Usuarios(Nombre,Apellido,Correo,Contrasena)
VALUES
('Juan','Pérez','juan.perez@example.com','IPN'),
('María','Rodríguez','maria.rodriguez@example.com','IPN'),
('Carlos','Gómez','carlos.gomez@example.com','IPN'),
('Ana','Fernández','ana.fernandez@example.com','IPN'),
('Luis','Ramírez','luis.ramirez@example.com','IPN');