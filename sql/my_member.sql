-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2020 年 03 月 25 日 06:59
-- 伺服器版本： 5.7.26
-- PHP 版本： 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

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
  `myCart` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin COMMENT '我的購物車',
  `joinDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `currentStatus` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '現行狀態',
  `rankCoin` int(10) DEFAULT NULL COMMENT '貝殼幣',
  `rankId` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '級別名稱',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '創建日期',
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `my_member`
--

INSERT INTO `my_member` (`id`, `idd`, `memberId`, `loginId`, `loginPwd`, `avatar`, `fullName`, `gender`, `birthDate`, `email`, `mobileNumber`, `address`, `creditCard`, `myCart`, `joinDate`, `currentStatus`, `rankCoin`, `rankId`, `created_at`, `updated_at`) VALUES
(16, 6, 'M20010006', 'member123', 'member123', NULL, 'harrison', '女', '2020-01-01', 'small@gmail.com', '0911111111', 'LOOOOOL', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', 50001, '鑽石鯨魚', '2020-01-17 03:35:50', '2020-03-23 13:28:40'),
(17, 7, 'M20010007', 'member123', 'member123', '20200117113745.jpg', 'Garry', '男', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', NULL, '', '2020-01-17 03:37:45', '2020-01-17 03:37:45'),
(18, 8, 'M20010008', 'member123', 'member123', '20200117113819.jpg', 'Harry', '男', '2020-01-01', 'random@gmail.com', '0999-999-333', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'DEACTIVE', 0, '銅牌小丑魚', '2020-01-17 03:38:19', '2020-01-22 03:22:38'),
(19, 9, 'M20010009', 'member123', 'member123', '20200117113920.jpg', 'Ivy', '女', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'SUSPENDED', NULL, '', '2020-01-17 03:39:20', '2020-01-17 03:39:20'),
(20, 10, 'M20010010', 'member123', 'member123', '20200117114008.jpg', 'Jamie', '男', '2020-01-01', 'random777@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', NULL, '', '2020-01-17 03:40:08', '2020-01-17 03:40:08'),
(21, 11, 'M20010011', 'member123', 'member123', '20200117114041.jpg', 'Karen', '女', '2020-01-01', 'random777@gmail.com', '0999-999-333', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'DEACTIVE', NULL, '', '2020-01-17 03:40:41', '2020-01-17 03:40:41'),
(22, 12, 'M20010012', 'member123', 'member123', '20200117114119.jpg', 'Lorraine', '女', '2020-01-01', 'random777@gmail.com', '0999-999-333', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'SUSPENDED', NULL, '', '2020-01-17 03:41:19', '2020-01-17 03:41:19'),
(23, 13, 'M20010013', 'member123', 'member123', '20200117114155.jpg', 'Mandy', '女', '2020-01-01', 'random777@gmail.com', '0999-999-333', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', NULL, '', '2020-01-17 03:41:55', '2020-01-17 03:41:55'),
(24, 14, 'M20010014', 'member123', 'member123', '20200122112722.jpg', 'Nathan', '男', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', 500, '銅牌小丑魚', '2020-01-17 03:42:37', '2020-01-22 03:27:22'),
(25, 15, 'M20010015', 'member123', 'member123', '20200117184457.jpg', 'Octavia', '男', '2020-01-01', 'random@gmail.com', '0999-999-888', '台北市大安區和平東路二段106號9樓', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', NULL, NULL, '2020-01-17 10:44:57', '2020-01-17 10:47:54'),
(26, 16, 'M20010016', 'member123', 'member123', '20200117185042.jpg', 'Penny', '男', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', NULL, NULL, '2020-01-17 10:50:42', '2020-01-17 10:50:42'),
(27, 17, 'M20010017', 'member123', 'member123', '20200117194537.jpg', 'Queenie', '女', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', NULL, NULL, '2020-01-17 00:00:00', 'ACTIVE', NULL, NULL, '2020-01-17 11:45:37', '2020-01-17 11:45:37'),
(28, 18, 'M20010018', 'member123', 'member123', '20200120105326.jpg', 'Rudy', '男', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓', NULL, NULL, '2020-01-20 00:00:00', 'ACTIVE', 500, '銀牌海龜', '2020-01-20 02:53:26', '2020-01-20 03:36:01'),
(29, 19, 'M20010019', 'member123', 'member123', '20200120114151.jpg', 'Sandy', '女', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓 ', NULL, NULL, '2020-01-20 00:00:00', 'DEACTIVE', 500, '銀牌海龜', '2020-01-20 03:41:51', '2020-01-20 03:43:02'),
(30, 20, 'M20010020', 'member123', 'member123', '20200120114514.jpg', 'Terry', '男', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓', NULL, NULL, '2020-01-20 00:00:00', 'DEACTIVE', 500, '銀牌海龜', '2020-01-20 03:45:14', '2020-01-20 03:45:14'),
(31, 21, 'M20010021', 'member123', 'member123', '20200120121156.jpg', 'Ursula', '女', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓', NULL, NULL, '2020-01-20 00:00:00', 'ACTIVE', 0, '銅牌小丑魚', '2020-01-20 04:11:56', '2020-01-20 04:11:56'),
(32, 22, 'M20010022', 'member123', 'member123', '20200122102500.jpg', 'Wanda', '女', '2020-01-01', 'random@gmail.com', '0999-999-999', 'earth', NULL, NULL, '2020-01-22 00:00:00', 'ACTIVE', 0, '銅牌小丑魚', '2020-01-22 02:25:00', '2020-01-22 02:25:00'),
(33, 23, 'M20010023', 'member123', 'member123', '20200122112541.jpg', 'Xavier', '男', '2018-01-01', 'random@gmail.com', '0999-999-999', 'EarthLOL', NULL, NULL, '2020-01-22 00:00:00', 'ACTIVE', 500, '銅牌小丑魚', '2020-01-22 03:25:41', '2020-01-22 03:25:41'),
(62, 1, 'M20030001', 'aaa', 'aaa', 'DefaultImage.jpg', 'aaa', NULL, NULL, 'aaa@gmail.com', NULL, NULL, NULL, NULL, '2020-03-24 14:35:19', NULL, NULL, NULL, '2020-03-24 14:35:19', '2020-03-24 14:35:19'),
(63, 2, 'M20030002', 'bbb', 'bbb', 'DefaultImage.jpg', 'bbb', NULL, NULL, 'bbb@gmail.com', NULL, NULL, NULL, NULL, '2020-03-24 14:36:15', NULL, NULL, NULL, '2020-03-24 14:36:15', '2020-03-24 14:36:15');

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
  MODIFY `id` tinyint(100) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=64;