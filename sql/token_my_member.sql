-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 
-- 伺服器版本： 10.3.22-MariaDB
-- PHP 版本： 7.4.2

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
-- 資料表結構 `my_member`
--

CREATE TABLE `my_member` (
  `id` tinyint(100) NOT NULL COMMENT '流水號',
  `idd` int(100) DEFAULT NULL,
  `memberId` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '會員編號',
  `loginId` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '會員帳號',
  `loginPwd` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '會員密碼',
  `avatar` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '會員頭像',
  `fullName` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '全名',
  `gender` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '性別',
  `birthDate` date DEFAULT NULL COMMENT '生日',
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '電子郵件',
  `mobileNumber` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手機號碼',
  `address` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '地址',
  `creditCard` tinyint(16) DEFAULT NULL COMMENT '信用卡號',
  `myCart` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '我的購物車',
  `joinDate` datetime DEFAULT current_timestamp(),
  `currentStatus` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '現行狀態',
  `rankCoin` int(10) DEFAULT NULL COMMENT '貝殼幣',
  `rankId` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '級別名稱',
  `created_at` datetime DEFAULT current_timestamp() COMMENT '創建日期',
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新日期',
  `accessToken` varchar(5000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `my_member`
--

INSERT INTO `my_member` (`id`, `idd`, `memberId`, `loginId`, `loginPwd`, `avatar`, `fullName`, `gender`, `birthDate`, `email`, `mobileNumber`, `address`, `creditCard`, `myCart`, `joinDate`, `currentStatus`, `rankCoin`, `rankId`, `created_at`, `updated_at`, `accessToken`) VALUES
(64, 1, 'M20030001', 'aaa', 'aaa', 'DefaultImage.jpg', 'MFEE05-JS', NULL, NULL, 'aaa', NULL, NULL, NULL, NULL, '2020-03-29 13:07:09', NULL, NULL, NULL, '2020-03-29 13:07:09', '2020-03-29 13:07:09', '059d3358-4ff0-4d24-8fea-82338b0821440f0d45f3-af83-4a07-8a2b-640e86e89abe'),
(65, 2, 'M20010002', 'bbb', 'bbb', 'DefaultImage.jpg', 'MFEE05-JS', NULL, NULL, 'asdasd', NULL, NULL, NULL, NULL, '2020-03-29 13:29:31', NULL, NULL, NULL, '2020-03-29 13:29:31', '2020-03-29 13:30:56', '1c1a56ef-6857-4acc-a944-87eeabf546d82e6f2308-cf7f-4290-93d3-ffe6d0062f37');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `my_member`
--
ALTER TABLE `my_member`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `my_member`
--
ALTER TABLE `my_member`
  MODIFY `id` tinyint(100) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
