-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.2.28

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
-- 資料表結構 `basic_information`
--

CREATE TABLE `basic_information` (
  `id` int(11) NOT NULL,
  `idd` int(11) NOT NULL COMMENT '編號的id',
  `seller_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家編號',
  `seller_account` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家帳號',
  `seller_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場圖片',
  `seller_name` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場名',
  `seller_shop` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場名',
  `seller_password` char(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家密碼',
  `seller_address` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '公司地址',
  `seller_phone` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '公司電話',
  `seller_mobile` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '手機',
  `seller_cond_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家狀況',
  `seller_email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家郵件',
  `seller_decrip` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '資料更新時間',
  `shop_img` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='賣家基本資料';

--
-- 傾印資料表的資料 `basic_information`
--

INSERT INTO `basic_information` (`id`, `idd`, `seller_id`, `seller_account`, `seller_img`, `seller_name`, `seller_shop`, `seller_password`, `seller_address`, `seller_phone`, `seller_mobile`, `seller_cond_id`, `seller_email`, `seller_decrip`, `create_time`, `update_time`, `shop_img`) VALUES
(10, 1, 'S20010001', 'Andy123', '20180615_201523.jpg', 'Andy', '可愛的魚', 'asdad113', '台北市大安區敦化', '0955413111', '0227385608', 'SCUA2001', 'asdas@gmail.com', '這裡是一個能夠和大家互換裝備的賣場', '2020-01-17 11:33:20', '2020-01-17 11:33:20', '[{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120434.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"79361602a7fd4bd8624e20146db06387\",\"path\":\"tmp_uploads\\\\79361602a7fd4bd8624e20146db06387\",\"size\":63506},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120305.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"21166b35577b613b8d36facd7e65154b\",\"path\":\"tmp_uploads\\\\21166b35577b613b8d36facd7e65154b\",\"size\":142755},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120313.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"88933ace050d9ecc75f5b67340064b8c\",\"path\":\"tmp_uploads\\\\88933ace050d9ecc75f5b67340064b8c\",\"size\":142755},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120325.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"12f528d0716f39b2d55ef98d67a2401c\",\"path\":\"tmp_uploads\\\\12f528d0716f39b2d55ef98d67a2401c\",\"size\":161431},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120333.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"741d849d9b29d9d1b53999d2f32a2f34\",\"path\":\"tmp_uploads\\\\741d849d9b29d9d1b53999d2f32a2f34\",\"size\":161431}]'),
(11, 2, 'S20010002', 'Peecy1023', '20200117121753.jpg', 'Tina', '絕地領域', 'wqewqeqwe1', '台北市中山區中山北路20號', '27455574', '0954111237', 'SCUA2001', 'asdg5613@gmail.com', '防寒寒寒衣專賣店', '2020-01-17 19:17:53', '2020-01-17 19:17:53', ''),
(12, 3, 'S20010003', 'Dacy1023', '20200119071141.jpg', '熱情的魚', '優游大海', 'sdfdsf234', '台北市中山區中山北路20號', '27454574', '0954111234', 'SCUA2001', 'asdg5613@gmail.com', '吸一口氣,淺一百浬', '2020-01-19 14:11:41', '2020-01-19 14:11:41', '');

-- --------------------------------------------------------

--
-- 資料表結構 `click_count`
--

CREATE TABLE `click_count` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `click_id` varchar(20) NOT NULL COMMENT '點擊次數id',
  `memberId` varchar(20) NOT NULL COMMENT '會員id',
  `click_total` int(20) NOT NULL COMMENT '目前點擊次數',
  `created_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='使用者點擊次數統計表';

--
-- 傾印資料表的資料 `click_count`
--

INSERT INTO `click_count` (`id`, `click_id`, `memberId`, `click_total`, `created_time`, `update_time`) VALUES
(3, 'CL20200321052329', 'M20010006', 49, '2020-03-30 11:59:22', '2020-03-30 15:58:54'),
(4, 'CL20200321052325', 'M20010007', 30, '2020-03-30 11:59:22', '2020-03-30 11:59:22');

-- --------------------------------------------------------

--
-- 資料表結構 `common_custom`
--

CREATE TABLE `common_custom` (
  `id` int(11) NOT NULL,
  `comcus_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '常客idCM開頭',
  `memberId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員id',
  `comcus_name` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '常客名字',
  `comcus_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '常客的圖片',
  `comcus_gmail` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '常客gmail',
  `comcus_buy_perc` int(10) NOT NULL COMMENT '常客購買率',
  `comcus_visit_perc` int(10) NOT NULL COMMENT '常客到訪點擊率',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '創造時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間',
  `seller_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='常客名單';

--
-- 傾印資料表的資料 `common_custom`
--

INSERT INTO `common_custom` (`id`, `comcus_id`, `memberId`, `comcus_name`, `comcus_img`, `comcus_gmail`, `comcus_buy_perc`, `comcus_visit_perc`, `created_at`, `updated_at`, `seller_id`) VALUES
(6, 'CM20200321052329', 'M20010006', 'harrison', 'comcus1.jpg', 'PengChungJun@gmail.com', 50, 60, '2020-01-08 20:56:40', '2020-03-26 11:09:44', 'S20010001'),
(7, 'CM20200321052333', 'M20010007', 'Garry', 'comcus2.jpg', 'asdfghjkl1236208@gmail.com', 80, 40, '2020-03-04 20:56:40', '2020-03-26 11:09:57', 'S20010001'),
(8, 'CM20200321052344', 'M20010008', 'Harry', 'comcus3.jpg', '101416018@stud.sju.edu.tw', 10, 80, '2020-02-17 20:56:40', '2020-03-26 11:10:10', 'S20010001'),
(9, 'CM20200321052355', 'M20010009', 'Ivy', 'comcus4.jpg', 'y920075@gmail.com', 40, 60, '2020-01-01 20:56:40', '2020-03-26 11:10:21', 'S20010001'),
(10, 'CM20200321052366', 'M20010010', 'Jamie', 'comcus5.jpg', 'infinitegit@gmail.com', 30, 90, '2020-04-01 20:56:40', '2020-03-26 11:10:32', 'S20010001');

-- --------------------------------------------------------

--
-- 資料表結構 `coup01_allorder`
--

CREATE TABLE `coup01_allorder` (
  `id` int(20) NOT NULL COMMENT '流水號',
  `idd` int(11) NOT NULL COMMENT '計算自動產生的cup_id',
  `coup_cate_id` varchar(20) NOT NULL COMMENT '類別',
  `seller_id` varchar(20) NOT NULL COMMENT '賣家id',
  `coup_id` varchar(20) NOT NULL COMMENT '自動產生的優惠id	',
  `coup_code` varchar(20) NOT NULL COMMENT '優惠碼',
  `coup_name` varchar(50) NOT NULL COMMENT '優惠名',
  `coup_img` varchar(100) NOT NULL COMMENT '優惠圖片',
  `coup_over` varchar(11) NOT NULL COMMENT '決定用哪種方式滿額或件數id',
  `coup_PriOrPer` varchar(11) NOT NULL COMMENT '決定用哪種方式金額或趴數id',
  `coup_start` datetime NOT NULL COMMENT '開始時間',
  `coup_end` datetime NOT NULL COMMENT '結束時間',
  `coup_times` int(11) NOT NULL COMMENT '次數',
  `create_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='第一個種類的優惠券';

--
-- 傾印資料表的資料 `coup01_allorder`
--

INSERT INTO `coup01_allorder` (`id`, `idd`, `coup_cate_id`, `seller_id`, `coup_id`, `coup_code`, `coup_name`, `coup_img`, `coup_over`, `coup_PriOrPer`, `coup_start`, `coup_end`, `coup_times`, `create_at`, `update_time`) VALUES
(8, 0, 'coup001', 'S20010001', 'COUP20200321052329', 'PI57W-PWA-XN1', '全單滿25000打7折', 'CUP0120200321052618.jpg', '8', '8', '2020-03-20 00:00:00', '2020-04-04 00:00:00', 2, '2020-03-21 05:26:18', '2020-03-26 11:36:34'),
(11, 0, 'coup001', 'S20010001', 'COUP20200322125800', 'PIW8M-PJX-PCD', '全單滿4000打6折', 'CUP0120200322125831.jpg', '4000', '6', '2020-03-01 00:00:00', '2020-04-04 00:00:00', 2, '2020-03-22 12:58:31', '2020-03-30 17:34:41'),
(13, 0, 'coup001', 'S20010001', 'COUP20200326114046', 'IIEKT-A2F-BPD', '全單超過八件打八折', 'CUP0120200326114442.jpg', '8', '8', '2020-03-01 00:00:00', '2020-03-31 00:00:00', 1, '2020-03-26 11:44:42', '2020-03-26 11:44:42'),
(14, 0, 'coup001', 'S20010001', 'COUP20200329001932', 'PMATK-74N-2DJ', '全單滿25000減5000元', 'CUP0120200329022022.jpg', '25000', '5000', '2020-03-01 00:00:00', '2020-04-04 00:00:00', 1, '2020-03-29 02:20:23', '2020-03-29 02:20:23');

-- --------------------------------------------------------

--
-- 資料表結構 `coup02_goods`
--

CREATE TABLE `coup02_goods` (
  `id` int(20) NOT NULL COMMENT '流水號',
  `idd` int(11) DEFAULT NULL COMMENT '	計算自動產生的cup_id',
  `coup_cate_id` varchar(20) NOT NULL COMMENT '優惠券種類',
  `coup_id` varchar(20) DEFAULT NULL COMMENT '自動產生的優惠id',
  `seller_id` varchar(20) NOT NULL COMMENT '賣家id',
  `coup_code` varchar(20) NOT NULL COMMENT '商品種類id',
  `itemTypeId` varchar(20) DEFAULT NULL COMMENT '優惠碼02',
  `coup_name` varchar(50) DEFAULT NULL COMMENT '優惠名',
  `coup_img` varchar(100) DEFAULT NULL,
  `coup_over` int(20) DEFAULT NULL COMMENT '商品滿幾件或幾元',
  `coup_PriOrPer` varchar(11) DEFAULT NULL COMMENT '決定用趴數或是金額',
  `coup_start` datetime DEFAULT NULL,
  `coup_end` datetime DEFAULT NULL,
  `coup_times` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT current_timestamp(),
  `update_time` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `coup02_goods`
--

INSERT INTO `coup02_goods` (`id`, `idd`, `coup_cate_id`, `coup_id`, `seller_id`, `coup_code`, `itemTypeId`, `coup_name`, `coup_img`, `coup_over`, `coup_PriOrPer`, `coup_start`, `coup_end`, `coup_times`, `create_time`, `update_time`) VALUES
(3, NULL, 'coup002', 'COUP20200326115125', 'S20010001', 'IIIE5T6-0AC1-P0QC', '潛水配件', '超過十件潛水配件打七折', 'CUP0220200326115215.jpg', 10, '7', '2020-02-01 00:00:00', '2020-03-31 00:00:00', 1, '2020-03-26 11:52:15', '2020-03-29 21:19:22'),
(4, NULL, 'coup002', 'COUP20200326225746', 'S20010001', 'PMIY61X-VJXJ-ML3M', '自由潛水蛙鞋', '自由潛水蛙鞋超過2500元減300元', 'CUP0220200326225949.jpeg', 2500, '300', '2020-01-01 00:00:00', '2020-02-01 00:00:00', 1, '2020-03-26 22:59:49', '2020-03-29 21:19:46'),
(6, NULL, 'coup002', 'COUP20200327104857', 'S20010001', 'PMIG5L9-0Q5C-C52L', '連身防寒衣', '防寒衣滿15000減3000元', 'CUP0220200327104947.jpg', 15000, '3000', '2020-03-01 00:00:00', '2020-04-04 00:00:00', 0, '2020-03-27 10:49:47', '2020-03-27 10:49:47'),
(13, NULL, 'coup002', 'COUP20200330001951', 'S20010001', 'PMI6GCA-TERM-3220', '自由潛水蛙鞋', '自由潛水蛙鞋滿20000元減2000元', 'CUP0220200330002047.png', 20000, '2000', '2020-03-01 00:00:00', '2020-04-04 00:00:00', 1, '2020-03-30 00:20:47', '2020-03-30 00:20:47'),
(16, NULL, 'coup002', 'COUP20200330002123', 'S20010001', 'PII5BQ0-XD50-MNE8', '潛水配件', '全單滿25000打8折', 'CUP0220200330002240.png', 25000, '8', '2020-02-01 00:00:00', '2020-04-04 00:00:00', 1, '2020-03-30 00:22:40', '2020-03-30 00:22:40'),
(17, NULL, 'coup002', 'COUP20200330174205', 'S20010001', 'PMINE34-UCV6-QCUF', '潛水配件', '自由潛水配件滿25000元減2500元', 'CUP0220200330174338.jpg', 25000, '2500', '2020-03-01 00:00:00', '2020-04-04 00:00:00', 2, '2020-03-30 17:43:38', '2020-03-30 17:43:38');

-- --------------------------------------------------------

--
-- 資料表結構 `coup03_givi`
--

CREATE TABLE `coup03_givi` (
  `id` int(11) NOT NULL,
  `idd` int(11) NOT NULL,
  `coup_cate_id` varchar(20) NOT NULL,
  `seller_id` varchar(20) NOT NULL COMMENT '賣家id',
  `givi_name` varchar(20) NOT NULL,
  `coup_id` varchar(20) NOT NULL,
  `coup_code` varchar(20) NOT NULL,
  `coup_name` varchar(20) NOT NULL COMMENT '優惠名',
  `coup_img` varchar(100) NOT NULL,
  `coup_over` varchar(11) NOT NULL COMMENT '滿多少錢',
  `givi_piece` int(11) NOT NULL COMMENT '送多少件贈品',
  `coup_times` int(11) NOT NULL COMMENT '使用次數',
  `coup_start` datetime NOT NULL,
  `coup_end` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `coup03_givi`
--

INSERT INTO `coup03_givi` (`id`, `idd`, `coup_cate_id`, `seller_id`, `givi_name`, `coup_id`, `coup_code`, `coup_name`, `coup_img`, `coup_over`, `givi_piece`, `coup_times`, `coup_start`, `coup_end`, `created_at`, `update_at`) VALUES
(1, 0, 'coup003', '', 'givi001', 'COUP20200318134644', '95KX2-NU6CX-HLB1Q', '超過5件贈送多利娃娃', 'givi001.jpg', '5', 100, 5, '2020-02-03 14:04:25', '2020-02-13 14:04:25', '2020-03-18 14:09:07', '2020-03-22 17:18:26'),
(2, 1, 'coup003', '', 'givi002', 'COUP20200318134633', '95KX2-NU6CX-HLBAA', '超過10件贈送尼莫娃娃', 'givin002.jpg', '10', 20, 10, '2020-03-16 14:04:25', '2020-03-31 14:04:25', '2020-03-18 14:09:07', '2020-03-22 17:18:23'),
(3, 0, 'coup003', 'S20010001', '多莉魚', 'COUP20200322171356', 'A3NEB-NNH58-BRW4J', '全單滿1500送七隻多利', 'CUP0320200322171800.jpg', '1500', 7, 2020, '0000-00-00 00:00:00', '2020-03-01 00:00:00', '2020-03-22 17:18:00', '2020-03-22 17:18:00');

-- --------------------------------------------------------

--
-- 資料表結構 `couptomember`
--

CREATE TABLE `couptomember` (
  `id` int(11) NOT NULL,
  `memberId` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員id',
  `seller_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家id',
  `coup_code` varchar(20) NOT NULL COMMENT '優惠券碼',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='優惠券發送至會員管理表';

--
-- 傾印資料表的資料 `couptomember`
--

INSERT INTO `couptomember` (`id`, `memberId`, `seller_id`, `coup_code`, `created_at`, `update_at`) VALUES
(1, 'M20010007', 'S20010001', '2WM0-5H05-23C9', '2020-03-26 14:34:39', '2020-03-26 14:34:39'),
(2, 'M20010008', 'S20010001', '2WM0-5H05-23C9', '2020-03-26 14:34:39', '2020-03-26 14:34:39'),
(5, 'M20010007', 'S20010001', 'IIIE5T6-0AC1-P0QC', '2020-03-26 14:38:44', '2020-03-26 14:38:44'),
(6, 'M20010008', 'S20010001', 'IIIE5T6-0AC1-P0QC', '2020-03-26 14:38:44', '2020-03-26 14:38:44'),
(7, 'M20010006', 'S20010001', 'IIIE5T6-0AC1-P0QC', '2020-03-26 14:40:05', '2020-03-26 14:40:05'),
(11, 'M20010008', 'S20010001', '95KX2-NU6CX-HLB1Q', '2020-03-26 17:00:10', '2020-03-26 17:00:10'),
(12, 'M20010009', 'S20010001', '95KX2-NU6CX-HLB1Q', '2020-03-26 17:00:10', '2020-03-26 17:00:10'),
(19, 'M20010006', 'S20010001', 'PMIY61X-VJXJ-ML3M', '2020-03-27 10:57:13', '2020-03-27 10:57:13'),
(21, 'M20010006', 'S20010001', 'PIW8M-PJX-PCD', '2020-03-27 11:18:19', '2020-03-27 11:18:19'),
(22, 'M20010010', 'S20010001', 'PIW8M-PJX-PCD', '2020-03-27 11:18:19', '2020-03-27 11:18:19'),
(145, 'M20010009', 'S20010001', 'IIIE5T6-0AC1-P0QC', '2020-03-27 14:32:10', '2020-03-27 14:32:10'),
(146, 'M20010008', 'S20010001', 'IIIE5T6-0AC1-P0QC', '2020-03-27 14:32:10', '2020-03-27 14:32:10'),
(148, 'M20010007', 'S20010001', '2WM0-5H05-23C9', '2020-03-28 10:34:50', '2020-03-28 10:34:50'),
(150, 'M20010006', 'S20010001', 'PMI6GCA-TERM-3220', '2020-03-30 00:26:56', '2020-03-30 00:26:56'),
(151, 'M20010006', 'S20010001', 'PMINE34-UCV6-QCUF', '2020-03-30 17:43:59', '2020-03-30 17:43:59');

-- --------------------------------------------------------

--
-- 資料表結構 `cupon_all`
--

CREATE TABLE `cupon_all` (
  `id` int(20) NOT NULL COMMENT '流水號',
  `idd` int(11) NOT NULL COMMENT '計算自動產生的cup_id',
  `coup_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '自動產生的優惠id',
  `coup_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠碼',
  `coup_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠名',
  `coup_cate_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠類別id',
  `coup_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠圖片',
  `over_price_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '超過多少折扣連結id',
  `over_perc_id` varchar(20) NOT NULL COMMENT '超過多少錢id',
  `over_minus_id` varchar(20) NOT NULL COMMENT '要減多少錢id',
  `over_piece` varchar(20) NOT NULL COMMENT '超過件數',
  `givi_cate_id` varchar(20) NOT NULL COMMENT '贈品id',
  `coupItem_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠套用商品',
  `coup_start` datetime NOT NULL DEFAULT current_timestamp() COMMENT '優惠券開始時間',
  `coup_end` datetime NOT NULL COMMENT '優惠券結束時間',
  `coup_times` int(10) NOT NULL COMMENT '優惠券使用次數',
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '優惠券生成時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '優惠券更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `cupon_cate`
--

CREATE TABLE `cupon_cate` (
  `coup_cate_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠類別id',
  `coup_cate` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠類別名',
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '創造時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='優惠類別表';

--
-- 傾印資料表的資料 `cupon_cate`
--

INSERT INTO `cupon_cate` (`coup_cate_id`, `coup_cate`, `create_time`, `update_time`) VALUES
('coup01', 'orderDisc', '2020-02-27 17:47:11', '2020-02-27 17:47:11'),
('coup02', 'goodsDisc', '2020-02-27 17:47:11', '2020-02-27 17:47:11'),
('coup03', 'giftDisc', '2020-02-27 17:47:11', '2020-02-27 17:47:11');

-- --------------------------------------------------------

--
-- 資料表結構 `givi_set`
--

CREATE TABLE `givi_set` (
  `id` int(11) NOT NULL,
  `givi_cate_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '贈品id',
  `seller_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家id',
  `givi_name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '贈品名',
  `givi_num` int(20) NOT NULL COMMENT '贈品庫存',
  `givi_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '贈品圖',
  `created_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='贈品設定';

--
-- 傾印資料表的資料 `givi_set`
--

INSERT INTO `givi_set` (`id`, `givi_cate_id`, `seller_id`, `givi_name`, `givi_num`, `givi_img`, `created_time`, `update_time`) VALUES
(1, 'givi001', 'S20010001', '多莉魚', 4, 'GIVI20200322121021.jpg', '2020-03-22 12:10:21', '2020-03-22 12:10:21'),
(3, 'givi005', 'S20010001', '鯊魚鯊魚', 4, 'GIVI20200329001819.jpg', '2020-03-29 00:18:19', '2020-03-29 00:18:19');

-- --------------------------------------------------------

--
-- 資料表結構 `over_minus_price`
--

CREATE TABLE `over_minus_price` (
  `over_minus_id` varchar(20) NOT NULL COMMENT '超過多少減錢id',
  `over_minus` int(10) NOT NULL COMMENT '超過多少減錢i'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='超過多少錢時減錢';

--
-- 傾印資料表的資料 `over_minus_price`
--

INSERT INTO `over_minus_price` (`over_minus_id`, `over_minus`) VALUES
('overFifty', 50),
('overFiteen', 150),
('overHundr', 100),
('overTwentyFiv', 250),
('overTwhun', 200);

-- --------------------------------------------------------

--
-- 資料表結構 `over_perc`
--

CREATE TABLE `over_perc` (
  `over_perc_id` varchar(20) NOT NULL COMMENT '超過多少錢打折id',
  `over_perc` varchar(20) NOT NULL COMMENT '超過多少錢折扣類型',
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '創造時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='超過多少錢時打折';

--
-- 傾印資料表的資料 `over_perc`
--

INSERT INTO `over_perc` (`over_perc_id`, `over_perc`, `create_time`, `update_time`) VALUES
('overEight', '80%', '2020-02-27 18:02:17', '2020-02-27 18:02:17'),
('overFive', '50%', '2020-02-27 18:02:17', '2020-02-27 18:02:17'),
('overNine', '90%', '2020-02-27 18:02:17', '2020-02-27 18:02:17'),
('overSeven', '70%', '2020-02-27 18:02:17', '2020-02-27 18:02:17'),
('overSix', '60%', '2020-02-27 18:02:17', '2020-02-27 18:02:17');

-- --------------------------------------------------------

--
-- 資料表結構 `over_piece`
--

CREATE TABLE `over_piece` (
  `over_piece_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '超過件數id',
  `over_piece` int(20) NOT NULL COMMENT '超過件數'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='超過件數';

--
-- 傾印資料表的資料 `over_piece`
--

INSERT INTO `over_piece` (`over_piece_id`, `over_piece`) VALUES
('fifteenPiece', 15),
('fivePiece', 5),
('tenPiece', 10),
('twentyFivePiece', 25),
('twentyPiece', 20);

-- --------------------------------------------------------

--
-- 資料表結構 `over_price`
--

CREATE TABLE `over_price` (
  `over_price_id` varchar(20) NOT NULL COMMENT '超過多少錢id',
  `over_price` int(20) NOT NULL COMMENT '超過多少錢',
  `create_time` datetime NOT NULL COMMENT '創造時間',
  `update_time` datetime NOT NULL COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='超過多少錢';

--
-- 傾印資料表的資料 `over_price`
--

INSERT INTO `over_price` (`over_price_id`, `over_price`, `create_time`, `update_time`) VALUES
('fifteen', 1500, '2020-02-13 00:00:00', '2020-02-27 00:00:00'),
('five', 500, '2020-02-15 00:00:00', '2020-02-19 00:00:00'),
('ten', 1000, '2020-02-12 00:00:00', '2020-02-18 00:00:00'),
('twenty', 2000, '2020-02-12 00:00:00', '2020-02-17 00:00:00'),
('twentyFiv', 2500, '2020-02-13 00:00:00', '2020-02-12 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `seller_status`
--

CREATE TABLE `seller_status` (
  `id` int(11) NOT NULL,
  `seller_cond_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀態id',
  `seller_status` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀態',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='狀態列';

--
-- 傾印資料表的資料 `seller_status`
--

INSERT INTO `seller_status` (`id`, `seller_cond_id`, `seller_status`, `created_at`, `updated_at`) VALUES
(1, 'SCUA2001', 'unactive', '2020-01-21 22:36:28', '2020-01-21 22:36:28'),
(2, 'SCSA2001', 'suspened', '2020-01-21 22:36:28', '2020-01-21 22:36:28'),
(3, 'SCA2001', 'active', '2020-01-21 22:36:28', '2020-01-21 22:36:28');

-- --------------------------------------------------------

--
-- 資料表結構 `shop_info`
--

CREATE TABLE `shop_info` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `shop_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場id',
  `seller_shop` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場名',
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間',
  `shop_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場圖片',
  `idd` int(11) NOT NULL COMMENT '編號流水號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='賣場資訊';

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `basic_information`
--
ALTER TABLE `basic_information`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `click_count`
--
ALTER TABLE `click_count`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `common_custom`
--
ALTER TABLE `common_custom`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coup01_allorder`
--
ALTER TABLE `coup01_allorder`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coup02_goods`
--
ALTER TABLE `coup02_goods`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coup03_givi`
--
ALTER TABLE `coup03_givi`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `couptomember`
--
ALTER TABLE `couptomember`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `cupon_all`
--
ALTER TABLE `cupon_all`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `cupon_cate`
--
ALTER TABLE `cupon_cate`
  ADD PRIMARY KEY (`coup_cate_id`);

--
-- 資料表索引 `givi_set`
--
ALTER TABLE `givi_set`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `over_minus_price`
--
ALTER TABLE `over_minus_price`
  ADD PRIMARY KEY (`over_minus_id`);

--
-- 資料表索引 `over_perc`
--
ALTER TABLE `over_perc`
  ADD PRIMARY KEY (`over_perc_id`);

--
-- 資料表索引 `over_piece`
--
ALTER TABLE `over_piece`
  ADD PRIMARY KEY (`over_piece_id`);

--
-- 資料表索引 `over_price`
--
ALTER TABLE `over_price`
  ADD PRIMARY KEY (`over_price_id`);

--
-- 資料表索引 `seller_status`
--
ALTER TABLE `seller_status`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `shop_info`
--
ALTER TABLE `shop_info`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `basic_information`
--
ALTER TABLE `basic_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `click_count`
--
ALTER TABLE `click_count`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `common_custom`
--
ALTER TABLE `common_custom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coup01_allorder`
--
ALTER TABLE `coup01_allorder`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coup02_goods`
--
ALTER TABLE `coup02_goods`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coup03_givi`
--
ALTER TABLE `coup03_givi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `couptomember`
--
ALTER TABLE `couptomember`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cupon_all`
--
ALTER TABLE `cupon_all`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '流水號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `givi_set`
--
ALTER TABLE `givi_set`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `seller_status`
--
ALTER TABLE `seller_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shop_info`
--
ALTER TABLE `shop_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
