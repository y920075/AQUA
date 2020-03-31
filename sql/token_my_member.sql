-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2020 年 03 月 30 日 11:23
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
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日期',
  `accessToken` varchar(5000) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `my_member`
--

INSERT INTO `my_member` (`id`, `idd`, `memberId`, `loginId`, `loginPwd`, `avatar`, `fullName`, `gender`, `birthDate`, `email`, `mobileNumber`, `address`, `creditCard`, `myCart`, `joinDate`, `currentStatus`, `rankCoin`, `rankId`, `created_at`, `updated_at`, `accessToken`) VALUES
(64, 1, 'M20030001', 'aaa', 'aaa', 'DefaultImage.jpg', 'MFEE05-JS', NULL, NULL, 'aaa', NULL, NULL, NULL, NULL, '2020-03-29 13:07:09', NULL, NULL, NULL, '2020-03-29 13:07:09', '2020-03-29 13:07:09', '059d3358-4ff0-4d24-8fea-82338b0821440f0d45f3-af83-4a07-8a2b-640e86e89abe'),
(65, 2, 'M20010002', 'bbb', 'bbb', 'DefaultImage.jpg', 'MFEE05-JS', NULL, NULL, 'asdasd', NULL, NULL, NULL, NULL, '2020-03-29 13:29:31', NULL, NULL, NULL, '2020-03-29 13:29:31', '2020-03-29 13:30:56', '1c1a56ef-6857-4acc-a944-87eeabf546d82e6f2308-cf7f-4290-93d3-ffe6d0062f37'),
(66, 3, 'M20030003', 'ccc', 'ccc', 'DefaultImage.jpg', 'lkl', NULL, NULL, 'lkl@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 16:05:22', NULL, NULL, NULL, '2020-03-30 16:05:22', '2020-03-30 19:12:38', 'f4438afe-75ef-43b7-a8ed-7cc8d8895ae415d8207c-3134-4dac-8a74-733a727515dd'),
(67, 4, 'M20030004', 'ddd', 'ddd', 'DefaultImage.jpg', 'ccc', NULL, NULL, 'ccc@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 16:29:29', NULL, NULL, NULL, '2020-03-30 16:29:29', '2020-03-30 19:12:44', 'bcb7ae22-827e-4c54-a520-2207d0b68d42eed668f3-9254-446a-99fd-2b3a65f5e493'),
(68, 5, 'M20030005', 'eee', 'eee', 'DefaultImage.jpg', 'lucky', NULL, NULL, 'lucky@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 16:34:04', NULL, NULL, NULL, '2020-03-30 16:34:04', '2020-03-30 19:12:53', 'fdc5af57-0cbd-4d35-9c5a-ccfd802e6d8f950757dd-0809-49c4-acd7-94af0d83233e'),
(69, 6, 'M20030006', 'fff', 'fff', 'DefaultImage.jpg', 'kkk', NULL, NULL, 'kkk@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 16:57:00', NULL, NULL, NULL, '2020-03-30 16:57:00', '2020-03-30 19:12:59', 'e6efe9f7-eb77-4cb4-b735-cff7b4964d86c688a4b7-4323-4a9b-8262-1bea5b735aca'),
(70, 7, 'M20030007', 'ggg', 'ggg', 'DefaultImage.jpg', 'ggg', NULL, NULL, 'ggg@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:13:52', NULL, NULL, NULL, '2020-03-30 19:13:52', '2020-03-30 19:13:52', 'ec372955-ad08-493d-a6c3-52b8fe8643df4eec8985-fe8a-410a-8008-3b3eecf443d3'),
(71, 8, 'M20030008', 'hhh', 'hhh', 'DefaultImage.jpg', 'hhh', NULL, NULL, 'hhh@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:17:13', NULL, NULL, NULL, '2020-03-30 19:17:13', '2020-03-30 19:17:13', 'c094fafc-8e1c-4572-9309-81b18fb617fffbbe139a-8078-48f3-bdf2-d11d4a3d7cd2'),
(72, 9, 'M20030009', 'iii', 'iii', 'DefaultImage.jpg', 'iii', NULL, NULL, 'iii@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:17:27', NULL, NULL, NULL, '2020-03-30 19:17:27', '2020-03-30 19:17:27', '19a9e13d-7aa3-438d-96e5-044c4d6504d712572f37-ad32-45a2-8660-842ac129e5ec'),
(73, 10, 'M20030010', 'jjj', 'jjj', 'DefaultImage.jpg', 'jjj', NULL, NULL, 'jjj@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:17:45', NULL, NULL, NULL, '2020-03-30 19:17:45', '2020-03-30 19:17:45', 'ec716360-4424-4e4c-a455-9bd2caf46b277ad05bc9-c2cb-4d77-a47a-c40238c8c68f'),
(74, 11, 'M20030011', 'kkk', 'kkk', 'DefaultImage.jpg', 'kkk', NULL, NULL, 'kkk@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:18:08', NULL, NULL, NULL, '2020-03-30 19:18:08', '2020-03-30 19:18:08', '474ab451-36b7-4bfc-82d7-1084237a761da12780b4-cf95-4966-8c5e-7adcd7bd961c'),
(75, 12, 'M20030012', 'lll', 'lll', 'DefaultImage.jpg', 'lll', NULL, NULL, 'lll@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:18:32', NULL, NULL, NULL, '2020-03-30 19:18:32', '2020-03-30 19:18:32', '8053459f-d5f4-4055-a100-7fdaefca6e749936ddc1-4c07-4971-802f-72ca1a5adb9d'),
(76, 13, 'M20030013', 'mmm', 'mmm', 'DefaultImage.jpg', 'mmm', NULL, NULL, 'mmm@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:18:45', NULL, NULL, NULL, '2020-03-30 19:18:45', '2020-03-30 19:18:45', '6a17620c-3456-4824-81e9-f2d9ca30455d99fd8074-0164-4a46-a0d1-8534af6e95e0'),
(77, 14, 'M20030014', 'nnn', 'nnn', 'DefaultImage.jpg', 'nnn', NULL, NULL, 'nnn@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:19:00', NULL, NULL, NULL, '2020-03-30 19:19:00', '2020-03-30 19:19:00', 'c293365a-3c8c-4df5-ad3c-69bceac2b10531f356ab-6010-4790-88ec-03d951065d0d'),
(78, 15, 'M20030015', 'ooo', 'ooo', 'DefaultImage.jpg', 'ooo', NULL, NULL, 'ooo@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:19:14', NULL, NULL, NULL, '2020-03-30 19:19:14', '2020-03-30 19:19:14', '9ddd5824-0848-436c-a33d-2b6885772ddaac8e33fe-f374-4257-b791-0d737b5b96e1'),
(79, 16, 'M20030016', 'ppp', 'ppp', 'DefaultImage.jpg', 'ppp', NULL, NULL, 'ppp@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:19:34', NULL, NULL, NULL, '2020-03-30 19:19:34', '2020-03-30 19:19:34', '393c9228-f865-4395-8290-b16769fadf2a8811e371-0a12-4a05-9e85-7b6e82ece720'),
(80, 17, 'M20030017', 'qqq', 'qqq', 'DefaultImage.jpg', 'qqq', NULL, NULL, 'qqq@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:19:53', NULL, NULL, NULL, '2020-03-30 19:19:53', '2020-03-30 19:19:53', '2a989968-c4b3-4ac2-865d-810c10a366ffdce8b03c-0e4e-45b1-81cd-b8be50b9fd46'),
(81, 18, 'M20030018', 'rrr', 'rrr', 'DefaultImage.jpg', 'rrr', NULL, NULL, 'rrr@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:20:05', NULL, NULL, NULL, '2020-03-30 19:20:05', '2020-03-30 19:20:05', 'df3bc29a-b350-4a5c-ad84-7916bc29c81c65619736-7d94-413a-89b6-ebe468ed5c3d'),
(82, 19, 'M20030019', 'sss', 'sss', 'DefaultImage.jpg', 'sss', NULL, NULL, 'sss@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:20:21', NULL, NULL, NULL, '2020-03-30 19:20:21', '2020-03-30 19:20:21', '97986d56-0aa0-48ad-a9ae-4dcfed34588218692d79-ed90-494c-9e8c-1ba9418845e2'),
(83, 20, 'M20030020', 'ttt', 'ttt', 'DefaultImage.jpg', 'ttt', NULL, NULL, 'ttt@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:20:38', NULL, NULL, NULL, '2020-03-30 19:20:38', '2020-03-30 19:20:38', '22eef3d9-545f-414d-82c8-06c41153da3bf2252e50-5c96-45b4-9a3d-97a006a64409'),
(84, 21, 'M20030021', 'uuu', 'uuu', 'DefaultImage.jpg', 'uuu', NULL, NULL, 'uuu@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:20:56', NULL, NULL, NULL, '2020-03-30 19:20:56', '2020-03-30 19:20:56', 'f8779bdc-d8ae-40d8-b82b-ef33b052d7049ab84535-b2fd-43c8-ab84-662c53eab63d'),
(85, 22, 'M20030022', 'vvv', 'vvv', 'DefaultImage.jpg', 'vvv', NULL, NULL, 'vvv@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:21:09', NULL, NULL, NULL, '2020-03-30 19:21:09', '2020-03-30 19:21:09', '07ae5565-809b-44cf-8221-bc054a2a303b30b87413-b82e-4ec2-bee2-3a1fe59ca67b'),
(86, 23, 'M20030023', 'www', 'www', 'DefaultImage.jpg', 'www', NULL, NULL, 'www@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:21:29', NULL, NULL, NULL, '2020-03-30 19:21:29', '2020-03-30 19:21:29', '36b51cb0-5cfb-4ac6-be65-62ba7b95830ee80fe7bd-2cf2-4289-a934-7783ecffd1cf'),
(87, 24, 'M20030024', 'xxx', 'xxx', 'DefaultImage.jpg', 'xxx', NULL, NULL, 'xxx@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:21:47', NULL, NULL, NULL, '2020-03-30 19:21:47', '2020-03-30 19:21:47', 'ce2f2a4c-37f6-4df0-8d4f-a44e581343329734621a-6dba-4672-84dc-6991f199568b'),
(88, 25, 'M20030025', 'yyy', 'yyy', 'DefaultImage.jpg', 'yyy', NULL, NULL, 'yyy@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:22:05', NULL, NULL, NULL, '2020-03-30 19:22:05', '2020-03-30 19:22:05', '026ff81c-1bef-4381-90f9-306df7164a8bc4e80ad3-2be6-4393-abf1-73ca4b8c1712'),
(89, 26, 'M20030026', 'zzz', 'zzz', 'DefaultImage.jpg', 'zzz', NULL, NULL, 'zzz@gmail.com', NULL, NULL, NULL, NULL, '2020-03-30 19:22:23', NULL, NULL, NULL, '2020-03-30 19:22:23', '2020-03-30 19:22:23', '0319ca34-c37c-44d9-8b41-022f6c59b191684796d2-4977-47e6-bd02-a4c565b87a38');

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
  MODIFY `id` tinyint(100) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=90;
