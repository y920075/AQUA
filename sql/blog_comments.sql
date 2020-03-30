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
-- 資料表結構 `blog_comments`
--

CREATE TABLE `blog_comments` (
  `commentsId` int(11) NOT NULL,
  `blogId` int(11) NOT NULL,
  `mId` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `blog_comments`
--

INSERT INTO `blog_comments` (`commentsId`, `blogId`, `mId`, `content`, `created_at`) VALUES
(1, 32, 0, '這魚群也太美了吧!!!', '2020-03-25 21:50:59'),
(2, 32, 0, '好可惜今年來不及報名，明年我不會錯過的!', '2020-03-25 21:52:58'),
(3, 32, 0, '上一梯我有跟到，真的超美的喔。推薦大家(我不是工讀生XD', '2020-03-28 13:51:34'),
(4, 32, 0, '這圖片太毒了拉 看了都想去', '2020-03-28 13:52:31'),
(5, 32, 0, '.....只有我覺得圖片很噁嗎 這魚也太密集了吧', '2020-03-28 13:59:08'),
(6, 32, 0, '+1...無法享受這圖片', '2020-03-28 13:59:31');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD PRIMARY KEY (`commentsId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog_comments`
--
ALTER TABLE `blog_comments`
  MODIFY `commentsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
