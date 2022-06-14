Create database Rivera;
use Rivera

--Optionally create a table whit the following columns:
--Create table users (
--    id int NOT NULL IDENTITY(1,1),
--    username varchar(255) NOT NULL,
--    password varbinary(255) NOT NULL,
--   nombre varchar(255) NOT NULL,
--    apellido varchar(255) NOT NULL,
--    PRIMARY KEY (id)
--);

--And insert the following rows:

--INSERT INTO users(username, password, nombre, apellido)
--   VALUES('Admin', CAST ('1234'  AS VARBINARY), 'Admin 1', 'Admin 1');

Create table users (
   id int NOT NULL IDENTITY(1,1),
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
   nombre varchar(255) NOT NULL,
    apellido varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users(username, password, nombre, apellido) 
   VALUES('Admin', '1234', 'Admin 1', 'Admin 1');

INSERT INTO users(username, password, nombre, apellido) 
   VALUES('Admin2', '1234', 'Admin 2', 'Admin 2');

INSERT INTO users(username, password, nombre, apellido) 
    VALUES('Admin3', '1234', 'Admin 3', 'Admin 3');

SELECT * FROM users

Create table cartera (
    IdSede int NOT NULL,
	IdTurno int NOT NULL,
	CodigoIsla int NOT NULL,
    Vendedor varchar(255) NOT NULL,
	IdentificacionCliente int NOT NULL,
    NombreCliente varchar(255) NOT NULL,
	IdDocumento int NOT NULL,
    Articulo varchar(255) NOT NULL,
	VolumenVenta int NOT NULL,
	ValorUnitario int NOT NULL,
	ValorVenta int NOT NULL,
    Placa varchar(255) NOT NULL,
	FormasPago varchar(255) NOT NULL,
	CodigoCara varchar(255) NOT NULL,
	CodigoManguera int NOT NULL,
	PrefijoFactura varchar(255) NOT NULL,
	NumeroFactura int NOT NULL,
	FechaZeta Date NOT NULL,
	Fecha Date NOT NULL,
	Hora DATETIME Not null,
    PRIMARY KEY (IdSede)
);

create table relacional(
   IdentificacionMaster int Not Null,
   TerceroMaster varchar(255) Not Null,
   Identificacion int Not Null,
   Nombre varchar(255) Not Null,
   Primary Key (IdentificacionMaster)
);

