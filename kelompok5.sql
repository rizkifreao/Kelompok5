-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.35-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for kelompok5
CREATE DATABASE IF NOT EXISTS `kelompok5` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `kelompok5`;

-- Dumping structure for table kelompok5.books
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) DEFAULT NULL,
  `pengarang` varchar(255) DEFAULT NULL,
  `penerbit` varchar(255) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `tahun_terbit` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table kelompok5.books: ~3 rows (approximately)
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` (`id`, `judul`, `pengarang`, `penerbit`, `harga`, `tahun_terbit`, `createdAt`, `updatedAt`) VALUES
	(1, 'Belajar Node JS', 'Fajri', 'LPKIA', NULL, '2019-02-01 00:00:00', '2019-07-16 13:22:12', '2019-07-16 13:22:12'),
	(2, 'Belajar Sequelize', 'Rizki', 'LPKIA', NULL, '2019-02-01 00:00:00', '2019-07-16 13:22:30', '2019-07-16 13:22:30'),
	(3, 'Javascript Dasar', 'Ilham', 'LPKIA', NULL, '2019-02-01 00:00:00', '2019-07-16 13:23:24', '2019-07-16 13:23:24');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

-- Dumping structure for table kelompok5.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tgl_order` datetime DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `BookId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Orders_UserId_foreign_idx` (`UserId`),
  KEY `Orders_BookId_foreign_idx` (`BookId`),
  CONSTRAINT `Orders_BookId_foreign_idx` FOREIGN KEY (`BookId`) REFERENCES `books` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Orders_UserId_foreign_idx` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table kelompok5.orders: ~0 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`id`, `tgl_order`, `UserId`, `BookId`, `createdAt`, `updatedAt`) VALUES
	(1, '2019-07-16 13:32:07', 2, 1, '2019-07-16 13:32:07', '2019-07-16 13:32:07'),
	(2, '2019-07-16 13:32:07', 2, 2, '2019-07-16 13:32:07', '2019-07-16 13:32:07'),
	(3, '2019-07-16 13:32:07', 2, 3, '2019-07-16 13:32:07', '2019-07-16 13:32:07');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping structure for table kelompok5.sequelizemeta
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table kelompok5.sequelizemeta: ~5 rows (approximately)
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` (`name`) VALUES
	('20190709173314-create-user.js'),
	('20190710062535-create-book.js'),
	('20190715211532-create-order.js'),
	('20190715212505-tambah-asosiasi.js'),
	('20190715214110-order-belongsto-book.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;

-- Dumping structure for table kelompok5.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table kelompok5.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `password`, `roles`, `createdAt`, `updatedAt`) VALUES
	(1, 'rizki', 'rizki@lpkia.com', '$2a$10$bMtg.suk/8Wl8XtrYAMbhOqcLQHdHNAUr50rAib72iQqxq1xv8YxC', 'admin', '2019-07-16 13:20:34', '2019-07-16 13:20:34'),
	(2, 'fajri', 'fajri@lpkia.com', '$2a$10$.oelTctiYFIZ7pNFyOCPjeNexs4LIzKHiJeeC7OLKwp0aXQKR3OeK', 'user', '2019-07-16 13:20:53', '2019-07-16 13:20:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
