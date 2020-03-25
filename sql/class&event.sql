-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 
-- 伺服器版本： 10.3.22-MariaDB
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
(2, 2, 'C20030002', 'AIDA1', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA01', 'AIDA 1', '基隆市中正區', '基隆市中正區潮境公園', '2020-03-11 08:00:00', '2020-04-01 19:00:00', 7000, '本課程旨在讓初學者認識自由潛水。幫助學生開發必要的基本技能，知識和安全程序，在學員經驗範圍內安全享受自由潛水的樂趣。', '學科理論：自由潛水裝備介紹，呼吸法，平壓技巧，潛水安全，潛水守則。\r\n\r\n腹式呼吸和放鬆的呼吸技巧，並為閉氣做好準備。\r\n閉氣後的恢復呼吸和潛伴制度。\r\n與潛伴進行安全的靜態閉氣練習。\r\n藉由短暫的閉氣，體驗放鬆和橫膈膜收縮。\r\n與潛伴練習LMC和BO的救援技巧。\r\n術科練習：泳池課程\r\n\r\n面鏡除霧，防寒衣脫著，配重帶及蛙鞋的使用。\r\n使用面鏡呼吸管在水中放鬆呼吸。\r\n鴨式入水法。\r\n以頭下和頭上的姿勢攀繩，感受產生的耳壓並練習平壓。\r\n踢蛙鞋的技巧和低水阻姿勢。\r\n練習潛伴制度，進行安全地訓練。\r\n以潛伴制度為基礎進行等重下潛(5M)。\r\n模擬LMC和BO的救援技巧。', 5, 0, 'noImg.jpg', 'S20010001', '2020-03-05 10:57:01', '2020-03-25 15:57:55'),
(5, 3, 'C20030003', 'AIDA2', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA02', 'AIDA 2', '小琉球', '小琉球', '2020-04-06 08:00:00', '2020-04-10 08:00:00', 13000, '本課程要讓對於自由潛水充滿興趣的學員習得潛水的技能，知識，計劃，組織和安全程序，避免問題和危害，享受自由潛水的樂趣。', 'AIDA2星課程裡可以習得：\r\n\r\n學科理論：約4小時\r\n\r\n介紹AIDA這個非營利組織。\r\n自由潛水的設備。\r\n自由潛水的呼吸法。\r\n深度與壓力，平壓技巧。\r\nBO和LMC的救援。\r\n尊重海洋。\r\n自由潛水和水肺潛水。\r\n自由潛水的安全守則。\r\n訓練。\r\n術科練習(平靜水域)\r\n\r\nStatic Apnea靜態閉氣：\r\n\r\n腹式呼吸、閉氣前的放鬆呼吸技巧。\r\n閉氣後的恢復呼吸技巧。\r\n與潛伴進行安全又有效率的閉氣訓練。\r\n與潛伴進行靜態閉氣練習。\r\n模擬在靜態閉氣時發生LMC、BO，練習應有的救援技巧。\r\nDynamic Apnea動態平潛：\r\n\r\n練習準備訓練所需的潛水裝備。\r\n腹式呼吸、閉氣前的放鬆呼吸技巧。\r\n閉氣後的恢復呼吸技巧。\r\n動態平潛的技巧與潛伴應注意的事項。\r\n與潛伴進行安全又有效率的平潛訓練。\r\n模擬在動態平潛時發生LMC、BO，練習應有的救援技巧。\r\n術科練習(開放水域1)\r\n\r\n準備開放水域所需的裝備(面鏡、呼吸管、蛙鞋和配重帶…等)。\r\n開放水域的潛伴制度。\r\n練習安全鎖的使用。\r\n正確的配重。\r\n緩慢攀繩練習平壓技巧。\r\n鴨式入水法。\r\n練習低水阻姿勢沿著導引繩有效率地下潛。\r\n閉氣後的恢復呼吸技巧。\r\n術科練習(開放水域2)\r\n\r\n練習鴨式入水法。\r\n練習低水阻姿勢沿著導引繩有效率地下潛。\r\n有控制地拉繩轉身。\r\n潛伴制度。\r\n模擬一位潛水員在出水面後有LMC徵兆的救援技巧。\r\n術科練習(開放水域3)\r\n\r\n流暢並有效率的鴨式入水法，能以低水阻姿勢數著導引繩下潛至16米，並交替練習潛伴制度。\r\n潛伴在5~10米處等待潛水員一起上升。\r\n模擬從5~10米處救援BO潛水員出水面並完成水面救援程序。', 5, 0, 'noImg.jpg', 'S20010001', '2020-03-05 10:57:01', '2020-03-22 19:45:21'),
(6, 4, 'C20030004', 'AIDA3', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA03', 'AIDA 3', '基隆市中正區', '基隆市中正區潮境公園', '2020-04-01 08:00:00', '2020-04-05 12:00:00', 17000, '涵蓋休閒自由潛水員必要的技能和知識，培養與經驗相當的潛伴進行潛水計畫所需要的相關技能以及更高的安全知識。如自由落體、法蘭茲平壓法、訓練表、降低風險…等。', '學科理論：約6小時\r\n\r\n物理學：道爾頓定律、波義爾定律，浮力與深潛的關係。\r\n生理學：心血管系統、過度換氣，BO/SWB和平壓。\r\n在深處的肺。\r\n哺乳類動物潛水反射。\r\n訓練理念。\r\n規範。\r\n計畫潛水活動。\r\n潛伴系統。\r\n術科練習(平靜水域1)\r\n\r\n設計規劃自己的訓練靜態閉氣表格，以訓練高二氧化碳耐受度。\r\n設計規劃自己的訓練靜態閉氣表格，以訓練低氧耐受度。\r\n設計規劃自己的動態平潛訓練表格，以訓練高二氧化碳耐受度及乳酸堆積。\r\nLMC/BO救援技巧。\r\n術科練習(平靜水域2)\r\n\r\n與潛伴計畫並執行靜態閉氣練習，從暖身到至少2分45秒，包含出水面即恢復呼吸。\r\n展示在靜態閉氣期間適當的LMC/BO的救援技巧。\r\n展示至少55M的動態平潛，包含呼吸法、平潛姿勢、踢蛙鞋技巧、轉身到恢復呼吸。\r\n展示動態平潛至少55M的潛伴制度。\r\n術科練習(開放水域1)\r\n\r\n學員能使用安全索並能使用快卸。\r\n展示深潛時如何設定配重，確認中性浮力該設定在多少，以及何時開始自由落下。\r\n展示有效率的鴨式入水法，能與導引繩保持適當距離下潛與上升，游泳技巧、正確踢蛙鞋技巧、低水阻身體姿勢。\r\n展示適當的水面呼吸及潛水後的恢復呼吸。\r\n練習法蘭茲平壓技巧。\r\n術科練習(開放水域2)\r\n\r\n辨識潛點的有趣點及危險性。\r\n練習自由落下與法蘭茲平壓、鴨式入水法、下潛與上升時能以有效的游泳技巧與導引繩保持適當距離，適當的水面呼吸及潛水後的恢復呼吸。\r\n練習與潛伴在10M處與潛水員相遇，以訓練安全潛伴相因應的能力。\r\n演練腿部抽筋的自救能力，從15M只划手上升。\r\n下潛到10M，不拉繩作有控制地轉身。\r\n術科練習(開放水域3)\r\n\r\n練習自由落下與法蘭茲平壓、鴨式入水法、下潛與上升時能以有效的游泳技巧與導引繩保持適當距離，適當的水面呼吸及潛水後的恢復呼吸。\r\n當一個安全潛伴。\r\n演練救援技巧，救援一位出水面後無呼吸、BO的潛水員，包括救援呼吸。\r\n展示救援一位上升至10M處失去意識的潛水員至水面，並實施有效的水面救援。\r\n術科練習(開放水域4)\r\n\r\n暖身並進行等重下潛，熟練地使用法蘭茲平壓、自由落下並實施安全潛伴制度。\r\n當安全潛伴，展示與一位等重下潛的潛水員在10M處相遇。\r\n下潛到10M，取下面鏡上升，模擬面鏡遺失。\r\n水面拖帶50M。', 5, 0, 'noImg.jpg', 'S20010001', '2020-03-05 10:57:01', '2020-03-22 21:45:51'),
(7, 5, 'C20030005', '國際自由潛水證照班 - AIDA 2', 'classTypeAIDA', 'AIDA 國際自由潛水證照班', 'classlvAIDA02', 'AIDA 2', '屏東縣恆春鎮', '屏東縣恆春鎮東門路186號2樓', '2020-03-02 08:00:00', '2020-03-07 12:00:00', 13000, '在世界各地，有數百萬計的人喜歡浮潛，其中許多人也喜歡在充分吸氣後，潛入海中片刻，仔細觀察五顏六色的珊瑚、害羞的海龜，或者只為了享受在海裏悠游的樂趣。 自由潛水，就是這麼開始的。', 'AIDA 2 課程內容\r\n\r\n課程時間：七堂，三天\r\n\r\n室內課程：兩堂\r\n自由潛水介紹、基礎潛水生理學、呼吸周期、\r\n自潛安全及行為守則、平壓\r\n\r\n平靜水域：兩堂\r\n調息與放鬆、恢復呼吸、潛伴制度、靜態閉氣（2 分鐘）、\r\n靜態閉氣戒護與救援、踢蹼技巧、動態平潛（40 米）、\r\n動態平潛戒護與救援\r\n\r\n開放水域：三堂\r\n攀繩下潛、耳壓平衡、躬身下潛、恆重下潛（16 米）、\r\n下潛姿態調整、延繩下潛、水下轉身、潛伴戒護、\r\n水下 10 米救援、水面救援流程\r\n\r\n課程費用：\r\n新台幣 NTD 13000 元、港幣 HKD 3300 元、美金 USD 440 元\r\n（外幣匯率如有大幅變動，將會適時調整）\r\n\r\n課程費用包括：\r\n教材、課程期間裝備使用、水域課程交通接送、電子證照費、水域課程均投保富邦「精彩人生」特定活動綜合保險 - 保額 $300 萬', 5, 0, 'noImg.jpg', 'S20010002', '2020-03-05 10:57:01', '2020-03-24 23:37:08'),
(8, 6, 'C20030006', 'SSI BASIC 自由潛水國際證照基礎班', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI01', 'BASIC', '臺北市松山區', '台北市松山運動中心', '2020-03-30 08:00:00', '2020-03-30 18:00:00', 7500, 'SSI BASIC 是最單純型態的體驗式入門課程，可以由此瞭解什麼是自由潛水並體驗到它的樂趣。適合水性不佳的朋友或不了解自由潛水的朋友參與。', '【自由潛水體驗式基礎課程】【SSI FREEDIVING BASIC】\n—啟發你的水性本能—\n不會游泳、只想初步嘗試自由潛水的朋友。\n\nBASIC 課程年滿12歲可以參加，未滿20歲需家長同意書\n費用包含：學費、保險費、SSI國際潛水證照、線上教材與系統使用費、課程期間全套裝備使用、術科泳池門票。\n課程內容：基礎學科（一堂）、2.6米術科（二堂）', 4, 0, 'S20200315112930.jpg', 'S20010003', '2020-03-15 11:29:30', '2020-03-22 19:47:09'),
(9, 7, 'C20030007', 'SSI BASIC 自由潛水國際證照基礎班', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI01', 'BASIC', '臺北市松山區', '松山運動中心', '2020-04-07 08:00:00', '2020-04-07 18:00:00', 7500, 'SSI BASIC 是最單純型態的體驗式入門課程，可以由此瞭解什麼是自由潛水並體驗到它的樂趣。適合水性不佳的朋友或不了解自由潛水的朋友參與。', '【自由潛水體驗式基礎課程】【SSI FREEDIVING BASIC】\n—啟發你的水性本能—\n不會游泳、只想初步嘗試自由潛水的朋友。\n\nBASIC 課程年滿12歲可以參加，未滿20歲需家長同意書\n費用包含：學費、保險費、SSI國際潛水證照、線上教材與系統使用費、課程期間全套裝備使用、術科泳池門票。\n課程內容：基礎學科（一堂）、2.6米術科（二堂）', 4, 0, 'S20200315112956.jpg', 'S20010003', '2020-03-15 11:29:56', '2020-03-22 19:47:05'),
(10, 8, 'C20030008', '​​SSI Freediving Level1', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI03', 'Level 1', '臺北市萬華區', '臺北市萬華區西寧南路6-1號', '2020-04-07 08:00:00', '2020-04-07 18:00:00', 16800, '適合會游泳且有海洋經驗的朋友。 讓我們一起熟悉自由潛水技巧，潛進大海，成為Level1自由潛水員。', '【課程內容】\n基礎學科（一堂）,基礎術科（三堂）\n海洋學科（一堂）,深度訓練（二堂）\n\n​【課程目標】\n進入海洋，成為自由潛水員，開始探索廣闊的藍色宇宙。\n\n【考核標準】\n學科 ：  筆試84分以上\n術科 ：  靜態閉氣2分鐘、動態平潛30米(有蛙鞋)、下潛10~16米(恆定配重)、10米SWB救援、10米無面鏡上升、10米瓶式划水上升。\n※考試合格者可申請SSI國際潛水執照。 未達標者，皆由補課方式進行，直至考核完畢。', 3, 0, 'S20200315113459.jpg', 'S20010003', '2020-03-15 11:34:59', '2020-03-22 19:46:39'),
(11, 9, 'C20030009', 'SSI Freediving Level 2', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI04', 'Level 2', '臺北市萬華區', '臺北市萬華區西寧南路6-1號', '2020-04-13 08:00:00', '2020-04-17 18:00:00', 18000, '想要更深入的瞭解這項運動，想要透過海洋更認識自己。  SSI Level2帶你親身經驗更細微的感知覺，更深層的海洋意識。', '【課程內容】\n進階學科（一堂）、進階術科（一堂）、\n海洋深度訓練（五堂）\n讓我們一起進入更深的湛藍，體驗自由潛水中最有魅力的Free Fall，真正的放鬆感受，被水包覆的每個瞬間，更專注地在意每個身體的變化，盡情的享受在水中。\n\n​【課程目標】\n進階技巧練習，加強深度適應\n\n​【考核標準】\n◆ 學科 ：\n理論考試80%\n◆ 術科 ：\n靜態閉氣2：30、  動態平潛50米 (有蹼)\n法蘭佐平壓下潛20~26米\n20米BO救援、  20米瓶式划手上升\n20米安全戒護、  50米水面拖帶\n開放水域LMC救援\n※考試合格者可申請SSI國際潛水執照。 未達標者，皆由補課方式進行，直至考核完畢。\n※開課後須在一年內完成課程，逾期系統將取消發證資格。\n※不含跨系統交叉認證費。', 3, 0, 'S20200315113807.jpg', 'S20010003', '2020-03-15 11:38:07', '2020-03-22 19:46:38'),
(12, 10, 'C20030010', 'SSI Freediving Level 2', 'classTypeSSI', 'SSI 國際潛水執照班', 'classlvSSI02', 'POOL', '臺北市萬華區', '臺北市萬華區西寧南路6-1號', '2020-04-07 08:00:00', '2020-04-07 18:00:00', 10800, '適合不會游泳但不怕水的朋友。 我們一起練習跟水當好朋友，學習安全自在的跟水相處，並能潛入五米的深度。', '【報名資格】\n年滿12歲\n未滿16歲需與家長一起報名課程，或家長持有自潛證照。\n未滿20歲需監護人簽署同意。\n※心臟病、高血壓、懷孕者須提供醫生證明。\n\n【適合對象】\n​不怕水、不怕深度，  但也不太擅長游泳的你\n\n【課程內容】\n基礎學科（一堂）、平靜水域術科（三堂）\n \n​【課程目標】\n適水性養成及潛入五米深度的能力，為進入海洋課程做好準備。\n\n【考核標準】\n學科筆試\n安全適水\n5米下潛\n靜態閉氣2分鐘\n30米平潛\n5米救援', 3, 0, 'S20200315114133.jpg', 'S20010003', '2020-03-15 11:41:33', '2020-03-25 14:41:33');

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
(72, 1, 'E20030001', '極淨無塑-國際淨灘行動_台北場', 'Etype002', '淨灘活動', '新北市八里區', '新北市八里區挖仔尾海灘', '25.1664652', '121.4164369', 'M20010002', '2020-04-05 09:00:00', '2020-04-04 23:59:00', '不忍直視海洋生物的悲鳴？\n奮力抵抗塑膠微粒的滲透？\n體內的海潮，波濤洶湧，\n召喚你，重返碧海藍天的時光！\n\n行旅海岸，呼吸吐納；\n彎下身軀，親吻白沙；\n撿拾垃圾，純淨身心。\n\n還海灘極淨，讓視野無塑。\n原來，療癒海洋，便是療癒自己。\n \n\n我們誠摯地邀請您，跟全世界愛海的朋友一起加入2019國際淨灘的行列。今年度不只是淨灘，同時我們也安排海洋攤位，透過活動教案及展示，邀請各方朋友來認識海洋、關心海洋！而不在現場的民眾，也可以從自身做起，以重複使用的態度向用過就丟的習慣說再見。讓我們一起從生活中，慢慢地減少使用塑膠製品，從事更多愛海的行動。', 50, 0, 'E20200325162244.jpg', '2020-03-25 16:22:44', '2020-03-25 16:22:44');

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
(42, 'E20030001', '121.4164369', '25.1664652', '{\"date\":\"2020-03-25\",\"waveDirNum\":21,\"target\":0,\"waveH\":\"0.7\",\"waveDir\":\"北\",\"MaxT\":\"24\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-26\",\"waveDirNum\":26,\"target\":8,\"waveH\":\"0.3\",\"waveDir\":\"東北\",\"MaxT\":\"24\",\"MinT\":\"20\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/2.png\"}', '{\"date\":\"2020-03-27\",\"waveDirNum\":252,\"target\":16,\"waveH\":\"0.3\",\"waveDir\":\"西\",\"MaxT\":\"24\",\"MinT\":\"21\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-28\",\"waveDirNum\":11,\"target\":24,\"waveH\":\"2\",\"waveDir\":\"北\",\"MaxT\":\"18\",\"MinT\":\"17\",\"rain\":\"4.9 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/7.png\"}', '{\"date\":\"2020-03-29\",\"waveDirNum\":21,\"target\":32,\"waveH\":\"1.5\",\"waveDir\":\"北\",\"MaxT\":\"20\",\"MinT\":\"15\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '{\"date\":\"2020-03-30\",\"waveDirNum\":20,\"target\":40,\"waveH\":\"0.8\",\"waveDir\":\"北\",\"MaxT\":\"22\",\"MinT\":\"19\",\"rain\":\"0 mm\",\"WxImg\":\"https://www.windy.com/img/icons4/png_25@2x/3.png\"}', '2020-04-05 09:00:00', '2020-03-25', '2020-03-25 16:22:44', '2020-03-25 16:22:57');

--
-- 已傾印資料表的索引
--

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_coach`
--
ALTER TABLE `class_coach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_coach_status`
--
ALTER TABLE `class_coach_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_type`
--
ALTER TABLE `class_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_data`
--
ALTER TABLE `event_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=73;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_memeber`
--
ALTER TABLE `event_memeber`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=50;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_type`
--
ALTER TABLE `event_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `weather_data`
--
ALTER TABLE `weather_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
