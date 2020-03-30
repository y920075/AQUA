-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.4.3

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
-- 資料表結構 `blog_category`
--

CREATE TABLE `blog_category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '類型名稱',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `blog_category`
--

INSERT INTO `blog_category` (`categoryId`, `categoryName`, `created_at`, `update_time`) VALUES
(1, '全部', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, '教學', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '情報', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, '潛點', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, '裝備', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, '閒聊', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, '課程', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, '揪團', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, '其他', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, '討論', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `blog_category`
--
ALTER TABLE `blog_category`
  ADD PRIMARY KEY (`categoryId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog_category`
--
ALTER TABLE `blog_category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
