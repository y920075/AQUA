-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.10-MariaDB
-- PHP 版本： 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `aqua`
--

-- --------------------------------------------------------

--
-- 資料表結構 `divelocationimages`
--

CREATE TABLE `divelocationimages` (
  `originalTitle` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `divelocationimages`
--

INSERT INTO `divelocationimages` (`originalTitle`, `original`, `thumbnail`) VALUES
('L0001', '/images/divelocation/L0001-1.jpg', '/images/divelocation/L0001-1.jpg'),
('L0001', '/images/divelocation/L0001-2.jpg', '/images/divelocation/L0001-2.jpg'),
('L0001', '/images/divelocation/L0001-3.jpg', '/images/divelocation/L0001-3.jpg'),
('L0001', '/images/divelocation/L0001-4.jpg', '/images/divelocation/L0001-4.jpg'),
('L0001', '/images/divelocation/L0001-5.jpg', '/images/divelocation/L0001-5.jpg'),
('L0002', '/images/divelocation/L0002-1.jpg', '/images/divelocation/L0002-1.jpg'),
('L0002', '/images/divelocation/L0002-2.jpg', '/images/divelocation/L0002-2.jpg'),
('L0002', '/images/divelocation/L0002-3.jpg', '/images/divelocation/L0002-3.jpg'),
('L0002', '/images/divelocation/L0002-4.jpg', '/images/divelocation/L0002-4.jpg'),
('L0002', '/images/divelocation/L0002-5.jpg', '/images/divelocation/L0002-5.jpg'),
('L0003', '/images/divelocation/L0003-1.jpg', '/images/divelocation/L0003-1.jpg'),
('L0003', '/images/divelocation/L0003-2.jpg', '/images/divelocation/L0003-2.jpg'),
('L0003', '/images/divelocation/L0003-3.jpg', '/images/divelocation/L0003-3.jpg'),
('L0004', '/images/divelocation/L0004-1.jpg', '/images/divelocation/L0004-1.jpg'),
('L0004', '/images/divelocation/L0004-2.jpg', '/images/divelocation/L0004-2.jpg'),
('L0004', '/images/divelocation/L0004-3.jpg', '/images/divelocation/L0004-3.jpg'),
('L0005', '/images/divelocation/L0005-1.jpg', '/images/divelocation/L0005-1.jpg'),
('L0005', '/images/divelocation/L0005-2.jpg', '/images/divelocation/L0005-2.jpg'),
('L0005', '/images/divelocation/L0005-3.jpg', '/images/divelocation/L0005-3.jpg'),
('L0006', '/images/divelocation/L0006-1.jpg', '/images/divelocation/L0006-1.jpg'),
('L0006', '/images/divelocation/L0006-2.jpg', '/images/divelocation/L0006-2.jpg'),
('L0006', '/images/divelocation/L0006-3.jpg', '/images/divelocation/L0006-3.jpg'),
('L0007', '/images/divelocation/L0007-1.jpg', '/images/divelocation/L0007-1.jpg'),
('L0007', '/images/divelocation/L0007-2.jpg', '/images/divelocation/L0007-2.jpg'),
('L0007', '/images/divelocation/L0007-3.jpg', '/images/divelocation/L0007-3.jpg'),
('L0007', '/images/divelocation/L0007-4.jpg', '/images/divelocation/L0007-4.jpg'),
('L0008', '/images/divelocation/L0008-1.jpg', '/images/divelocation/L0008-1.jpg'),
('L0008', '/images/divelocation/L0008-2.jpg', '/images/divelocation/L0008-2.jpg'),
('L0008', '/images/divelocation/L0008-3.jpg', '/images/divelocation/L0008-3.jpg'),
('L0008', '/images/divelocation/L0008-4.jpg', '/images/divelocation/L0008-4.jpg'),
('L0008', '/images/divelocation/L0008-5.jpg', '/images/divelocation/L0008-5.jpg'),
('L0009', '/images/divelocation/L0009-1.jpg', '/images/divelocation/L0009-1.jpg'),
('L0009', '/images/divelocation/L0009-2.jpg', '/images/divelocation/L0009-2.jpg'),
('L0009', '/images/divelocation/L0009-3.jpg', '/images/divelocation/L0009-3.jpg'),
('L0009', '/images/divelocation/L0009-4.jpg', '/images/divelocation/L0009-4.jpg'),
('L0009', '/images/divelocation/L0009-5.jpg', '/images/divelocation/L0009-5.jpg'),
('L0010', '/images/divelocation/L0010-1.jpg', '/images/divelocation/L0010-1.jpg'),
('L0010', '/images/divelocation/L0010-2.jpg', '/images/divelocation/L0010-2.jpg'),
('L0010', '/images/divelocation/L0010-3.jpg', '/images/divelocation/L0010-3.jpg'),
('L0010', '/images/divelocation/L0010-4.jpg', '/images/divelocation/L0010-4.jpg'),
('L0010', '/images/divelocation/L0010-5.jpg', '/images/divelocation/L0010-5.jpg'),
('L0011', '/images/divelocation/L0011-1.jpg', '/images/divelocation/L0011-1.jpg'),
('L0011', '/images/divelocation/L0011-2.jpg', '/images/divelocation/L0011-2.jpg'),
('L0011', '/images/divelocation/L0011-3.jpg', '/images/divelocation/L0011-3.jpg'),
('L0011', '/images/divelocation/L0011-4.jpg', '/images/divelocation/L0011-4.jpg'),
('L0011', '/images/divelocation/L0011-5.jpg', '/images/divelocation/L0011-5.jpg'),
('L0012', '/images/divelocation/L0012-1.jpg', '/images/divelocation/L0012-1.jpg'),
('L0012', '/images/divelocation/L0012-2.jpg', '/images/divelocation/L0012-2.jpg'),
('L0012', '/images/divelocation/L0012-3.jpg', '/images/divelocation/L0012-3.jpg'),
('L0012', '/images/divelocation/L0012-4.jpg', '/images/divelocation/L0012-4.jpg'),
('L0012', '/images/divelocation/L0012-5.jpg', '/images/divelocation/L0012-5.jpg'),
('L0013', '/images/divelocation/L0013-1.jpg', '/images/divelocation/L0013-1.jpg'),
('L0013', '/images/divelocation/L0013-2.jpg', '/images/divelocation/L0013-2.jpg'),
('L0013', '/images/divelocation/L0013-3.jpg', '/images/divelocation/L0013-3.jpg'),
('L0013', '/images/divelocation/L0013-4.jpg', '/images/divelocation/L0013-4.jpg'),
('L0013', '/images/divelocation/L0013-5.jpg', '/images/divelocation/L0013-5.jpg'),
('L0014', '/images/divelocation/L0014-1.jpg', '/images/divelocation/L0014-1.jpg'),
('L0014', '/images/divelocation/L0014-2.jpg', '/images/divelocation/L0014-2.jpg'),
('L0014', '/images/divelocation/L0014-3.jpg', '/images/divelocation/L0014-3.jpg'),
('L0014', '/images/divelocation/L0014-4.jpg', '/images/divelocation/L0014-4.jpg'),
('L0014', '/images/divelocation/L0014-5.jpg', '/images/divelocation/L0014-5.jpg'),
('L0015', '/images/divelocation/L0015-1.jpg', '/images/divelocation/L0015-1.jpg'),
('L0015', '/images/divelocation/L0015-2.jpeg', '/images/divelocation/L0015-2.jpeg'),
('L0015', '/images/divelocation/L0015-3.jpg', '/images/divelocation/L0015-3.jpg'),
('L0016', '/images/divelocation/L0016-1.jpeg', '/images/divelocation/L0016-1.jpeg'),
('L0016', '/images/divelocation/L0016-2.jpg', '/images/divelocation/L0016-2.jpg'),
('L0016', '/images/divelocation/L0016-3.jpg', '/images/divelocation/L0016-3.jpg'),
('L0017', '/images/divelocation/L0017-1.jpeg', '/images/divelocation/L0017-1.jpeg'),
('L0017', '/images/divelocation/L0017-2.jpeg', '/images/divelocation/L0017-2.jpeg'),
('L0017', '/images/divelocation/L0017-3.jpg', '/images/divelocation/L0017-3.jpg'),
('L0018', '/images/divelocation/L0018-1.jpg', '/images/divelocation/L0018-1.jpg'),
('L0018', '/images/divelocation/L0018-2.jpg', '/images/divelocation/L0018-2.jpg'),
('L0018', '/images/divelocation/L0018-3.jpg', '/images/divelocation/L0018-3.jpg'),
('L0019', '/images/divelocation/L0019-1.jpg', '/images/divelocation/L0019-1.jpg'),
('L0019', '/images/divelocation/L0019-2.jpg', '/images/divelocation/L0019-2.jpg'),
('L0019', '/images/divelocation/L0019-3.jpg', '/images/divelocation/L0019-3.jpg'),
('L0020', '/images/divelocation/L0020-1.jpg', '/images/divelocation/L0020-1.jpg'),
('L0020', '/images/divelocation/L0020-2.jpg', '/images/divelocation/L0020-2.jpg'),
('L0020', '/images/divelocation/L0020-3.jpg', '/images/divelocation/L0020-3.jpg');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `divelocationimages`
--
ALTER TABLE `divelocationimages`
  ADD PRIMARY KEY (`original`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
