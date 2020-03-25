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
  `B_commentid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '編號',
  `member_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言會員',
  `blog_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文章ID',
  `content` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論內容',
  `commenttime` date NOT NULL COMMENT '留言時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `comment_blog`
--
ALTER TABLE `comment_blog`
  ADD PRIMARY KEY (`B_commentid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
