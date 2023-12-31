USE [master]
GO
/****** Object:  Database [Inventario]    Script Date: 01/10/2023 22:03:20 ******/
CREATE DATABASE [Inventario]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Inventario', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\Inventario.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Inventario_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\Inventario_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Inventario] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Inventario].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Inventario] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Inventario] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Inventario] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Inventario] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Inventario] SET ARITHABORT OFF 
GO
ALTER DATABASE [Inventario] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Inventario] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Inventario] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Inventario] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Inventario] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Inventario] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Inventario] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Inventario] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Inventario] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Inventario] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Inventario] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Inventario] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Inventario] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Inventario] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Inventario] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Inventario] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Inventario] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Inventario] SET RECOVERY FULL 
GO
ALTER DATABASE [Inventario] SET  MULTI_USER 
GO
ALTER DATABASE [Inventario] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Inventario] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Inventario] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Inventario] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Inventario] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Inventario] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Inventario', N'ON'
GO
ALTER DATABASE [Inventario] SET QUERY_STORE = ON
GO
ALTER DATABASE [Inventario] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Inventario]
GO
/****** Object:  Table [dbo].[productos]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[productos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[codigo_producto] [varchar](255) NULL,
	[nombre] [varchar](255) NULL,
	[existencia] [int] NULL,
	[precio] [varchar](255) NULL,
	[img] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[registro_ventas]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[registro_ventas](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha_venta] [date] NULL,
	[producto_id] [int] NULL,
	[cantidad] [int] NULL,
	[precio_unitario] [money] NULL,
	[total] [money] NULL,
	[id_usuario] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuarios]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuarios](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](255) NULL,
	[apellido] [varchar](255) NULL,
	[clave] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[productos] ON 

INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (10, N'A010', N'Portatil Asus G14', 20, N'1.240', N'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/s/k/sku_c00728_y3wmmsvaqgcvag5v.jpg')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1106, N'A001', N'Memoria Ram DDR4 256', 15, N'15', N'https://radioshackbo.com/wp-content/uploads/2021/02/disco-duro-solido-ssd-crucial-240gb-ct240bx500ssd1-nuevo-D_NQ_NP_730209-MPE28209019715_092018-F-600x450-1.jpg')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1110, N'A011', N'Camisa', 1, N'50', N'https://caterpillarhn.com/cdn/shop/products/30070995_180x@2x.jpg?v=1679624812')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1115, N'A0020', N'Mouse Logitech', 14, N'120', N'https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png?v=1')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1116, N'A021', N'Monitor 27 pulgadas', 5, N'950', N'https://http2.mlstatic.com/D_NQ_NP_851888-MLA48345963005_112021-O.webp')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1117, N'A0025', N'Teclado 60% ', 20, N'80', N'https://http2.mlstatic.com/D_NQ_NP_899196-MCO69946138384_062023-O.webp')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1118, N'A025', N'Peluche Psyduck', 65, N'24', N'https://pokepeluches.cl/wp-content/uploads/2022/03/Psyduck-26.png')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1143, N'A0019', N'Casco', 24, N'350', N'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/a/m/am00088-cascos-para-moto-hro.jpg')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1153, N'A0057', N'Monopolio', 21, N'24', N'https://multicenter.vtexassets.com/arquivos/ids/190734-800-auto?v=636741030428900000&width=800&height=auto&aspect=true')
INSERT [dbo].[productos] ([id], [codigo_producto], [nombre], [existencia], [precio], [img]) VALUES (1154, N'A085', N'Catan', 32, N'120', N'https://gatoarcano.cl/wp-content/uploads/2020/05/unnamed-2-1.jpg')
SET IDENTITY_INSERT [dbo].[productos] OFF
GO
SET IDENTITY_INSERT [dbo].[registro_ventas] ON 

INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (2, CAST(N'2023-09-27' AS Date), 10, 1, 1240.0000, 1240.0000, 2)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (3, CAST(N'2023-05-19' AS Date), 10, 3, 1240.0000, 3720.0000, 1)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (4, CAST(N'2023-09-30' AS Date), 1118, 2, 24.0000, 48.0000, 6)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (5, CAST(N'2023-09-30' AS Date), 1118, 2, 24.0000, 48.0000, 1)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (6, CAST(N'2023-09-30' AS Date), 1118, 3, 24.0000, 72.0000, 1)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (7, CAST(N'2023-09-30' AS Date), 1106, 10, 15.0000, 150.0000, 1)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (8, CAST(N'2023-09-30' AS Date), 1117, 2, 80.0000, 160.0000, 2)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (9, CAST(N'2023-09-30' AS Date), 1116, 3, 950.0000, 2850.0000, 8)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (10, CAST(N'2023-10-01' AS Date), 1153, 3, 24.0000, 72.0000, 8)
INSERT [dbo].[registro_ventas] ([id], [fecha_venta], [producto_id], [cantidad], [precio_unitario], [total], [id_usuario]) VALUES (11, CAST(N'2023-09-30' AS Date), 1118, 2, 24.0000, 48.0000, 1)
SET IDENTITY_INSERT [dbo].[registro_ventas] OFF
GO
SET IDENTITY_INSERT [dbo].[usuarios] ON 

INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (1, N'Kevin', N'Molina Lazarte', N'mk')
INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (2, N'Ander', N'gomez', N'ander')
INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (3, N'Ander', N'gomez', N'ander')
INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (4, N'Ander', N'gomez', N'ander')
INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (5, N'Patito', N'Juan', N'patito45')
INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (6, N'Manba', N'anguila', N'1515')
INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (7, N'Atun', N':D', N'4')
INSERT [dbo].[usuarios] ([id], [nombre], [apellido], [clave]) VALUES (8, N'Admin', N'admin', N'admin')
SET IDENTITY_INSERT [dbo].[usuarios] OFF
GO
ALTER TABLE [dbo].[registro_ventas]  WITH CHECK ADD FOREIGN KEY([producto_id])
REFERENCES [dbo].[productos] ([id])
GO
ALTER TABLE [dbo].[registro_ventas]  WITH CHECK ADD  CONSTRAINT [fk_id_usuario] FOREIGN KEY([id_usuario])
REFERENCES [dbo].[usuarios] ([id])
GO
ALTER TABLE [dbo].[registro_ventas] CHECK CONSTRAINT [fk_id_usuario]
GO
/****** Object:  StoredProcedure [dbo].[GetAllRecords]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAllRecords]
AS
BEGIN 
	select usuarios.nombre as nombre_usuario, registro_ventas.fecha_venta, productos.nombre as nombre_producto, registro_ventas.cantidad,registro_ventas.precio_unitario, registro_ventas.total
	from registro_ventas, usuarios, productos
	where productos.id=registro_ventas.producto_id and usuarios.id=registro_ventas.id_usuario;
END;
GO
/****** Object:  StoredProcedure [dbo].[GetAllUsers]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAllUsers]
AS
BEGIN
	SELECT * FROM usuarios;
END;
GO
/****** Object:  StoredProcedure [dbo].[GetUser]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetUser]
	@id int
AS
BEGIN
	SELECT * FROM usuarios
	WHERE id=@id;
END;
GO
/****** Object:  StoredProcedure [dbo].[GetUserName]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetUserName]
	@name varchar(255)
AS
BEGIN
	SELECT * FROM USUARIOS
	WHERE NOMBRE=@name;
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertRegistro]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertRegistro]
    @fecha_venta DATE,
    @producto_id INT,
    @cantidad INT,
    @precio_unitario money,
	@usuario_id INT
AS
BEGIN
    INSERT INTO registro_ventas VALUES (@fecha_venta, @producto_id, @cantidad, @precio_unitario, @cantidad * @precio_unitario, @usuario_id);
	exec SP_RestarExistencias @producto_id,@cantidad;
END;
GO
/****** Object:  StoredProcedure [dbo].[InsertUser]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertUser]
    @nombre VARCHAR(255),
    @apellido VARCHAR(255),
    @clave VARCHAR(255)
AS
BEGIN
    INSERT INTO usuarios (nombre,apellido,clave)
    VALUES (@nombre, @apellido, @clave);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_BorrarProductosPorCodigo]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_BorrarProductosPorCodigo]
    @codigo_producto VARCHAR(255)
AS
BEGIN
    -- Eliminar productos que tengan un código similar
    DELETE FROM Productos
    WHERE codigo_producto LIKE '%' + @codigo_producto + '%';
END
GO
/****** Object:  StoredProcedure [dbo].[SP_Consulta]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Consulta]
AS
SELECT * FROM productos
WHERE codigo_producto = 'A005'
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteProduct]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_DeleteProduct]
	@code varchar(225)
AS
BEGIN
	delete productos
	where codigo_producto=@code
END
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteProductById]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_DeleteProductById]
	@id int
AS
BEGIN
	delete productos
	where id=@id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetAllProducts]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_GetAllProducts]
AS
BEGIN
    SELECT * FROM productos;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetProduct]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_GetProduct]
	@code varchar(225)
AS
BEGIN
	select * from productos
	where codigo_producto=@code
END
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertProduct]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InsertProduct]
	@code varchar(225),
	@name  varchar(225),
	@exist int,
	@price varchar(255),
	@img varchar(255)
AS
BEGIN
    INSERT INTO Productos (codigo_producto, nombre, existencia, precio, img)
	values (@code, @name,@exist,@price,@img);
END
GO
/****** Object:  StoredProcedure [dbo].[SP_Prueba1]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[SP_Prueba1]
as
print 'Hola mundo'
execute SP_Prueba1
GO
/****** Object:  StoredProcedure [dbo].[SP_RestarExistencias]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_RestarExistencias]
@id INT,
@Cantidad AS INT
AS
UPDATE productos SET existencia-=@Cantidad
WHERE id=@id;
GO
/****** Object:  StoredProcedure [dbo].[SP_SumarExistencias]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_SumarExistencias]
@CodProducto AS VARCHAR(225),
@Cantidad AS INT
AS
UPDATE productos SET existencia+=@Cantidad
WHERE codigo_producto=@CodProducto
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateProduct]    Script Date: 01/10/2023 22:03:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_UpdateProduct]
	@code varchar(225),
	@name  varchar(225),
	@exist int,
	@price varchar(255),
	@img varchar(255)
AS
BEGIN
	Update productos
	set nombre=@name, existencia=@exist , precio=@price, img=@img
	where productos.codigo_producto=@code;
END
GO
USE [master]
GO
ALTER DATABASE [Inventario] SET  READ_WRITE 
GO
