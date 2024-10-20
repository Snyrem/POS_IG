-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2024 a las 22:18:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto_codigo` int(10) UNSIGNED NOT NULL CHECK (`producto_codigo` > 0),
  `producto_nombre` varchar(255) NOT NULL,
  `producto_precio` decimal(10,2) UNSIGNED NOT NULL CHECK (`producto_precio` > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_codigo`, `producto_nombre`, `producto_precio`) VALUES
(1, 'Tortillas', 20.50),
(2, 'Pan', 15.50),
(3, 'Leche', 15.00),
(4, 'Huevos', 20.00),
(5, 'Azucar', 15.50),
(6, 'Sal', 15.50),
(7, 'Aceite', 20.00),
(8, 'Frijol', 15.00),
(9, 'Arroz', 15.50),
(10, 'Sopa', 20.50),
(11, 'Atun', 15.00),
(12, 'Cereal', 15.00),
(13, 'Galletas', 20.50),
(14, 'Cafe', 15.50),
(15, 'Refresco', 15.00),
(16, 'Agua', 20.00),
(17, 'Jabon', 15.50),
(18, 'Shampoo', 15.50),
(19, 'Crema', 20.00),
(20, 'Pasta', 15.00),
(21, 'Cepillo de dientes', 15.50),
(22, 'Papel higienico', 20.50),
(23, 'Toallas femeninas', 15.00),
(24, 'Pañales', 15.00),
(25, 'Cerveza', 20.25),
(26, 'Vino', 15.25),
(27, 'Whisky', 15.75),
(28, 'Vodka', 20.75),
(29, 'Tequila', 15.15),
(30, 'Ron', 15.30);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto_codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
