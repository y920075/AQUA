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
-- 資料表結構 `comment_location`
--

CREATE TABLE `comment_location` (
  `comment_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論編號',
  `Locationid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論地點',
  `member_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論會員ID',
  `member_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論會員',
  `comment_date` datetime NOT NULL COMMENT '評論日期',
  `comment` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `comment_location`
--

INSERT INTO `comment_location` (`comment_id`, `Locationid`, `member_id`, `member_name`, `comment_date`, `comment`) VALUES
('L20200327134706', 'L0002', 'M20010002', 'Flavia Valeriana', '2020-03-27 12:10:18', '這是個好地方，有停車場、商店、潛水店、充氣服務。特殊的海灣地形能抵擋洶湧的潮流，豐富的海洋生態在此棲息發展'),
('L20200327170532', 'L0002', 'M20010003', 'Julia Atteleitus', '2020-03-27 15:15:26', '有完善的配套設施，方便又好玩1111111'),
('L20200327170536', 'L0002', 'M20010003', 'Julia Atteleitus', '2020-03-27 15:15:26', '有完善的配套設施，方便又好玩'),
('L20200327170540', 'L0002', 'M20010003', 'Julia Atteleitus', '2020-03-27 15:15:26', '有完善的配套設施，方便又好玩22222');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `comment_location`
--
ALTER TABLE `comment_location`
  ADD PRIMARY KEY (`comment_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
