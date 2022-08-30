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


SELECT [IdSede]
      ,[IdFacturaCliente]
	  ,[NombreVendedor]
      ,[IdDocumento]
      ,[IdTurno]
      ,[CodigoIsla]
      ,[CodigoCara]
      ,[CodigoManguera]
      ,[IdVentaEstacion]
      ,[CodigoVenta]
      ,[SecuenciaVenta]
      ,[IdTranControladora]
      ,[PrefijoFactura]
      ,[NumeroFactura]
      ,[IdentificacionCliente]
      ,[NombreCliente]
      ,[CodigoArticulo]
      ,[Articulo]
      ,[Presentacion]
      ,[VolumenVenta]
      ,[ValorUnitario]
      ,[ValorVenta]
      ,[Porcentaje]
      ,[FechaZeta]
      ,[Fecha]
      ,[Hora]
      ,[Placa]
      ,[Kilometraje]
      ,[Credito]
      ,[FormasPago]
      ,[Rom]
  FROM [TsRiveraBrava].[dbo].[VentasCombustible] where [FechaZeta] BETWEEN '2021-03-14' AND '2021-03-15'

GO


USE [TsRiveraBravaTest]
GO

/****** Object:  Table [dbo].[Tabla_Relacional]    Script Date: 14/07/2022 20:15:20 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Tabla_Relacional]') AND type in (N'U'))
DROP TABLE [TsRiveraBravaTest].[dbo].[Tabla_Relacional]
GO

/****** Object:  Table [dbo].[Tabla_Relacional]    Script Date: 14/07/2022 20:15:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [TsRiveraBravaTest].[dbo].[Tabla_Relacional](
	[NumRegistro] [int] IDENTITY(1,1) NOT NULL,
	[TerceroMaster] [varchar](255) NOT NULL,
	[Identificacion] [int] NOT NULL,
	[Nombre] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[NumRegistro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [TsRiveraBravaTest].[dbo].[Tabla_Relacional]
           ([TerceroMaster]
           ,[Identificacion]
           ,[Nombre])
     VALUES
('GERENCIA TELECOMUNICACIONES EMCALI',805000253,'GLOBOLLANTAS LTDA'),
('GERENCIA ALCANTARILLADO EMCALI',	805000253,	'GLOBOLLANTAS LTDA'),
('GERENCIA ACUEDUCTO',	805000253	,'GLOBOLLANTAS LTDA'),
('GERENCIA ADMINISTRATIVA EMCALI',	805000253,	'GLOBOLLANTAS LTDA'),
('GERENCIA ENERGIA EMCALI',	805000253	,'GLOBOLLANTAS LTDA'),
('POLICIA METROPOLITANA DE CALI',	805000253,	'GLOBOLLANTAS LTDA'),
('DAGMA',	805000253,	'GLOBOLLANTAS LTDA'),
('ADMINISTRACION DE BINES Y SERVICIOS',	805000253,	'GLOBOLLANTAS LTDA')

GO

SELECT [NumRegistro]
      ,[TerceroMaster]
      ,[Identificacion]
      ,[Nombre]
  FROM [TsRiveraBravaTest].[dbo].[Tabla_Relacional]

GO


ALTER TABLE [TsRiveraBravaTest].[dbo].[VentasCombustible] ADD [Confirmacion] bit 
GO

UPDATE [TsRiveraBravaTest].[dbo].[VentasCombustible] SET [Confirmacion] = 0 
GO

EXEC sp_help '[TsRiveraBravaTest].[dbo].[VentasCombustible]'