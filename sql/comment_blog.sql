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
-- 資料表結構 `comment_blog`
--

CREATE TABLE `comment_blog` (
  `Bcommentid` int(11) NOT NULL COMMENT '評論編號',
  `Blogid` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論文章id',
  `memberid` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論會員id',
  `memberName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論會員名稱',
  `commentdate` datetime NOT NULL COMMENT '評論時間',
  `comment` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `comment_blog`
--
ALTER TABLE `comment_blog`
  ADD PRIMARY KEY (`Bcommentid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comment_blog`
--
ALTER TABLE `comment_blog`
  MODIFY `Bcommentid` int(11) NOT NULL AUTO_INCREMENT COMMENT '評論編號';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
