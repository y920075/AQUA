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
-- 資料表結構 `comment`
--

CREATE TABLE `comment` (
  `comment_Id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論編號',
  `menber_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言會員',
  `Locationid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '潛點ID',
  `comment_content` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論內容',
  `score` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '滿意度',
  `comment_time` date NOT NULL COMMENT '留言時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `comment`
--

INSERT INTO `comment` (`comment_Id`, `menber_id`, `Locationid`, `comment_content`, `score`, `comment_time`) VALUES
('C0001', 'M0001', 'L0002', '好地方', '★★★★★', '2020-03-13');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
