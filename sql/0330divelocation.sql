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
-- 資料表結構 `comment_location`
--

CREATE TABLE `comment_location` (
  `comment_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論編號',
  `Locationid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論地點',
  `member_id` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論會員ID',
  `member_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論會員',
  `comment_date` datetime NOT NULL DEFAULT current_timestamp() COMMENT '評論日期',
  `comment` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '評論'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `comment_location`
--

INSERT INTO `comment_location` (`comment_id`, `Locationid`, `member_id`, `member_name`, `comment_date`, `comment`) VALUES
('L20200327134706', 'L0002', 'M20010002', 'Flavia Valeriana', '2020-03-27 12:10:18', '這是個好地方，有停車場、商店、潛水店、充氣服務。特殊的海灣地形能抵擋洶湧的潮流，豐富的海洋生態在此棲息發展');

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
-- 資料表結構 `location_weekweather`
--

CREATE TABLE `location_weekweather` (
  `locationName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date` date NOT NULL COMMENT '日期',
  `WeatherDescription` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '天氣描述'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `location_weekweather`
--

INSERT INTO `location_weekweather` (`locationName`, `Date`, `WeatherDescription`) VALUES
('綠島鄉', '2020-03-30', '多雲。降雨機率 20%。溫度攝氏26至27度。舒適。偏東風 風速3級(每秒4公尺)。相對濕度82%。'),
('綠島鄉', '2020-03-31', '多雲時晴。降雨機率 20%。溫度攝氏22至28度。舒適至悶熱。偏北風 風速3級(每秒5公尺)。相對濕度88%。'),
('綠島鄉', '2020-04-01', '多雲短暫陣雨。降雨機率 30%。溫度攝氏23至28度。舒適至悶熱。偏北風 風速5級(每秒9公尺)。相對濕度87%。'),
('綠島鄉', '2020-04-02', '多雲短暫陣雨。溫度攝氏21至25度。舒適。東北風 風速5級(每秒10公尺)。相對濕度86%。'),
('綠島鄉', '2020-04-03', '多雲時陰短暫陣雨。溫度攝氏20至26度。舒適。東北風 風速5級(每秒8公尺)。相對濕度84%。'),
('綠島鄉', '2020-04-04', '多雲短暫陣雨。溫度攝氏21至27度。舒適。東北風 風速5級(每秒8公尺)。相對濕度85%。'),
('綠島鄉', '2020-04-05', '多雲短暫陣雨。溫度攝氏21至26度。舒適。東北風 風速4級(每秒7公尺)。相對濕度84%。'),
('蘭嶼鄉', '2020-03-30', '多雲。降雨機率 10%。溫度攝氏24至25度。舒適。東南風 風速3級(每秒4公尺)。相對濕度83%。'),
('蘭嶼鄉', '2020-03-31', '晴時多雲。降雨機率 10%。溫度攝氏22至26度。舒適。東北風 風速4級(每秒6公尺)。相對濕度89%。'),
('蘭嶼鄉', '2020-04-01', '多雲短暫陣雨。降雨機率 30%。溫度攝氏22至26度。舒適。偏北風 風速>= 6級(每秒11公尺)。相對濕度88%。'),
('蘭嶼鄉', '2020-04-02', '晴時多雲。溫度攝氏21至23度。舒適。東北風 風速5級(每秒9公尺)。相對濕度85%。'),
('蘭嶼鄉', '2020-04-03', '多雲。溫度攝氏20至24度。舒適。東北風 風速5級(每秒8公尺)。相對濕度81%。'),
('蘭嶼鄉', '2020-04-04', '多雲短暫陣雨。溫度攝氏21至24度。舒適。東北風 風速4級(每秒7公尺)。相對濕度88%。'),
('蘭嶼鄉', '2020-04-05', '多雲短暫陣雨。溫度攝氏21至24度。舒適。偏東風 風速4級(每秒7公尺)。相對濕度86%。'),
('豐濱鄉', '2020-03-30', '多雲。降雨機率 20%。溫度攝氏23至25度。舒適。東南風 風速2級(每秒3公尺)。相對濕度82%。'),
('豐濱鄉', '2020-03-31', '多雲。降雨機率 20%。溫度攝氏20至25度。舒適。偏南風 風速2級(每秒3公尺)。相對濕度86%。'),
('豐濱鄉', '2020-04-01', '陰短暫陣雨。降雨機率 90%。溫度攝氏20至25度。舒適。偏北風 風速3級(每秒5公尺)。相對濕度92%。'),
('豐濱鄉', '2020-04-02', '多雲時陰短暫陣雨。溫度攝氏18至20度。稍有寒意至舒適。東北風 風速3級(每秒5公尺)。相對濕度88%。'),
('豐濱鄉', '2020-04-03', '陰天。溫度攝氏17至22度。稍有寒意至舒適。偏北風 風速3級(每秒4公尺)。相對濕度86%。'),
('豐濱鄉', '2020-04-04', '多雲短暫陣雨。溫度攝氏18至23度。稍有寒意至舒適。偏北風 風速2級(每秒3公尺)。相對濕度87%。'),
('豐濱鄉', '2020-04-05', '陰短暫陣雨。溫度攝氏18至22度。稍有寒意至舒適。偏北風 風速3級(每秒4公尺)。相對濕度86%。'),
('貢寮區', '2020-03-30', '陰短暫雨。降雨機率 30%。溫度攝氏20至22度。舒適。偏北風 風速3級(每秒5公尺)。相對濕度87%。'),
('貢寮區', '2020-03-31', '多雲。降雨機率 10%。溫度攝氏18至23度。稍有寒意至舒適。東北風 風速3級(每秒4公尺)。相對濕度92%。'),
('貢寮區', '2020-04-01', '陰短暫陣雨。降雨機率 50%。溫度攝氏19至21度。稍有寒意至舒適。偏北風 風速3級(每秒5公尺)。相對濕度88%。'),
('貢寮區', '2020-04-02', '陰短暫陣雨。溫度攝氏15至19度。寒冷至稍有寒意。東北風 風速3級(每秒5公尺)。相對濕度87%。'),
('貢寮區', '2020-04-03', '陰短暫陣雨。溫度攝氏14至20度。寒冷至舒適。東北風 風速3級(每秒5公尺)。相對濕度90%。'),
('貢寮區', '2020-04-04', '陰短暫陣雨。溫度攝氏16至21度。稍有寒意至舒適。東北風 風速3級(每秒4公尺)。相對濕度93%。'),
('貢寮區', '2020-04-05', '陰短暫陣雨。溫度攝氏17至21度。稍有寒意至舒適。偏東風 風速3級(每秒4公尺)。相對濕度95%。'),
('恆春鎮', '2020-03-30', '多雲時晴。降雨機率 0%。溫度攝氏27至30度。舒適。偏南風 風速3級(每秒4公尺)。相對濕度65%。'),
('恆春鎮', '2020-03-31', '晴時多雲。降雨機率 0%。溫度攝氏23至30度。舒適至悶熱。東北風 風速3級(每秒4公尺)。相對濕度76%。'),
('恆春鎮', '2020-04-01', '多雲短暫陣雨。降雨機率 30%。溫度攝氏23至30度。舒適至悶熱。西北風 風速4級(每秒7公尺)。相對濕度74%。'),
('恆春鎮', '2020-04-02', '晴時多雲。溫度攝氏22至27度。舒適。東北風 風速5級(每秒8公尺)。相對濕度70%。'),
('恆春鎮', '2020-04-03', '晴時多雲。溫度攝氏21至28度。舒適。東北風 風速4級(每秒7公尺)。相對濕度67%。'),
('恆春鎮', '2020-04-04', '多雲。溫度攝氏22至29度。舒適。東北風 風速4級(每秒7公尺)。相對濕度71%。'),
('恆春鎮', '2020-04-05', '多雲。溫度攝氏22至29度。舒適。東北風 風速4級(每秒6公尺)。相對濕度70%。');

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
('東北角', '龍洞浮標', '46694A', '2020-03-30 15:00:00', '22.2', '19.3', '84', '62', '東北'),
('花東海岸', '花蓮浮標', '46699A', '2020-03-30 15:00:00', '25.1', '24.0', '92', '63', '東北東'),
('東部離島', '蘭嶼浮標', 'C6S94', '2020-03-30 15:00:00', '26.5', '26.3', '123', '65', '東南東'),
('墾丁', '小琉球浮標', '46714D', '2020-03-30 15:00:00', '26.8', '25.8', '36', '42', '南南東');

-- --------------------------------------------------------

--
-- 資料表結構 `tide`
--

CREATE TABLE `tide` (
  `StationId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '測站ID',
  `LocationName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地點名稱',
  `Date` date NOT NULL COMMENT '日期',
  `Lunardate` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '農曆',
  `Tidalrange` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '潮差',
  `Tidetype` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '潮汐種類',
  `Tidetime` datetime NOT NULL COMMENT '潮汐時間',
  `Tideheight` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '潮差(高程基準)(離島:本地)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `tide`
--

INSERT INTO `tide` (`StationId`, `LocationName`, `Date`, `Lunardate`, `Tidalrange`, `Tidetype`, `Tidetime`, `Tideheight`) VALUES
('500026', '新北市貢寮區', '2020-03-30', '3/7', '小潮', '乾潮', '2020-03-30 03:13:00', '-3'),
('500026', '新北市貢寮區', '2020-03-30', '3/7', '小潮', '滿潮', '2020-03-30 09:11:00', '30'),
('500026', '新北市貢寮區', '2020-03-30', '3/7', '小潮', '乾潮', '2020-03-30 16:53:00', '-37'),
('500026', '新北市貢寮區', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 01:40:00', '3'),
('500026', '新北市貢寮區', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 09:36:00', '28'),
('500026', '新北市貢寮區', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 17:55:00', '-34'),
('500026', '新北市貢寮區', '2020-04-01', '3/9', '小潮', '滿潮', '2020-04-01 10:04:00', '25'),
('500026', '新北市貢寮區', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 19:24:00', '-33'),
('001508', '花蓮縣豐濱鄉', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 02:27:00', '-14'),
('001508', '花蓮縣豐濱鄉', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 08:48:00', '73'),
('001508', '花蓮縣豐濱鄉', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 15:23:00', '-36'),
('001508', '花蓮縣豐濱鄉', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 21:45:00', '45'),
('001508', '花蓮縣豐濱鄉', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 02:56:00', '-4'),
('001508', '花蓮縣豐濱鄉', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 09:22:00', '67'),
('001508', '花蓮縣豐濱鄉', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 16:19:00', '-27'),
('001508', '花蓮縣豐濱鄉', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 22:50:00', '35'),
('001508', '花蓮縣豐濱鄉', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 03:36:00', '8'),
('001508', '花蓮縣豐濱鄉', '2020-04-01', '3/9', '小潮', '滿潮', '2020-04-01 10:16:00', '60'),
('001508', '花蓮縣豐濱鄉', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 17:38:00', '-22'),
('001411', '臺東縣綠島鄉', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 02:35:00', '-34'),
('001411', '臺東縣綠島鄉', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 08:53:00', '43'),
('001411', '臺東縣綠島鄉', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 15:28:00', '-54'),
('001411', '臺東縣綠島鄉', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 21:42:00', '14'),
('001411', '臺東縣綠島鄉', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 03:02:00', '-26'),
('001411', '臺東縣綠島鄉', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 09:30:00', '40'),
('001411', '臺東縣綠島鄉', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 16:21:00', '-47'),
('001411', '臺東縣綠島鄉', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 22:37:00', '4'),
('001411', '臺東縣綠島鄉', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 03:40:00', '-17'),
('001411', '臺東縣綠島鄉', '2020-04-01', '3/9', '小潮', '滿潮', '2020-04-01 10:21:00', '35'),
('001411', '臺東縣綠島鄉', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 17:48:00', '-41'),
('001416', '臺東縣蘭嶼鄉', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 02:41:00', '-42'),
('001416', '臺東縣蘭嶼鄉', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 08:57:00', '52'),
('001416', '臺東縣蘭嶼鄉', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 15:36:00', '-55'),
('001416', '臺東縣蘭嶼鄉', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 21:37:00', '23'),
('001416', '臺東縣蘭嶼鄉', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 03:12:00', '-32'),
('001416', '臺東縣蘭嶼鄉', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 09:37:00', '46'),
('001416', '臺東縣蘭嶼鄉', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 16:31:00', '-45'),
('001416', '臺東縣蘭嶼鄉', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 22:33:00', '12'),
('001416', '臺東縣蘭嶼鄉', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 03:54:00', '-21'),
('001416', '臺東縣蘭嶼鄉', '2020-04-01', '3/9', '小潮', '滿潮', '2020-04-01 10:32:00', '39'),
('001416', '臺東縣蘭嶼鄉', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 18:00:00', '-38'),
('001304', '屏東縣恆春鎮', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 02:33:00', '9'),
('001304', '屏東縣恆春鎮', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 09:13:00', '76'),
('001304', '屏東縣恆春鎮', '2020-03-30', '3/7', '中潮', '乾潮', '2020-03-30 17:07:00', '-5'),
('001304', '屏東縣恆春鎮', '2020-03-30', '3/7', '中潮', '滿潮', '2020-03-30 22:29:00', '30'),
('001304', '屏東縣恆春鎮', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 02:55:00', '14'),
('001304', '屏東縣恆春鎮', '2020-03-31', '3/8', '小潮', '滿潮', '2020-03-31 09:50:00', '75'),
('001304', '屏東縣恆春鎮', '2020-03-31', '3/8', '小潮', '乾潮', '2020-03-31 18:26:00', '-4'),
('001304', '屏東縣恆春鎮', '2020-04-01', '3/9', '小潮', '滿潮', '2020-04-01 10:41:00', '72'),
('001304', '屏東縣恆春鎮', '2020-04-01', '3/9', '小潮', '乾潮', '2020-04-01 20:05:00', '-6');

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
-- 資料表索引 `comment_location`
--
ALTER TABLE `comment_location`
  ADD PRIMARY KEY (`comment_id`);

--
-- 資料表索引 `divelocationimages`
--
ALTER TABLE `divelocationimages`
  ADD PRIMARY KEY (`original`);

--
-- 資料表索引 `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`LocationID`);

--
-- 資料表索引 `weather_data`
--
ALTER TABLE `weather_data`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `weather_data`
--
ALTER TABLE `weather_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
