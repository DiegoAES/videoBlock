USE [master]
GO
/****** Object:  Database [videoBlock]    Script Date: 3/1/2021 6:37:26 AM ******/
CREATE DATABASE [videoBlock]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'videoBlock', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\videoBlock.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'videoBlock_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\videoBlock_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [videoBlock] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [videoBlock].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [videoBlock] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [videoBlock] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [videoBlock] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [videoBlock] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [videoBlock] SET ARITHABORT OFF 
GO
ALTER DATABASE [videoBlock] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [videoBlock] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [videoBlock] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [videoBlock] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [videoBlock] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [videoBlock] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [videoBlock] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [videoBlock] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [videoBlock] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [videoBlock] SET  DISABLE_BROKER 
GO
ALTER DATABASE [videoBlock] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [videoBlock] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [videoBlock] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [videoBlock] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [videoBlock] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [videoBlock] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [videoBlock] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [videoBlock] SET RECOVERY FULL 
GO
ALTER DATABASE [videoBlock] SET  MULTI_USER 
GO
ALTER DATABASE [videoBlock] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [videoBlock] SET DB_CHAINING OFF 
GO
ALTER DATABASE [videoBlock] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [videoBlock] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [videoBlock] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'videoBlock', N'ON'
GO
ALTER DATABASE [videoBlock] SET QUERY_STORE = OFF
GO
USE [videoBlock]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 3/1/2021 6:37:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[ClienteId] [bigint] IDENTITY(1,1) NOT NULL,
	[PrimerNombre] [nvarchar](50) NULL,
	[SegundoNombre] [nvarchar](50) NULL,
	[PrimerApellido] [nvarchar](50) NULL,
	[SegundoApellido] [nvarchar](50) NULL,
	[TipoDocumento] [nvarchar](50) NULL,
	[Documento] [numeric](18, 0) NULL,
	[Celular] [numeric](18, 0) NULL,
	[Direccion] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[password] [nvarchar](100) NULL,
	[esAdministrador] [bit] NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[ClienteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 3/1/2021 6:37:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pelicula](
	[PeliculaId] [bigint] IDENTITY(1,1) NOT NULL,
	[Titulo] [nvarchar](100) NULL,
	[Descripcion] [nvarchar](500) NULL,
	[Actores] [nchar](1000) NULL,
	[Director] [nvarchar](100) NULL,
	[Costo] [numeric](18, 2) NULL,
	[Cantidad] [int] NULL,
 CONSTRAINT [PK_Pelicula] PRIMARY KEY CLUSTERED 
(
	[PeliculaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reserva]    Script Date: 3/1/2021 6:37:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reserva](
	[ReservaId] [bigint] IDENTITY(1,1) NOT NULL,
	[ClienteId] [bigint] NULL,
	[PeliculaId] [bigint] NULL,
	[Fecha] [datetime] NULL,
 CONSTRAINT [PK_Reserva] PRIMARY KEY CLUSTERED 
(
	[ReservaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Reserva]  WITH CHECK ADD  CONSTRAINT [FK_Reserva_Cliente] FOREIGN KEY([ClienteId])
REFERENCES [dbo].[Cliente] ([ClienteId])
GO
ALTER TABLE [dbo].[Reserva] CHECK CONSTRAINT [FK_Reserva_Cliente]
GO
ALTER TABLE [dbo].[Reserva]  WITH CHECK ADD  CONSTRAINT [FK_Reserva_Pelicula] FOREIGN KEY([PeliculaId])
REFERENCES [dbo].[Pelicula] ([PeliculaId])
GO
ALTER TABLE [dbo].[Reserva] CHECK CONSTRAINT [FK_Reserva_Pelicula]
GO
USE [master]
GO
ALTER DATABASE [videoBlock] SET  READ_WRITE 
GO
