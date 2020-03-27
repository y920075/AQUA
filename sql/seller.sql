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
(10, 1, 'S20010001', 'Andy123', 'S20200317102806.jpg', 'Andy', '可愛的魚', 'asdad113', '台北市大安區敦化', '0955413111', '0227385608', 'SCUA2001', 'asdas@gmail.com', '這裡是一個能夠和大家互換裝備的賣場', '2020-01-17 11:33:20', '2020-01-17 11:33:20', '[{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120434.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"79361602a7fd4bd8624e20146db06387\",\"path\":\"tmp_uploads\\\\79361602a7fd4bd8624e20146db06387\",\"size\":63506},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120305.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"21166b35577b613b8d36facd7e65154b\",\"path\":\"tmp_uploads\\\\21166b35577b613b8d36facd7e65154b\",\"size\":142755},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120313.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"88933ace050d9ecc75f5b67340064b8c\",\"path\":\"tmp_uploads\\\\88933ace050d9ecc75f5b67340064b8c\",\"size\":142755},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120325.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"12f528d0716f39b2d55ef98d67a2401c\",\"path\":\"tmp_uploads\\\\12f528d0716f39b2d55ef98d67a2401c\",\"size\":161431},{\"fieldname\":\"shop_img\",\"originalname\":\"20200117120333.jpg\",\"encoding\":\"7bit\",\"mimetype\":\"image/jpeg\",\"destination\":\"tmp_uploads/\",\"filename\":\"741d849d9b29d9d1b53999d2f32a2f34\",\"path\":\"tmp_uploads\\\\741d849d9b29d9d1b53999d2f32a2f34\",\"size\":161431}]'),
(11, 2, 'S20010002', 'Peecy1023', '20200117121753.jpg', 'Tina', '絕地領域', 'wqewqeqwe1', '台北市中山區中山北路20號', '27455574', '0954111237', 'SCUA2001', 'asdg5613@gmail.com', '防寒寒寒衣專賣店', '2020-01-17 19:17:53', '2020-01-17 19:17:53', ''),
(12, 3, 'S20010003', 'Dacy1023', '20200119071141.jpg', '熱情的魚', '優游大海', 'sdfdsf234', '台北市中山區中山北路20號', '27454574', '0954111234', 'SCUA2001', 'asdg5613@gmail.com', '吸一口氣,淺一百浬', '2020-01-19 14:11:41', '2020-01-19 14:11:41', '');

-- --------------------------------------------------------

--
-- 資料表結構 `common_custom`
--

CREATE TABLE `common_custom` (
  `id` int(11) NOT NULL,
  `comcus_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '常客idCM開頭',
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

INSERT INTO `common_custom` (`id`, `comcus_id`, `comcus_name`, `comcus_img`, `comcus_gmail`, `comcus_buy_perc`, `comcus_visit_perc`, `created_at`, `updated_at`, `seller_id`) VALUES
(6, 'CM20200321052329', 'Peng', 'comcus1.jpg', 'PengChungJun@gmail.com', 50, 60, '2020-01-08 20:56:40', '2020-03-23 01:11:09', 'S20010001'),
(7, 'CM20200321052333', 'MeBo', 'comcus2.jpg', 'asdfghjkl1236208@gmail.com', 80, 40, '2020-03-04 20:56:40', '2020-03-23 01:11:18', 'S20010001'),
(8, 'CM20200321052344', 'HoYi', 'comcus3.jpg', '101416018@stud.sju.edu.tw', 10, 80, '2020-02-17 20:56:40', '2020-03-23 01:11:24', 'S20010001'),
(9, 'CM20200321052355', 'YuChun', 'comcus4.jpg', 'y920075@gmail.com', 40, 60, '2020-01-01 20:56:40', '2020-03-23 01:11:31', 'S20010001'),
(10, 'CM20200321052366', 'ChenBo', 'comcus5.jpg', 'infinitegit@gmail.com', 30, 90, '2020-04-01 20:56:40', '2020-03-23 01:11:37', 'S20010001');

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
(8, 0, 'coup001', 'S20010001', 'COUP20200321052329', 'HLN-WCE-R9H', '全單滿25000打7折', 'CUP0120200321052618.jpg', '8', '8', '2020-03-20 00:00:00', '2020-04-04 00:00:00', 2, '2020-03-21 05:26:18', '2020-03-22 12:42:09'),
(11, 0, 'coup001', '', 'COUP20200322125800', '9NU-86C-YPM', '全單滿4000打7折', 'CUP0120200322125831.jpg', '4000', '7', '2020-03-01 00:00:00', '2020-04-04 00:00:00', 2, '2020-03-22 12:58:31', '2020-03-22 12:58:31');

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
(2, NULL, 'coup002', 'COUP20200324111802', 'S20010001', '2WM0-5H05-23C9', '面鏡', '面鏡滿8件打8折', 'CUP0220200324112005.jpg', 8, '8', '2020-03-09 00:00:00', '2020-04-04 00:00:00', 1, '2020-03-24 11:20:05', '2020-03-24 11:20:05');

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
(1, 'givi001', 'S20010001', '多莉魚', 4, 'GIVI20200322121021.jpg', '2020-03-22 12:10:21', '2020-03-22 12:10:21');

-- --------------------------------------------------------

--
-- 資料表結構 `items`
--

CREATE TABLE `items` (
  `itemId` varchar(10) NOT NULL COMMENT '商品ID',
  `itemName` varchar(100) DEFAULT NULL COMMENT '商品名稱',
  `itemImg` varchar(20) DEFAULT NULL COMMENT '商品圖片',
  `itemCategoryId` varchar(10) DEFAULT NULL COMMENT '商品類別',
  `itemTypeId` varchar(10) DEFAULT NULL COMMENT '商品類型',
  `itemDescription` varchar(500) DEFAULT NULL COMMENT '商品描述',
  `itemMaterial` varchar(10) DEFAULT NULL COMMENT '商品材質',
  `itemBrandId` varchar(30) DEFAULT NULL COMMENT '商品品牌',
  `itemSellerId` varchar(10) DEFAULT NULL COMMENT '賣家ID',
  `itemStatus` varchar(5) DEFAULT NULL COMMENT '商品狀態',
  `itemSize` varchar(10) DEFAULT NULL COMMENT '商品尺寸',
  `itemPrice` varchar(5) DEFAULT NULL COMMENT '商品價格',
  `itemQty` varchar(2) DEFAULT NULL COMMENT '商品數量',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `items`
--

INSERT INTO `items` (`itemId`, `itemName`, `itemImg`, `itemCategoryId`, `itemTypeId`, `itemDescription`, `itemMaterial`, `itemBrandId`, `itemSellerId`, `itemStatus`, `itemSize`, `itemPrice`, `itemQty`, `created_at`, `updated_at`) VALUES
('I20010001', 'GULL - VADER Mask UV400 日製頂級矽膠潛水面鏡 黃', 'B0001.jpg', '面鏡', '面鏡', '全新的設計,更貼近您的臉,減少頰骨的壓迫.更佳排水性,面鏡排水不抬頭,只須由鼻輕吐氣.專為東方人臉型設計.鏡片抗UV處理。有增豔效果,水下視覺更佳.日本製造.', '', 'GULL', '', '上架', '-', '4100', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010002', 'GULL - Mantis 5 Mask 日製矽膠經典潛水面鏡 迷彩粉紅', 'B0002.jpg', '面鏡', '面鏡', 'Made in Japan MANTIS 5 MASK SERIES 不滅傳說勇居銷售冠軍第一名超過35年的Mantis面鏡，有其值得自豪之處--- 適合所有人的潛水面鏡。精確的設計，讓您幾乎感覺不到它的存在。隨著時代的改變，技術及材質的改良，Mantis 仍然是您不變的選擇。日本製造', '', 'GULL', '', '上架', '-', '2500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010003', 'MOBBY\'S - ACT APNEA COMPETITION 訂製款防寒衣 /3mm', 'C0001.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S競技款， 日本代表隊指定選用。\n日本YAMAMOTO#45超柔軟橡膠，絕佳合身度與活動性。\n外層Repel Themo皮面，水阻更低、游動更滑順。\n內層Cell Skin水密性更好，於寒冷水域能長效保暖；穿脫建議搭配潤滑劑。\n日製高品質/專業選手級選擇\n*可依需求選擇一件式/二件式製作 \n*可加購客製化LOGO/字樣燙印服務(將視需求另行報價)\n*同步提供單獨訂製 : 頭套上衣$16,500/標準長褲$12,\n*下單後即提供預約量身', '', 'MOBBY\'S', '', '上架', '訂製款', '27600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010004', 'MOBBY\'S - ACT APNEA ADVANCED 訂製款防寒衣 /3mm', 'C0002.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S的高階量身訂製款式，絕佳合身與活動性 \n外層Smooth Skin皮面/內層Super Nesl彈性布料，低水阻、高水密性；輕鬆穿脫免潤滑劑\n日製高品質/晉身玩家級訂製款\n*可依需求選擇一件式/二件式製作 \n*可加購客製化LOGO/字樣燙印服務(將視需求另行報價)', '', 'MOBBY\'S', '', '上架', '訂製款', '25500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010005', 'MOBBY\'S - 訂製款防寒衣 ACT APNEA 3mm', 'C0003.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S的超值量身訂製款式，絕佳合身與水密 \n外層FHN彈性氯丁橡膠/內層CELL SKIN皮面材質，保暖更佳 \n日規高品質/晉身玩家級訂製款，輕鬆擁有 \n*可依需求選擇一件式/二件式製作 \n*同步提供單獨訂製:頭套上衣$9,500/標準長褲$8,500', '', 'MOBBY\'S', '', '上架', '訂製款', '16800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010006', 'MOBBY\'S - 成衣款防寒衣 SHE\'S PIXY 3mm', 'C0004.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', '', '上架', 'S', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010007', 'MOBBY\'S - 成衣款防寒衣 SHE\'S PIXY 3mm', 'C0004.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', '', '上架', 'M', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010008', 'MOBBY\'S - 成衣款防寒衣 SHE\'S PIXY 3mm', 'C0004.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', '', '上架', 'L', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010009', 'MOBBY\'S - 成衣款防寒衣 CABALLERO 3mm', 'C0005.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', '', '上架', 'S', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010010', 'MOBBY\'S - 成衣款防寒衣 CABALLERO 3mm', 'C0005.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', '', '上架', 'M', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010011', 'MOBBY\'S - 成衣款防寒衣 CABALLERO 3mm', 'C0005.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', '', '上架', 'L', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010012', 'OMER - UP-W1 自由潛水防寒衣 2mm/UMBERTO大師系列', 'C0006.jpg', '防寒衣', '連身防寒衣', '2mm厚度，溫帶水域輕鬆活動 \n光滑表面降低水阻，水中穿梭更靈活 \n布面內裡，穿脫容易無須潤滑劑', '', 'OMER', '', '上架', 'S', '5980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010013', 'OMER - UP-W1 自由潛水防寒衣 2mm/UMBERTO大師系列', 'C0006.jpg', '防寒衣', '連身防寒衣', '2mm厚度，溫帶水域輕鬆活動 \n光滑表面降低水阻，水中穿梭更靈活 \n布面內裡，穿脫容易無須潤滑劑', '', 'OMER', '', '上架', 'M', '5980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010014', 'OMER - UP-W1 自由潛水防寒衣 2mm/UMBERTO大師系列', 'C0006.jpg', '防寒衣', '連身防寒衣', '2mm厚度，溫帶水域輕鬆活動 \n光滑表面降低水阻，水中穿梭更靈活 \n布面內裡，穿脫容易無須潤滑劑', '', 'OMER', '', '上架', 'L', '5980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010015', 'OMER - UP-W3 自由潛水防寒衣 2mm/女款/UMBERTO大師系列', 'C0007.jpg', '防寒衣', '連身防寒衣', '2mm厚度，溫帶水域輕鬆活動 \n光滑表面降低水阻，水中穿梭更靈活 \n布面內裡，穿脫容易無須潤滑劑', '', 'OMER', '', '上架', 'S', '8450', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010016', 'OMER - UP-W3 自由潛水防寒衣 2mm/女款/UMBERTO大師系列', 'C0007.jpg', '防寒衣', '連身防寒衣', '2mm厚度，溫帶水域輕鬆活動 \n光滑表面降低水阻，水中穿梭更靈活 \n布面內裡，穿脫容易無須潤滑劑', '', 'OMER', '', '上架', 'M', '8450', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010017', 'OMER - UP-W3 自由潛水防寒衣 2mm/女款/UMBERTO大師系列', 'C0007.jpg', '防寒衣', '連身防寒衣', '2mm厚度，溫帶水域輕鬆活動 \n光滑表面降低水阻，水中穿梭更靈活 \n布面內裡，穿脫容易無須潤滑劑', '', 'OMER', '', '上架', 'L', '8450', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010018', 'SEAC - PYTHON 自潛防寒衣 3.5mm 岩石迷彩款', 'C0008.jpg', '防寒衣', '連身防寒衣', '3.5mm厚度，溫帶水域活動自如 \n袖口/腳踝水密設計，保暖效果更加 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'S', '5880', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010019', 'SEAC - PYTHON 自潛防寒衣 3.5mm 岩石迷彩款', 'C0008.jpg', '防寒衣', '連身防寒衣', '3.5mm厚度，溫帶水域活動自如 \n袖口/腳踝水密設計，保暖效果更加 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'M', '5880', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010020', 'SEAC - PYTHON 自潛防寒衣 3.5mm 岩石迷彩款', 'C0008.jpg', '防寒衣', '連身防寒衣', '3.5mm厚度，溫帶水域活動自如 \n袖口/腳踝水密設計，保暖效果更加 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'L', '5880', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010021', 'SEAC - RACE FLEX 400 自潛防寒衣 3.5mm 素黑款', 'C0009.jpg', '防寒衣', '連身防寒衣', '3.5mm厚度，溫帶水域活動自如 \n袖口/腳踝水密設計，保暖效果更加 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'S', '5580', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010022', 'SEAC - RACE FLEX 400 自潛防寒衣 3.5mm 素黑款', 'C0009.jpg', '防寒衣', '連身防寒衣', '3.5mm厚度，溫帶水域活動自如 \n袖口/腳踝水密設計，保暖效果更加 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'M', '5580', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010023', 'SEAC - RACE FLEX 400 自潛防寒衣 3.5mm 素黑款', 'C0009.jpg', '防寒衣', '連身防寒衣', '3.5mm厚度，溫帶水域活動自如 \n袖口/腳踝水密設計，保暖效果更加 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'L', '5580', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010024', 'SEAC - BODY-FIT CAMO SUIT自潛防寒衣 深水迷彩 1.5mm', 'C0010.jpg', '防寒衣', '連身防寒衣', '1.5mm厚度，溫帶水域輕鬆活動 \n獨特深水色調迷彩配色，低調有型 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'S', '6180', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010025', 'SEAC - BODY-FIT CAMO SUIT自潛防寒衣 深水迷彩 1.5mm', 'C0010.jpg', '防寒衣', '連身防寒衣', '1.5mm厚度，溫帶水域輕鬆活動 \n獨特深水色調迷彩配色，低調有型 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'M', '6180', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010026', 'SEAC - BODY-FIT CAMO SUIT自潛防寒衣 深水迷彩 1.5mm', 'C0010.jpg', '防寒衣', '連身防寒衣', '1.5mm厚度，溫帶水域輕鬆活動 \n獨特深水色調迷彩配色，低調有型 \n高機能性，自由潛水/打魚都合適', '', 'SEAC', '', '上架', 'L', '6180', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010027', 'BARREL - Women\'s 3mm二件式防寒衣 素黑', 'C0011.jpg', '防寒衣', '連身防寒衣', '高彈性綠丁橡膠-活動更方便\n亞洲人剪裁版型-著用更合身\n布面內裡-無須潤滑即可穿著', '', 'BARREL', '', '上架', 'S', '9600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010028', 'OMER - CAMU 3D自潛防寒衣 仿岩石迷彩/3mm', 'C0012.jpg', '防寒衣', '連身防寒衣', 'O.ME.R. 經典迷彩款 \n自由潛水/打魚最佳選擇', '', 'OMER', '', '上架', 'S', '8850', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010029', 'OMER - CAMU 3D自潛防寒衣 仿岩石迷彩/3mm', 'C0012.jpg', '防寒衣', '連身防寒衣', 'O.ME.R. 經典迷彩款 \n自由潛水/打魚最佳選擇', '', 'OMER', '', '上架', 'M', '8850', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010030', 'OMER - CAMU 3D自潛防寒衣 仿岩石迷彩/3mm', 'C0012.jpg', '防寒衣', '連身防寒衣', 'O.ME.R. 經典迷彩款 \n自由潛水/打魚最佳選擇', '', 'OMER', '', '上架', 'L', '8850', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010031', 'OMER - CAMU 3D自潛防寒衣 仿岩石迷彩/5mm', 'C0013.jpg', '防寒衣', '連身防寒衣', 'O.ME.R. 經典迷彩款 \n自由潛水/打魚最佳選擇', '', 'OMER', '', '上架', 'S', '10000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010032', 'OMER - CAMU 3D自潛防寒衣 仿岩石迷彩/5mm', 'C0013.jpg', '防寒衣', '連身防寒衣', 'O.ME.R. 經典迷彩款 \n自由潛水/打魚最佳選擇', '', 'OMER', '', '上架', 'M', '10000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010033', 'OMER - CAMU 3D自潛防寒衣 仿岩石迷彩/5mm', 'C0013.jpg', '防寒衣', '連身防寒衣', 'O.ME.R. 經典迷彩款 \n自由潛水/打魚最佳選擇', '', 'OMER', '', '上架', 'L', '10000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010034', 'SPORASUB - REEF CAMU自潛防寒衣 3D珊瑚海底地形偽裝迷彩 /3mm', 'C0014.jpg', '防寒衣', '連身防寒衣', '提供潛打者極佳的3D隱身偽裝 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'S', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010035', 'SPORASUB - REEF CAMU自潛防寒衣 3D珊瑚海底地形偽裝迷彩 /3mm', 'C0014.jpg', '防寒衣', '連身防寒衣', '提供潛打者極佳的3D隱身偽裝 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'M', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010036', 'SPORASUB - REEF CAMU自潛防寒衣 3D珊瑚海底地形偽裝迷彩 /3mm', 'C0014.jpg', '防寒衣', '連身防寒衣', '提供潛打者極佳的3D隱身偽裝 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'L', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010037', 'SPORASUB - SEA GREEN自潛防寒衣 海草地形偽裝迷彩 /3mm', 'C0015.jpg', '防寒衣', '連身防寒衣', '海草地形偽裝迷彩 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'S', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010038', 'SPORASUB - SEA GREEN自潛防寒衣 海草地形偽裝迷彩 /3mm', 'C0015.jpg', '防寒衣', '連身防寒衣', '海草地形偽裝迷彩 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'M', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010039', 'SPORASUB - SEA GREEN自潛防寒衣 海草地形偽裝迷彩 /3mm', 'C0015.jpg', '防寒衣', '連身防寒衣', '海草地形偽裝迷彩 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'L', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010040', 'SPORASUB - BLUE DEEP自潛防寒衣 海之隱者 /女款5mm', 'C0016.jpg', '防寒衣', '連身防寒衣', '海洋迷彩幻化為海中隱者 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'S', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010041', 'SPORASUB - BLUE DEEP自潛防寒衣 海之隱者 /女款5mm', 'C0016.jpg', '防寒衣', '連身防寒衣', '海洋迷彩幻化為海中隱者 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'M', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010042', 'SPORASUB - BLUE DEEP自潛防寒衣 海之隱者 /女款5mm', 'C0016.jpg', '防寒衣', '連身防寒衣', '海洋迷彩幻化為海中隱者 \n自由潛水/打魚最佳選擇', '', 'SPORASUB', '', '上架', 'L', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010043', 'SPORASUB - YEMAYA自潛防寒衣 /女款3mm', 'C0017.jpg', '防寒衣', '連身防寒衣', '低調奢華黑底金字設計\n連帽上衣+高腰褲，2件式設計\n內層Open Cell搭配外層彈性布料，兼具水密保暖與耐用度', '', 'SPORASUB', '', '上架', 'L', '10600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010044', 'BESTDIVE【經典滑面】1.5MM自由潛水比基尼防寒衣', 'C0018.jpg', '防寒衣', '連身防寒衣', '經典滑面分體防寒衣，日本Yamamoto布料加上SCS技術與鈦合金塗層，\n不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n布料柔韌有彈性、水下的超低阻力、極致貼身的舒適感受，\n如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度！！\n也是許多自由潛水者的御用防寒衣', '', 'BESTDIVE', '', '上架', 'S', '4800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010045', 'BESTDIVE【經典滑面】1.5MM自由潛水比基尼防寒衣', 'C0018.jpg', '防寒衣', '連身防寒衣', '經典滑面分體防寒衣，日本Yamamoto布料加上SCS技術與鈦合金塗層，\n不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n布料柔韌有彈性、水下的超低阻力、極致貼身的舒適感受，\n如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度！！\n也是許多自由潛水者的御用防寒衣', '', 'BESTDIVE', '', '上架', 'M', '4800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010046', 'BESTDIVE【經典滑面】1.5MM自由潛水比基尼防寒衣', 'C0018.jpg', '防寒衣', '連身防寒衣', '經典滑面分體防寒衣，日本Yamamoto布料加上SCS技術與鈦合金塗層，\n不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n布料柔韌有彈性、水下的超低阻力、極致貼身的舒適感受，\n如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度！！\n也是許多自由潛水者的御用防寒衣', '', 'BESTDIVE', '', '上架', 'L', '4800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010047', 'BESTDIVE【經典滑面】1.5MM自由潛水無帽防寒衣', 'C0019.jpg', '防寒衣', '連身防寒衣', '經典滑面分體防寒衣，日本Yamamoto布料加上SCS技術與鈦合金塗層，\n不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n布料柔韌有彈性、水下的超低阻力、極致貼身的舒適感受，\n如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度！！\n也是許多自由潛水者的御用防寒衣', '', 'BESTDIVE', '', '上架', 'S', '7650', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010048', 'BESTDIVE【經典滑面】1.5MM自由潛水無帽防寒衣', 'C0019.jpg', '防寒衣', '連身防寒衣', '經典滑面分體防寒衣，日本Yamamoto布料加上SCS技術與鈦合金塗層，\n不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n布料柔韌有彈性、水下的超低阻力、極致貼身的舒適感受，\n如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度！！\n也是許多自由潛水者的御用防寒衣', '', 'BESTDIVE', '', '上架', 'M', '7650', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010049', 'BESTDIVE【經典滑面】1.5MM自由潛水無帽防寒衣', 'C0019.jpg', '防寒衣', '連身防寒衣', '經典滑面分體防寒衣，日本Yamamoto布料加上SCS技術與鈦合金塗層，\n不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n布料柔韌有彈性、水下的超低阻力、極致貼身的舒適感受，\n如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度！！\n也是許多自由潛水者的御用防寒衣', '', 'BESTDIVE', '', '上架', 'L', '7650', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010050', 'AROPEC 100%全超彈男款兩件式 3mm', 'C0020.jpg', '防寒衣', '連身防寒衣', '跨帶式套頭長袖上衣，可額外搭配高腰長褲，兩件(截)式設計，提供穿脫便利性\n整件以膠合及盲縫製成，防止並減少水的滲入，提升保暖性\n皮面外層在水下的超低阻力、提供極致貼身的舒適感受，如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度 \n光滑亮皮布面塗層技術，不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n男性專屬緊身胸腰線剪裁，穿著活動時更加凸顯您的好身材', '', 'AROPEC', '', '上架', 'S', '9900', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010051', 'AROPEC 100%全超彈男款兩件式 3mm', 'C0020.jpg', '防寒衣', '連身防寒衣', '跨帶式套頭長袖上衣，可額外搭配高腰長褲，兩件(截)式設計，提供穿脫便利性\n整件以膠合及盲縫製成，防止並減少水的滲入，提升保暖性\n皮面外層在水下的超低阻力、提供極致貼身的舒適感受，如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度 \n光滑亮皮布面塗層技術，不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n男性專屬緊身胸腰線剪裁，穿著活動時更加凸顯您的好身材', '', 'AROPEC', '', '上架', 'M', '9900', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010052', 'AROPEC 100%全超彈男款兩件式 3mm', 'C0020.jpg', '防寒衣', '連身防寒衣', '跨帶式套頭長袖上衣，可額外搭配高腰長褲，兩件(截)式設計，提供穿脫便利性\n整件以膠合及盲縫製成，防止並減少水的滲入，提升保暖性\n皮面外層在水下的超低阻力、提供極致貼身的舒適感受，如同您的第二層皮膚，讓您在肢體活動上能夠兼具靈活及保暖度 \n光滑亮皮布面塗層技術，不同於紡織面料的顯色效果，水下閃耀折射金屬光澤，拍照起來色彩飽和又炫麗\n男性專屬緊身胸腰線剪裁，穿著活動時更加凸顯您的好身材', '', 'AROPEC', '', '上架', 'L', '9900', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010053', 'VDIVE Neobella 前開拉鍊 特別款 3mm', 'C0021.jpg', '防寒衣', '連身防寒衣', '前開式拉鍊” 定制款 獨家細節 “粉紅拉鏈”\n穿脫更為方便的特別款， 內部：防水膠縫100%水\n彈性纖維的延伸性伸張度達600%', '', 'VDIVE', '', '上架', 'S', '5150', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010054', 'VDIVE Neobella 前開拉鍊 特別款 3mm', 'C0021.jpg', '防寒衣', '連身防寒衣', '前開式拉鍊” 定制款 獨家細節 “粉紅拉鏈”\n穿脫更為方便的特別款， 內部：防水膠縫100%水\n彈性纖維的延伸性伸張度達600%', '', 'VDIVE', '', '上架', 'M', '5150', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010055', 'VDIVE Neobella 前開拉鍊 特別款 3mm', 'C0021.jpg', '防寒衣', '連身防寒衣', '前開式拉鍊” 定制款 獨家細節 “粉紅拉鏈”\n穿脫更為方便的特別款， 內部：防水膠縫100%水\n彈性纖維的延伸性伸張度達600%', '', 'VDIVE', '', '上架', 'L', '5150', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010056', 'VDIVE Ultra V flex 特級彈-BBL 3mm', 'C0022.jpg', '防寒衣', '連身防寒衣', '脖頸軟皮加強舒適度\n銅拉鍊扣頭強度增加\nV.DIVE logo 尼龍織帶線繩', '', 'VDIVE', '', '上架', 'S', '6980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010057', 'VDIVE Ultra V flex 特級彈-BBL 3mm', 'C0022.jpg', '防寒衣', '連身防寒衣', '脖頸軟皮加強舒適度\n銅拉鍊扣頭強度增加\nV.DIVE logo 尼龍織帶線繩', '', 'VDIVE', '', '上架', 'M', '6980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010058', 'VDIVE Ultra V flex 特級彈-BBL 3mm', 'C0022.jpg', '防寒衣', '連身防寒衣', '脖頸軟皮加強舒適度\n銅拉鍊扣頭強度增加\nV.DIVE logo 尼龍織帶線繩', '', 'VDIVE', '', '上架', 'L', '6980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010059', 'Beuchat ZENTO 2mm 男款自由潛水防寒衣', 'C0023.jpg', '防寒衣', '連身防寒衣', '新的特定Beuchat樣式專為自由潛水或戶外游泳而設計\n完全防水的材質\n氯丁橡膠面板採用邊對邊粘合，內部包縫\n流體動力學：外觀光滑，可降低水的製動係數，確保極佳的平穩潛水\n貼合身體的裁切方式使得可以更容易移動', '', 'Beuchat', '', '上架', 'S', '8800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010060', 'Beuchat ZENTO 2mm 男款自由潛水防寒衣', 'C0023.jpg', '防寒衣', '連身防寒衣', '新的特定Beuchat樣式專為自由潛水或戶外游泳而設計\n完全防水的材質\n氯丁橡膠面板採用邊對邊粘合，內部包縫\n流體動力學：外觀光滑，可降低水的製動係數，確保極佳的平穩潛水\n貼合身體的裁切方式使得可以更容易移動', '', 'Beuchat', '', '上架', 'M', '8800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010061', 'Beuchat ZENTO 2mm 男款自由潛水防寒衣', 'C0023.jpg', '防寒衣', '連身防寒衣', '新的特定Beuchat樣式專為自由潛水或戶外游泳而設計\n完全防水的材質\n氯丁橡膠面板採用邊對邊粘合，內部包縫\n流體動力學：外觀光滑，可降低水的製動係數，確保極佳的平穩潛水\n貼合身體的裁切方式使得可以更容易移動', '', 'Beuchat', '', '上架', 'L', '8800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010062', 'Beuchat OPTIMA 3mm 男款防寒衣', 'C0024.jpg', '防寒衣', '連身防寒衣', 'Beuchat質量和工藝體現在細緻的細節\n氯丁橡膠面板採用邊對邊粘合，內部/外部包縫\n更舒適，更自由的運動\nElaskin X 6.4拉伸氯丁橡膠，具有極佳的活動自由度', '', 'Beuchat', '', '上架', 'M', '4980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010063', 'GULL CLASSIC SKIN LONG JOHN 男款無袖防寒衣3mm', 'C0025.jpg', '防寒衣', '連身防寒衣', '全新彈性特佳的skin材質製成，脫著容易，遠紅外線材質有特有的發熱效果。\n3MM，無論在水下，陸地上都提供您最佳防寒保暖效果。', '', 'GULL', '', '上架', 'M', '6200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010064', 'GULL CLASSIC SKIN TOPPERⅡ 男款皮面上衣 3mm', 'C0026.jpg', '防寒衣', '連身防寒衣', '全新彈性特佳的skin材質製成，脫著容易，遠紅外線材質有特有的發熱效果。\n3MM，無論在水下，陸地上都提供您最佳防寒保暖效果。', '', 'GULL', '', '上架', '0', '4000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010065', 'GULL 2019 CLASSIC SKIN TOPPER 男款皮面上衣 3mm', 'C0027.jpg', '防寒衣', '連身防寒衣', '全新彈性特佳的skin材質製成，脫著容易，遠紅外線材質有特有的發熱效果。\n3MM，無論在水下，陸地上都提供您最佳防寒保暖效果。', '', 'GULL', '', '上架', 'M', '4000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010066', 'SCUBAPRO DEFINITION 3mm 男款防寒衣', 'C0028.jpg', '防寒衣', '連身防寒衣', 'Definition 3毫米採用了所有在5毫米版本上一致的優良構造和材料，\n以及包括用特殊的剪裁來製作像皮膚一樣貼身的濕衣，同時在有需要的地方提供了更多的拉伸性能。\n這件濕衣提供了所有溫暖水域的潛水員都會喜歡的保暖和舒適感水平。', '', 'SCUBAPRO', '', '上架', 'S', '7500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010067', 'SCUBAPRO DEFINITION 3mm 男款防寒衣', 'C0028.jpg', '防寒衣', '連身防寒衣', 'Definition 3毫米採用了所有在6毫米版本上一致的優良構造和材料，\n以及包括用特殊的剪裁來製作像皮膚一樣貼身的濕衣，同時在有需要的地方提供了更多的拉伸性能。\n這件濕衣提供了所有溫暖水域的潛水員都會喜歡的保暖和舒適感水平。', '', 'SCUBAPRO', '', '上架', 'M', '7500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010068', 'SCUBAPRO DEFINITION 男款防寒衣 3mm', 'C0028.jpg', '防寒衣', '連身防寒衣', 'Definition 3毫米採用了所有在7毫米版本上一致的優良構造和材料，\n以及包括用特殊的剪裁來製作像皮膚一樣貼身的濕衣，同時在有需要的地方提供了更多的拉伸性能。\n這件濕衣提供了所有溫暖水域的潛水員都會喜歡的保暖和舒適感水平。', '', 'SCUBAPRO', '', '上架', 'L', '7500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010069', 'SCUBAPRO Everflex 男款長袖上衣 1.5mm', 'C0029.jpg', '防寒衣', '連身防寒衣', '高品質1.5mm EVERFLEX 氯丁橡膠，保暖舒適，耐用。\n高度多功能 - 非常適合潛水員，潛水員，槳手，游泳者和其他水上運動愛好者。\n獨特的造型讓你溫暖，保護。\n適合流暢的流體動力外觀和感覺。\n舒適，柔軟的襯裡更加舒適。　', '', 'SCUBAPRO', '', '上架', 'M', '5700', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010070', 'SCUBAPRO Everflex Pants 男款長褲 1.5mm', 'C0030.jpg', '防寒衣', '連身防寒衣', '高品質1.5mm EVERFLEX 氯丁橡膠，保暖舒適，耐用。\n高度多功能 - 非常適合潛水員，潛水員，槳手，游泳者和其他水上運動愛好者。\n獨特的造型讓你溫暖，保護。\n適合流暢的流體動力外觀和感覺。\n舒適，柔軟的襯裡更加舒適。　', '', 'SCUBAPRO', '', '上架', 'M', '5100', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010071', 'GULL CLASSIC SKIN TOPPER 女款皮面上衣 3mm', 'C0031.jpg', '防寒衣', '連身防寒衣', '全新彈性特佳的skin材質製成，脫著容易，遠紅外線材質有特有的發熱效果。\n3MM，無論在水下，陸地上都提供您最佳防寒保暖效果。', '', 'GULL', '', '上架', 'M', '4000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010072', 'GULL CLASSIC SKIN TOPPERⅡ 女款圓領皮面上衣 3mm', 'C0032.jpg', '防寒衣', '連身防寒衣', '全新彈性特佳的skin材質製成，脫著容易，遠紅外線材質有特有的發熱效果。\n3MM，無論在水下，陸地上都提供您最佳防寒保暖效果。', '', 'GULL', '', '上架', 'M', '4300', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010073', 'ION Neo Zip Top Women CSK 皮面拉鍊全開型', 'C0033.jpg', '防寒衣', '連身防寒衣', '前拉鍊開口-全開式\n超彈性防寒衣材質\n內層有保暖刷毛\n2mm厚度', '', 'ION', '', '上架', 'S', '4500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010074', 'ION Neo Zip Top Women CSK 皮面拉鍊全開型', 'C0033.jpg', '防寒衣', '連身防寒衣', '前拉鍊開口-全開式\n超彈性防寒衣材質\n內層有保暖刷毛\n2mm厚度', '', 'ION', '', '上架', 'M', '4500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010075', 'ION Neo Zip Top Women 皮面拉鍊半開型', 'C0034.jpg', '防寒衣', '連身防寒衣', '前拉鍊開口-半開式\n超彈性防寒衣材質\n1.5mm厚度', '', 'ION', '', '上架', 'S', '4100', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010076', 'ION Neo Zip Top Women 皮面拉鍊半開型', 'C0034.jpg', '防寒衣', '連身防寒衣', '前拉鍊開口-半開式\n超彈性防寒衣材質\n1.5mm厚度', '', 'ION', '', '上架', 'M', '4100', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010077', 'ION Jewel Amp Semidry Women 5mm', 'C0035.jpg', '防寒衣', '連身防寒衣', '前拉鍊開口\n採用130%超彈性布料\n採用盲縫法接合\n內層有大面積保暖刷毛 (看內層照片)\n內層部份縫合處有縫線保護貼條', '', 'ION', '', '上架', 'S', '12300', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010078', 'ION Jewel Amp Semidry Women 5mm', 'C0035.jpg', '防寒衣', '連身防寒衣', '前拉鍊開口\n採用130%超彈性布料\n採用盲縫法接合\n內層有大面積保暖刷毛 (看內層照片)\n內層部份縫合處有縫線保護貼條', '', 'ION', '', '上架', 'M', '12300', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010079', 'ION Jewel Amp Semidry Women 5mm', 'C0035.jpg', '防寒衣', '連身防寒衣', '前拉鍊開口\n採用130%超彈性布料\n採用盲縫法接合\n內層有大面積保暖刷毛 (看內層照片)\n內層部份縫合處有縫線保護貼條', '', 'ION', '', '上架', 'L', '12300', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010080', 'GULL CLASSIC SKIN LONG JOHN 女款無袖防寒衣 3mm', 'C0036.jpg', '防寒衣', '連身防寒衣', '全新彈性特佳的skin材質製成，脫著容易，遠紅外線材質有特有的發熱效果。\n3MM，無論在水下，陸地上都提供您最佳防寒保暖效果。', '', 'GULL', '', '上架', 'M', '6200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010081', 'SCUBAPRO DEFINITION 3mm 女款防寒衣', 'C0037.jpg', '防寒衣', '連身防寒衣', 'Definition 3毫米採用了所有在5毫米版本上一致的優良構造和材料，\n以及包括用特殊的剪裁來製作像皮膚一樣貼身的濕衣，\n同時在有需要的地方提供了更多的拉伸性能。\n這件濕衣提供了所有溫暖水域的潛水員都會喜歡的保暖和舒適感水平。', '', 'SCUBAPRO', '', '上架', 'S', '7500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010082', 'SCUBAPRO DEFINITION 3mm 女款防寒衣', 'C0037.jpg', '防寒衣', '連身防寒衣', 'Definition 3毫米採用了所有在6毫米版本上一致的優良構造和材料，\n以及包括用特殊的剪裁來製作像皮膚一樣貼身的濕衣，\n同時在有需要的地方提供了更多的拉伸性能。\n這件濕衣提供了所有溫暖水域的潛水員都會喜歡的保暖和舒適感水平。', '', 'SCUBAPRO', '', '上架', 'M', '7500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010083', 'Beuchat ALIZE 5mm 女款防寒衣', 'C0038.jpg', '防寒衣', '連身防寒衣', '卓越的Beuchat精密質量\nBeuchat質量和工藝體現在細緻的細節\n氯丁橡膠面板採用邊對邊粘合，內部/外部包縫\n更舒適，更自由的運動\nElaskin X 6.4拉伸氯丁橡膠，具有極佳的活動自由度', '', 'Beuchat', '', '上架', 'M', '8500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010084', 'BARREL ONE ARM JACKET AMAZON 2mm 雙色女款防寒上衣', 'C0039.jpg', '防寒衣', '連身防寒衣', '優質氯丁橡膠製成\n更舒適，更自由的運動', '', 'BARREL', '', '上架', 'M', '4200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010085', 'BARREL PLUMA JACKET V2 FEATHER 2mm 女款防寒衣', 'C0040.jpg', '防寒衣', '連身防寒衣', '優質氯丁橡膠製成\n更舒適，更自由的運動', '', 'BARREL', '', '上架', 'M', '4200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010086', 'CETMA - MANTRA碳纖維長蛙鞋板(裸板)', 'A0001.jpg', '蛙鞋', '鞋板', '3D剛性結構碳纖維，韌性x彎曲度再升級 \n採共振作用設計之板面，大深度移動輕鬆省力', '', 'CETMA COMPOSITES', '', '上架', '-', '11200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010087', 'C4 - SILVERSEA HT碳纖維長蛙鞋', 'A0002.jpg', '蛙鞋', '蛙鞋', '板面採T700碳纖維結構，強度/彈性再升級 \nDPC雙拋物線技術，擺動幅度再延伸 \n加長板身，大深度移動自如', '', 'C4', '', '上架', '41-42(腳套)', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010088', 'C4 - VOLARE HT碳纖維長蛙鞋', 'A0003.jpg', '蛙鞋', '蛙鞋', '板面採TR50碳纖維結構，大方格彈性再升級 \nDPC雙拋物線技術，擺動幅度再延伸 \n長度升級(100x19.7cm)，深度下潛實用 \n採銀漆處理之碳纖維，散發獨有光澤', '', 'C4', '', '上架', '41-42(腳套)', '17950', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010089', 'C4 - ALLBLACK HT碳纖維長蛙鞋', 'A0004.jpg', '蛙鞋', '蛙鞋', '板面採TR50碳纖維結構，大方格彈性再升級 \nDPC雙拋物線技術，擺動幅度再延伸 \n加長板身，大深度移動自如', '', 'C4', '', '上架', '41-42(腳套)', '16450', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010090', 'C4 - DEEP SPEARO碳纖維長蛙鞋', 'A0005.jpg', '蛙鞋', '蛙鞋', '板面採T700碳纖維結構，強度/彈性再升級 \nDPC雙拋物線技術，擺動幅度再延伸 \n加長板身，大深度移動自如', '', 'C4', '', '上架', '41-42(腳套)', '13250', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010091', 'C4 - VOLARE HT碳纖維長蛙鞋板(裸板)-白邊條款', 'A0006.jpg', '蛙鞋', '鞋板', '板面採TR50碳纖維結構，大方格彈性再升級 \nDPC雙拋物線技術，擺動幅度再延伸 \n長度升級(100x19.7cm)，深度下潛實用 \n採銀漆處理之碳纖維，散發獨有光澤', '', 'C4', '', '上架', '-', '15000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010092', 'C4 - VOLARE碳纖維長蛙鞋板\n', 'A0007.jpg', '蛙鞋', '蛙鞋', '板面採T700碳纖維結構，強度/彈性再升級 \nDPC雙拋物線技術，擺動幅度再延伸 \n長度升級，深度下潛實用', '', 'C4', '', '上架', '41-42(腳套)', '15450', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010093', 'V.DIVE - 自由潛水塑膠長蛙鞋', 'A0008.jpg', '蛙鞋', '蛙鞋', '專業級長蛙, 專家級漁獵者, 喜愛自由潛水者和浮潛水者 \n所設計高品質橡膠蛙鞋套+高級塑料蛙鞋板 \n加長型高彈性蹼面,17度角度設計計算,強化推進的能力,讓潛水者達到省力又快速的目地', '', '\nV.DIVE', '', '上架', '41-42(腳套)', '4380', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010094', 'V.DIVE - 自由潛水塑膠長蛙鞋', 'A0008.jpg', '蛙鞋', '蛙鞋', '專業級長蛙, 專家級漁獵者, 喜愛自由潛水者和浮潛水者 \n所設計高品質橡膠蛙鞋套+高級塑料蛙鞋板 \n加長型高彈性蹼面,17度角度設計計算,強化推進的能力,讓潛水者達到省力又快速的目地', '', '\nV.DIVE', '', '上架', '41-42(腳套)', '4380', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010095', 'V.DIVE - 自由潛水塑膠長蛙鞋', 'A0008.jpg', '蛙鞋', '蛙鞋', '專業級長蛙, 專家級漁獵者, 喜愛自由潛水者和浮潛水者 \n所設計高品質橡膠蛙鞋套+高級塑料蛙鞋板 \n加長型高彈性蹼面,17度角度設計計算,強化推進的能力,讓潛水者達到省力又快速的目地', '', '\nV.DIVE', '', '上架', '41-42(腳套)', '4380', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010096', 'V.DIVE - 碳纖維長蛙 黑', 'A0009.jpg', '蛙鞋', '蛙鞋', '專業級長蛙, 專家級漁獵者, 喜愛自由潛水者和浮潛水者 \n所設計高品質橡膠蛙鞋套+高級碳纖蛙鞋板', '', '\nV.DIVE', '', '上架', '41-42(腳套)', '12800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010097', 'V.DIVE - 碳纖維長蛙 黑', 'A0009.jpg', '蛙鞋', '蛙鞋', '專業級長蛙, 專家級漁獵者, 喜愛自由潛水者和浮潛水者 \n所設計高品質橡膠蛙鞋套+高級碳纖蛙鞋板', '', '\nV.DIVE', '', '上架', '41-42(腳套)', '12800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010098', 'V.DIVE - 碳纖維長蛙 黑', 'A0009.jpg', '蛙鞋', '蛙鞋', '專業級長蛙, 專家級漁獵者, 喜愛自由潛水者和浮潛水者 \n所設計高品質橡膠蛙鞋套+高級碳纖蛙鞋板', '', '\nV.DIVE', '', '上架', '41-42(腳套)', '12800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010099', 'V.DIVE - 自由潛水塑膠長蛙鞋 透明', 'A00010.jpg', '蛙鞋', '蛙鞋', '專業級長蛙, 專家級漁獵者, 喜愛自由潛水者和浮潛水者 \n所設計高品質橡膠蛙鞋套+高級塑料蛙鞋板 \n加長型高彈性蹼面,17度角度設計計算,強化推進的能力,讓潛水者達到省力又快速的目地', '', '\nV.DIVE', '', '上架', '41-42(腳套)', '6600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010100', 'CARBONIO GFT - PREDATOR全碳纖維長蛙', 'A00013.jpg', '蛙鞋', '蛙鞋', '外型與GFT其他款式蛙鞋板有著顯著不同，蹼面不對稱設計將寬度加到25cm， \n加強腳部踢水時的作用力面積，還能避免鞋板內側互相碰撞干擾的問題；保留所有的推進力? \n不對稱的蹼面設計還能將腳掌在更好的位置釋放出最大效率能量， \n強化外部的同時，保留了內部空間，使大家能使用正常的踢動技巧? \n✨可加購專屬訂製服務，打造獨一無二的蛙鞋✨', '', 'CARBONIO GFT', '', '上架', '41-42(腳套)', '10300', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010101', 'CARBONIO GFT - BASSOFONDO全碳纖維長蛙鞋板(裸板)', 'A00014.jpg', '蛙鞋', '鞋板', '採漸層結構交織成的碳纖維，具備更強的剛性與彈性。\n高機能性，幫助您在小深度靈活移動，\n還能在水面/淺水區提供絕佳的控制力與回彈?\n✨可加購專屬訂製服務，打造獨一無二的蛙鞋', '', 'CARBONIO GFT', '', '上架', '-', '7990', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010102', 'CARBONIO GFT - APNEA97全碳纖維長蛙鞋板(裸板)', 'A00015.jpg', '蛙鞋', '鞋板', '採漸層結構交織成的碳纖維，具備更強的剛性與彈性。 \n傲人的蹼面長度能增加板面與水流的作用面積，增加直線推進力， \n減少能量消耗，創造雙腿動能跟推進效率間的絕佳平衡? \n義大利自潛選手Simone Arrigoni破動態平潛項目紀錄的神器? \n✨可加購專屬訂製服務，打造獨一無二的蛙鞋', '', 'CARBONIO GFT', '', '上架', '-', '10800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010103', 'CARBONIO GFT - PESCA全碳纖維長蛙鞋板(裸板)', 'A00016.jpg', '蛙鞋', '鞋板', 'PESCA在尺寸與性能比上，取得了完美平衡～ \n大深度依舊可輕易得到所需的〝壓水、彎曲、回饋、反推〞， \n全蹼等厚度設計，高硬度帶來的強大推力讓您進行大深度潛行時(如船潛)，也能自在移動', '', 'CARBONIO GFT', '', '上架', '-', '11500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010104', 'CARBONIO GFT - FORCE全碳纖維長蛙鞋板(裸板)', 'A00017.jpg', '蛙鞋', '鞋板', '?世界首創，以納米技術製成的碳纖維材料，加強板面韌度與彈性。 \n波浪型結構，讓鞋板在強度不變下更輕薄(單支僅300g)， \n同時有助於踢動時的水流導引，二邊導水條的高度也因此降低，重量更輕? \n✨可加購專屬訂製服務，打造獨一無二的蛙鞋✨', '', 'CARBONIO GFT', '', '上架', '-', '18500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010105', 'CARBONIO GFT - ALPHA HF全碳纖維長蛙鞋板(裸板', 'A00018.jpg', '蛙鞋', '鞋板', '?100%預浸技術及熱塑技術的碳纖維材料，讓板面兼具強韌度與彈性， \n可增加雙腳推進效率，減少使用者疲勞，延長蛙鞋使用壽命? \n蹼尖採類似魚尾的波浪設計，幫助水流導引? \n✨可加購專屬訂製服務，打造獨一無二的蛙鞋✨', '', 'CARBONIO GFT', '', '上架', '-', '14600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010106', 'C4 - VOLARE HT碳纖維長蛙鞋板(裸板) 加長款', 'A00019.jpg', '蛙鞋', '鞋板', '?板面採TR50碳纖維結構，加大了纖維編織的間距(每方格約2.5平方公分)， \n讓板材更加柔軟有彈性、擺幅更大，有效節省使用者耗氧量? \n碳纖維經過銀漆處理，呈現獨特金屬光澤。 \nDPC雙拋物線技術，擺動幅度再延伸，鞋板折角大，擺動更輕鬆?', '', 'C4', '', '上架', '-', '15450', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010107', 'C4 - DEEP SPEARO碳纖維長蛙鞋板(裸板)', 'A00020.jpg', '蛙鞋', '鞋板', '?板面採T700碳纖維結構，優異的強度/彈性增加擺幅， \n節省使用者的耗氧量，受到許多人的喜愛? \nDPC雙拋物線技術，擺動幅度再延伸，鞋板折角大，擺動更輕鬆?', '', 'C4', '', '上架', '-', '13250', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010108', 'C4 - ALLBLACK HT碳纖維長蛙鞋板(裸板)', 'A00021.jpg', '蛙鞋', '鞋板', '?板面採TR50碳纖維結構，加大了纖維編織的間距(每方格約2.5平方公分)， \n讓板材更加柔軟有彈性、擺幅更大，有效節省使用者耗氧量。 \nDPC雙拋物線技術，擺動幅度再延伸，鞋板折角大，擺動更輕鬆?', '', 'C4', '', '上架', '-', '14450', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010109', 'C4 - 82 碳纖維長蛙鞋板(裸板) 加長款', 'A00022.jpg', '蛙鞋', '鞋板', '?板面採T700碳纖維結構，優異的強度/彈性讓板身得以加長到100公分～ \n增加擺幅/節省使用者的耗氧量，受到許多人的偏愛? \nDPC雙拋物線技術，擺動幅度再延伸，鞋板折角大，擺動更輕鬆?', '', 'C4', '', '上架', '-', '15000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010110', 'C4 - 83 HT 碳纖維長蛙鞋板(裸板) 加長版', 'A00023.jpg', '蛙鞋', '鞋板', '?採用C4最新的TR50頂級碳纖維材料，藉由本身長度(100cm)， \n增加擺幅/節省使用者的耗氧量，受到許多人的偏愛? \n板面採大型網格(Big Square)結構，降低水阻！ \nDPC雙拋物線技術，擺動幅度再延伸，鞋板折角大，擺動更輕鬆?', '', 'C4', '', '上架', '-', '16500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010111', 'CARBONIO GFT - ONDA HF 32°玻璃纖維長蛙鞋', 'A00024.jpg', '蛙鞋', '蛙鞋', '?與自潛/瑜珈大師Federico Mana共同開發， \n除擁有多年自由潛水教學經驗，也是義大利首位深度突破-100M的Freediver? \n採用GFT最新開發的Hydro GFT鞋套，讓腿力傳導更直接～ \n傲人的蹼面長度(87cm)，大深度無懈可擊? \n✨可加購專屬訂製服務，打造獨一無二的蛙鞋✨', '', 'CARBONIO GFT', '', '上架', '41-42(腳套)', '16750', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010112', 'PRUSSIAN BLUE - 玻璃纖維水彩暈染 Glass Fiber', 'A00025.jpg', '蛙鞋', '蛙鞋', '堅韌耐用、輕量化以及回彈效率佳，霧面啞光的碳纖維板，以極美的「透明」U型矽膠導水條收邊，絕佳的導水效率，不易彈性疲乏及裂化，展現低調的工業風質感！台灣生產製造，高品質專業工藝技術，結合特殊航太科技等級用料，打造屬於台灣第一個蛙鞋自創品牌！裸板極輕約230g，長度82公分，寬度19公分，共有「軟」、「中」兩種硬度選擇。高貴不貴，價格親民，訴求「初心者」也能輕易入手高品質的「輕鬆下潛神器」！', '', 'PRUSSIAN BLUE', '', '上架', '41-42(腳套)', '8800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010113', 'LEADERFINS - 全碳纖維蛙鞋板(裸板) 基本款', 'A00026.jpg', '蛙鞋', '鞋板', '超高CP值!!!平民版碳纖維，用低價格換取高性能~ \n橡膠導水條能提供最大的效率及確保水流的導向。 \n尺寸完整，小腳女孩輕鬆著用', '', 'LEADERFINS', '', '上架', '-', '6980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010114', 'ALCHEMY - V3', 'A00027.jpg', '蛙鞋', '蛙鞋', '自由潛水可以追溯自古希臘地中海海人下海採集海綿而來，地中海的神話傳說創造出人魚精神，而來到現今講到自由潛水頂級碳纖維蛙鞋就不得不提到來自希臘 Alchemy V3，極致的推進效率加上細膩的工藝，讓人愛不釋手，特式版金三角V3也可以訂貨，歡迎洽詢！', '', 'ALCHEMY', '', '上架', '41-42(腳套)', '17900', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010115', 'ALCHEMY - V3 特殊色', 'A00028.jpg', '蛙鞋', '蛙鞋', 'ALCHEMY V3 配備最新碳纖維科技，能夠讓你穿起來更舒服、踢起來更勇猛，如果我是總統候選人，就會在政見發表會全國轉播告訴所有喜歡自由潛水的人都該來一雙。', '', 'ALCHEMY', '', '上架', '41-42(腳套)', '19600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010116', 'LAZYFISH - 大理石碳纖維蛙鞋 S-WING腳套', 'A00029.jpg', '蛙鞋', '蛙鞋', '性能與美型極致，網美/網帥欽點款 \n法國頂級純碳纖維+3D立體V-Cut結構，增加踢動效率 \nVARTM製程，以高壓真空灌注，有效發揮碳纖維材料之性能', '', 'LAZYFISH', '', '上架', '41-42(腳套)', '18200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010117', 'LAZYFISH - 大理石碳纖維蛙鞋板(裸板)', 'A00030.jpg', '蛙鞋', '鞋板', '性能與美型極致，網美/網帥欽點款 \n法國頂級純碳纖維+3D立體V-Cut結構，增加踢動效率 \nVARTM製程，以高壓真空灌注，有效發揮碳纖維材料之性能 \n*裸版尺寸76 x 19.5cm', '', 'LAZYFISH', '', '上架', '-', '14600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010118', 'LAZYFISH - 經典碳纖維蛙鞋 S-WING腳套', 'A00031.jpg', '蛙鞋', '蛙鞋', '性能與美型極致，網美/網帥欽點款 \n法國頂級純碳纖維+3D立體V-Cut結構，增加踢動效率 \nVARTM製程，以高壓真空灌注，有效發揮碳纖維材料之性能 \n*裸版尺寸76 x 19.5cm', '', 'LAZYFISH', '', '上架', '41-42(腳套)', '16400', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010119', 'LAZYFISH - 經典碳纖維蛙鞋板(裸板)', 'A00032.jpg', '蛙鞋', '鞋板', '性能與美型極致，網美/網帥欽點款 \n法國頂級純碳纖維+3D立體V-Cut結構，增加踢動效率 \nVARTM製程，以高壓真空灌注，有效發揮碳纖維材料之性能 \n*裸版尺寸76 x 19.5cm', '', 'LAZYFISH', '', '上架', '-', '12800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010120', 'LEADERFINS - 玻璃纖維蛙鞋板(裸板) 限量款 ART 大藝術家', 'A00033.jpg', '蛙鞋', '鞋板', '超高CP值，加購鞋套即可輕鬆入手 \n後現代生活的海洋體現 \n尺寸完整，小腳女孩輕鬆著用 \n*裸版尺寸80 x 20cm', '', 'LEADERFINS', '', '上架', '-', '6000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010121', 'LEADERFINS - 玻璃纖維蛙鞋板(裸板) 限量款 SEA QUEEN 深海童話', 'A00034.jpg', '蛙鞋', '鞋板', '超高CP值，加購鞋套即可輕鬆入手 \n後現代生活的海洋體現 \n尺寸完整，小腳女孩輕鬆著用 \n*裸版尺寸80 x 20cm', '', 'LEADERFINS', '', '上架', '-', '6000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010122', 'LEADERFINS - 玻璃纖維蛙鞋板(裸板) 限量款 EXOTIC 南國風情', 'A00035.jpg', '蛙鞋', '鞋板', '超高CP值，加購鞋套即可輕鬆入手 \n後現代生活的海洋體現 \n尺寸完整，小腳女孩輕鬆著用 \n*裸版尺寸80 x 20cm', '', 'LEADERFINS', '', '上架', '-', '6000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010123', 'LEADERFINS - 玻璃纖維蛙鞋板(裸板) 限量款 RAINBOW 迷幻吶喊', 'A00036.jpg', '蛙鞋', '鞋板', '超高CP值，加購鞋套即可輕鬆入手 \n後現代生活的海洋體現 \n尺寸完整，小腳女孩輕鬆著用 \n*裸版尺寸80 x 20cm', '', 'LEADERFINS', '', '上架', '-', '6000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010124', 'LEADERFINS - 玻璃纖維蛙鞋板(裸板) 限量款 INK 藍彩墨寶', 'A00037.jpg', '蛙鞋', '鞋板', '超高CP值，加購鞋套即可輕鬆入手 \n後現代生活的海洋體現 \n尺寸完整，小腳女孩輕鬆著用 \n*裸版尺寸80 x 20cm', '', 'LEADERFINS', '', '上架', '-', '6000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010125', 'LEADERFINS - 玻璃纖維蛙鞋板(裸板) 限量款 ELECTRICITY 電氣時代', 'A00038.jpg', '蛙鞋', '鞋板', '超高CP值，加購鞋套即可輕鬆入手 \n後現代生活的海洋體現 \n尺寸完整，小腳女孩輕鬆著用 \n*裸版尺寸80 x 20cm', '', 'LEADERFINS', '', '上架', '-', '6000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010126', 'PENETRATOR - GHOST 玻璃纖維蛙鞋板(裸板) 魔力紅', 'A00039.jpg', '蛙鞋', '鞋板', '韌性強X大推力-高階玻纖首選 \n獨家高透度技術，讓玻璃纖維呈現前所未有的潔淨透明\n光源照射下將產生獨特的光暈效果，美感UP\n*裸版尺寸85.5 x 19.5cm', '', 'PENETRATOR', '', '上架', '-', '9800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010127', 'PENETRATOR - GHOST 玻璃纖維蛙鞋板(裸板) 櫻花粉', 'A00040.jpg', '蛙鞋', '鞋板', '韌性強X大推力-高階玻纖首選 \n獨家高透度技術，讓玻璃纖維呈現前所未有的潔淨透明\n光源照射下將產生獨特的光暈效果，美感UP\n*裸版尺寸85.5 x 19.5cm', '', 'PENETRATOR', '', '上架', '-', '9800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010128', 'PENETRATOR - GHOST 玻璃纖維蛙鞋板(裸板) 透明', 'A00041.jpg', '蛙鞋', '鞋板', '韌性強X大推力-高階玻纖首選 \n獨家高透度技術，讓玻璃纖維呈現前所未有的潔淨透明\n光源照射下將產生獨特的光暈效果，美感UP\n*裸版尺寸85.5 x 19.5cm', '', 'PENETRATOR', '', '上架', '-', '9800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010129', 'DIVER - 碳纖維蛙鞋版(裸板) 萬靈之鯊', 'A00042.jpg', '蛙鞋', '鞋板', '澳洲頂級自潛/漁獵品牌，\n特製調配的環氧樹脂，\n航太級碳纖維，\n絕妙造成自潛蛙鞋最佳的彈性施力比。\n\n建議搭配腳套\nPathos \nS-wing *(使用此腳套，因無腳套倒水條，腳套邊緣與板子邊條相差約2cm，但不影響使用效果)\nMares\nLeaderfins', '', 'DIVER', '', '上架', '-', '13360', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010130', 'DIVER - 碳纖維蛙鞋版(裸板) 海洋之神', 'A00043.jpg', '蛙鞋', '鞋板', '澳洲頂級自潛/漁獵品牌，\n特製調配的環氧樹脂，\n航太級碳纖維，\n絕妙造成自潛蛙鞋最佳的彈性施力比。\n\n建議搭配腳套\nPathos \nS-wing *(使用此腳套，因無腳套倒水條，腳套邊緣與板子邊條相差約2cm，但不影響使用效果)\nMares\nLeaderfins', '', 'DIVER', '', '上架', '-', '13360', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010131', 'DIVER - 碳纖維蛙鞋版(裸板) 紫裸女之愛', 'A00044.jpg', '蛙鞋', '鞋板', '澳洲頂級自潛/漁獵品牌，\n特製調配的環氧樹脂，\n航太級碳纖維，\n絕妙造成自潛蛙鞋最佳的彈性施力比。\n\n建議搭配腳套 \nPathos \nS-wing *(使用此腳套，因無腳套倒水條，腳套邊緣與板子邊條相差約2cm，但不影響使用效果) \nMares \nLeaderfins', '', 'DIVER', '', '上架', '-', '13360', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010132', 'DIVER - 碳纖維蛙鞋版(裸板) 沙丁魚風暴', 'A00045.jpg', '蛙鞋', '鞋板', '澳洲頂級自潛/漁獵品牌，\n特製調配的環氧樹脂，\n航太級碳纖維，\n絕妙造成自潛蛙鞋最佳的彈性施力比。\n\n建議搭配腳套 \nPathos \nS-wing *(使用此腳套，因無腳套倒水條，腳套邊緣與板子邊條相差約2cm，但不影響使用效果) \nMares \nLeaderfins', '', 'DIVER', '', '上架', '-', '13360', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010133', 'DIVER - 碳纖維蛙鞋版(裸板) 獅子魚', 'A00046.jpg', '蛙鞋', '鞋板', '澳洲頂級自潛/漁獵品牌，\n特製調配的環氧樹脂，\n航太級碳纖維，\n絕妙造成自潛蛙鞋最佳的彈性施力比。\n\n建議搭配腳套 \nPathos \nS-wing *(使用此腳套，因無腳套倒水條，腳套邊緣與板子邊條相差約2cm，但不影響使用效果) \nMares \nLeaderfins', '', 'DIVER', '', '上架', '-', '13360', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010134', 'DIVER - 碳纖維蛙鞋版(裸板) 多拉多的眼淚', 'A00047.jpg', '蛙鞋', '鞋板', '澳洲頂級自潛/漁獵品牌，\n特製調配的環氧樹脂，\n航太級碳纖維，\n絕妙造成自潛蛙鞋最佳的彈性施力比。\n\n建議搭配腳套 \nPathos \nS-wing *(使用此腳套，因無腳套倒水條，腳套邊緣與板子邊條相差約2cm，但不影響使用效果) \nMares \nLeaderfins', '', 'DIVER', '', '上架', '-', '13360', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010135', 'CARBONIO GFT - Monofin VTR KETOS 玻璃纖維單蹼', 'A00048.jpg', '蛙鞋', '單蹼', '來自義大利的預浸技術讓板材更強韌，推進力再提升 \n輕量化設計(1.8kg)，水中耗能更低\n原廠HYDRO腳套的絕佳包覆性', '', 'CARBONIO GFT', '', '上架', '41-42(腳套)', '20500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010136', 'CARBONIO GFT - Monofin Pro Carbon KETOS HF碳纖維單蹼', 'A00049.jpg', '蛙鞋', '單蹼', '來自義大利的預浸技術讓板材更強韌，推進力再提升 \n輕量化設計(1.4kg)，水中使用耗能更低\n原廠HYDRO腳套的絕佳包覆性', '', 'CARBONIO GFT', '', '上架', '41-42(腳套)', '28500', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010137', 'SEAC - Motus 塑膠長蛙鞋 迷彩藍', 'A00050.jpg', '蛙鞋', '蛙鞋', '超高CP值，鞋板+鞋套一次購足\n出色的柔韌性，一般深度皆適用\n蛙鞋板表面突起的導水片設計，有助於踢動時腳部的穩定，減少晃動。', '', 'SEAC', '', '上架', '41-42(腳套)', '3200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010138', 'SEAC - Motus 塑膠長蛙鞋 迷彩紅', 'A00051.jpg', '蛙鞋', '蛙鞋', '超高CP值，鞋板+鞋套一次購足\n出色的柔韌性，一般深度皆適用\n蛙鞋板表面突起的導水片設計，有助於踢動時腳部的穩定，減少晃動。', '', 'SEAC', '', '上架', '41-42(腳套)', '3200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010139', 'SEAC - Motus 塑膠長蛙鞋 迷彩綠', 'A00052.jpg', '蛙鞋', '蛙鞋', '超高CP值，鞋板+鞋套一次購足\n出色的柔韌性，一般深度皆適用\n蛙鞋板表面突起的導水片設計，有助於踢動時腳部的穩定，減少晃動。', '', 'SEAC', '', '上架', '41-42(腳套)', '3200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010140', 'SEAC - Motus 塑膠長蛙鞋 迷彩棕', 'A00053.jpg', '蛙鞋', '蛙鞋', '超高CP值，鞋板+鞋套一次購足\n出色的柔韌性，一般深度皆適用\n蛙鞋板表面突起的導水片設計，有助於踢動時腳部的穩定，減少晃動。', '', 'SEAC', '', '上架', '41-42(腳套)', '3200', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010141', 'AMONG - UNU LT 塑膠長蛙鞋 清純白', 'A00054.jpg', '蛙鞋', '蛙鞋', '實用塑膠板首選-好用耐操\n單隻重量僅650g，減低腳部負擔\n中軟彈性，瘦小女孩也能輕鬆踢\n規格:總長76cm(從折角處至板尾59cm)/寬21cm', '', 'AMONG', '', '上架', '41-42(腳套)', '4980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010142', 'LEADERFINS - 玻璃纖維蛙鞋 經典款 冰晶白', 'A00055.jpg', '蛙鞋', '蛙鞋', '超高CP值，鞋板+鞋套輕鬆入手!!!純白配色，清新亮眼～\n橡膠導水條能提供最大的效率及確保水流的導向。\n尺寸完整，小腳女孩輕鬆著用', '', 'LEADERFINS', '', '上架', '41-42(腳套)', '4980', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010143', 'CETMA - PRANA 碳纖維長蛙鞋板(裸板) 螢光黃', 'A00056.jpg', '蛙鞋', '鞋板', '去除掉龍骨的設計讓碳纖維蛙鞋版得到更完整的擺動，同時減少了重量。\n蛙鞋版底部延伸至足跟，讓您的腿力傳導更充分。\n高鋼度包覆，舒適更合腳。\n採螺絲固定，更換更方便。', '', 'CETMA', '', '上架', '-', '13800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010144', 'CETMA - PRANA 碳纖維長蛙鞋板(裸板) 螢光橘', 'A00057.jpg', '蛙鞋', '鞋板', '去除掉龍骨的設計讓碳纖維蛙鞋版得到更完整的擺動，同時減少了重量。\n蛙鞋版底部延伸至足跟，讓您的腿力傳導更充分。\n高鋼度包覆，舒適更合腳。\n採螺絲固定，更換更方便。', '', 'CETMA', '', '上架', '-', '13800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010145', 'CETMA - PRANA 碳纖維長蛙鞋板(裸板) 螢光紅', 'A00058.jpg', '蛙鞋', '鞋板', '去除掉龍骨的設計讓碳纖維蛙鞋版得到更完整的擺動，同時減少了重量。\n蛙鞋版底部延伸至足跟，讓您的腿力傳導更充分。\n高鋼度包覆，舒適更合腳。\n採螺絲固定，更換更方便。', '', 'CETMA', '', '上架', '-', '13800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010146', 'CETMA - EDGE 碳纖維長蛙鞋 S-WING腳套', 'A00059.jpg', '蛙鞋', '蛙鞋', '蹼尖、鞋跟處設計採不同彎曲係數，延伸踢腿力道，增加推進力。\n新改良矽膠導水條，彈性佳更耐用。\n原廠採無龍骨設計的S-WING腳套，讓蛙鞋板有更全面的擺動幅度。\n針對S-WING腳套所開發的蛙鞋板，根部延長、深入腳跟，讓動力傳導更全面。', '', 'CETMA', '', '上架', '41-42(腳套)', '19000', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010147', 'GULL - Super Bullet 呼吸管', 'H0014.jpg', '呼吸管', '呼吸管', '', '', 'GULL', '', '上架', '-', '1800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010148', 'SCUBAPRO - APNEA 濕式呼吸管', 'H0015.jpg', '呼吸管', '呼吸管', '', '', 'SCUBAPRO', '', '上架', '-', '600', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45'),
('I20010149', 'SCUBAPRO - SPECTRA 呼吸管', 'H0016.jpg', '呼吸管', '呼吸管', '', '', 'SCUBAPRO', '', '上架', '-', '900', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45');

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
-- 資料表索引 `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`itemId`);

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `common_custom`
--
ALTER TABLE `common_custom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coup01_allorder`
--
ALTER TABLE `coup01_allorder`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coup02_goods`
--
ALTER TABLE `coup02_goods`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coup03_givi`
--
ALTER TABLE `coup03_givi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cupon_all`
--
ALTER TABLE `cupon_all`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '流水號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `givi_set`
--
ALTER TABLE `givi_set`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
