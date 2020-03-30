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
-- 資料表結構 `chat_data`
--

CREATE TABLE `chat_data` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `roomId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '房間編號',
  `loginId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memberId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員編號',
  `message` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '訊息內容',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `chat_data`
--

INSERT INTO `chat_data` (`id`, `roomId`, `loginId`, `memberId`, `message`, `created_at`) VALUES
(1, 'E20030001', 'bbb', 'M20010002', '安安你好', '2020-03-28 11:09:26'),
(2, 'E20030001', 'aaa', 'M20010001', '安安你好安安你好安安你好', '2020-03-28 12:09:26'),
(3, 'E20030001', 'aaa', 'M20010001', 'E20040001', '2020-03-28 12:15:47'),
(19, 'E20030001', 'bbb', 'M20010002', '123', '2020-03-28 14:02:31'),
(36, 'E20030001', 'bbb', 'M20010002', '哈囉~', '2020-03-28 15:26:30'),
(37, 'E20030001', 'bbb', 'M20010002', '我好嗎', '2020-03-28 15:26:35'),
(38, 'E20030001', 'bbb', 'M20010002', '你好嗎', '2020-03-28 15:26:41'),
(39, 'E20030001', 'bbb', 'M20010002', '真D酷炫', '2020-03-28 15:28:17'),
(64, 'E20030001', 'bbb', 'M20010002', '讚', '2020-03-28 19:35:01'),
(65, 'E20030001', 'bbb', 'M20010002', '時間測試', '2020-03-28 19:57:20'),
(66, 'E20030001', 'bbb', 'M20010002', '123', '2020-03-28 20:23:37'),
(155, 'E20030001', 'bbb', 'M20010002', '哈囉', '2020-03-29 16:52:30'),
(156, 'E20030001', 'aaa', 'M20030001', '我再', '2020-03-29 16:53:36'),
(157, 'E20030001', 'aaa', 'M20030001', '在', '2020-03-29 16:53:40'),
(158, 'E20030001', 'ccc', 'M20030003', '3號', '2020-03-29 17:07:24'),
(159, 'E20030001', 'bbb', 'M20010002', '2號', '2020-03-29 17:07:27'),
(160, 'E20030001', 'aaa', 'M20030001', '1號', '2020-03-29 17:07:30'),
(161, 'E20030002', 'bbb', 'M20010002', '其他房間', '2020-03-29 17:08:05');

-- --------------------------------------------------------

--
-- 資料表結構 `class_coach`
--

CREATE TABLE `class_coach` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `seller_id` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '隸屬賣家編號',
  `classCoachName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '教練名稱',
  `classCoachImg` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '教練相片',
  `classCoachLicense1` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '教練證照1',
  `classCoachLicense2` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '教練證照2',
  `classCoachLicense3` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '教練證照3',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `class_coach`
--

INSERT INTO `class_coach` (`id`, `seller_id`, `classCoachName`, `classCoachImg`, `classCoachLicense1`, `classCoachLicense2`, `classCoachLicense3`, `created_at`, `updated_at`) VALUES
(6, 'S20010001', '黃建豪', 'SC0002.jpg', 'AIDA Instructor', 'Molchanovs wave2 Ins', '', '2020-03-05 10:27:35', '2020-03-17 14:32:22'),
(7, 'S20010001', '黃雅雯', 'SC0001.jpg', 'SSI L1 Instructor', 'SSI L2 Instructor', '', '2020-03-05 10:27:35', '2020-03-17 14:29:56'),
(8, 'S20010001', '傅天佑', 'coachNoImg.png', 'AIDA Instructor', '', '', '2020-03-05 10:29:32', '2020-03-17 14:30:06'),
(9, 'S20010001', '吳柏鋒', 'coachNoImg.png', 'AIDA Instructor', '', '', '2020-03-05 10:29:32', '2020-03-17 14:30:07');

-- --------------------------------------------------------

--
-- 資料表結構 `class_coach_status`
--

CREATE TABLE `class_coach_status` (
  `id` int(11) NOT NULL,
  `seller_id` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coachId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `class_coach_status`
--

INSERT INTO `class_coach_status` (`id`, `seller_id`, `classId`, `coachId`, `created_at`, `updated_at`) VALUES
(6, 'S20010001', 'C20030010', '6', '2020-03-30 12:08:58', '2020-03-30 12:08:58'),
(7, 'S20010001', 'C20030010', '7', '2020-03-30 12:08:58', '2020-03-30 12:08:58'),
(8, 'S20010001', 'C20030010', '8', '2020-03-30 12:08:58', '2020-03-30 12:08:58');

-- --------------------------------------------------------

--
-- 資料表結構 `class_data`
--

CREATE TABLE `class_data` (
  `id` int(11) NOT NULL,
  `maxId` int(10) NOT NULL,
  `classId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `className` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classTypeId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classType` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classLevelId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classLevel` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classLocation` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classFullLocation` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classStartDate` datetime NOT NULL,
  `classEndDate` datetime NOT NULL COMMENT '結訓日期',
  `classPrice` int(6) NOT NULL,
  `classIntroduction` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classDesc` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `classMAXpeople` int(3) NOT NULL,
  `classNOWpeople` int(3) NOT NULL,
  `classImg` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seller_id` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `class_data`
--

INSERT INTO `class_data` (`id`, `maxId`, `classId`, `className`, `classTypeId`, `classType`, `classLevelId`, `classLevel`, `classLocation`, `classFullLocation`, `classStartDate`, `classEndDate`, `classPrice`, `classIntroduction`, `classDesc`, `classMAXpeople`, `classNOWpeople`, `classImg`, `seller_id`, `created_at`, `updated_at`) VALUES
(2, 2, 'C20030002', 'AIDA1', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA01', 'AIDA 1', '基隆市中正區', '基隆市中正區潮境公園', '2020-03-11 08:00:00', '2020-04-01 19:00:00', 7000, '本課程旨在讓初學者認識自由潛水。幫助學生開發必要的基本技能，知識和安全程序，在學員經驗範圍內安全享受自由潛水的樂趣。', '學科理論：自由潛水裝備介紹，呼吸法，平壓技巧，潛水安全，潛水守則。\r\n\r\n腹式呼吸和放鬆的呼吸技巧，並為閉氣做好準備。\r\n閉氣後的恢復呼吸和潛伴制度。\r\n與潛伴進行安全的靜態閉氣練習。\r\n藉由短暫的閉氣，體驗放鬆和橫膈膜收縮。\r\n與潛伴練習LMC和BO的救援技巧。\r\n術科練習：泳池課程\r\n\r\n面鏡除霧，防寒衣脫著，配重帶及蛙鞋的使用。\r\n使用面鏡呼吸管在水中放鬆呼吸。\r\n鴨式入水法。\r\n以頭下和頭上的姿勢攀繩，感受產生的耳壓並練習平壓。\r\n踢蛙鞋的技巧和低水阻姿勢。\r\n練習潛伴制度，進行安全地訓練。\r\n以潛伴制度為基礎進行等重下潛(5M)。\r\n模擬LMC和BO的救援技巧。', 5, 1, 'noImg.jpg', 'S20010001', '2020-03-05 10:57:01', '2020-03-25 17:56:48'),
(5, 3, 'C20030003', 'AIDA2', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA02', 'AIDA 2', '小琉球', '小琉球', '2020-04-06 08:00:00', '2020-04-10 08:00:00', 13000, '本課程要讓對於自由潛水充滿興趣的學員習得潛水的技能，知識，計劃，組織和安全程序，避免問題和危害，享受自由潛水的樂趣。', 'AIDA2星課程裡可以習得：\r\n\r\n學科理論：約4小時\r\n\r\n介紹AIDA這個非營利組織。\r\n自由潛水的設備。\r\n自由潛水的呼吸法。\r\n深度與壓力，平壓技巧。\r\nBO和LMC的救援。\r\n尊重海洋。\r\n自由潛水和水肺潛水。\r\n自由潛水的安全守則。\r\n訓練。\r\n術科練習(平靜水域)\r\n\r\nStatic Apnea靜態閉氣：\r\n\r\n腹式呼吸、閉氣前的放鬆呼吸技巧。\r\n閉氣後的恢復呼吸技巧。\r\n與潛伴進行安全又有效率的閉氣訓練。\r\n與潛伴進行靜態閉氣練習。\r\n模擬在靜態閉氣時發生LMC、BO，練習應有的救援技巧。\r\nDynamic Apnea動態平潛：\r\n\r\n練習準備訓練所需的潛水裝備。\r\n腹式呼吸、閉氣前的放鬆呼吸技巧。\r\n閉氣後的恢復呼吸技巧。\r\n動態平潛的技巧與潛伴應注意的事項。\r\n與潛伴進行安全又有效率的平潛訓練。\r\n模擬在動態平潛時發生LMC、BO，練習應有的救援技巧。\r\n術科練習(開放水域1)\r\n\r\n準備開放水域所需的裝備(面鏡、呼吸管、蛙鞋和配重帶…等)。\r\n開放水域的潛伴制度。\r\n練習安全鎖的使用。\r\n正確的配重。\r\n緩慢攀繩練習平壓技巧。\r\n鴨式入水法。\r\n練習低水阻姿勢沿著導引繩有效率地下潛。\r\n閉氣後的恢復呼吸技巧。\r\n術科練習(開放水域2)\r\n\r\n練習鴨式入水法。\r\n練習低水阻姿勢沿著導引繩有效率地下潛。\r\n有控制地拉繩轉身。\r\n潛伴制度。\r\n模擬一位潛水員在出水面後有LMC徵兆的救援技巧。\r\n術科練習(開放水域3)\r\n\r\n流暢並有效率的鴨式入水法，能以低水阻姿勢數著導引繩下潛至16米，並交替練習潛伴制度。\r\n潛伴在5~10米處等待潛水員一起上升。\r\n模擬從5~10米處救援BO潛水員出水面並完成水面救援程序。', 5, 0, 'noImg.jpg', 'S20010001', '2020-03-05 10:57:01', '2020-03-22 19:45:21'),
(6, 4, 'C20030004', 'AIDA3', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA03', 'AIDA 3', '基隆市中正區', '基隆市中正區潮境公園', '2020-04-01 08:00:00', '2020-04-05 12:00:00', 17000, '涵蓋休閒自由潛水員必要的技能和知識，培養與經驗相當的潛伴進行潛水計畫所需要的相關技能以及更高的安全知識。如自由落體、法蘭茲平壓法、訓練表、降低風險…等。', '學科理論：約6小時\r\n\r\n物理學：道爾頓定律、波義爾定律，浮力與深潛的關係。\r\n生理學：心血管系統、過度換氣，BO/SWB和平壓。\r\n在深處的肺。\r\n哺乳類動物潛水反射。\r\n訓練理念。\r\n規範。\r\n計畫潛水活動。\r\n潛伴系統。\r\n術科練習(平靜水域1)\r\n\r\n設計規劃自己的訓練靜態閉氣表格，以訓練高二氧化碳耐受度。\r\n設計規劃自己的訓練靜態閉氣表格，以訓練低氧耐受度。\r\n設計規劃自己的動態平潛訓練表格，以訓練高二氧化碳耐受度及乳酸堆積。\r\nLMC/BO救援技巧。\r\n術科練習(平靜水域2)\r\n\r\n與潛伴計畫並執行靜態閉氣練習，從暖身到至少2分45秒，包含出水面即恢復呼吸。\r\n展示在靜態閉氣期間適當的LMC/BO的救援技巧。\r\n展示至少55M的動態平潛，包含呼吸法、平潛姿勢、踢蛙鞋技巧、轉身到恢復呼吸。\r\n展示動態平潛至少55M的潛伴制度。\r\n術科練習(開放水域1)\r\n\r\n學員能使用安全索並能使用快卸。\r\n展示深潛時如何設定配重，確認中性浮力該設定在多少，以及何時開始自由落下。\r\n展示有效率的鴨式入水法，能與導引繩保持適當距離下潛與上升，游泳技巧、正確踢蛙鞋技巧、低水阻身體姿勢。\r\n展示適當的水面呼吸及潛水後的恢復呼吸。\r\n練習法蘭茲平壓技巧。\r\n術科練習(開放水域2)\r\n\r\n辨識潛點的有趣點及危險性。\r\n練習自由落下與法蘭茲平壓、鴨式入水法、下潛與上升時能以有效的游泳技巧與導引繩保持適當距離，適當的水面呼吸及潛水後的恢復呼吸。\r\n練習與潛伴在10M處與潛水員相遇，以訓練安全潛伴相因應的能力。\r\n演練腿部抽筋的自救能力，從15M只划手上升。\r\n下潛到10M，不拉繩作有控制地轉身。\r\n術科練習(開放水域3)\r\n\r\n練習自由落下與法蘭茲平壓、鴨式入水法、下潛與上升時能以有效的游泳技巧與導引繩保持適當距離，適當的水面呼吸及潛水後的恢復呼吸。\r\n當一個安全潛伴。\r\n演練救援技巧，救援一位出水面後無呼吸、BO的潛水員，包括救援呼吸。\r\n展示救援一位上升至10M處失去意識的潛水員至水面，並實施有效的水面救援。\r\n術科練習(開放水域4)\r\n\r\n暖身並進行等重下潛，熟練地使用法蘭茲平壓、自由落下並實施安全潛伴制度。\r\n當安全潛伴，展示與一位等重下潛的潛水員在10M處相遇。\r\n下潛到10M，取下面鏡上升，模擬面鏡遺失。\r\n水面拖帶50M。', 5, 1, 'noImg.jpg', 'S20010001', '2020-03-05 10:57:01', '2020-03-25 17:56:24'),
(7, 5, 'C20030005', '國際自由潛水證照班 - AIDA 2', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA02', 'AIDA 2', '屏東縣恆春鎮', '屏東縣恆春鎮東門路186號2樓', '2020-03-02 08:00:00', '2020-03-07 12:00:00', 13000, '在世界各地，有數百萬計的人喜歡浮潛，其中許多人也喜歡在充分吸氣後，潛入海中片刻，仔細觀察五顏六色的珊瑚、害羞的海龜，或者只為了享受在海裏悠游的樂趣。 自由潛水，就是這麼開始的。', 'AIDA 2 課程內容\r\n\r\n課程時間：七堂，三天\r\n\r\n室內課程：兩堂\r\n自由潛水介紹、基礎潛水生理學、呼吸周期、\r\n自潛安全及行為守則、平壓\r\n\r\n平靜水域：兩堂\r\n調息與放鬆、恢復呼吸、潛伴制度、靜態閉氣（2 分鐘）、\r\n靜態閉氣戒護與救援、踢蹼技巧、動態平潛（40 米）、\r\n動態平潛戒護與救援\r\n\r\n開放水域：三堂\r\n攀繩下潛、耳壓平衡、躬身下潛、恆重下潛（16 米）、\r\n下潛姿態調整、延繩下潛、水下轉身、潛伴戒護、\r\n水下 10 米救援、水面救援流程\r\n\r\n課程費用：\r\n新台幣 NTD 13000 元、港幣 HKD 3300 元、美金 USD 440 元\r\n（外幣匯率如有大幅變動，將會適時調整）\r\n\r\n課程費用包括：\r\n教材、課程期間裝備使用、水域課程交通接送、電子證照費、水域課程均投保富邦「精彩人生」特定活動綜合保險 - 保額 $300 萬', 5, 1, 'noImg.jpg', 'S20010002', '2020-03-05 10:57:01', '2020-03-25 17:56:15'),
(8, 6, 'C20030006', 'SSI BASIC 自由潛水國際證照基礎班', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI01', 'BASIC', '臺北市松山區', '台北市松山運動中心', '2020-03-30 08:00:00', '2020-03-30 18:00:00', 7500, 'SSI BASIC 是最單純型態的體驗式入門課程，可以由此瞭解什麼是自由潛水並體驗到它的樂趣。適合水性不佳的朋友或不了解自由潛水的朋友參與。', '【自由潛水體驗式基礎課程】【SSI FREEDIVING BASIC】\n—啟發你的水性本能—\n不會游泳、只想初步嘗試自由潛水的朋友。\n\nBASIC 課程年滿12歲可以參加，未滿20歲需家長同意書\n費用包含：學費、保險費、SSI國際潛水證照、線上教材與系統使用費、課程期間全套裝備使用、術科泳池門票。\n課程內容：基礎學科（一堂）、2.6米術科（二堂）', 4, 1, 'S20200315112930.jpg', 'S20010003', '2020-03-15 11:29:30', '2020-03-25 17:56:08'),
(9, 7, 'C20030007', 'SSI BASIC 自由潛水國際證照基礎班', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI01', 'BASIC', '臺北市松山區', '松山運動中心', '2020-04-07 08:00:00', '2020-04-07 18:00:00', 7500, 'SSI BASIC 是最單純型態的體驗式入門課程，可以由此瞭解什麼是自由潛水並體驗到它的樂趣。適合水性不佳的朋友或不了解自由潛水的朋友參與。', '【自由潛水體驗式基礎課程】【SSI FREEDIVING BASIC】\n—啟發你的水性本能—\n不會游泳、只想初步嘗試自由潛水的朋友。\n\nBASIC 課程年滿12歲可以參加，未滿20歲需家長同意書\n費用包含：學費、保險費、SSI國際潛水證照、線上教材與系統使用費、課程期間全套裝備使用、術科泳池門票。\n課程內容：基礎學科（一堂）、2.6米術科（二堂）', 4, 1, 'S20200315112956.jpg', 'S20010003', '2020-03-15 11:29:56', '2020-03-25 17:56:02'),
(10, 8, 'C20030008', '​​SSI Freediving Level1', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI03', 'Level 1', '臺北市萬華區', '臺北市萬華區西寧南路6-1號', '2020-04-07 08:00:00', '2020-04-07 18:00:00', 16800, '適合會游泳且有海洋經驗的朋友。 讓我們一起熟悉自由潛水技巧，潛進大海，成為Level1自由潛水員。', '【課程內容】\n基礎學科（一堂）,基礎術科（三堂）\n海洋學科（一堂）,深度訓練（二堂）\n\n​【課程目標】\n進入海洋，成為自由潛水員，開始探索廣闊的藍色宇宙。\n\n【考核標準】\n學科 ：  筆試84分以上\n術科 ：  靜態閉氣2分鐘、動態平潛30米(有蛙鞋)、下潛10~16米(恆定配重)、10米SWB救援、10米無面鏡上升、10米瓶式划水上升。\n※考試合格者可申請SSI國際潛水執照。 未達標者，皆由補課方式進行，直至考核完畢。', 3, 1, 'S20200315113459.jpg', 'S20010003', '2020-03-15 11:34:59', '2020-03-29 14:21:50'),
(11, 9, 'C20030009', 'SSI Freediving Level 2', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI04', 'Level 2', '臺北市萬華區', '臺北市萬華區西寧南路6-1號', '2020-04-13 08:00:00', '2020-04-17 18:00:00', 18000, '想要更深入的瞭解這項運動，想要透過海洋更認識自己。  SSI Level2帶你親身經驗更細微的感知覺，更深層的海洋意識。', '【課程內容】\n進階學科（一堂）、進階術科（一堂）、\n海洋深度訓練（五堂）\n讓我們一起進入更深的湛藍，體驗自由潛水中最有魅力的Free Fall，真正的放鬆感受，被水包覆的每個瞬間，更專注地在意每個身體的變化，盡情的享受在水中。\n\n​【課程目標】\n進階技巧練習，加強深度適應\n\n​【考核標準】\n◆ 學科 ：\n理論考試80%\n◆ 術科 ：\n靜態閉氣2：30、  動態平潛50米 (有蹼)\n法蘭佐平壓下潛20~26米\n20米BO救援、  20米瓶式划手上升\n20米安全戒護、  50米水面拖帶\n開放水域LMC救援\n※考試合格者可申請SSI國際潛水執照。 未達標者，皆由補課方式進行，直至考核完畢。\n※開課後須在一年內完成課程，逾期系統將取消發證資格。\n※不含跨系統交叉認證費。', 3, 1, 'S20200315113807.jpg', 'S20010003', '2020-03-15 11:38:07', '2020-03-25 17:55:49'),
(12, 10, 'C20030010', 'SSI Freediving Level 2', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI02', 'POOL', '臺北市萬華區', '臺北市萬華區西寧南路6-1號', '2020-04-07 08:00:00', '2020-04-07 18:00:00', 10800, '適合不會游泳但不怕水的朋友。 我們一起練習跟水當好朋友，學習安全自在的跟水相處，並能潛入五米的深度。', '【報名資格】\n年滿12歲\n未滿16歲需與家長一起報名課程，或家長持有自潛證照。\n未滿20歲需監護人簽署同意。\n※心臟病、高血壓、懷孕者須提供醫生證明。\n\n【適合對象】\n​不怕水、不怕深度，  但也不太擅長游泳的你\n\n【課程內容】\n基礎學科（一堂）、平靜水域術科（三堂）\n \n​【課程目標】\n適水性養成及潛入五米深度的能力，為進入海洋課程做好準備。\n\n【考核標準】\n學科筆試\n安全適水\n5米下潛\n靜態閉氣2分鐘\n30米平潛\n5米救援', 3, 1, 'S20200315114133.jpg', 'S20010003', '2020-03-15 11:41:33', '2020-03-25 17:54:41');

-- --------------------------------------------------------

--
-- 資料表結構 `class_level`
--

CREATE TABLE `class_level` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `classTypeId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '上層類型ID',
  `classLevelId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程等級編號',
  `classLevel` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程等級',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `class_level`
--

INSERT INTO `class_level` (`id`, `classTypeId`, `classLevelId`, `classLevel`, `created_at`, `updated_at`) VALUES
(1, 'classTypeAIDA', 'classlvAIDA01', 'AIDA 1', '2020-01-15 17:04:57', '2020-03-14 20:53:03'),
(2, 'classTypeAIDA', 'classlvAIDA02', 'AIDA 2', '2020-01-15 17:04:57', '2020-03-14 20:53:03'),
(3, 'classTypeAIDA', 'classlvAIDA03', 'AIDA 3', '2020-01-15 17:04:57', '2020-03-14 20:53:03'),
(4, 'classTypeAIDA', 'classlvAIDA04', 'AIDA 4', '2020-01-15 17:04:57', '2020-03-14 20:53:03'),
(5, 'classTypeSSI', 'classlvSSI01', 'BASIC', '2020-01-15 17:04:57', '2020-03-14 20:52:46'),
(6, 'classTypeSSI', 'classlvSSI02', 'POOL', '2020-01-15 17:04:57', '2020-03-14 20:52:46'),
(7, 'classTypeSSI', 'classlvSSI03', 'Level 1', '2020-01-15 17:04:57', '2020-03-14 20:52:46'),
(8, 'classTypeSSI', 'classlvSSI04', 'Level 2', '2020-01-15 17:04:57', '2020-03-14 20:52:46'),
(9, 'classTypeSSI', 'classlvSSI05', 'Level 3', '2020-01-15 17:04:57', '2020-03-14 20:52:46'),
(10, 'calssTypePADI', 'classlvPADI01', '開放水域初級潛水員', '2020-01-15 17:04:57', '2020-03-14 20:53:33'),
(11, 'calssTypePADI', 'classlvPADI02', '開放水域進階潛水員', '2020-01-15 17:04:57', '2020-03-14 20:53:33'),
(12, 'calssTypePADI', 'classlvPADI03', '救援潛水員', '2020-01-15 17:04:57', '2020-03-14 20:53:33'),
(13, 'calssTypePADI', 'classlvPADI04', '名仕潛水員', '2020-01-15 17:04:57', '2020-03-14 20:53:33'),
(14, 'calssTypePADI', 'classlvPADI05', '潛水長', '2020-01-15 17:04:57', '2020-03-14 20:53:33'),
(15, 'calssTypePADI', 'classlvPADI06', '開放水域助教', '2020-01-15 17:04:57', '2020-03-14 20:53:33'),
(16, 'calssTypePADI', 'classlvPADI07', '專長教練', '2020-01-15 17:04:57', '2020-03-14 20:53:33'),
(17, 'classType01', 'classlv01', '入門', '2020-01-15 17:04:57', '2020-03-14 20:54:12'),
(18, 'classType01', 'classlv02', '初級', '2020-01-15 17:04:57', '2020-03-14 20:54:12'),
(19, 'classType01', 'classlv03', '中級', '2020-01-15 17:04:57', '2020-03-14 20:54:12'),
(20, 'classType01', 'classlv04', '高級', '2020-01-15 17:04:57', '2020-03-14 20:54:12');

-- --------------------------------------------------------

--
-- 資料表結構 `class_member`
--

CREATE TABLE `class_member` (
  `id` int(11) NOT NULL,
  `classId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memberId` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memberMemo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `class_member`
--

INSERT INTO `class_member` (`id`, `classId`, `memberId`, `memberMemo`, `created_at`, `updated_at`) VALUES
(19, 'C20030010', 'M20010002', '', '2020-03-25 17:54:41', '2020-03-25 17:54:41'),
(20, 'C20030009', 'M20010002', '', '2020-03-25 17:55:49', '2020-03-25 17:55:49'),
(21, 'C20030008', 'M20010002', '', '2020-03-25 17:55:55', '2020-03-25 17:55:55'),
(22, 'C20030007', 'M20010002', '', '2020-03-25 17:56:02', '2020-03-25 17:56:02'),
(23, 'C20030006', 'M20010002', '', '2020-03-25 17:56:08', '2020-03-25 17:56:08'),
(24, 'C20030005', 'M20010002', '', '2020-03-25 17:56:15', '2020-03-25 17:56:15'),
(25, 'C20030004', 'M20010002', '', '2020-03-25 17:56:24', '2020-03-25 17:56:24'),
(26, 'C20030002', 'M20010002', '', '2020-03-25 17:56:48', '2020-03-25 17:56:48');

-- --------------------------------------------------------

--
-- 資料表結構 `class_type`
--

CREATE TABLE `class_type` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `classTypeId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程類別編號',
  `classTypeName` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程類別名稱',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `class_type`
--

INSERT INTO `class_type` (`id`, `classTypeId`, `classTypeName`, `created_at`, `updated_at`) VALUES
(1, 'classTypeSSI', 'SSI 國際潛水執照班', '2020-01-15 17:01:48', '2020-03-14 23:34:04'),
(2, 'classTypeAIDA', 'AIDA 國際自由潛水證照班', '2020-01-15 17:01:48', '2020-03-14 23:34:08'),
(3, 'calssTypePADI', 'PADI 潛水員證照班', '2020-01-15 17:01:48', '2020-03-14 23:34:11'),
(4, 'classType01', '普通班', '2020-01-15 17:01:48', '2020-03-15 10:20:49');

-- --------------------------------------------------------

--
-- 資料表結構 `event_data`
--

CREATE TABLE `event_data` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `maxId` int(10) NOT NULL COMMENT '計算編號用',
  `eventId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團編號',
  `eventName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團主題',
  `eventTypeId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `eventType` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團類型',
  `eventLocation` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團地點(縣市)',
  `eventFullLocation` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團地點(完整)',
  `eventLocation_lat` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團地點-緯度',
  `eventLocation_lng` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團地點-經度',
  `eventSponsor` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '主揪者',
  `eventStartDate` datetime NOT NULL COMMENT '活動日期',
  `eventEndDate` datetime NOT NULL COMMENT '報名截止日期',
  `eventDesc` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團說明',
  `eventNeedPeople` int(3) NOT NULL COMMENT '徵求人數',
  `eventNowPeople` int(3) NOT NULL COMMENT '現在人數',
  `eventImg` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團圖片',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `event_data`
--

INSERT INTO `event_data` (`id`, `maxId`, `eventId`, `eventName`, `eventTypeId`, `eventType`, `eventLocation`, `eventFullLocation`, `eventLocation_lat`, `eventLocation_lng`, `eventSponsor`, `eventStartDate`, `eventEndDate`, `eventDesc`, `eventNeedPeople`, `eventNowPeople`, `eventImg`, `created_at`, `updated_at`) VALUES
(72, 1, 'E20030001', '極淨無塑-國際淨灘行動_台北場', 'Etype002', '淨灘活動', '新北市八里區', '新北市八里區挖仔尾海灘', '25.1664652', '121.4164369', 'M20010003', '2020-04-05 09:00:00', '2020-04-04 23:59:00', '不忍直視海洋生物的悲鳴？\n奮力抵抗塑膠微粒的滲透？\n體內的海潮，波濤洶湧，\n召喚你，重返碧海藍天的時光！\n\n行旅海岸，呼吸吐納；\n彎下身軀，親吻白沙；\n撿拾垃圾，純淨身心。\n\n還海灘極淨，讓視野無塑。\n原來，療癒海洋，便是療癒自己。\n \n\n我們誠摯地邀請您，跟全世界愛海的朋友一起加入2019國際淨灘的行列。今年度不只是淨灘，同時我們也安排海洋攤位，透過活動教案及展示，邀請各方朋友來認識海洋、關心海洋！而不在現場的民眾，也可以從自身做起，以重複使用的態度向用過就丟的習慣說再見。讓我們一起從生活中，慢慢地減少使用塑膠製品，從事更多愛海的行動。', 50, 3, 'E20200325162244.jpg', '2020-03-25 16:22:44', '2020-03-29 16:56:20'),
(73, 2, 'E20030002', 'Pacific Rim Cup 2020', 'Etype001', '自由潛水', '臺北市萬華區', '臺北市萬華區水源路199號', '25.022269', '121.5070334', 'M20010003', '2020-06-25 11:00:00', '2020-05-25 23:59:00', '【環太平洋】自由潛水泳池賽，是台灣所舉辦的國際自由潛水賽事。由女子的海及海人選品主辦，鳳凰潛水協辦，比賽進行三個項目的競賽（STA, DNF, DYN)，將於4/27 (六) 及4/28 (日) 在台北青年公園游泳池舉行，賽程符合國際AIDA規範，比賽成績也將登錄國際AIDA官方網站，另外更邀請到AIDA日本前會長，同時也是資深裁判的須川浩司(Hiroshi Sugawa)擔任裁判長。環太平洋泳池賽在STA、DNF、DYN項目外，增設團體成績獎與新人獎，一共近20個獎項。\n\n比賽在台北青年公園50米泳池進行三個項目（STA, DNF, DYN)：4/26（五）為暖身日，4/27 (六) 及4/28 (日)為比賽日。 賽程符合國際AIDA規範，比賽成績也將登錄國際AIDA官方網站，另外更邀請到日本資深裁判須川浩司(Hiroshi Sugawa)擔任裁判長（註）。環太平洋泳池賽在STA、DNF、DYN項目外，增設團體成績獎與新人獎，一共近20個獎項。\n\n註解：須川浩司不僅為資深裁判，也是AIDA日本前會長。\n\n自由潛水泳池三個項目：STA, DNF, DYN\n\n•   STA - Static Apnea 靜態閉氣，在平靜水域中，呼吸道朝下浸入水中閉氣，並記錄閉氣時間。\n\n•   DNF - Dynamic Without Fins 動態平潛無蛙鞋，閉氣在水下水平游動並無穿著蛙鞋，紀錄總潛水距離。\n\n•   DYN - Dynamic With Fins 動態平潛，閉氣在水下水平游動踢蛙鞋的方式，紀錄總潛水距離。\n\n歡迎踴躍參加!\n\n', 999, 1, 'E20200325182631.jpg', '2020-03-25 18:26:32', '2020-03-28 17:58:35'),
(74, 3, 'E20030003', '到綠島尋找妳的水下伸展台', 'Etype001', '自由潛水', '臺東縣綠島鄉', '臺東縣綠島鄉綠島', '22.6620886', '121.4901443', 'M20010003', '2020-04-15 11:00:00', '2020-04-14 23:59:00', '綠島無疑是台灣最知名的國際潛點，美麗珊瑚礁、清澈海水以及從入門到進階都有的豐富海底環境。一年四季，不管季風從哪個方向吹來，綠島都有適合下水的地點，處處都是妳的伸展台。\n\nDay 1. 台東->綠島\n\n下午潛水&拍照\n\nDay 2. 綠島\n\n早上潛水&拍照；下午潛水&拍照\n\nDay 3. 綠島->台東\n\n早上自由活動，下午搭船回台東\n\n徵求強力隊友!!\n\n', 7, 1, 'E20200325183323.jpg', '2020-03-25 18:33:24', '2020-03-28 17:58:44'),
(75, 4, 'E20030004', '以自由潛水的方式，認識人之島', 'Etype001', '自由潛水', '臺東縣蘭嶼鄉', '臺東縣蘭嶼鄉蘭嶼', '22.0435616', '121.548418', 'M20010002', '2020-05-16 15:00:00', '2020-04-30 08:00:00', '想找人一起去蘭嶼潛水~\n\n\n簡介:\n蘭嶼──人之島，無疑是個台灣的的世外桃源。\n\n20米起跳的海水能見度，豐富的海底地形與珊瑚礁，甚至還有知名的八代灣沈船潛點。以上種種條件，都是讓蘭嶼成為自潛人不可錯過的臺灣離島。除了水下，蘭嶼島上的達悟文化與優閒的小島步調，也是有著獨特魔力，許多人一來蘭嶼就愛上無可自拔。\n\n但蘭嶼許多潛點不僅上下岸不容易，部分潛點也會有強流，若沒有熟悉當地的潛導，很難嘗試那些精華的潛點。此外，蘭嶼有著獨特的文化與禁忌，若不熟悉當地民情，也容易冒犯當地居民而不自知。\n\n因此，這個自由潛水之旅， 除了有專業自由潛水教練帶領，照應團員安全性，也與熟悉當地的潛導配合。讓你可以盡情地探索蘭嶼大海，深入認識人之島。\n\nDay 1. 蘭嶼集合，下午輕鬆暖身一潛。\n\nDay 2. 上、下午各一潛，依天氣海象狀況安排。\n\nDay 3. 上午潛水，下午陸遊。\n\nDay 4. 上、下午各一潛，依天氣海象狀況安排。\n\nDay 5. 曬曬太陽，準備回家', 3, 0, 'E20200325183745.jpg', '2020-03-25 18:37:45', '2020-03-25 18:37:45'),
(76, 5, 'E20030005', '（自潛）蘭嶼或綠島', 'Etype001', '自由潛水', '臺東縣綠島鄉', '臺東縣綠島鄉綠島', '22.6620886', '121.4901443', 'M20010002', '2020-04-28 08:00:00', '2020-04-27 23:59:00', '4/28-4/31想去蘭嶼或綠島\n徵人一起去喔~', 2, 1, 'E20200325184347.jpg', '2020-03-25 18:43:48', '2020-03-28 17:47:04'),
(77, 6, 'E20030006', '枋星號遊艇船潛活動-（自由潛水）', 'Etype001', '自由潛水', '屏東縣琉球鄉', '屏東縣琉球鄉小琉球', '22.3404158', '120.3715149', 'M20010002', '2020-04-26 08:30:00', '2020-04-20 23:59:00', 'hello~想找一些朋友一起參加這個團\n不知道有沒有人想一起去的呢??\n\n\n\n日期：2020年4月26日、5月17日、6月21日。\n集合：參加本行程請提前30分鐘至枋客文旅大廳集合出發。\n出航時間：08:30-12:30 (3-4小時活動含船程)。\n航程：枋寮漁港出發--小琉球。\n活動人數：6人出船，10人為限。\n參加活動如欲住宿枋客文旅，可享依房型定價折抵200元/日優惠(請於報名時 一併訂房)。\n注意事項：\n請攜帶身份證明證件以備海巡出海查驗。\n船上提供礦泉水、大浴巾、盥洗熱水等服務。\n出海人員盡量穿著輕便服裝，並注意防曬及水分補充。\n容易暈船的貴賓，建議在活動前半小時服用暈船藥(本公司不提供藥品)。\n\n承辦人：枋星遊艇俱樂部 陳經理0912-056350 LINE ID: navy91039\n歡迎旅遊同業/潛水廠商/旅遊網站群組配合，細節來電詳談。\n\n枋客文旅官網：http://www.fangliaohotel.com.tw/\n枋客文旅：https://www.facebook.com/FangLiaoHotel\n枋星遊艇俱樂部：https://www.facebook.com/FangStarYachting/', 6, 0, 'E20200325184902.png', '2020-03-25 18:49:02', '2020-03-25 18:49:02'),
(78, 7, 'E20030007', '找人一起潛水囉！', 'Etype001', '自由潛水', '臺東縣綠島鄉', '臺東縣綠島鄉9號潛水中心', '22.655043', '121.474964', 'M20010002', '2020-04-16 08:00:00', '2020-04-10 23:59:00', '現在有活動，揪多點人一起來玩！\n\n日期：2020.4.16-2020.4.18\n地點：綠島 石朗\n條件：ow以上\n人數：目前一缺四\n目的：分攤導潛費用，認識海龜以外的人類朋友', 4, 0, 'E20200325185130.jpg', '2020-03-25 18:51:31', '2020-03-25 18:51:31'),
(79, 8, 'E20030008', '4/22（日）水肺練功團', 'Etype001', '自由潛水', '屏東縣枋寮鄉', '屏東縣枋寮鄉枋寮漁港', '22.3631704', '120.5927831', 'M20010002', '2020-04-22 08:00:00', '2020-04-21 23:59:00', '4/22（日）水肺練功團\n\n集合地點：枋客文旅\n集合時間：4/22早上0800集合0830出航預計1300返枋寮漁港\n人數：8\n經驗：ow-aow\n潛點：小琉球蛤板灣\n型態：船潛 2支，（高機動性豪華遊艇，省去等渡輪租機車\n價錢：有意者留言私訊\n由當地教練導潛（依天氣、浪況）', 8, 0, 'E20200325185530.jpg', '2020-03-25 18:55:31', '2020-03-29 15:05:07'),
(80, 9, 'E20030009', '綠島四天三夜自潛船潛攝影團', 'Etype001', '自由潛水', '臺東縣綠島鄉', '臺東縣綠島鄉綠島', '22.6620886', '121.4901443', 'M20010002', '2020-04-27 08:00:00', '2020-04-26 11:00:00', '4月27-30 綠島四天三夜自潛船潛攝影團\n\n4岸潛+2船潛\n\n有專業導潛、隨團專業攝影師、戒護：潛水員比例1:6，保障安全。\n\n費用包含： 背包客房3晚 (情侶可加價換雙人房)、\n\n機車72小時（2人一台)、潛水意外保險，\n\n(如需裝備費用另計)\n\n視天候、人員狀況最後一天安排網美陸拍行程，讓各位水底水面都又帥又美！\n\n歡迎各位愛玩水同好一起來，體驗綠島的美和純粹。', 30, 0, 'E20200325185901.png', '2020-03-25 18:59:01', '2020-03-29 15:04:57'),
(81, 10, 'E20030010', '東北角練自潛', 'Etype001', '自由潛水', '新北市瑞芳區', '新北市瑞芳區東北角', '25.1268475', '121.8444815', 'M20010002', '2020-03-31 11:00:00', '2020-03-27 11:00:00', '嗨⋯\n想找朋友一起自潜⋯⋯\n預計日期3/31\n歡迎大家一起來喔~~~\n\n', 100, 0, 'E20200325190604.jpg', '2020-03-25 19:06:05', '2020-03-25 19:06:05'),
(82, 11, 'E20030011', 'CMAS自由潛水室內邀請賽', 'Etype001', '自由潛水', '宜蘭縣冬山鄉', '宜蘭縣冬山鄉永興路二段280號', '24.6600105', '121.7561213', 'M20010002', '2020-03-29 08:00:00', '2020-03-28 23:59:00', '為了4月18/19國手選拔賽的賽前賽 原3月21/22賽事\n\n因疫情關係場地配合政府政策延期換場地\n\nCMAS自由潛水室內邀請賽\n\n改期為3月29日(星期日)\n\n比賽項目：\n1.靜態閉氣\n2.動態平潛 無蹼\n3. 單蹼\n4. 雙蹼\n5.數度耐力2X50\n\n時間：早上9點半檢錄\n地點：宜蘭龍目井湧泉泳池\n地址：宜蘭縣永興路二段280號\n電話：0986650695\n\n交通方式如下\n1、自行開車前往\n2、搭乘首都客運(羅東站)\n\n報名費：350元\n可當日現場報名\n\n比賽辦法：\n1.依CMAS自由潛水國際競賽規則\n2.比賽分男女組取前三名有成績證明獎狀及獎品', 100, 1, 'E20200325191232.jpg', '2020-03-25 19:10:32', '2020-03-28 17:46:56'),
(83, 12, 'E20030012', '花蓮潛起來', 'Etype001', '自由潛水', '花蓮縣花蓮市', '花蓮縣花蓮市花蓮', '23.9910732', '121.6111949', 'M20010002', '2020-05-15 08:00:00', '2020-05-14 23:59:59', '大家好\n\n我是花蓮人，自潛在花蓮較不盛行，想找到同好也不容易，雖說有些line上的自潛群組，但大家彼此不熟識，一起玩也有風險。\n\n最近東北季風來，花蓮海岸幾乎無法下海，可以玩的潛點又少又遠，想練習真的不容易。\n\n所以想在這找同好\n\n創一個花蓮在地～小而美而互相熟識的探索自潛社團\n\n　\n\n我們無教學只交流，首重安全，預計以陸上乾式練習為主，期許每星期至少1次，等彼此熟識且能勝任潛伴後，才會轉往水中練習及探索新潛點上。\n\n　\n\n有興趣且符合以下條件的朋友\n\n1. 現住在花蓮\n\n2. 至少上過自潛課程 or 計畫半年內會去上課～想先了解或先練習的\n\n\n\n花蓮潛起來\n\n探索花蓮潛點\n\n一個人可以跑很快~但一群人可以走更遠', 10, 2, 'E20200325191713.jpg', '2020-03-25 19:17:14', '2020-03-30 14:43:15');

-- --------------------------------------------------------

--
-- 資料表結構 `event_memeber`
--

CREATE TABLE `event_memeber` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `eventId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團編號',
  `memberId` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員編號',
  `memberMemo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員備註',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `event_memeber`
--

INSERT INTO `event_memeber` (`id`, `eventId`, `memberId`, `memberMemo`, `created_at`, `updated_at`) VALUES
(51, 'E20030012', 'M20010003', '', '2020-03-28 17:46:49', '2020-03-28 17:46:49'),
(52, 'E20030011', 'M20010003', '', '2020-03-28 17:46:56', '2020-03-28 17:46:56'),
(53, 'E20030005', 'M20010003', '', '2020-03-28 17:47:04', '2020-03-28 17:47:04'),
(54, 'E20030001', 'M20010002', '', '2020-03-28 17:58:29', '2020-03-28 17:58:29'),
(55, 'E20030002', 'M20010002', '', '2020-03-28 17:58:35', '2020-03-28 17:58:35'),
(56, 'E20030003', 'M20010002', '', '2020-03-28 17:58:44', '2020-03-28 17:58:44'),
(61, 'E20030001', 'M20030001', '', '2020-03-29 16:53:17', '2020-03-29 16:53:17'),
(62, 'E20030001', 'M20030003', '', '2020-03-29 16:56:20', '2020-03-29 16:56:20'),
(63, 'E20030012', 'M20030004', '', '2020-03-30 14:43:15', '2020-03-30 14:43:15');

-- --------------------------------------------------------

--
-- 資料表結構 `event_type`
--

CREATE TABLE `event_type` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `eventTypeId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團類別編號',
  `eventTypeName` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團類別名稱',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `event_type`
--

INSERT INTO `event_type` (`id`, `eventTypeId`, `eventTypeName`, `created_at`, `updated_at`) VALUES
(1, 'Etype001', '自由潛水', '2020-03-23 16:46:35', '2020-03-23 16:46:35'),
(2, 'Etype002', '淨灘活動', '2020-03-23 16:46:35', '2020-03-23 16:46:35'),
(3, 'Etype003', '美食相聚', '2020-03-23 16:46:35', '2020-03-23 16:46:35'),
(4, 'Etype004', '技術研討', '2020-03-23 16:46:35', '2020-03-23 16:46:35');

-- --------------------------------------------------------

--
-- 資料表結構 `weather_data`
--

CREATE TABLE `weather_data` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `eventId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團編號',
  `location_lng` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '經度',
  `location_lat` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '緯度',
  `1day` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '第1天資料',
  `2day` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '第2天資料',
  `3day` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '第3天資料',
  `4day` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '第4天資料',
  `5day` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '第5天資料',
  `6day` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '第6天資料',
  `eventStartDate` datetime NOT NULL COMMENT '活動日期',
  `weatherData_updated_at` date DEFAULT NULL COMMENT '天氣資料更新時間',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `weather_data`
--

INSERT INTO `weather_data` (`id`, `eventId`, `location_lng`, `location_lat`, `1day`, `2day`, `3day`, `4day`, `5day`, `6day`, `eventStartDate`, `weatherData_updated_at`, `created_at`, `updated_at`) VALUES
(42, 'E20030001', '121.4164369', '25.1664652', '{\"date\":\"2020-03-25\",\"waveDirNum\":21,\"target\":0,\"waveH\":\"0.7\",\"waveDir\":\"北\",\"MaxT\":\"24\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":26,\"target\":8,\"waveH\":\"0.3\",\"waveDir\":\"東北\",\"MaxT\":\"24\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":252,\"target\":16,\"waveH\":\"0.3\",\"waveDir\":\"西\",\"MaxT\":\"24\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":11,\"target\":24,\"waveH\":\"2\",\"waveDir\":\"北\",\"MaxT\":\"18\",\"MinT\":\"17\",\"rain\":\"4.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/7.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":21,\"target\":32,\"waveH\":\"1.5\",\"waveDir\":\"北\",\"MaxT\":\"20\",\"MinT\":\"15\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":20,\"target\":40,\"waveH\":\"0.8\",\"waveDir\":\"北\",\"MaxT\":\"22\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-04-05 09:00:00', '2020-03-25', '2020-03-25 16:22:44', '2020-03-25 16:22:57'),
(43, 'E20030002', '121.5070334', '25.022269', '{\"date\":\"2020-03-25\",\"waveDirNum\":21,\"target\":0,\"waveH\":\"0.6\",\"waveDir\":\"北\",\"MaxT\":\"27\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":26,\"target\":8,\"waveH\":\"0.3\",\"waveDir\":\"東北\",\"MaxT\":\"26\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":252,\"target\":16,\"waveH\":\"0.3\",\"waveDir\":\"西\",\"MaxT\":\"27\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":11,\"target\":24,\"waveH\":\"1.8\",\"waveDir\":\"北\",\"MaxT\":\"20\",\"MinT\":\"17\",\"rain\":\"1.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/20.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":21,\"target\":32,\"waveH\":\"1.4\",\"waveDir\":\"北\",\"MaxT\":\"21\",\"MinT\":\"16\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":20,\"target\":40,\"waveH\":\"0.7\",\"waveDir\":\"北\",\"MaxT\":\"24\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-06-25 11:00:00', '2020-03-25', '2020-03-25 18:26:32', '2020-03-25 18:52:49'),
(44, 'E20030003', '121.4901443', '22.6620886', '{\"date\":\"2020-03-25\",\"waveDirNum\":87,\"target\":0,\"waveH\":\"1.1\",\"waveDir\":\"東\",\"MaxT\":\"23\",\"MinT\":\"21\",\"rain\":\"0.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/20.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":110,\"target\":8,\"waveH\":\"1.2\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0.7 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":117,\"target\":16,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"1.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":128,\"target\":24,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":51,\"target\":32,\"waveH\":\"2\",\"waveDir\":\"東北\",\"MaxT\":\"22\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":84,\"target\":40,\"waveH\":\"1.3\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-04-15 11:00:00', '2020-03-25', '2020-03-25 18:33:24', '2020-03-25 18:52:53'),
(45, 'E20030004', '121.548418', '22.0435616', '{\"date\":\"2020-03-25\",\"waveDirNum\":93,\"target\":0,\"waveH\":\"1\",\"waveDir\":\"東\",\"MaxT\":\"25\",\"MinT\":\"22\",\"rain\":\"0.3 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":123,\"target\":8,\"waveH\":\"1.3\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/18.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":128,\"target\":16,\"waveH\":\"1.3\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0.8 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":129,\"target\":24,\"waveH\":\"1.2\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":45,\"target\":32,\"waveH\":\"2\",\"waveDir\":\"東北\",\"MaxT\":\"23\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/4.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":89,\"target\":40,\"waveH\":\"1.2\",\"waveDir\":\"東\",\"MaxT\":\"26\",\"MinT\":\"24\",\"rain\":\"0.3 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/18.png\"}', '2020-05-16 15:00:00', '2020-03-25', '2020-03-25 18:37:45', '2020-03-25 18:52:57'),
(46, 'E20030005', '121.4901443', '22.6620886', '{\"date\":\"2020-03-25\",\"waveDirNum\":87,\"target\":0,\"waveH\":\"1.1\",\"waveDir\":\"東\",\"MaxT\":\"23\",\"MinT\":\"21\",\"rain\":\"0.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/20.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":110,\"target\":8,\"waveH\":\"1.2\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0.7 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":117,\"target\":16,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"1.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":128,\"target\":24,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":51,\"target\":32,\"waveH\":\"2\",\"waveDir\":\"東北\",\"MaxT\":\"22\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":84,\"target\":40,\"waveH\":\"1.3\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-04-28 08:00:00', '2020-03-25', '2020-03-25 18:43:48', '2020-03-25 18:53:01'),
(47, 'E20030006', '120.3715149', '22.3404158', '{\"date\":\"2020-03-25\",\"waveDirNum\":323,\"target\":0,\"waveH\":\"0.3\",\"waveDir\":\"西北\",\"MaxT\":\"24\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":146,\"target\":8,\"waveH\":\"0.9\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"22\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/1.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":162,\"target\":16,\"waveH\":\"0.6\",\"waveDir\":\"南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":155,\"target\":24,\"waveH\":\"0.4\",\"waveDir\":\"東南\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":302,\"target\":32,\"waveH\":\"0.7\",\"waveDir\":\"西北\",\"MaxT\":\"23\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/1.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":123,\"target\":40,\"waveH\":\"0.3\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/1.png\"}', '2020-04-26 08:30:00', '2020-03-25', '2020-03-25 18:49:02', '2020-03-25 18:53:04'),
(48, 'E20030007', '121.474964', '22.655043', '{\"date\":\"2020-03-25\",\"waveDirNum\":87,\"target\":0,\"waveH\":\"1.1\",\"waveDir\":\"東\",\"MaxT\":\"23\",\"MinT\":\"21\",\"rain\":\"0.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/20.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":110,\"target\":8,\"waveH\":\"1.2\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0.8 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":117,\"target\":16,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"1.1 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":128,\"target\":24,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":51,\"target\":32,\"waveH\":\"2\",\"waveDir\":\"東北\",\"MaxT\":\"22\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":84,\"target\":40,\"waveH\":\"1.3\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '2020-04-16 08:00:00', '2020-03-25', '2020-03-25 18:51:31', '2020-03-25 18:53:08'),
(49, 'E20030008', '120.5927831', '22.3631704', '{\"date\":\"2020-03-25\",\"waveDirNum\":303,\"target\":0,\"waveH\":\"0.3\",\"waveDir\":\"西北\",\"MaxT\":\"26\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":140,\"target\":8,\"waveH\":\"0.7\",\"waveDir\":\"東南\",\"MaxT\":\"28\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/1.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":167,\"target\":16,\"waveH\":\"0.5\",\"waveDir\":\"南\",\"MaxT\":\"26\",\"MinT\":\"22\",\"rain\":\"0.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":159,\"target\":24,\"waveH\":\"0.4\",\"waveDir\":\"南\",\"MaxT\":\"26\",\"MinT\":\"20\",\"rain\":\"0.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":150,\"target\":32,\"waveH\":\"0.5\",\"waveDir\":\"東南\",\"MaxT\":\"24\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":164,\"target\":40,\"waveH\":\"0.3\",\"waveDir\":\"南\",\"MaxT\":\"25\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '2020-04-22 08:00:00', '2020-03-25', '2020-03-25 18:55:31', '2020-03-25 18:55:42'),
(50, 'E20030009', '121.4901443', '22.6620886', '{\"date\":\"2020-03-25\",\"waveDirNum\":87,\"target\":0,\"waveH\":\"1.1\",\"waveDir\":\"東\",\"MaxT\":\"23\",\"MinT\":\"21\",\"rain\":\"0.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/20.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":110,\"target\":8,\"waveH\":\"1.2\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0.7 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":117,\"target\":16,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"1.2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/14.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":128,\"target\":24,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"23\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":51,\"target\":32,\"waveH\":\"2\",\"waveDir\":\"東北\",\"MaxT\":\"22\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":84,\"target\":40,\"waveH\":\"1.3\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"22\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-04-27 08:00:00', '2020-03-25', '2020-03-25 18:59:01', '2020-03-25 18:59:06'),
(51, 'E20030010', '121.8444815', '25.1268475', '{\"date\":\"2020-03-25\",\"waveDirNum\":80,\"target\":0,\"waveH\":\"1.3\",\"waveDir\":\"東\",\"MaxT\":\"23\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":108,\"target\":8,\"waveH\":\"1\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":111,\"target\":16,\"waveH\":\"0.9\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":20,\"target\":24,\"waveH\":\"2.1\",\"waveDir\":\"北\",\"MaxT\":\"19\",\"MinT\":\"17\",\"rain\":\"2 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/20.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":29,\"target\":32,\"waveH\":\"2\",\"waveDir\":\"東北\",\"MaxT\":\"19\",\"MinT\":\"15\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/4.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":47,\"target\":40,\"waveH\":\"1.1\",\"waveDir\":\"東北\",\"MaxT\":\"24\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '2020-03-31 11:00:00', '2020-03-25', '2020-03-25 19:06:05', '2020-03-25 19:06:10'),
(52, 'E20030011', '121.7561213', '24.6600105', '{\"date\":\"2020-03-25\",\"waveDirNum\":96,\"target\":0,\"waveH\":\"1.3\",\"waveDir\":\"東\",\"MaxT\":\"22\",\"MinT\":\"21\",\"rain\":\"10 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/7.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":140,\"target\":8,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":138,\"target\":16,\"waveH\":\"1.3\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"21\",\"rain\":\"0.5 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":48,\"target\":24,\"waveH\":\"1.5\",\"waveDir\":\"東北\",\"MaxT\":\"20\",\"MinT\":\"18\",\"rain\":\"0.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/20.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":45,\"target\":32,\"waveH\":\"1.5\",\"waveDir\":\"東北\",\"MaxT\":\"19\",\"MinT\":\"15\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/4.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":71,\"target\":40,\"waveH\":\"1\",\"waveDir\":\"東\",\"MaxT\":\"23\",\"MinT\":\"18\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-03-29 08:00:00', '2020-03-25', '2020-03-25 19:10:32', '2020-03-25 19:12:47'),
(53, 'E20030012', '121.6111949', '23.9910732', '{\"date\":\"2020-03-25\",\"waveDirNum\":92,\"target\":0,\"waveH\":\"1.2\",\"waveDir\":\"東\",\"MaxT\":\"24\",\"MinT\":\"20\",\"rain\":\"1 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/18.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":122,\"target\":8,\"waveH\":\"1.2\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"21\",\"rain\":\"0.7 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":131,\"target\":16,\"waveH\":\"1.4\",\"waveDir\":\"東南\",\"MaxT\":\"25\",\"MinT\":\"22\",\"rain\":\"0.4 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/19.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":74,\"target\":24,\"waveH\":\"1.6\",\"waveDir\":\"東\",\"MaxT\":\"22\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":54,\"target\":32,\"waveH\":\"1.7\",\"waveDir\":\"東北\",\"MaxT\":\"18\",\"MinT\":\"16\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/4.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":83,\"target\":40,\"waveH\":\"1.2\",\"waveDir\":\"東\",\"MaxT\":\"23\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-05-15 08:00:00', '2020-03-25', '2020-03-25 19:17:14', '2020-03-25 19:17:21');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `chat_data`
--
ALTER TABLE `chat_data`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `class_coach`
--
ALTER TABLE `class_coach`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `class_coach_status`
--
ALTER TABLE `class_coach_status`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `class_data`
--
ALTER TABLE `class_data`
  ADD PRIMARY KEY (`id`,`classId`);

--
-- 資料表索引 `class_level`
--
ALTER TABLE `class_level`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `class_member`
--
ALTER TABLE `class_member`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `class_type`
--
ALTER TABLE `class_type`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `event_data`
--
ALTER TABLE `event_data`
  ADD PRIMARY KEY (`id`,`eventId`);

--
-- 資料表索引 `event_memeber`
--
ALTER TABLE `event_memeber`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `event_type`
--
ALTER TABLE `event_type`
  ADD PRIMARY KEY (`id`,`eventTypeId`);

--
-- 資料表索引 `weather_data`
--
ALTER TABLE `weather_data`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `chat_data`
--
ALTER TABLE `chat_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=162;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_coach`
--
ALTER TABLE `class_coach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_coach_status`
--
ALTER TABLE `class_coach_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_data`
--
ALTER TABLE `class_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_level`
--
ALTER TABLE `class_level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_member`
--
ALTER TABLE `class_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_type`
--
ALTER TABLE `class_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_data`
--
ALTER TABLE `event_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=84;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_memeber`
--
ALTER TABLE `event_memeber`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=64;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_type`
--
ALTER TABLE `event_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `weather_data`
--
ALTER TABLE `weather_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
