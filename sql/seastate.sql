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
-- 資料表結構 `seastate`
--

CREATE TABLE `seastate` (
  `Area` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locationName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地點',
  `stationId` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '測站編號',
  `date` datetime NOT NULL,
  `seatemperature` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '海溫',
  `temperature` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '氣溫',
  `waveheight` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '浪高',
  `waveperiod` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '浪週期',
  `wavedirection` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '波向'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `seastate`
--

INSERT INTO `seastate` (`Area`, `locationName`, `stationId`, `date`, `seatemperature`, `temperature`, `waveheight`, `waveperiod`, `wavedirection`) VALUES
('東北角', '龍洞浮標', '46694A', '2020-03-27 18:00:00', '20.8', '22.2', '67', '54', '東南'),
('花東海岸', '花蓮浮標', '46699A', '2020-03-27 18:00:00', '24.9', '22.8', '86', '55', '東北東'),
('東部離島', '蘭嶼浮標', 'C6S94', '2020-03-27 18:00:00', '26.5', '26.4', '111', '57', '東南'),
('墾丁', '小琉球浮標', '46714D', '2020-03-27 18:00:00', '26.1', '25.7', '57', '38', '南南東');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
