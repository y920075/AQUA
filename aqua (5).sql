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
-- 資料表結構 `admin`
--

CREATE TABLE `admin` (
  `username` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'admin帳號',
  `password` char(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'admin密碼',
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '帳號建立時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '密碼更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='admin帳號管理';

--
-- 傾印資料表的資料 `admin`
--

INSERT INTO `admin` (`username`, `password`, `create_time`, `update_time`) VALUES
('Andy', '549feec3b2899b50e4181b8f0653706d7eac14d1', '2020-01-10 14:05:53', '2020-01-10 14:05:53'),
('David', '43eb8595a499c92ecb8ab221eefadaf56a91a55e', '2020-01-10 13:14:26', '2020-01-10 13:14:26'),
('Peter', '883bd5fdbfdf4e5433cbc796894891062aedc31e', '2020-01-10 13:51:03', '2020-01-10 13:51:03');

-- --------------------------------------------------------

--
-- 資料表結構 `basic_information`
--

CREATE TABLE `basic_information` (
  `id` int(11) NOT NULL,
  `idd` int(11) NOT NULL COMMENT '編號的id',
  `seller_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家編號',
  `seller_img` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場圖片',
  `seller_name` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣場名',
  `seller_password` char(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家密碼',
  `seller_address` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '公司地址',
  `seller_phone` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '公司電話',
  `seller_mobile` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '手機',
  `seller_status` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `seller_email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家郵件',
  `seller_decrip` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `join_time` date NOT NULL COMMENT '加入時間',
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '資料更新時間',
  `seller_password_hash` char(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家密碼(雜湊)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='賣家基本資料';

--
-- 傾印資料表的資料 `basic_information`
--

INSERT INTO `basic_information` (`id`, `idd`, `seller_id`, `seller_img`, `seller_name`, `seller_password`, `seller_address`, `seller_phone`, `seller_mobile`, `seller_status`, `seller_email`, `seller_decrip`, `join_time`, `create_time`, `update_time`, `seller_password_hash`) VALUES
(10, 1, 'S20010001', '20200117043320.jpg', '可愛的魚', 'awsdasfsf1', '台北市中山區中山北路20號', '27454574', '0954111237', 'active', 'asdg213@gmail.com', '                          這裡是一個好賣家', '2020-01-17', '2020-01-17 11:33:20', '2020-01-17 11:33:20', ''),
(11, 2, 'S20010002', '20200117121753.jpg', 'Tina', 'wqewqeqwe1', '台北市中山區中山北路20號', '27455574', '0954111237', 'active', 'asdg5613@gmail.com', '', '2020-01-17', '2020-01-17 19:17:53', '2020-01-17 19:17:53', ''),
(15, 3, 'S20010003', '20200121114011.jpg', '蔡康永', 'eeeee1', '台北市大安區敦化南路2段265巷8號', '0496876', '095413584', 'active', 'SDASD45543@DSAD.COM', '我是蔡康永             ', '2020-01-21', '2020-01-21 11:40:11', '2020-01-21 11:40:11', ''),
(16, 4, 'S20010004', '20200121114150.jpg', '蔡依林', 'eeeee1', '台北市大安區敦化路2段265巷8號', '0496876', '0954135841', 'active', 'SDASD1783@DSAD.COM', '我是蔡依林', '2020-01-21', '2020-01-21 11:41:50', '2020-01-21 11:41:50', '');

-- --------------------------------------------------------

--
-- 資料表結構 `blog`
--

CREATE TABLE `blog` (
  `menberId` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '發布會員',
  `idd` int(10) DEFAULT NULL,
  `blogId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文章編號',
  `blogCategory` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章類型',
  `blogTitle` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章標題',
  `blogContent` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章內容',
  `blogImages` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文章圖片',
  `created_at` datetime DEFAULT current_timestamp() COMMENT '發布時間',
  `updated_at` datetime DEFAULT current_timestamp() COMMENT '修改時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `blog`
--

INSERT INTO `blog` (`menberId`, `idd`, `blogId`, `blogCategory`, `blogTitle`, `blogContent`, `blogImages`, `created_at`, `updated_at`) VALUES
(NULL, 2, 'B20010002', '問題', 'Q1 什麼是自由潛水？', '<p>自由潛水，是一種不依靠任何水下供氧設備，僅憑一口氣進行閉氣下潛的潛水運動。也有人稱它為「水中瑜珈」</p>\r\n\r\n<p>無法追朔起源於什麼時期，在世界各個沿海地區，往往都居住著以海維生的民族，這些海洋民族大多擁有精湛的自由潛水能力，而目的只是為了單純的三餐溫飽。在近年才逐漸普遍，成為一項競賽，一項娛樂，一項運動。</p>\r\n\r\n<p>在這網路發達的時代，隨手Goole搜尋「自由潛水」，經常會出現「極限運動」、「死亡率第二高」&hellip; &hellip;這樣的驚悚字眼，乍看之下，似乎是種相當危險的運動，更不是一般人能輕易嘗試。但是！&nbsp;其實不管是什麼運動都有其危險性，只要你能夠尋求『專業』教練、完整課程訓練，了解它的安全觀念知識，在安全規範內進行，都可以玩得安全安心！</p>\r\n\r\n<p>舉個例子來說，&nbsp;就像單車，各種花式技巧競賽，同樣也被列為極限運動，但如果我們把它當作休閒運動呢！在郊區騎著單車當作一種假日的休閒活動，能夠安全地進行，那麼它就不會是一項極富危險的運動！&nbsp;同樣地，自由潛水也可以是「休閒潛水」，不要去挑戰自己的極限，在安全的範圍內進行，自然也就不會那麼地危險。</p>\r\n\r\n<p>&nbsp;那為什麼自由潛水又被稱為「<strong><strong>水中瑜珈</strong></strong>」？是因為，這項運動，與一般的運動不同，它不需要刺激自己的腎上腺素，運動過程中心跳加速，讓自己大力的喘息著;相反地，它最需要的是身心靈放鬆，讓自己能完全沈浸在藍海世界，試著融入大海。簡單來說，越放鬆，你的閉氣時間就會越長，你越能享受自由潛水的奧妙。</p>\r\n\r\n<p>「自由潛水是一趟旅程，兩次呼吸之間的旅程。是邁向人類極限的旅程、探索未知的旅程，也是通往內心的旅程。」</p>\r\n\r\n<p>&nbsp;</p>\r\n', '20200121034949.jpg', '2020-01-21 10:49:49', '2020-01-21 10:49:49'),
(NULL, 3, 'B20010003', '情報', '「海」的世界', '<p>「海」的世界令人著迷，許多活動都讓人趨之若鶩，不論是浮潛、水肺潛水或是自由潛水，這些往往都是將自己暴露在一個不同於陸地上的情境。筆者本人十分熱衷於潛水，在2018年考取open water證照後，相繼取得advanced open water證照和自潛AIDA 2證照。</p>\r\n\r\n<p>減壓症，即俗稱的潛水夫病（divers&rsquo; disease），是大家常見熟知與潛水相關的疾病，但其實在海中從事活動時，許多人多多少少還是有一些其他不舒適的感覺或經驗，像抽筋、失溫寒冷等，都可能會影響我們對活動的期待或享受。筆者是一個中西醫雙修的醫師，以下從中醫的觀點出發，帶大家認識「海」這個環境對我們的影響。</p>\r\n\r\n<p>『黃帝內經』是一部最早的中醫典籍，提及人體要正常運作，需靠五臟、六腑相互協調及「衛、氣、營、血」的運行。其中，「五臟」指「肝、心、脾、肺、腎」，「六腑」即「膽、小腸、胃、大腸、膀胱、三焦」，「衛、氣、營、血」乃是指構成和維持人體生命活動的基本物質與動態能量。其彼此間互相依賴、協調，維持功能的正常運作。而人生活在這個世界中，中醫十分強調人體自然和外在環境密不可分、相互影響的關係；人隨著環境、季節的變化，也會做出相對應的改變，但當環境因素太過或不及時，則會變成令人體生病的「六淫」，亦稱「六邪」，即「風、寒、暑、濕、燥、火」。</p>\r\n', '20200121035011.jpg', '2020-01-21 10:50:11', '2020-01-21 10:50:11'),
(NULL, 4, 'B20010004', '情報', '準備過年', '<p>新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂新年快樂</p>\r\n', '20200122140057.png', '2020-01-22 14:00:57', '2020-01-22 14:00:57');

-- --------------------------------------------------------

--
-- 資料表結構 `class_data`
--

CREATE TABLE `class_data` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `maxId` int(10) NOT NULL COMMENT '計算編號用',
  `classId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程編號',
  `className` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程名稱',
  `classTypeId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程類別編號',
  `classLevelID` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程等級編號',
  `classStartDate` datetime NOT NULL COMMENT '開課日期',
  `classPrice` int(6) NOT NULL COMMENT '課程費用',
  `classDesc` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程說明',
  `classMAXpeople` int(3) NOT NULL COMMENT '最大人數',
  `classNOWpeople` int(3) NOT NULL COMMENT '現在人數',
  `classImg` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '課程圖片',
  `sellerID` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家編號',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='課程資料表';

--
-- 傾印資料表的資料 `class_data`
--

INSERT INTO `class_data` (`id`, `maxId`, `classId`, `className`, `classTypeId`, `classLevelID`, `classStartDate`, `classPrice`, `classDesc`, `classMAXpeople`, `classNOWpeople`, `classImg`, `sellerID`, `created_at`, `updated_at`) VALUES
(1, 1, 'C20010001', 'SSI BASIC 自由潛水國際證照基礎班', 'classTypeSSI', 'classlvSSI01', '2020-02-25 12:00:00', 14800, '<h1><strong><span class=\"marker\">【自由潛水體驗式基礎課程】【SSI FREEDIVING BASIC】</span><br />\r\n&mdash;啟發你的水性本能&mdash;<br />\r\n不會游泳、只想初步嘗試自由潛水的朋友</strong></h1>\r\n\r\n<hr />\r\n<p><br />\r\nBASIC 課程年滿12歲可以參加，未滿20歲需家長同意書<br />\r\n費用包含：學費、保險費、SSI國際潛水證照、線上教材與系統使用費、課程期間全套裝備使用、術科泳池門票。<br />\r\n課程內容：基礎學科（一堂）、2.6米術科（二堂）</p>\r\n', 10, 1, 'C20200117113519.jpg', 'S20010001', '2020-01-15 17:08:02', '2020-01-19 08:23:30'),
(17, 2, 'C20010002', 'PADI潛水課程', 'calssTypePADI', 'classlvPADI01', '2020-01-30 08:00:00', 12500, '<p>一、知識發展</p>\r\n\r\n<ol>\r\n	<li>知識發展+教學影片</li>\r\n	<li>完成知識複習題與檢討</li>\r\n	<li>通過筆試考試達75分</li>\r\n</ol>\r\n\r\n<p>二、平靜水域</p>\r\n\r\n<ol>\r\n	<li>平靜水域3堂（完成技巧練習）</li>\r\n	<li>深水課程2堂</li>\r\n</ol>\r\n\r\n<p>三、招生辦法：</p>\r\n\r\n<ul>\r\n	<li>報名資格：15歲以上潛立方會員</li>\r\n	<li>上課堂數：4堂課程（潛立方）</li>\r\n	<li>上課時段：A 09:00-12:00 B 13:30-16:30 C 18:00-21:00</li>\r\n	<li>深潛實習：1堂課程（開放水域1支、2支）</li>\r\n	<li>須符合健康資格</li>\r\n</ul>\r\n', 5, 1, 'C20200117115250.jpg', 'S20010002', '2020-01-15 17:08:02', '2020-01-17 18:52:50'),
(18, 3, 'C20010003', 'PADI潛水課程', 'calssTypePADI', 'classlvPADI03', '2020-02-15 07:00:00', 13500, '<p>一、知識發展</p>\r\n\r\n<ol>\r\n	<li>知識發展</li>\r\n	<li>完成知識複習題</li>\r\n	<li>通過筆試考試達75分</li>\r\n</ol>\r\n\r\n<p>二、平靜水域</p>\r\n\r\n<ol>\r\n	<li>救援練習1-10（完成技巧練習）</li>\r\n</ol>\r\n\r\n<p>三、開放水域</p>\r\n\r\n<ol>\r\n	<li>救援課程模擬情節1、2</li>\r\n</ol>\r\n\r\n<p>四、招生辦法</p>\r\n\r\n<ul>\r\n	<li>報名資格：12歲以上，AOW並持有EFR證照</li>\r\n	<li>上課堂數：3堂課程</li>\r\n	<li>上課時段：A 09:00-12:00 B 13:30-16:30 C 18:00-21:00</li>\r\n	<li>上課裝備需求：潛水裝備、口袋型面罩</li>\r\n	<li>海洋實習：1堂課程（完成4次潛水）</li>\r\n	<li>須符合健康資格</li>\r\n</ul>\r\n', 4, 1, 'C20200117115429.jpg', 'S20010003', '2020-01-17 11:52:14', '2020-01-17 18:54:51'),
(20, 4, 'C20010004', '國際自由潛水AIDA2證照課程', 'classTypeAIDA', 'classlvAIDA02', '2020-02-12 08:00:00', 19000, '<h3>[ 課程內容 ]</h3>\r\n\r\n<h3>*室內學科課程</h3>\r\n\r\n<h3>-國際自由潛水AIDA系統介紹</h3>\r\n\r\n<h3>-自由潛水介紹</h3>\r\n\r\n<h3>-自由潛水呼吸生理學</h3>\r\n\r\n<h3>-如何正確做呼吸準備</h3>\r\n\r\n<h3>-靜態閉氣教學訓練</h3>\r\n\r\n<h3>-自由潛水壓力學理論</h3>\r\n\r\n<h3>-耳壓平衡技巧</h3>\r\n\r\n<h3>-自由潛水項目</h3>\r\n\r\n<h3>-自由潛水裝備</h3>\r\n\r\n<h3>-自由潛水安全</h3>\r\n\r\n<h3>&nbsp;</h3>\r\n\r\n<h3>*開放水域課程（海洋實習）</h3>\r\n\r\n<h3>-靜態閉氣2分鐘(進行安全地閉氣訓練)</h3>\r\n\r\n<h3>-攀繩下潛</h3>\r\n\r\n<h3>-長蛙使用技巧（正確踢長蛙姿勢）</h3>\r\n\r\n<h3>-動態平潛</h3>\r\n\r\n<h3>-躬身下潛</h3>\r\n\r\n<h3>-LMC/BO水面救援(低氧救援教學)</h3>\r\n\r\n<h3>-水中10米救援</h3>\r\n\r\n<h3>&nbsp;</h3>\r\n\r\n<h3>[ 課程標準 ]</h3>\r\n\r\n<h3>*室內科筆試正確率75%</h3>\r\n\r\n<h3>*靜態閉氣2分鐘</h3>\r\n\r\n<h3>*動態平潛40米</h3>\r\n\r\n<h3>*恆重下潛16米</h3>\r\n\r\n<h3>*10米水中救援</h3>\r\n', 10, 2, 'C20200117115944.png', 'S20010004', '2020-01-17 18:59:44', '2020-01-17 18:59:44'),
(21, 5, 'C20010005', '美人魚潛水(一日) 初階課程', 'classType01', 'classlv02', '2020-01-31 09:00:00', 13000, '<ul>\r\n	<li>\r\n	<ul>\r\n		<li>\r\n		<h3>室內課程＋美人魚海洋實習＿開放水域課程+水中拍攝紀念</h3>\r\n		</li>\r\n		<li>\r\n		<h3>課程內容：</h3>\r\n\r\n		<ul>\r\n			<li>\r\n			<h3>安全簡報（海洋使用美人魚尾巴-安全規則）</h3>\r\n			</li>\r\n			<li>\r\n			<h3>潛水面鏡使用教學</h3>\r\n			</li>\r\n			<li>\r\n			<h3>美人魚尾巴材質認識＆穿著教學</h3>\r\n			</li>\r\n			<li>\r\n			<h3>閉氣訓練（1分鐘以上）（室內教學）</h3>\r\n			</li>\r\n			<li>\r\n			<h3>避免溺水教學</h3>\r\n			</li>\r\n			<li>\r\n			<h3>美人魚尾巴水中擺尾教學</h3>\r\n			</li>\r\n			<li>\r\n			<h3>動態平潛（3米內）</h3>\r\n			</li>\r\n			<li>\r\n			<h3>水中下潛（3米內）</h3>\r\n			</li>\r\n			<li>\r\n			<h3>平衡耳壓技巧（基礎）</h3>\r\n			</li>\r\n			<li>\r\n			<h3>水中睜眼訓練（基礎）</h3>\r\n			</li>\r\n			<li>\r\n			<h3>水中拍照＆錄影（課程最後2小時）（為贈送紀念，非寫真服務）</h3>\r\n			</li>\r\n			<li>&nbsp;</li>\r\n		</ul>\r\n		</li>\r\n	</ul>\r\n	</li>\r\n</ul>\r\n', 5, 1, 'C20200117120225.jpg', 'S20010004', '2020-01-17 19:02:25', '2020-01-17 19:02:25'),
(22, 6, 'C20010006', '國際自由潛水AIDA1證照課程', 'classTypeAIDA', 'classlvAIDA01', '2020-02-25 08:00:00', 10000, '<h3><strong>[ 室內學科課程 ]</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>-自由潛水介紹</h3>\r\n\r\n<h3>-自由潛水呼吸(如何正確做呼吸準備)</h3>\r\n\r\n<h3>-耳壓平衡技巧</h3>\r\n\r\n<h3>-自由潛水項目</h3>\r\n\r\n<h3>-自由潛水裝備</h3>\r\n\r\n<h3>-自由潛水安全</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3><strong>[ 平靜水域泳池課程 ]</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>-靜態閉氣1分鐘(進行安全地閉氣訓練)</h3>\r\n\r\n<h3>-攀繩下潛(下潛深度最大為10米)</h3>\r\n\r\n<h3>-長蛙使用技巧</h3>\r\n\r\n<h3>-動態平潛</h3>\r\n\r\n<h3>-LMC/BO水面救援(低氧救援教學)</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3><strong>[ 課程標準 ]</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>完成課程內容即可擁有AIDA1國際自由潛水電子證照</h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3><strong>[ 課程費用包含項目 ]</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h3>-平靜水域門票</h3>\r\n\r\n<h3>-保險</h3>\r\n\r\n<h3>-AIDA1電子教材</h3>\r\n\r\n<h3>-AIDA1國際自由潛水電子證照(紙本證照需自行於AIDA系統官網自費申請)</h3>\r\n\r\n<h3>-自由潛水裝備供上課使用 (自潛專用低容積面鏡、呼吸管、防寒衣、長蛙鞋、配重帶)</h3>\r\n', 7, 1, 'C20200117120548.png', 'S20010004', '2020-01-17 19:05:48', '2020-01-17 19:05:48'),
(23, 7, 'C20010007', '美人魚潛水(兩日)｜進階課程', 'classType01', 'classlv03', '2020-02-03 08:00:00', 19000, '<ul>\r\n	<li>\r\n	<h3>費用: 兩天(共16小時) NT$ 19000元/一位</h3>\r\n	</li>\r\n	<li>\r\n	<h3>Day 1:室內課程＋平靜水域（潛水訓練池）課程</h3>\r\n	</li>\r\n	<li>\r\n	<h3>Day 2: 美人魚海洋實習＿開放水域課程＋水中拍攝紀念</h3>\r\n	</li>\r\n	<li>\r\n	<h3>課程內容：</h3>\r\n\r\n	<ul>\r\n		<li>\r\n		<h3>安全簡報（海洋使用美人魚尾巴-安全規則）</h3>\r\n		</li>\r\n		<li>\r\n		<h3>認識海洋水下環境（安全知識）</h3>\r\n		</li>\r\n		<li>\r\n		<h3>潛水面鏡使用教學</h3>\r\n		</li>\r\n		<li>\r\n		<h3>美人魚尾巴材質認識＆穿著教學</h3>\r\n		</li>\r\n		<li>\r\n		<h3>閉氣訓練（1分鐘以上）（室內＋水域教學）</h3>\r\n		</li>\r\n		<li>\r\n		<h3>避免溺水教學</h3>\r\n		</li>\r\n		<li>\r\n		<h3>美人魚尾巴水中擺尾教學</h3>\r\n		</li>\r\n		<li>\r\n		<h3>動態平潛（5米內）</h3>\r\n		</li>\r\n		<li>\r\n		<h3>美人魚下潛（5米內）</h3>\r\n		</li>\r\n		<li>\r\n		<h3>平衡耳壓技巧（基礎）</h3>\r\n		</li>\r\n		<li>\r\n		<h3>水中表情訓練（基礎）</h3>\r\n		</li>\r\n		<li>\r\n		<h3>水中拍照＆錄影（課程最後2小時）（為贈送紀念，非寫真服務）</h3>\r\n		</li>\r\n	</ul>\r\n	</li>\r\n</ul>\r\n', 8, 0, 'C20200117120729.jpg', 'S20010004', '2020-01-17 19:07:29', '2020-01-17 19:07:29'),
(24, 8, 'C20010008', '3級自潛員課程 LEVEL 3 FREEDIVING', 'classTypeSSI', 'classlvSSI05', '2020-01-21 08:00:00', 17000, '<p>課程規劃<br />\r\n&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<table style=\"width:70%\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<ul>\r\n				<li>假日班課程規劃如下</li>\r\n			</ul>\r\n\r\n			<p>3級自潛員課程 LEVEL 3 FREEDIVING（假日）</p>\r\n\r\n			<table border=\"1\" style=\"width:100%\">\r\n				<tbody>\r\n					<tr>\r\n						<td>&nbsp;</td>\r\n						<td>時 間</td>\r\n						<td>課 程 內 容</td>\r\n						<td>上課地點</td>\r\n					</tr>\r\n					<tr>\r\n						<td rowspan=\"2\">學 科</td>\r\n						<td>平日晚上<br />\r\n						19：00 ~ 21：30</td>\r\n						<td>自由潛水裝備、自由潛水生理學</td>\r\n						<td>iDiving<br />\r\n						教 室</td>\r\n					</tr>\r\n					<tr>\r\n						<td>平日晚上<br />\r\n						19：00 ~ 21：30</td>\r\n						<td>自由潛水技巧、海洋環境與自由潛水</td>\r\n						<td>iDiving<br />\r\n						教 室</td>\r\n					</tr>\r\n					<tr>\r\n						<td rowspan=\"2\">泳 池 課 程</td>\r\n						<td>周 六<br />\r\n						12：00 ~ 18：00</td>\r\n						<td>裝備調整、靜態閉氣練習、動態閉氣30-75M練習、<br />\r\n						轉身技巧、耳壓平衡技巧、鴨式下潛技巧</td>\r\n						<td>前 港<br />\r\n						特約泳池</td>\r\n					</tr>\r\n					<tr>\r\n						<td>周 日<br />\r\n						12：20 ~ 18：00</td>\r\n						<td>耳壓平衡技巧練習、鴨式下潛練習、5M自由下潛<br />\r\n						5M救援技巧、守護員規則與練習、豚式技巧練習</td>\r\n						<td>南 港<br />\r\n						運動中心</td>\r\n					</tr>\r\n					<tr>\r\n						<td rowspan=\"2\">海 洋 實 習</td>\r\n						<td>周 六<br />\r\n						9：00 ~ 17：00</td>\r\n						<td>耳壓平衡技巧練習、鴨式下潛練習、救援技巧、<br />\r\n						自由下潛30-40M、守護員規則與練習</td>\r\n						<td>東北角<br />\r\n						或搭配<br />\r\n						移地課程</td>\r\n					</tr>\r\n					<tr>\r\n						<td>周 日<br />\r\n						9：00 ~ 17：00</td>\r\n						<td>30-40M自由潛水</td>\r\n						<td>東北角<br />\r\n						或搭配<br />\r\n						移地課程</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>＊以上時間安排包括課前說明與交通移動，實際下水時間將依照現場情況調整</td>\r\n		</tr>\r\n		<tr>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 10, 1, 'C20200117121408.png', 'S20010005', '2020-01-17 19:14:08', '2020-01-19 08:24:15'),
(25, 9, 'C20010009', '體驗自由潛水', 'classType01', 'classlv01', '2020-02-14 09:00:00', 4800, '<h2>課程安排</h2>\r\n\r\n<p>​以平靜的海洋實習為主要學習環境，除風浪狀況不好才會去泳池上課。</p>\r\n\r\n<p>​</p>\r\n\r\n<p>08:00 呼吸技巧<br />\r\n11:00 靜態閉氣<br />\r\n12:00 中餐<br />\r\n13:30 海洋實習-動態閉氣<br />\r\n15:30 海洋實習-鴨式潛水</p>\r\n', 4, 1, 'C20200117121832.png', 'S20010006', '2020-01-17 19:18:32', '2020-01-17 19:18:32'),
(26, 10, 'C20010010', '7天測試用', 'classTypeSSI', 'classlvSSI01', '2020-01-26 00:00:00', 4800, '<h2>課程安排</h2>\r\n\r\n<p>​以平靜的海洋實習為主要學習環境，除風浪狀況不好才會去泳池上課。</p>\r\n\r\n<p>​</p>\r\n\r\n<p>08:00 呼吸技巧<br />\r\n11:00 靜態閉氣<br />\r\n12:00 中餐<br />\r\n13:30 海洋實習-動態閉氣<br />\r\n15:30 海洋實習-鴨式潛水</p>\r\n', 4, 1, 'C20200117121832.png', 'S20010006', '2020-01-17 19:18:32', '2020-01-20 20:22:29'),
(27, 11, 'C20010011', '30天測試用', 'classTypeSSI', 'classlvSSI01', '2020-02-19 09:00:00', 4800, '<h2>課程安排</h2>\r\n\r\n<p>​以平靜的海洋實習為主要學習環境，除風浪狀況不好才會去泳池上課。</p>\r\n\r\n<p>​</p>\r\n\r\n<p>08:00 呼吸技巧<br />\r\n11:00 靜態閉氣<br />\r\n12:00 中餐<br />\r\n13:30 海洋實習-動態閉氣<br />\r\n15:30 海洋實習-鴨式潛水</p>\r\n', 4, 1, 'C20200117121832.png', 'S20010006', '2020-01-17 19:18:32', '2020-01-20 20:22:23'),
(29, 12, 'C20010012', '30天以上測試用', 'classTypeSSI', 'classlvSSI01', '2020-12-31 08:00:00', 4800, '', 10, 0, '', 'S20010005', '2020-01-20 20:07:04', '2020-01-21 16:29:54'),
(62, 13, 'C20010013', 'SSI POOL 自由潛水國際證照班', 'classTypeSSI', 'classlvSSI02', '2020-01-23 08:00:00', 1000, '', 10, 0, '', 'S20010002', '2020-01-21 16:32:07', '2020-01-21 16:32:07'),
(63, 14, 'C20010014', 'SSI 1級自由潛水國際證照班', 'classTypeSSI', 'classlvSSI03', '2020-02-28 08:00:00', 19000, '', 10, 0, '', 'S20010004', '2020-01-21 16:32:48', '2020-01-21 16:32:48'),
(64, 15, 'C20010015', 'SSI 2級自由潛水國際證照班', 'classTypeSSI', 'classlvSSI04', '2020-01-27 08:00:00', 12500, '', 4, 0, '', 'S20010003', '2020-01-21 16:33:50', '2020-01-22 13:59:28');

-- --------------------------------------------------------

--
-- 資料表結構 `class_level`
--

CREATE TABLE `class_level` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `classLevelId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程等級編號',
  `classLevel` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程等級',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `class_level`
--

INSERT INTO `class_level` (`id`, `classLevelId`, `classLevel`, `created_at`, `updated_at`) VALUES
(1, 'classlvAIDA01', 'AIDA 1', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(2, 'classlvAIDA02', 'AIDA 2', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(3, 'classlvAIDA03', 'AIDA 3', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(4, 'classlvAIDA04', 'AIDA 4', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(5, 'classlvSSI01', 'BASIC', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(6, 'classlvSSI02', 'POOL', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(7, 'classlvSSI03', 'Level 1', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(8, 'classlvSSI04', 'Level 2', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(9, 'classlvSSI05', 'Level 3', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(10, 'classlvPADI01', '開放水域初級潛水員', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(11, 'classlvPADI02', '開放水域進階潛水員', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(12, 'classlvPADI03', '救援潛水員', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(13, 'classlvPADI04', '名仕潛水員', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(14, 'classlvPADI05', '潛水長', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(15, 'classlvPADI06', '開放水域助教', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(16, 'classlvPADI07', '專長教練', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(17, 'classlv01', '入門', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(18, 'classlv02', '初級', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(19, 'classlv03', '中級', '2020-01-15 17:04:57', '2020-01-15 17:04:57'),
(20, 'classlv04', '高級', '2020-01-15 17:04:57', '2020-01-15 17:04:57');

-- --------------------------------------------------------

--
-- 資料表結構 `class_member`
--

CREATE TABLE `class_member` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `classId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程編號',
  `classJoinMember` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '參加會員編號',
  `memberMemo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員備註',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_type`
--

CREATE TABLE `class_type` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `classTypeId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程類別編號 ',
  `classTypeName` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '課程類別名稱',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='課程類別資料表';

--
-- 傾印資料表的資料 `class_type`
--

INSERT INTO `class_type` (`id`, `classTypeId`, `classTypeName`, `created_at`, `updated_at`) VALUES
(1, 'classTypeSSI', 'SSI - 國際潛水執照班', '2020-01-15 17:01:48', '2020-01-15 17:01:48'),
(2, 'classTypeAIDA', 'AIDA - 國際自由潛水證照班', '2020-01-15 17:01:48', '2020-01-15 17:01:48'),
(3, 'calssTypePADI', 'PADI - 潛水員證照班', '2020-01-15 17:01:48', '2020-01-15 17:01:48'),
(4, 'classType01', '體驗自由潛水', '2020-01-15 17:01:48', '2020-01-15 17:01:48'),
(5, 'classType02', '休閒潛水', '2020-01-15 17:01:48', '2020-01-15 17:01:48');

-- --------------------------------------------------------

--
-- 資料表結構 `comment`
--

CREATE TABLE `comment` (
  `comment_Id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論編號',
  `menber_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言會員',
  `Locationid` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '潛點ID',
  `comment_content` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論內容',
  `score` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '滿意度',
  `comment_time` date NOT NULL COMMENT '留言時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `comment`
--

INSERT INTO `comment` (`comment_Id`, `menber_id`, `Locationid`, `comment_content`, `score`, `comment_time`) VALUES
('C0001', 'M0001', 'L0002', '好地方', '★★★★★', '2020-03-13');

-- --------------------------------------------------------

--
-- 資料表結構 `comment_bad`
--

CREATE TABLE `comment_bad` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `seller_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家編號',
  `memberId` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員id',
  `comment_bad_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '壞評論id',
  `comment_bad` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '壞評論',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='壞評論';

--
-- 傾印資料表的資料 `comment_bad`
--

INSERT INTO `comment_bad` (`id`, `seller_id`, `memberId`, `comment_bad_id`, `comment_bad`, `created_at`, `updated_at`) VALUES
(1, 'S20010001', 'M20010001', 'BT20010001', '購買前，諮詢商品口味有無現貨，告知有現貨。下標購買寄另一口味商品，事後才告知從未進欲購買的口味', '2020-01-20 10:41:20', '2020-01-20 10:41:20'),
(2, 'S20010002', 'M20010002', 'BT20010002', '不好意思，我的買賣留言板問題已閒置兩天，都沒人回應，我的ＢＣＡＡ破損，看到後麻煩回覆我一下，謝謝。', '2020-01-20 10:41:20', '2020-01-20 10:41:20'),
(3, 'S20010003', 'M20010003', 'BT20010003', '過了一個禮拜都沒出貨，詢問完跟我說當天已經出貨，過五分鐘打來說沒出到貨，那留言版前五分鐘才留說已經出貨了叫我確認，結果今天一早起床訂單又被取消了，請問你們的流程到底問題出在哪裡了', '2020-01-20 10:41:20', '2020-01-20 10:41:20'),
(4, 'S20010001', 'M20010002', 'BT20010004', '神苗公司來信回答:敬愛的會員您好:的確是99999元,因為monster maxx已經賣光了所以才把上面的價格更改為,99999是加拿大到台灣的價格...賣完了至少下架或貼其他產品吧,還大言不慚說就是一罐九萬九,你們公司是詐騙集團嗎...太可怕了吧!', '2020-01-20 10:41:20', '2020-01-20 10:41:20');

-- --------------------------------------------------------

--
-- 資料表結構 `comment_blog`
--

CREATE TABLE `comment_blog` (
  `B_commentid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '編號',
  `member_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '留言會員',
  `blog_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文章ID',
  `content` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論內容',
  `commenttime` date NOT NULL COMMENT '留言時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `comment_gd`
--

CREATE TABLE `comment_gd` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `seller_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家編號',
  `memberId` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員id',
  `comment_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論id',
  `comment_good` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '好評論',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='好評論';

--
-- 傾印資料表的資料 `comment_gd`
--

INSERT INTO `comment_gd` (`id`, `seller_id`, `memberId`, `comment_id`, `comment_good`, `created_at`, `updated_at`) VALUES
(1, 'S20010001', 'M20010001', 'CT20010001', '東西很棒,好賣家,謝謝~~~~', '2020-01-20 10:33:57', '2020-01-20 10:33:57'),
(2, 'S20010002', 'M20010002', 'CT20010002', '謝謝!!合作愉快!!:}}', '2020-01-20 10:33:57', '2020-01-20 10:33:57'),
(3, 'S20010003', 'M20010003', 'CT20010003', '快速的賣家 值得推薦!!', '2020-01-20 10:33:57', '2020-01-20 10:33:57'),
(4, 'S20010003', 'M20010002', 'CT20010004', '郵寄的速度很快,商品也很滿意!謝謝', '2020-01-20 10:33:57', '2020-01-20 10:33:57'),
(5, 'S20010001', 'M20010003', 'CT20010005', '真的很棒', '2020-01-20 15:03:31', '2020-01-20 15:03:31');

-- --------------------------------------------------------

--
-- 資料表結構 `coupcategname`
--

CREATE TABLE `coupcategname` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `coupCategNameId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '選擇優惠類型的活動類型	',
  `coupCateName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '選擇優惠類型的活動類型名	',
  `coupCateAppId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '套用範圍Id',
  `coupCategSet` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '最後設定活動折扣件數',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='控制優惠活動的類型';

--
-- 傾印資料表的資料 `coupcategname`
--

INSERT INTO `coupcategname` (`id`, `coupCategNameId`, `coupCateName`, `coupCateAppId`, `coupCategSet`, `created_at`, `updated_at`) VALUES
(1, 'CCNI1', '固定金額	', 'CCNIA1', '折扣金額', '2020-01-16 23:20:20', '2020-01-17 09:42:14'),
(2, 'CCNI2', '%折扣', 'CCNIA2', '折扣%', '2020-01-16 23:20:20', '2020-01-17 09:42:18');

-- --------------------------------------------------------

--
-- 資料表結構 `couponall`
--

CREATE TABLE `couponall` (
  `id` int(11) NOT NULL,
  `couponId` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠id',
  `couponImg` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠圖片',
  `couponName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠名稱',
  `second_level_category_id` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠類型A條件',
  `third_level_category_id` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '生效條件B',
  `LastConditionId` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '最後條件Id	',
  `itemCategoryId` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '適用商品類別	',
  `seller_id` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家編號',
  `timeStart` datetime NOT NULL COMMENT '優惠起始',
  `timeOver` datetime NOT NULL COMMENT '優惠結束',
  `Times` tinyint(3) NOT NULL COMMENT '使用次數',
  `create_time` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_time` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='所有優惠券條件';

--
-- 傾印資料表的資料 `couponall`
--

INSERT INTO `couponall` (`id`, `couponId`, `couponImg`, `couponName`, `second_level_category_id`, `third_level_category_id`, `LastConditionId`, `itemCategoryId`, `seller_id`, `timeStart`, `timeOver`, `Times`, `create_time`, `update_time`) VALUES
(1, 'D2001160001', 'SALE1.jpg', '全單滿1000元減100元', 'CNA2', 'CNB1', 'LCNB1', '蛙鞋', 'S20010001', '2020-01-16 00:00:00', '2020-01-24 00:00:00', 1, '2020-01-18 02:22:55', '2020-01-18 03:12:14'),
(2, 'D2001160002', 'SALE2.jpg', '當指定商品滿10件即享8折', 'CNA4', 'CNB2', 'LCNB2', '防寒衣', 'S20010002', '2020-01-09 00:00:00', '2020-01-10 00:00:00', 5, '2020-01-18 02:22:55', '2020-01-18 03:12:18');

-- --------------------------------------------------------

--
-- 資料表結構 `cuponuse`
--

CREATE TABLE `cuponuse` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `couponId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠id',
  `cuponuseId` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '優惠券使用範圍id',
  `memeber_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員id',
  `cuponuseName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active' COMMENT '優惠券使用範圍'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='使用範圍';

--
-- 傾印資料表的資料 `cuponuse`
--

INSERT INTO `cuponuse` (`id`, `couponId`, `cuponuseId`, `memeber_id`, `cuponuseName`) VALUES
(1, 'D2001160001', 'UD2001160001', 'M2001160001', 'active'),
(2, 'D2001160002', 'UD2001160002', 'M2001160002', 'unactive');

-- --------------------------------------------------------

--
-- 資料表結構 `divelocationimages`
--

CREATE TABLE `divelocationimages` (
  `originalTitle` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `divelocationimages`
--

INSERT INTO `divelocationimages` (`originalTitle`, `original`, `thumbnail`) VALUES
('L0001', '/images/divelocation/L0001-1.jpg', '/images/divelocation/L0001-1.jpg'),
('L0001', '/images/divelocation/L0001-2.jpg', '/images/divelocation/L0001-2.jpg'),
('L0001', '/images/divelocation/L0001-3.jpg', '/images/divelocation/L0001-3.jpg'),
('L0001', '/images/divelocation/L0001-4.jpg', '/images/divelocation/L0001-4.jpg'),
('L0001', '/images/divelocation/L0001-5.jpg', '/images/divelocation/L0001-5.jpg'),
('L0002', '/images/divelocation/L0002-1.jpg', '/images/divelocation/L0002-1.jpg'),
('L0002', '/images/divelocation/L0002-2.jpg', '/images/divelocation/L0002-2.jpg'),
('L0002', '/images/divelocation/L0002-3.jpg', '/images/divelocation/L0002-3.jpg'),
('L0002', '/images/divelocation/L0002-4.jpg', '/images/divelocation/L0002-4.jpg'),
('L0002', '/images/divelocation/L0002-5.jpg', '/images/divelocation/L0002-5.jpg'),
('L0003', '/images/divelocation/L0003-1.jpg', '/images/divelocation/L0003-1.jpg'),
('L0003', '/images/divelocation/L0003-2.jpg', '/images/divelocation/L0003-2.jpg'),
('L0003', '/images/divelocation/L0003-3.jpg', '/images/divelocation/L0003-3.jpg'),
('L0004', '/images/divelocation/L0004-1.jpg', '/images/divelocation/L0004-1.jpg'),
('L0004', '/images/divelocation/L0004-2.jpg', '/images/divelocation/L0004-2.jpg'),
('L0004', '/images/divelocation/L0004-3.jpg', '/images/divelocation/L0004-3.jpg'),
('L0005', '/images/divelocation/L0005-1.jpg', '/images/divelocation/L0005-1.jpg'),
('L0005', '/images/divelocation/L0005-2.jpg', '/images/divelocation/L0005-2.jpg'),
('L0005', '/images/divelocation/L0005-3.jpg', '/images/divelocation/L0005-3.jpg'),
('L0006', '/images/divelocation/L0006-1.jpg', '/images/divelocation/L0006-1.jpg'),
('L0006', '/images/divelocation/L0006-2.jpg', '/images/divelocation/L0006-2.jpg'),
('L0006', '/images/divelocation/L0006-3.jpg', '/images/divelocation/L0006-3.jpg'),
('L0007', '/images/divelocation/L0007-1.jpg', '/images/divelocation/L0007-1.jpg'),
('L0007', '/images/divelocation/L0007-2.jpg', '/images/divelocation/L0007-2.jpg'),
('L0007', '/images/divelocation/L0007-3.jpg', '/images/divelocation/L0007-3.jpg'),
('L0007', '/images/divelocation/L0007-4.jpg', '/images/divelocation/L0007-4.jpg'),
('L0008', '/images/divelocation/L0008-1.jpg', '/images/divelocation/L0008-1.jpg'),
('L0008', '/images/divelocation/L0008-2.jpg', '/images/divelocation/L0008-2.jpg'),
('L0008', '/images/divelocation/L0008-3.jpg', '/images/divelocation/L0008-3.jpg'),
('L0008', '/images/divelocation/L0008-4.jpg', '/images/divelocation/L0008-4.jpg'),
('L0008', '/images/divelocation/L0008-5.jpg', '/images/divelocation/L0008-5.jpg'),
('L0009', '/images/divelocation/L0009-1.jpg', '/images/divelocation/L0009-1.jpg'),
('L0009', '/images/divelocation/L0009-2.jpg', '/images/divelocation/L0009-2.jpg'),
('L0009', '/images/divelocation/L0009-3.jpg', '/images/divelocation/L0009-3.jpg'),
('L0009', '/images/divelocation/L0009-4.jpg', '/images/divelocation/L0009-4.jpg'),
('L0009', '/images/divelocation/L0009-5.jpg', '/images/divelocation/L0009-5.jpg'),
('L0010', '/images/divelocation/L0010-1.jpg', '/images/divelocation/L0010-1.jpg'),
('L0010', '/images/divelocation/L0010-2.jpg', '/images/divelocation/L0010-2.jpg'),
('L0010', '/images/divelocation/L0010-3.jpg', '/images/divelocation/L0010-3.jpg'),
('L0010', '/images/divelocation/L0010-4.jpg', '/images/divelocation/L0010-4.jpg'),
('L0010', '/images/divelocation/L0010-5.jpg', '/images/divelocation/L0010-5.jpg'),
('L0011', '/images/divelocation/L0011-1.jpg', '/images/divelocation/L0011-1.jpg'),
('L0011', '/images/divelocation/L0011-2.jpg', '/images/divelocation/L0011-2.jpg'),
('L0011', '/images/divelocation/L0011-3.jpg', '/images/divelocation/L0011-3.jpg'),
('L0011', '/images/divelocation/L0011-4.jpg', '/images/divelocation/L0011-4.jpg'),
('L0011', '/images/divelocation/L0011-5.jpg', '/images/divelocation/L0011-5.jpg'),
('L0012', '/images/divelocation/L0012-1.jpg', '/images/divelocation/L0012-1.jpg'),
('L0012', '/images/divelocation/L0012-2.jpg', '/images/divelocation/L0012-2.jpg'),
('L0012', '/images/divelocation/L0012-3.jpg', '/images/divelocation/L0012-3.jpg'),
('L0012', '/images/divelocation/L0012-4.jpg', '/images/divelocation/L0012-4.jpg'),
('L0012', '/images/divelocation/L0012-5.jpg', '/images/divelocation/L0012-5.jpg'),
('L0013', '/images/divelocation/L0013-1.jpg', '/images/divelocation/L0013-1.jpg'),
('L0013', '/images/divelocation/L0013-2.jpg', '/images/divelocation/L0013-2.jpg'),
('L0013', '/images/divelocation/L0013-3.jpg', '/images/divelocation/L0013-3.jpg'),
('L0013', '/images/divelocation/L0013-4.jpg', '/images/divelocation/L0013-4.jpg'),
('L0013', '/images/divelocation/L0013-5.jpg', '/images/divelocation/L0013-5.jpg'),
('L0014', '/images/divelocation/L0014-1.jpg', '/images/divelocation/L0014-1.jpg'),
('L0014', '/images/divelocation/L0014-2.jpg', '/images/divelocation/L0014-2.jpg'),
('L0014', '/images/divelocation/L0014-3.jpg', '/images/divelocation/L0014-3.jpg'),
('L0014', '/images/divelocation/L0014-4.jpg', '/images/divelocation/L0014-4.jpg'),
('L0014', '/images/divelocation/L0014-5.jpg', '/images/divelocation/L0014-5.jpg'),
('L0015', '/images/divelocation/L0015-1.jpg', '/images/divelocation/L0015-1.jpg'),
('L0015', '/images/divelocation/L0015-2.jpeg', '/images/divelocation/L0015-2.jpeg'),
('L0015', '/images/divelocation/L0015-3.jpg', '/images/divelocation/L0015-3.jpg'),
('L0016', '/images/divelocation/L0016-1.jpeg', '/images/divelocation/L0016-1.jpeg'),
('L0016', '/images/divelocation/L0016-2.jpg', '/images/divelocation/L0016-2.jpg'),
('L0016', '/images/divelocation/L0016-3.jpg', '/images/divelocation/L0016-3.jpg'),
('L0017', '/images/divelocation/L0017-1.jpeg', '/images/divelocation/L0017-1.jpeg'),
('L0017', '/images/divelocation/L0017-2.jpeg', '/images/divelocation/L0017-2.jpeg'),
('L0017', '/images/divelocation/L0017-3.jpg', '/images/divelocation/L0017-3.jpg'),
('L0018', '/images/divelocation/L0018-1.jpg', '/images/divelocation/L0018-1.jpg'),
('L0018', '/images/divelocation/L0018-2.jpg', '/images/divelocation/L0018-2.jpg'),
('L0018', '/images/divelocation/L0018-3.jpg', '/images/divelocation/L0018-3.jpg'),
('L0019', '/images/divelocation/L0019-1.jpg', '/images/divelocation/L0019-1.jpg'),
('L0019', '/images/divelocation/L0019-2.jpg', '/images/divelocation/L0019-2.jpg'),
('L0019', '/images/divelocation/L0019-3.jpg', '/images/divelocation/L0019-3.jpg'),
('L0020', '/images/divelocation/L0020-1.jpg', '/images/divelocation/L0020-1.jpg'),
('L0020', '/images/divelocation/L0020-2.jpg', '/images/divelocation/L0020-2.jpg'),
('L0020', '/images/divelocation/L0020-3.jpg', '/images/divelocation/L0020-3.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `event_data`
--

CREATE TABLE `event_data` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `maxId` int(11) NOT NULL COMMENT '計算編號用',
  `eventId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團編號',
  `eventName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團主題',
  `eventTypeId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團類型',
  `eventLocal` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團地點',
  `eventSponsor` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '主揪者',
  `eventStartDate` datetime NOT NULL COMMENT '活動日期',
  `eventEndDate` datetime NOT NULL COMMENT '報名截止日期',
  `eventDesc` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團說明',
  `eventNeedPeople` int(2) NOT NULL COMMENT '徵求人數',
  `eventNowPeople` int(2) NOT NULL COMMENT '目前人數',
  `eventImg` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團圖片',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `event_data`
--

INSERT INTO `event_data` (`id`, `maxId`, `eventId`, `eventName`, `eventTypeId`, `eventLocal`, `eventSponsor`, `eventStartDate`, `eventEndDate`, `eventDesc`, `eventNeedPeople`, `eventNowPeople`, `eventImg`, `created_at`, `updated_at`) VALUES
(6, 1, 'E20010001', '極淨無塑 2020國際淨灘行動_新竹場', 'Etype01', '新竹南寮漁港', 'sowgovTW01', '2020-02-03 10:00:00', '2020-01-30 10:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 40, 0, 'E20200117123227.jpg', '2020-01-17 11:31:59', '2020-01-17 19:33:58'),
(7, 2, 'E20010002', '極淨無塑 2020國際淨灘行動_台北場', 'Etype01', '新北市八里區挖仔尾海灘', 'sowgovTW01', '2020-02-15 08:00:00', '2020-01-30 08:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 50, 0, 'E20200117123647.jpg', '2020-01-17 12:12:29', '2020-01-17 19:36:47'),
(8, 3, 'E20010003', '極淨無塑 2020國際淨灘行動_台南場', 'Etype01', '台南觀夕平台', 'sowgovTW01', '2020-02-07 08:00:00', '2020-01-30 08:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 40, 0, 'E20200117123639.jpg', '2020-01-17 11:31:59', '2020-01-17 19:37:03'),
(9, 4, 'E20010004', '揪團潛水囉', 'Etype02', 'L0003', 'M20010009', '2020-02-28 08:00:00', '2020-01-14 05:00:00', '<p>揪團潛水囉</p>\r\n', 7, 0, '', '2020-01-17 12:12:29', '2020-01-20 21:07:42'),
(14, 5, 'E20010005', '2020過年打牌烤肉', 'Etype03', '我家', 'M20010004', '2020-01-22 19:00:00', '2020-01-21 23:59:00', '<p>2020過年打牌烤肉</p>\r\n', 4, 0, '', '2020-01-17 19:38:59', '2020-01-20 21:07:32'),
(15, 6, 'E20010006', 'AQUA帶您體驗潛水活動', 'Etype02', 'AQUA合作夥伴專屬地點', 'AQUA_admin', '2020-04-27 08:00:00', '2019-01-26 08:00:00', '<p><strong>AQUA帶您體驗潛水活動</strong></p>\r\n', 10, 0, '', '2020-01-17 19:48:07', '2020-01-21 16:07:46'),
(16, 7, 'E20010007', '揪潛水– 極限', 'Etype02', 'L0006', 'M20010005', '2020-02-28 08:00:00', '2020-02-01 08:00:00', '', 4, 1, '', '2020-01-20 20:43:55', '2020-01-20 21:07:02'),
(17, 8, 'E20010008', '潮境天空-潛水同學會', 'Etype02', 'L0002', 'M20010006', '2020-02-05 09:00:00', '2020-01-31 09:00:00', '', 15, 1, '', '2020-01-20 20:47:33', '2020-01-20 21:06:51'),
(18, 9, 'E20010009', '徵伴學自由潛水', 'Etype02', 'SSI初階課程', 'M20010007', '2020-02-07 09:00:00', '2020-02-06 09:00:00', '', 4, 1, '', '2020-01-20 20:50:08', '2020-01-20 21:06:43'),
(19, 10, 'E20010010', '烤個肉好過年', 'Etype03', '公園', 'M20010003', '2020-01-25 20:00:00', '2020-01-24 09:00:00', '', 10, 0, '', '2020-01-20 20:53:37', '2020-01-20 21:06:35'),
(20, 11, 'E20010011', '日本燒肉吃到飽', 'Etype03', '牛角', 'M20010002', '2020-02-02 17:00:00', '2020-02-01 09:00:00', '', 5, 1, '', '2020-01-20 20:54:46', '2020-01-20 21:06:28'),
(22, 12, 'E20010012', '極淨無塑 2020國際淨灘行動_台北場', 'Etype01', '新北市八里區挖仔尾海灘', 'sowgovTW01', '2020-02-15 08:00:00', '2020-01-30 08:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 50, 0, 'E20200117123647.jpg', '2020-01-17 12:12:29', '2020-01-21 16:23:58'),
(23, 13, 'E20010013', '極淨無塑 2020國際淨灘行動_台南場', 'Etype01', '台南觀夕平台', 'sowgovTW01', '2020-02-07 08:00:00', '2020-01-30 08:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 40, 0, 'E20200117123639.jpg', '2020-01-17 11:31:59', '2020-01-21 16:24:01'),
(24, 14, 'E20010014', '極淨無塑 2020國際淨灘行動_新竹場', 'Etype01', '新竹南寮漁港', 'sowgovTW01', '2020-02-03 10:00:00', '2020-01-30 10:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 40, 0, 'E20200117123227.jpg', '2020-01-17 11:31:59', '2020-01-21 16:24:04'),
(25, 15, 'E20010015', '極淨無塑 2020國際淨灘行動_台北場', 'Etype01', '新北市八里區挖仔尾海灘', 'sowgovTW01', '2020-02-15 08:00:00', '2020-01-30 08:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 50, 0, 'E20200117123647.jpg', '2020-01-17 12:12:29', '2020-01-21 16:24:07'),
(26, 16, 'E20010016', '極淨無塑 2020國際淨灘行動_台南場', 'Etype01', '台南觀夕平台', 'sowgovTW01', '2020-02-07 08:00:00', '2020-01-30 08:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 40, 0, 'E20200117123639.jpg', '2020-01-17 11:31:59', '2020-01-21 16:24:09'),
(27, 17, 'E20010017', '極淨無塑 2020國際淨灘行動_新竹場', 'Etype01', '新竹南寮漁港', 'sowgovTW01', '2020-02-03 10:00:00', '2020-01-30 10:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 40, 0, 'E20200117123227.jpg', '2020-01-17 11:31:59', '2020-01-21 16:24:12'),
(28, 18, 'E20010018', '極淨無塑 2020國際淨灘行動_台北場', 'Etype01', '新北市八里區挖仔尾海灘', 'sowgovTW01', '2020-02-15 08:00:00', '2020-01-30 08:00:00', '<table align=\"center\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>在海邊遊玩，不只帶走自己的垃圾，讓我們順手撿起沙灘上的垃圾！</p>\r\n\r\n			<p>​​淨灘可以是一場光鮮亮麗的形象活動、一天飆汗過癮的工作假期、一堂深刻體驗的教育課程；甚至是一個啟發環境意識、重整生活態度的全新契機。</p>\r\n\r\n			<p><strong>淨灘，不是停止垃圾汙染的終點，卻是每個人親海、愛海與守護海洋的最佳起點。</strong></p>\r\n\r\n			<p>荒野保護協會與企業、政府、民眾合作，透過<strong>「產業創新、公民守護、政策改革」</strong>三大策略，希望可以逐年減少海洋廢棄物的數量，留給子孫可以赤腳奔跑的潔白沙灘、魚群自在優游的透澈藍海。</p>\r\n\r\n			<p>您可以透過淨灘，與荒野共同減少廢棄物進入大海的機會。</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 50, 0, 'E20200117123647.jpg', '2020-01-17 12:12:29', '2020-01-21 16:24:15'),
(31, 19, 'E20010019', '極淨無塑 2020國際淨灘行動_台東場', 'Etype01', 'L0001', 'sowgovTW01', '2020-01-25 08:00:00', '2020-01-01 08:00:00', '', 5, 0, '', '2020-01-21 16:26:47', '2020-01-21 16:26:47');

-- --------------------------------------------------------

--
-- 資料表結構 `event_member`
--

CREATE TABLE `event_member` (
  `Id` int(11) NOT NULL COMMENT '流水號',
  `eventId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團編號',
  `eventJOINmember` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團參加者編號',
  `eventAttendee` int(2) NOT NULL COMMENT '揪團同行人數',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `event_member`
--

INSERT INTO `event_member` (`Id`, `eventId`, `eventJOINmember`, `eventAttendee`, `created_at`, `updated_at`) VALUES
(96, 'E20010020', 'y9200751', 9, '2020-01-22 13:55:48', '2020-01-22 13:55:48');

-- --------------------------------------------------------

--
-- 資料表結構 `event_type`
--

CREATE TABLE `event_type` (
  `eventTypeId` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團類別編號',
  `eventTypeName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '揪團類別名稱',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `event_type`
--

INSERT INTO `event_type` (`eventTypeId`, `eventTypeName`, `created_at`, `updated_at`) VALUES
('Etype01', '淨灘活動', '2020-01-13 19:26:51', '2020-01-17 19:51:24'),
('Etype02', '自由潛水', '2020-01-13 16:43:42', '2020-01-13 16:43:42'),
('Etype03', '吃吃喝喝', '2020-01-14 16:30:17', '2020-01-17 19:51:48'),
('Etype04', '1234', '2020-01-22 13:57:28', '2020-01-22 13:57:28');

-- --------------------------------------------------------

--
-- 資料表結構 `firstlevel`
--

CREATE TABLE `firstlevel` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `first_level_category_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '條件id',
  `first_level_category_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '條件狀況',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='沒有條件選項路線';

--
-- 傾印資料表的資料 `firstlevel`
--

INSERT INTO `firstlevel` (`id`, `first_level_category_id`, `first_level_category_name`, `created_at`, `updated_at`) VALUES
(1, 'NOCN1', '沒有條件', '2020-01-17 13:49:36', '2020-01-17 13:49:36'),
(2, 'NOCN2', '有條件', '2020-01-17 13:49:36', '2020-01-17 13:49:36');

-- --------------------------------------------------------

--
-- 資料表結構 `forthlevel`
--

CREATE TABLE `forthlevel` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `forth_level_category_id` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '套用範圍Id',
  `third_level_category_id` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '上一層生效Bid',
  `coupCondNameA` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '當全單達到',
  `forth_level_category_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '套用範圍名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `forthlevel`
--

INSERT INTO `forthlevel` (`id`, `forth_level_category_id`, `third_level_category_id`, `coupCondNameA`, `forth_level_category_name`) VALUES
(1, 'CCNIA1', 'CNB1', '沒有條件', '沒有條件全店'),
(2, 'CCNIA2', 'CNB1', '沒有條件', '沒有條件指定商品'),
(3, 'CCNIA3', 'CNB1', '沒有條件', '沒有條件指定商品分類'),
(4, 'CCNIA4', 'CNB2', '當全單達到', '當全單達到最低金額全店'),
(5, 'CCNIA5', 'CNB2', '當全單達到', '當全單達到最低金額指定商品'),
(6, 'CCNIA6', 'CNB2', '當全單達到', '當全單達到最低金額指定商品分類'),
(7, 'CCNIA7', 'CNB3', '當全單達到', '當全單達到最少件數全店'),
(8, 'CCNIA8', 'CNB3', '當全單達到', '當全單達到最少件數指定商品'),
(9, 'CCNIA9', 'CNB3', '當全單達到', '當全單達到最少件數指定商品分類'),
(10, 'CCNIA10', 'CNB4', '當指定商品達到', '當指定商品達到最低金額套用指定商品'),
(11, 'CCNIA11', 'CNB5', '當指定商品達到', '當指定商品達到最少件數套用指定商品'),
(12, 'CCNIA12', 'CNB6', '當指定商品分類達到', '當指定商品分類達到最少金額'),
(13, 'CCNIA13', 'CNB7', '當指定商品分類達到', '當指定商品分類達到最低件數');

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
('I20010001', 'GULL - VADER Mask UV400 日製頂級矽膠潛水面鏡 黃', 'B0001.jpg', '面鏡', '面鏡', '全新的設計,更貼近您的臉,減少頰骨的壓迫.更佳排水性,面鏡排水不抬頭,只須由鼻輕吐氣.專為東方人臉型設計.鏡片抗UV處理。有增豔效果,水下視覺更佳.日本製造.', '', 'GULL', 'S20010001', '下架', '-', '4100', '10', '2020-01-22 09:31:45', '2020-01-22 13:06:41'),
('I20010002', 'GULL - Mantis 5 Mask 日製矽膠經典潛水面鏡 迷彩粉紅', 'B0002.jpg', '面鏡', '面鏡', 'Made in Japan MANTIS 5 MASK SERIES 不滅傳說勇居銷售冠軍第一名超過35年的Mantis面鏡，有其值得自豪之處--- 適合所有人的潛水面鏡。精確的設計，讓您幾乎感覺不到它的存在。隨著時代的改變，技術及材質的改良，Mantis 仍然是您不變的選擇。日本製造', '', 'GULL', 'S20010001', '下架', '-', '2500', '10', '2020-01-22 09:31:45', '2020-01-22 13:06:41'),
('I20010003', 'MOBBY\'S - ACT APNEA COMPETITION 訂製款防寒衣 /3mm', 'C0001.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S競技款， 日本代表隊指定選用。\n日本YAMAMOTO#45超柔軟橡膠，絕佳合身度與活動性。\n外層Repel Themo皮面，水阻更低、游動更滑順。\n內層Cell Skin水密性更好，於寒冷水域能長效保暖；穿脫建議搭配潤滑劑。\n日製高品質/專業選手級選擇\n*可依需求選擇一件式/二件式製作 \n*可加購客製化LOGO/字樣燙印服務(將視需求另行報價)\n*同步提供單獨訂製 : 頭套上衣$16,500/標準長褲$12,\n*下單後即提供預約量身', '', 'MOBBY\'S', 'S20010001', '上架', '訂製款', '27600', '10', '2020-01-22 09:31:45', '2020-01-22 10:45:33'),
('I20010004', 'MOBBY\'S - ACT APNEA ADVANCED 訂製款防寒衣 /3mm', 'C0002.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S的高階量身訂製款式，絕佳合身與活動性 \n外層Smooth Skin皮面/內層Super Nesl彈性布料，低水阻、高水密性；輕鬆穿脫免潤滑劑\n日製高品質/晉身玩家級訂製款\n*可依需求選擇一件式/二件式製作 \n*可加購客製化LOGO/字樣燙印服務(將視需求另行報價)', '', 'MOBBY\'S', 'S20010001', '上架', '訂製款', '25500', '10', '2020-01-22 09:31:45', '2020-01-22 10:45:38'),
('I20010005', 'MOBBY\'S - 訂製款防寒衣 ACT APNEA 3mm', 'C0003.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S的超值量身訂製款式，絕佳合身與水密 \n外層FHN彈性氯丁橡膠/內層CELL SKIN皮面材質，保暖更佳 \n日規高品質/晉身玩家級訂製款，輕鬆擁有 \n*可依需求選擇一件式/二件式製作 \n*同步提供單獨訂製:頭套上衣$9,500/標準長褲$8,500', '', 'MOBBY\'S', 'S20010002', '上架', '訂製款', '16800', '10', '2020-01-22 09:31:45', '2020-01-22 10:45:46'),
('I20010006', 'MOBBY\'S - 成衣款防寒衣 SHE\'S PIXY 3mm', 'C0004.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', 'S20010002', '上架', 'S', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 10:46:24'),
('I20010007', 'MOBBY\'S - 成衣款防寒衣 SHE\'S PIXY 3mm', 'C0004.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', 'S20010002', '上架', 'M', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 10:46:27'),
('I20010008', 'MOBBY\'S - 成衣款防寒衣 SHE\'S PIXY 3mm', 'C0004.jpg', '防寒衣', '連身防寒衣', '防寒衣王者MOBBY\'S稀有成衣款式，限量供應\nA.C.T.動態剪裁科技，水中活動更自在\n日規高品質/高CP值，輕鬆擁有', '', 'MOBBY\'S', 'S20010002', '上架', 'L', '6800', '10', '2020-01-22 09:31:45', '2020-01-22 10:46:29'),
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
('I20010147', 'GULL - Super Bullet 呼吸管', 'H0014.jpg', '呼吸管', '呼吸管', '', '', 'GULL', '', '上架', '-', '1800', '10', '2020-01-22 09:31:45', '2020-01-22 09:31:45');

-- --------------------------------------------------------

--
-- 資料表結構 `location`
--

CREATE TABLE `location` (
  `LocationID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地點編號',
  `LocationName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地點名稱',
  `LocationArea` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地點區域',
  `Locationlevel` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地點難度',
  `Satisfaction` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '滿意度',
  `Locationdescribe` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地點描述',
  `Transportation` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '交通資訊',
  `noted` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '備註',
  `Longitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '經度',
  `Latitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '緯度',
  `images` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '圖片URL'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `location`
--

INSERT INTO `location` (`LocationID`, `LocationName`, `LocationArea`, `Locationlevel`, `Satisfaction`, `Locationdescribe`, `Transportation`, `noted`, `Longitude`, `Latitude`, `images`) VALUES
('L0001', '石梯坪', '花東海岸', '一般', '★★★★', '觀光區，有完善配套設施，水底生態保存良好 ', '花蓮縣豐濱鄉', '', '121.508838', '23.491361', NULL),
('L0002', '龍洞海洋公園', '東北角', '入門', '★★★★★', '龍洞灣是東北角海岸風景特定區最大港灣，為北部的訓練基地之一。有停車場、商店、潛水店、充氣服務。特殊的海灣地形能抵擋洶湧的潮流，吸引豐富的海洋生態在此棲息發展，清澈的海灣內約有25科80種魚類，以隆頭魚科、蝶魚科、雀鯛科、粗皮鯛科等較多，尤其變色雀鯛出現最為頻繁，往往令前來遊玩的朋友興奮得目不暇給。\r\n', '新北市貢寮區龍洞街', '', '121.917799', '25.118253', NULL),
('L0003', '深澳', '東北角', '一般', '★★★★★', '深澳漁港燈塔下方，冬天潛水時，可常見花枝、筆魚、螃蟹、章魚、紅尾冬、軟絲仔、石斑。', '新北市瑞芳區', '', '121.820648', '25.132564', NULL),
('L0004', '瑞濱', '東北角', '入門', '★★', '入門區', '瑞濱', '', '121.821967', '25.121517', NULL),
('L0005', '鼻頭角', '東北角', '入門', '★★★★', '入門潛點之一，有豐富的生態', '新北市瑞芳區鼻頭路1號', '', '121.923387', '25.128795', NULL),
('L0006', '和美', '東北角', '一般', '★★★★★', '停車方便，有一些熱帶魚、小丑魚，軟珊瑚、金梭魚，基本上安全。', '新北市貢寮區龍洞街1-9號', '', '121.919904', '25.112921', NULL),
('L0007', '卯澳灣', '東北角', '入門', '★★★★', '內灣地形，附近的國小提供付費盥洗，水深約12公尺，有許許多多的小丑魚、海葵。', '新北市貢寮區福連國小旁', '', '121.989376', '25.016551', NULL),
('L0008', '豆腐角', '東北角', '入門', '★★★★★', '宜蘭潛水的訓練基地。停車方便。是個觀光景點。清潔，飲食方便。有很多花枝、章魚、龍蝦、熱帶魚、白帶魚、管口魚、水針', '宜蘭縣蘇澳鎮', '', '121.872439', '24.583533', NULL),
('L0009', '粉鳥林', '東北角', '一般', '★★★★', '位於東澳的小漁港，因為地處偏僻，人煙稀少，有許多大型魚，還有一艘軍艦沈船。', '宜蘭縣蘇澳鎮東澳里', '', '121.842034', '24.497719', NULL),
('L0010', '後壁湖', '墾丁', '入門', '★★★★', '人潮多，須注意核三排水口之強勁水流', '屏東縣恆春鎮大光路', '', '120.745040', '21.945040', NULL),
('L0011', '萬里桐', '墾丁', '一般', '★★★★★', '生態豐富，有小鯨鯊', '屏東縣恆春鎮', '', '120.704733', '21.995766', NULL),
('L0012', '石朗', '綠島', '入門', '★★★★★', '石朗潛水區附近有太平洋黑潮北流通過，潮流比起大白沙要穩定，周邊有著多樣的環狀珊瑚礁，以及各種魚群，有著海底公園的美名，是國際級的潛水天堂，也是綠島最知名、最便利的浮潛地點。在石朗潛水區附近水下11.5米深的地方，有著目前全世界最深的豆丁海馬海底郵筒，寫上一份專屬的防水明信片，親自下水浮潛寄送，感受水下夢幻的海底世界之餘，也向親朋好友傳遞來自深海11米的蔚藍祝福！', '台東縣綠島鄉南寮漁港附近', NULL, '121.474242', '22.655853', NULL),
('L0013', '大白沙', '綠島', '入門', '★★★★★', '大白沙沙灘位在綠島南端突出的西南角，是綠島著名的浮潛地點之一，也是綠島最大、最美麗的沙岸，由珊瑚顆礫及貝殼碎屑所組成的白沙，綿延海岸線數百公尺長，清澈的海水透著柔細的白紗，讓這裡充滿熱帶南方小島的風情。大白沙外海有兩處十分優異的潛水點，分別位於大白沙東測，和離岸距離50~100公尺因為海底羅列三座突起的礁石而聞名的「三塊石」，潛水鑽入礁岩洞內可看見許多美麗的海洋生物棲息。這一帶，火珊瑚生長密度很高，其水螅不慎碰觸會引起灼熱痛感，潛水時須特別小心', '台東縣綠島鄉', NULL, '121.493762', '22.638105', NULL),
('L0014', '柴口', '綠島', '入門', '★★★★', '柴口是每年6-8月強勁的西南風吹臨綠島時，位在避風面的柴口是絕佳潛水區。柴口以壯麗的石珊瑚景觀著稱，海水深淺變化具有層次感，讓人能夠盡情享受瑰麗的海底景觀。近海與大礁石間的潮間帶，海域變化層次多，海底礁石林立，近岸海底和大礁石間為礁岩平台地形，覆蓋在礁石上以團塊和表覆形珊瑚群體等石珊瑚種類為主。', '台東縣綠島鄉', NULL, '121.482537', '22.677284', NULL),
('L0015', '漁人舊部落港灣', '蘭嶼', '入門', '★★★★', '在漂流木餐廳底下的漁人部落港灣，是當地小孩的戲水區。往外踢，可以進入10多米的海域，也是當地人常下水抓魚的海域。唯一要注意的是，港灣斜坡濕滑，不要滑倒了。', '台東縣蘭嶼鄉漁人部落', '飛魚季期間禁止在這潛水／不建議在此穿比基尼', '121.542552', '22.025712', NULL),
('L0016', '椰油斷層', '蘭嶼', '一般', '★★★★★', '從椰油舊部落灘頭下水，一路往外踢。當深度來到22米左右時，原來的緩坡地形會突然變成陡降坡，這裡就是椰油斷層的起點。據聞斷層最深到百米，不過當你來到斷層起點時，也代表已經離岸超過百米，小心海流。', '台東縣蘭嶼鄉椰油部落', '飛魚季期間禁止在這潛水／不建議在此穿比基尼', '121.510916', '22.051206', NULL),
('L0017', '朗島秘境', '蘭嶼', '入門', '★★★★★', '與東清秘境一樣，從馬路上看不到這個點。與外面潮水隔開來的朗島秘境可以說是天然的游泳池，原本是當地人的私密景點，但這幾年也越來越多遊客。秘境終年無浪，因為有淡水注入，所以水溫會比較低。底下七、八米深有個洞穴可以往外鑽，是個初學者也可勝任的入門洞穴。', '台東縣蘭嶼鄉朗島部落', '不建議在此穿比基尼', '121.522562', '22.081276', NULL),
('L0018', '開元港藍洞', '蘭嶼', '進階', '★★★★', '在開元舊港外，青蛙石旁的海底藍洞，曾被國外網站評為值得自由潛水員造訪的潛點。青蛙石即港外那塊大礁岩，從舊港口下水往青蛙石左側前進，到了左側岩石後就可以在附近海底找到。藍洞總共有3個開口，在水深13-16米的位置，三個出口彼此相通成T字型。洞內寬敞，長度約10米，若不停留，約60秒即可以完成鑽洞。\r\n\r\n因為藍洞靠近舊港航道，下水記得帶浮球，並避開客船出入港的時間，以免造成船家困擾。', '台東縣蘭嶼鄉椰油部落', '先確認船舶進港時間研擬潛水計劃', '121.508041', '22.056521', NULL),
('L0019', '情人洞', '蘭嶼', '進階', '★★★★', '著名的東清情人洞，其底下的海域也是十分精采。洞內水深16-22米，兩側的峭壁垂直伸入水底，形成一種海底大峽谷的壯觀感。不過因為入水點隱密、不易行走，而上下岸也需要技巧，因此這裡甚少人造訪。另外，這裡往外一點就可以輕易抵達30米以上的深度，但強流也是不可避免。', '台東縣蘭嶼鄉東清部落', '需要熟人帶，不建議獨自下此點。', '121.574336', '22.061840', NULL),
('L0020', '八代灣沈船', '蘭嶼', '進階', '★★★★', '1983年，一艘韓國貨輪駛經小蘭嶼，因為天氣惡劣，船隻觸礁進水。最後船長將船開到八代灣外，讓貨輪在此處緩緩沉沒（為了保留未來打撈的可能性）。35個年頭過去，如今沉船斷成兩截，巨大的船身成為海底生物的家園，也成了蘭嶼最具代表性的潛點。\r\n\r\n沈船在40米深沙地上，必須要下潛到22米處才能摸到船艙上緣（最高點的船桅約20米）。加上海流一向是這個潛點的特色，因此對於自由潛水員來說，是個難度極高的潛點。\r\n\r\n除了沉船本身難以親近，由於這裡曾發生自由潛水意外，當地人一聽到有人想去那自潛就眉頭深鎖，因此也不容意找到願意搭載自潛員的船。但如果你若能克服種種條件，當你跳入海中見到那巨大的沉船身影時，會覺得一切都值得。', '台東縣蘭嶼鄉紅頭部落', '飛魚季期間禁止在這潛水', '121.552234', '22.022541', NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `my_member`
--

CREATE TABLE `my_member` (
  `id` tinyint(100) NOT NULL COMMENT '流水號',
  `idd` int(100) DEFAULT NULL,
  `memberId` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員編號',
  `loginId` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '會員帳號',
  `loginPwd` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '會員密碼',
  `avatar` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '會員頭像',
  `fullName` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '全名',
  `gender` varchar(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '性別',
  `birthDate` date DEFAULT NULL COMMENT '生日',
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '電子郵件',
  `mobileNumber` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手機號碼',
  `address` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '地址',
  `joinDate` date DEFAULT current_timestamp() COMMENT '加入日期',
  `currentStatus` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '現行狀態',
  `rankCoin` int(10) DEFAULT NULL COMMENT '貝殼幣',
  `rankId` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '級別名稱',
  `created_at` datetime DEFAULT current_timestamp() COMMENT '創建日期',
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `my_member`
--

INSERT INTO `my_member` (`id`, `idd`, `memberId`, `loginId`, `loginPwd`, `avatar`, `fullName`, `gender`, `birthDate`, `email`, `mobileNumber`, `address`, `joinDate`, `currentStatus`, `rankCoin`, `rankId`, `created_at`, `updated_at`) VALUES
(14, 4, 'M20010004', 'member123', 'member123', '20200117113418.jpg', 'David', '男', '2020-01-01', 'random@gmail.com', '0999-999-444', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', 4999, '銀牌海龜', '2020-01-17 03:34:18', '2020-01-17 06:08:00'),
(15, 5, 'M20010005', 'member123', 'member123', '20200117113449.jpg', 'Ellen', '男', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', 30000, '金牌海豚', '2020-01-17 03:34:49', '2020-01-17 06:07:56'),
(16, 6, 'M20010006', 'member123', 'member123', '20200117113550.jpg', 'Fable', '女', '2020-01-01', 'random777@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', 50001, '鑽石鯨魚', '2020-01-17 03:35:50', '2020-01-17 06:07:52'),
(17, 7, 'M20010007', 'member123', 'member123', '20200117113745.jpg', 'Garry', '男', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', NULL, '', '2020-01-17 03:37:45', '2020-01-17 03:37:45'),
(18, 8, 'M20010008', 'member123', 'member123', '20200117113819.jpg', 'Harry', '男', '2020-01-01', 'random@gmail.com', '0999-999-333', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'DEACTIVE', NULL, '', '2020-01-17 03:38:19', '2020-01-17 03:38:19'),
(19, 9, 'M20010009', 'member123', 'member123', '20200117113920.jpg', 'Ivy', '女', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'SUSPENDED', NULL, '', '2020-01-17 03:39:20', '2020-01-17 03:39:20'),
(20, 10, 'M20010010', 'member123', 'member123', '20200117114008.jpg', 'Jamie', '男', '2020-01-01', 'random777@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', NULL, '', '2020-01-17 03:40:08', '2020-01-17 03:40:08'),
(21, 11, 'M20010011', 'member123', 'member123', '20200117114041.jpg', 'Karen', '女', '2020-01-01', 'random777@gmail.com', '0999-999-333', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'DEACTIVE', 700, '銀牌海龜', '2020-01-17 03:40:41', '2020-01-22 13:17:56'),
(23, 13, 'M20010013', 'member123', 'member123', '20200117114155.jpg', 'Mandy', '女', '2020-01-01', 'random777@gmail.com', '0999-999-333', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', NULL, '', '2020-01-17 03:41:55', '2020-01-17 03:41:55'),
(24, 14, 'M20010014', 'member123', 'member123', '20200117114237.jpg', 'Nathan', '男', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', NULL, '', '2020-01-17 03:42:37', '2020-01-17 03:42:37'),
(25, 15, 'M20010015', 'member123', 'member123', '20200117184457.jpg', 'Octavia', '男', '2020-01-01', 'random@gmail.com', '0999-999-888', '台北市大安區和平東路二段106號9樓', '2020-01-17', 'ACTIVE', NULL, NULL, '2020-01-17 10:44:57', '2020-01-17 10:47:54'),
(26, 16, 'M20010016', 'member123', 'member123', '20200117185042.jpg', 'Penny', '男', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', NULL, NULL, '2020-01-17 10:50:42', '2020-01-17 10:50:42'),
(27, 17, 'M20010017', 'member123', 'member123', '20200117194537.jpg', 'Queenie', '女', '2020-01-01', 'random@gmail.com', '0999-999-777', '台北市106大安區和平東路二段106號11樓', '2020-01-17', 'ACTIVE', NULL, NULL, '2020-01-17 11:45:37', '2020-01-17 11:45:37'),
(28, 18, 'M20010018', 'member123', 'member123', '20200120105326.jpg', 'Rudy', '男', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓', '2020-01-20', 'ACTIVE', 500, '銀牌海龜', '2020-01-20 02:53:26', '2020-01-20 03:36:01'),
(29, 19, 'M20010019', 'member123', 'member123', '20200120114151.jpg', 'Sandy', '女', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓 ', '2020-01-20', 'DEACTIVE', 500, '銀牌海龜', '2020-01-20 03:41:51', '2020-01-20 03:43:02'),
(30, 20, 'M20010020', 'member123', 'member123', '20200120114514.jpg', 'Terry', '男', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓', '2020-01-20', 'DEACTIVE', 500, '銀牌海龜', '2020-01-20 03:45:14', '2020-01-20 03:45:14'),
(31, 21, 'M20010021', 'member123', 'member123', '20200120121156.jpg', 'Ursula', '女', '2020-01-01', 'random@gmail.com', '0999-999-999', '台北市大安區和平東路二段106號9樓', '2020-01-20', 'ACTIVE', 0, '銅牌小丑魚', '2020-01-20 04:11:56', '2020-01-20 04:11:56'),
(37, 22, 'M20010022', '123', '123', '20200122134529.jpg', '123', '男', '2017-02-01', '22222@', '55555', 'djdkfgj', '2020-01-22', 'ACTIVE', 700, '銅牌小丑魚', '2020-01-22 13:45:29', '2020-01-22 13:45:29');

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `Id` int(20) NOT NULL,
  `orderId` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '訂單ID',
  `orderMemberId` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '買家ID',
  `orderItemId` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品ID',
  `checkPrice` int(6) NOT NULL DEFAULT 0 COMMENT '結帳時單價',
  `checkQty` tinyint(2) NOT NULL DEFAULT 0 COMMENT '結帳時數量',
  `checkSubtotal` int(6) NOT NULL DEFAULT 0 COMMENT '結帳時小計',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`Id`, `orderId`, `orderMemberId`, `orderItemId`, `checkPrice`, `checkQty`, `checkSubtotal`, `created_at`, `updated_at`) VALUES
(1, 'O20010001', 'M20010003', 'I20010003', 27600, 1, 27600, '2020-01-20 16:07:51', '2020-01-21 09:30:18'),
(3, 'O20010002', 'M20010006', 'I20010005', 16800, 3, 50400, '2020-01-20 16:37:20', '2020-01-21 09:30:28');

-- --------------------------------------------------------

--
-- 資料表結構 `payment_seller`
--

CREATE TABLE `payment_seller` (
  `id` int(11) NOT NULL,
  `seller_pay_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seller_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_Typeid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentTypeName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentTypeImg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='賣家和pay';

--
-- 傾印資料表的資料 `payment_seller`
--

INSERT INTO `payment_seller` (`id`, `seller_pay_id`, `seller_id`, `payment_Typeid`, `paymentTypeName`, `paymentTypeImg`) VALUES
(1, 'SP2001010001', 'S2001010001', 'P20010100001', 'LINE', 'line.png'),
(2, 'SP2001010002', 'S2001010002', 'P20010100002', 'paypal', 'paypal.png'),
(3, 'SP2001010003', 'S2001010002', 'P20010100003', '支付保', 'PPayment.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `payment_type`
--

CREATE TABLE `payment_type` (
  `id` int(11) NOT NULL,
  `payment_Typeid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paymentTypeName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '付款型式名稱',
  `paymentTypeImg` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '付款形式圖片',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='付款方式';

--
-- 傾印資料表的資料 `payment_type`
--

INSERT INTO `payment_type` (`id`, `payment_Typeid`, `paymentTypeName`, `paymentTypeImg`, `created_at`, `updated_at`) VALUES
(1, 'P2001010001', 'LINE', 'line.png', '2020-01-16 09:46:20', '2020-01-16 11:18:48'),
(2, 'P2001010002', 'paypal', 'paypal.png', '2020-01-16 10:55:14', '2020-01-16 11:19:07'),
(3, 'P2001010003', '支付保', 'PPayment.jpg', '2020-01-16 11:20:04', '2020-01-16 11:20:04'),
(4, 'P2001010004', '7eleven', '7elevenlogo.svg.png', '2020-01-16 11:21:14', '2020-01-16 11:21:14'),
(5, 'P2001010005', 'FamilyMart', 'FamilyMart.jpg', '2020-01-16 11:24:02', '2020-01-16 11:24:02'),
(6, 'P2001010006', 'HiLife', 'Hi-Life.svg.png', '2020-01-16 11:50:30', '2020-01-16 11:50:30');

-- --------------------------------------------------------

--
-- 資料表結構 `secondlevel`
--

CREATE TABLE `secondlevel` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `first_level_category_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '一開始條件id',
  `second_level_category_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀況A編號',
  `second_level_category_name` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀況A名',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='狀況A';

--
-- 傾印資料表的資料 `secondlevel`
--

INSERT INTO `secondlevel` (`id`, `first_level_category_id`, `second_level_category_id`, `second_level_category_name`, `created_at`, `updated_at`) VALUES
(1, 'NOCN1', 'CNA1', '沒有條件', '2020-01-16 23:00:23', '2020-01-17 13:58:24'),
(2, 'NOCN2', 'CNA2', '當全單達到', '2020-01-16 23:01:10', '2020-01-17 13:58:30'),
(3, 'NOCN2', 'CNA3', '當指定商品達到', '2020-01-16 23:01:48', '2020-01-17 13:58:34'),
(4, 'NOCN2', 'CNA4', '當指定分類達到', '2020-01-16 23:02:31', '2020-01-17 13:58:38');

-- --------------------------------------------------------

--
-- 資料表結構 `sellercondition`
--

CREATE TABLE `sellercondition` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `seller_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家編號',
  `seller_level` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '賣家等級',
  `seller_score` int(11) NOT NULL COMMENT '賣家評分',
  `itemId` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='賣家等級';

--
-- 傾印資料表的資料 `sellercondition`
--

INSERT INTO `sellercondition` (`id`, `seller_id`, `seller_level`, `seller_score`, `itemId`, `created_at`, `updated_at`) VALUES
(0, 'S20010001', '超優良級', 1500, 'I20010004', '2020-01-19 14:08:36', '2020-01-21 10:52:42'),
(1, 'S20010002', '優級', 550, 'I20010005', '2020-01-19 14:08:36', '2020-01-21 10:52:46'),
(2, 'S20010003', '中階', 150, 'I20010003', '2020-01-19 14:08:36', '2020-01-19 15:26:04'),
(3, 'S20010004', '優級', 600, 'I20010087', '2020-01-21 11:47:32', '2020-01-21 11:47:32'),
(4, 'S20010005', '超優良級', 2000, 'I20010089', '2020-01-21 11:47:32', '2020-01-21 11:47:32');

-- --------------------------------------------------------

--
-- 資料表結構 `thirdlevel`
--

CREATE TABLE `thirdlevel` (
  `id` int(11) NOT NULL COMMENT '流水號	',
  `second_level_category_id` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '生效條件A',
  `third_level_category_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀況B編號',
  `third_level_category_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '狀況B名',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間	',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間	'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='狀況B';

--
-- 傾印資料表的資料 `thirdlevel`
--

INSERT INTO `thirdlevel` (`id`, `second_level_category_id`, `third_level_category_id`, `third_level_category_name`, `created_at`, `updated_at`) VALUES
(1, 'CNA1', 'CNB1', '無', '2020-01-16 23:10:56', '2020-01-18 14:24:31'),
(3, 'CNA2', 'CNB2', '最低金額', '2020-01-18 14:09:05', '2020-01-20 15:18:42'),
(4, 'CNA2', 'CNB3', '最少件數', '2020-01-18 14:09:05', '2020-01-20 15:18:46'),
(5, 'CNA3', 'CNB4', '最低金額', '2020-01-18 14:09:05', '2020-01-20 15:18:49'),
(6, 'CNA3', 'CNB5', '最少件數', '2020-01-18 14:09:05', '2020-01-20 15:18:52'),
(7, 'CNA4', 'CNB6', '最低金額', '2020-01-18 14:09:05', '2020-01-20 15:18:55'),
(8, 'CNA4', 'CNB7', '最少件數', '2020-01-18 14:09:05', '2020-01-20 15:18:58');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- 資料表索引 `basic_information`
--
ALTER TABLE `basic_information`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blogId`);

--
-- 資料表索引 `class_data`
--
ALTER TABLE `class_data`
  ADD PRIMARY KEY (`id`);

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
-- 資料表索引 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_Id`);

--
-- 資料表索引 `comment_bad`
--
ALTER TABLE `comment_bad`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `comment_blog`
--
ALTER TABLE `comment_blog`
  ADD PRIMARY KEY (`B_commentid`);

--
-- 資料表索引 `comment_gd`
--
ALTER TABLE `comment_gd`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coupcategname`
--
ALTER TABLE `coupcategname`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `couponall`
--
ALTER TABLE `couponall`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `cuponuse`
--
ALTER TABLE `cuponuse`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `divelocationimages`
--
ALTER TABLE `divelocationimages`
  ADD PRIMARY KEY (`original`);

--
-- 資料表索引 `event_data`
--
ALTER TABLE `event_data`
  ADD PRIMARY KEY (`id`,`eventId`);

--
-- 資料表索引 `event_member`
--
ALTER TABLE `event_member`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `event_type`
--
ALTER TABLE `event_type`
  ADD PRIMARY KEY (`eventTypeId`);

--
-- 資料表索引 `firstlevel`
--
ALTER TABLE `firstlevel`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `forthlevel`
--
ALTER TABLE `forthlevel`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`itemId`);

--
-- 資料表索引 `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`LocationID`);

--
-- 資料表索引 `my_member`
--
ALTER TABLE `my_member`
  ADD PRIMARY KEY (`id`,`memberId`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `payment_seller`
--
ALTER TABLE `payment_seller`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `payment_type`
--
ALTER TABLE `payment_type`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `secondlevel`
--
ALTER TABLE `secondlevel`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `sellercondition`
--
ALTER TABLE `sellercondition`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `basic_information`
--
ALTER TABLE `basic_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_data`
--
ALTER TABLE `class_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=67;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_level`
--
ALTER TABLE `class_level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_member`
--
ALTER TABLE `class_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_type`
--
ALTER TABLE `class_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_data`
--
ALTER TABLE `event_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `event_member`
--
ALTER TABLE `event_member`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=97;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `my_member`
--
ALTER TABLE `my_member`
  MODIFY `id` tinyint(100) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=38;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
