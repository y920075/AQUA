-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 03 月 30 日 04:10
-- 伺服器版本： 10.1.38-MariaDB
-- PHP 版本： 5.6.40

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
-- 資料表結構 `recipient_info`
--

CREATE TABLE `recipient_info` (
  `recipId` int(11) NOT NULL COMMENT 'ID',
  `orderId` varchar(10) NOT NULL COMMENT '訂單編號',
  `recipName` varchar(10) NOT NULL COMMENT '收件姓名',
  `addCode` varchar(10) NOT NULL COMMENT '郵遞區號',
  `addArea` varchar(10) NOT NULL COMMENT '地區',
  `address` varchar(100) NOT NULL COMMENT '地址',
  `phone` varchar(15) NOT NULL COMMENT '電話',
  `note` varchar(100) NOT NULL COMMENT '備註',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `recipient_info`
--

INSERT INTO `recipient_info` (`recipId`, `orderId`, `recipName`, `addCode`, `addArea`, `address`, `phone`, `note`, `created_at`) VALUES
(1, 'O200401', '', '', '臺北市中山區', '', '', '', '2020-03-30 03:00:27'),
(2, 'O200401', '111', '', '臺北市中山區', '222', '234', 'sss', '2020-03-30 03:08:00');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `recipient_info`
--
ALTER TABLE `recipient_info`
  ADD PRIMARY KEY (`recipId`);

--
-- 在傾印的資料表使用自動增長(AUTO_INCREMENT)
--

--
-- 使用資料表自動增長(AUTO_INCREMENT) `recipient_info`
--
ALTER TABLE `recipient_info`
  MODIFY `recipId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
