-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.11-MariaDB
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
-- 資料表結構 `blog`
--

CREATE TABLE `blog` (
  `menberId` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `blogId` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blogTitle` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryName` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blogContent` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tagName1` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tagName2` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blogImages` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blogLike` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `blog`
--

INSERT INTO `blog` (`menberId`, `id`, `blogId`, `blogTitle`, `categoryName`, `blogContent`, `tagName1`, `tagName2`, `blogImages`, `blogLike`, `created_at`, `updated_at`) VALUES
('M20030001', 2, NULL, 'William Trubridge專訪', '情報', '前一陣子，有位紐西蘭的潛水家以潛泳的方式，在九小時內橫渡紐西蘭的南、北島，消息一下子攻佔了許多新聞版面。其實潛水界的人對他一點也不陌生，他是大名鼎鼎的William Trubridge，是恆重無蹼下潛自由潛水世界記錄保持人，也是世界自由潛水頂尖大賽Vertical Blue的創辦人。藉由女子的海跨海連線， William Trubridge與讀者們分享他對自由潛水的熱情和哲學。\r\n\r\n你還記得你第一次潛水時的感受嗎？這一切是怎麼開始的？\r\n我人生中第一次潛水是在我兩歲的時候，那時我住在船上，我們從歐洲穿過大西洋、太平洋，前往紐西蘭，到達紐西蘭時我五歲了，所以就在那趟為時差不多三、四年的旅程中，我跳進海裡潛水，這是我潛水的起點。我第一次聽說自由潛水這項運動是在22歲時，從此我每天都潛水，待在水裡，從10米、15米，挑戰愈潛愈深，結果我就愛上了這項運動。\r\n\r\n你從何時開始意識到自己有潛水的天份？\r\n我沒有馬上意識到我有潛水的天份，事實上，我也不認為自己和其他人比起來特別有天份。我覺得能夠幫助我達到今天在潛水職業上的成就，應該是來自於我對這項運動的熱情和所付出的努力。\r\n\r\n你如何找到在水中最好的放鬆姿勢？\r\n你必須要聆聽海水，海水總是在與你溝通，透過皮膚、透過感官。它會給你對於姿勢、流線以及力學上的反饋，告訴你是否正在有效率地游泳。所以如果你去感受你身邊的海水和海流，你會從中得到一些資訊，告訴你自己游的如何。當我在練習時，我總是會試著想像自己是一隻海洋生物，去感受海水，讓自己有效率地移動。\r\n\r\nwilliam trubridge\r\nIgor Liberti [CC BY-SA 4.0 ]\r\n當你在海下102米時，感受如何？\r\n在海下102米時，你會感受到壓力。如果你不做好平壓的話，你會感受肺部和耳朵的壓力。除此之外，在感官方面，在102米處會比較冷、比較暗、也比較安靜，但它卻是跟海平面一樣的水。所以如果你能完全放鬆，適應深度，你的身體會有彈性地調整到適合那個深度的狀態，那麼你沒有理由會感受到不舒服，反而會感到非常平靜和美好。', '海洋', '人物', '19060401_00.jpg', 0, '2019-06-04 00:00:00', '2020-03-26 15:45:57'),
(NULL, 3, NULL, '李霈瑜專訪｜「乘風破浪，不知道明天會後悔嗎？」', '情報', '採訪這天，一身輕便的大霈早早出現；應該說，她是第一個抵達。約在鄰近雙連市場的嘎哩咖啡，在所有人出現之前，她已經自己進門和老闆打了招呼，找了位子坐下，抱著吉他開始哼哼唱唱，怡然自得。彷彿其他人才是明星，她只是個路過的鄰家女孩。\r\n\r\n本名李霈瑜，大霈從大學開始擔任模特兒，2016年以新人之姿試鏡上《瘋台灣》製作人李景白打造的新節目《水下三十米》，成為史上第一個戴全面罩主持、進行水底收音的水下行腳節目，開播一年就拿下2017金鐘獎節目創新獎，她也獲生活風格節目主持人獎提名。\r\n\r\n一身黝黑的肌膚是兩年外景節目送給她的禮物，打從眾人抵達後，她大方地打招呼、閒話家常，自然地填補空氣中的空白，就像平常主持節目一樣。在水下悠遊自得，主持說話充滿個性的她，令人難以想像兩年前試鏡時，她還是個毫無潛水基礎、不懂水肺跟自潛的差別，更不熱衷戶外活動的都市女孩。\r\n\r\n李霈瑜\r\n兩年前大霈還是個毫無潛水基礎、不懂水肺跟自潛的差別，更不熱衷戶外活動的都市女孩。\r\n說跳就跳　一腳踏入水下世界\r\n身為模特兒的大霈儘管不是特別白皙仙氣，卻也維持著職業應有的膚色與膚況。然而喜歡透過工作體驗新東西、也擅長在鏡頭前說話的她，卻從未想過這個「恩災驚」（不知道怕）的她，這次不只是踩空，還一口氣跌進第二人生。\r\n\r\n兩年前，什麼都不會的她仗著水性甚佳與初生之犢的膽量，來到《水下三十米》的試鏡現場，順著製作人指示，沿著池岸邊走邊主持，然後就這樣身子一歪，跳下水深五米的潛水池。這一跳，直接將她從岸上的光鮮亮麗拖進水底深淵。\r\n\r\n「你說潛水是個休閒娛樂？這從來不是我的世界。」\r\n從南港運動中心潛水池試鏡的第一支氣瓶開始，她開始學習潛水，也重新學習主持。從第一次的墾丁開放水域學習，大霈不僅飽受頭暈跟嘔吐之苦，更是24小時都在暈、還同時肩負節目首集主持的雙重壓力折磨。\r\n\r\n「很多人跟我說，妳的工作很夢幻耶，可以四處潛水，我就是『呵呵。』」直率的她毫不掩飾潛水加諸在她身上的苦難與折磨。從第一次學習時無間斷的暈和吐，到後來無數次拍攝遭遇的颱風、亂流、氮醉到斷片，水下的壓力與主持壓力雙重襲擊，一度將她的信心摧殘成碎片。最近一次的綠島，下潛40米的她氮醉到身心俱疲，一上岸就崩潰大哭。製作人問：「為什麼不舒服妳還不講？」她卻說：「我不想輸……」\r\n\r\n從不在工作上示弱的她，最不能接受的就是團隊都下水了，她卻錯過沒有跟上。', '鄰家女孩', '吉他', '18091301_00-1392x928.jpg', 0, '2018-09-13 00:00:00', '2020-03-26 15:52:24'),
('M20030001', 4, NULL, 'KID 林柏昇專訪｜混著海水的血液 仰賴藍藍的來治癒', '情報', '多數人對KID的印象來自這兩年「綜藝玩很大」節目裡，瘋狂敢玩的瘋面仔。二度連莊金鐘獎益智及實境節目主持人獎的他，早在2003年就在Channel V自製的「CIRCUS ACTION」大放異彩。節目裡各種瘋狂、暴衝、敢玩的因子，是他為人注目的重要特質。\r\n\r\n採訪這天，天空飄著細雨，KID一行人抵達咖啡店，人未到聲先至，還沒坐下就忙不迭為塞車遲到而道歉。禮貌，是他給人的第一印象。興許是主持工作的養成，又或是天生的聚會救星，打從他一坐下起，空氣裏就不再有空白。他笑說：「我真的很怕安靜，只要聚會出現空白，我就會忍不住補上。」而他的填補也非空穴來風，除了源源不絕的話題，也總能自帶笑料與自嘲。\r\n\r\n「玩水對現在的我來說，已經是沒有辦法失去的一件事。」訪談才開始，他就一字一字，彷彿在心中練習過無數次的自白，要好好告訴別人「水」在他生命中的重要性。下一秒又話鋒一轉，「像我現在就好想去玩水，還是我去外面淋雨好了啦！」說著說著，就作勢要往外衝。像這樣，無時無刻維持氣氛、難以獨處的他，卻在碰上「藍藍的」海洋時，找到難得的平靜，一個人整天看著海也沒問題。\r\n\r\nKID林柏昇\r\n林柏昇在碰上「藍藍的」海洋時，找到難得的平靜，一個人整天看著海也沒問題。\r\n生死瞬間 天生潛者也不能小覷海洋的威力\r\n近年臺灣掀起一陣潛水風氣，熱愛戶外活動的KID，投身潛水看似理所當然，然而真正理所當然、也鮮為人知的，是他血液中根本混著海水的事實。\r\n\r\n「小時候去海邊，穿著內褲就下水了，誰管裝備啊！」出生花蓮，從小就跟著鄰居朋友在南濱玩耍，跳下水就能玩上一整天，釣魚、抓龍蝦更是KID兒時的日常。自小有花蓮的海陪伴，游泳和潛水於他簡直與生俱來，直到長大成人、離開花蓮，都仍維持著夏天泡在水裡的習慣。\r\n\r\n但他也不好意思的說，這種理所當然的態度跟天生的愛玩敢衝，導致他總是一頭熱往水下衝，像是去小琉球看破沉船，他一眼瞄到船裡有隻巨大石斑，就興奮的往下衝，遠方的教練猛敲鐘也恍然未聞，直到教練衝下來一把將他抓上岸，才驚覺已經下到43米。又或是某一年著迷於拍照，一古腦兒買了一堆頭套跑去綠島玩水肺，下潛時脖子一緊，想抽掉頭套卻卡住，隱形眼鏡掉了，還嗆到水，整個人陷入慌亂的生死一瞬間。\r\n', '當兵', '專訪', '19041501_00-1392x928.jpg', 0, '2019-04-15 00:00:00', '2020-03-26 15:48:56'),
('M20010002', 5, NULL, '最推薦的日本自潛島嶼─宮古島探索之旅', '情報', '宮古島\r\n位於沖繩石垣島東邊，由五座島嶼：宮古島、伊良部島、下地島、池間島、來間島，彼以跨海大橋連接組成。除了知名的宮古鹽與宮古牛之外，宮古島最富盛名的就是它的潛水環境，黑潮流經加上珊瑚礁石灰岩地形，讓宮古島的海水透明度高、海底地形多變、魚種豐富還擁有美麗沙灘。\r\n\r\n冬季的宮古島陸地氣溫舒服，水溫約22度，海水能見度更勝夏天，更重要的是機票又便宜。雖然因為東北季風關係，部分潛點無法下，但是仍舊有很多精彩潛點可以探訪。\r\n\r\n另外如果妳很想參加潛旅，但是還沒有上過自由潛水課的話，我們也可以協助你學習自由潛水並取得合格證照。\r\n\r\n日本最美海灘\r\n\r\n宮古島\r\n\r\n青洞自由潛水\r\n\r\nwaiwai beach\r\n\r\n宮古島介紹：\r\n潛進沖繩宮古島(上)： https://bit.ly/2zOORgS\r\n潛進沖繩宮古島(下)： https://bit.ly/2LwaxDX\r\n八重干瀨潛點補充： https://bit.ly/2LBwX5V\r\n\r\n超精心規劃自由潛水探索行程\r\n這是一趟專為自由潛水員設計的潛旅，與當地的自由潛水教練兼潛導合作開發。讓你在宮古島潛好、潛滿，更潛得安全。\r\n\r\n合作教練：\r\n\r\n小  孫（AIDA 教練）\r\n\r\n2020年開團日期\r\n暫無，若你有四人以上，可以直接為您安排包團潛旅\r\n\r\n八重干瀨\r\n\r\n以下是潛水行程（實際行程依天氣、海況調整更動）\r\nDay 1─\r\n\r\n14:30宮古島機場集合（可利用Skyscanner查機票），接機帶往住宿點。下午前往中之島海岸作首日暖身潛水，讓教練了解團員潛水能力，當作潛伴分配與分組參考。\r\n\r\n中之島\r\n\r\nDay 2─\r\n\r\n上午：下水游往青洞。大約100米的路程，沿途是美麗的海底地形。\r\n\r\n下午：私秘潛點A，只有當地人才會知道的潛點，豐富的珊瑚與美麗的洞穴等你挑戰。\r\n\r\n宮古島藍洞\r\n青之洞窟\r\nMiyakojima freediving\r\n\r\nDay3─（四天團無day3行程）\r\n\r\n上午：私密潛點B，在穿過一個有點挑戰度的洞穴後（當然，你也可以選擇在海面游過去），是一個深20多米的峽谷地形，讓你可以訓練或玩樂。最後游出海灣，延著直指30多米深的海岸線，游到乙地上岸，或許途中會遇到鯊魚也說不定。\r\n\r\n下午：找尋白鳥崎底下的海底拱門，拍照玩耍兩相宜。\r\n\r\n或者：\r\n\r\n搭船前往八重干瀨船潛(', '想住在那', '推爆', '18091901_00-1392x928.jpg', 33, '2020-01-30 15:20:23', '2020-03-26 15:20:23'),
(NULL, 6, NULL, '環太平洋自由潛水泳池賽/PRC 2020 coming so', '情報', 'Pacific Rim Cup 2020 is in the works!!!\r\nSAVE THE Month 😆\r\nApril 2020\r\nMore info to be announced soon.\r\n\r\n—\r\n\r\n在2020年的第一天，我們很開心地宣布，環太平洋自由潛水泳池賽將在今年四月舉辦第二屆。\r\n\r\n為了讓選手有更棒的比賽環境，我們正在尋找最佳的泳池賽場地，近期會有公布進一步訊息，請大家先把四月的周末留給這比賽啊 😆\r\n\r\n回首過去一年，我們除了舉辦第一場環太平洋自由潛水泳池賽外；10月時，也與多位臺灣選手，一同遠征地中海賽普勒斯的自由潛水深度賽。除了採訪、報導國際性賽事，我們也同時在取經、學習，想著如何把一場比賽辦得更好。\r\n\r\n今年的Pacific Rim Cup除了繼續推向國際化、場地會更加專業外，同時我們也想告訴大家，這是一場屬於自由潛水人的大趴踢～ 不管妳／你是老手或菜鳥，年方18或是68，希望大家帶著潛伴、親朋好友，一起來參與、一起來加油，一起來參加這場年度最盛大的自由潛水趴踢！\r\n\r\n2020，我們回到自己的主場。\r\n\r\n四月，我們在家比國際賽！', '我要拿冠軍', '期待', 'PRC2020.gif', 0, '2019-11-19 15:00:56', '2020-03-26 15:00:56'),
('M20030001', 11, NULL, 'Shinya Oi 專訪｜從海豚身上學習單蹼的日本第一', '情報', 'Shinya Oi（大井慎也）是擁有三項日本國家紀錄與兩項亞洲紀錄（註1）的自由潛水選手，從去年首度來臺灣參加Pacific Rim Cup 2019，接著他來參加11月份的OK Challenge比賽，而今年的Pacific Rim Cup 2020 他當然也不會錯過，緊密的造訪臺灣，似乎已經喜歡上這塊土地。\r\n40歲的Shinya Oi，目前正處在巔峰，在這兩年比賽他持續地在打破自己的紀錄。雖然他看似沉默寡言，但其實私底下不僅健談，對於其他選手的問題，他也不吝於分享自己的練習心得。\r\n你可能已經注意過這位總是帶著家人、小孩一起來比賽的日本選手，這次我們就透過一些問題，讓大家更了解這位亞洲第一吧。\r\nShinya Oi \r\n註1：Shinya Oi目前的最佳成績為：STA 7:05、DNF 170米、DYN 227米、DYNB 181米\r\nQ1. 什麼時候開始接觸自潛的呢？\r\n以前在沖繩當水肺教練，2011年搬回自己的家鄉鈴鹿市，然後開了間潛水店。會接觸自由潛水是因為朋友找我一起玩，那時是2012年底、2013年初。在沒有上課的情況下，單純與朋友訓練三個月，2013年參加第一場自由潛水室內賽就得到靜態閉氣5分半，動態平潛125米與無蹼動態平潛75米，還不錯的成績。\r\nQ2. 第一次比賽的心情？以及第一次拿紅牌的經驗？\r\n2013年第一次比賽時，心情很緊張，尤其是我的前一位選手發生很嚴重的BO。\r\n而第一次拿紅牌則是2014年再去比同一場比賽，那時因為水面流程沒有作好，所以靜態閉氣項目拿了紅牌，這也是目前為止唯一一張紅牌。\r\nQ3. 比賽時，在什麼樣的狀況下會決定起身呢？\r\n由於平常都會紀錄SpO2（動脈血氧飽和度值），大致上可以感覺到身體目前的血氧量狀況，同時以平常訓練的距離為基準，會知道何時該結束起身。但偶爾也會有突然地覺得不舒服，提早起身的情況，但大致上因為平常的訓練嚴謹，所以可以抓得很準。\r\n在11月份臺灣的OK Challenge比賽，由於池底有數字，因此很好判斷知道何時已經到了平常訓練的距離；沒有數字的話就會數自己踢幾下來知道自己大概游了幾米。例如挑戰日本紀錄時，在200米轉身後，我知道再踢10下就可以破紀錄。\r\n', 'Shinya Oi', '大師級', '20022001_00.jpg', 0, '2020-03-26 15:37:00', '2020-03-26 15:37:00'),
('M20030001', 21, NULL, '約潛前須知：自潛潛伴間應注意的法律責任', '教學', '近年來自由潛水在臺灣蓬勃發展，越來越多人像我一樣，在工作閒暇之餘，喜歡在大海中追尋「一口氣」的自由，更想挑戰自我體能極限，於是開始認真地上網或透過朋友介紹，找尋一位適合自己的教練學習自由潛水，經過各階段的課程安排，及教練仔細地指導，終於通過考核取得了專業自由潛水員的執照，但是最近卻在網路上或潛伴間LINE群中，聽聞很多自潛同好間偶有奇人軼事，諸如：被水母、礁石紋身、烈日曬傷、暈浪嘔吐餵魚等自潛人引以為傲的榮譽事蹟不勝枚數，然而其中令人惋惜難過的是，自潛同好在海裡甚至是室內深水池發生「BO」或失蹤等不幸意外。\r\n\r\n這個時候就會有一些比較熟識的自潛夥伴來詢問我，想知道像這類因為「BO」或失蹤等意外發生時，會不會有法律責任，於是我就利用從事律師多年學到的技能，從司法院的法學資料檢索系統整理相關法院判決，在這邊統一跟大家說明，希望各位自潛同好能多多留意。\r\n\r\n潛水意外\r\n近年來越來越多人像我一樣，在工作閒暇之餘，喜歡在大海中追尋「一口氣」的自由，更想挑戰自我體能極限\r\n如前面提到的，無論大家是選擇AIDA、CMAS、DIWA、PADI、RAID(WSF)、SSI、Apnea Total、Molchanovs中哪一種教學系統，只要通過了考核取得執照，就代表正式成為專業的自由潛水員（延伸：台灣自由潛水教學系統比較）。而且在上課及進行考核的時候，相信大家一定都會聽過潛水界的名言：「Dive alone, die alone！」（延伸：那次讓我差點致死的淺水昏迷），這句話象徵著潛伴的重要，何況水中救援、水面拖曳及潛伴戒護制度等安全救援訓練，更是取得自由潛水執照的必備考核項目，雖然安全救援訓練的授課內容及考核標準，會因各教學系統中不同等級而有差異，但是潛伴戒護的觀念卻是教練時時刻刻耳提面命或同好間時常相互提醒的鐵律。\r\n\r\n保證人地位\r\n所以當取得自由潛水執照後，相約其他同樣具有執照資格的潛伴一起潛水時，因為彼此都經過各教學系統考核認證授予執照，就意味著，無論這次一起下水的潛伴是具有執照的教練或自由潛水員，雖然會因為教練、潛水員身分及執照等級不同，形成自由潛水能力上之差異，但都無法否認的是，教練或自由潛水員各自都具備相當程度的安全救援觀念及能力，而具有「危險共同體」身分，相互間就產生危難救助的義務及能力，如此就符合刑法上所謂的「保證人地位」中的「保護義務保證人地位」，意即不論危險', '保險', '律師', '19082201_00-1392x928.jpg', 45, '2020-03-26 14:46:35', '2020-03-26 14:46:35'),
(NULL, 22, NULL, '第一次的海外潛旅，獻給夏威夷', '教學', '說到夏威夷，腦子裡直覺冒出的詞大概是：草裙舞、彩虹、衝浪、沙灘、珍珠港。\r\n\r\n在這趟旅行後，發現夏威夷其實有很多平易近人的潛點，尤其以浮潛著名的景點很多，生態豐富，有很多魚群或大型生物可以看，對於初學潛水的新手或是只想浮潛玩水的人來說，都是不錯的選擇。 \r\n\r\n我們這次一行五人來到夏威夷自駕旅遊，只有我和張先生學過自由潛水，其他人都沒有潛水經驗，再加上我們是第一次出國潛水，所以在安排行程上，都是以深度不深、容易上下岸、可以浮潛的地點為主。 \r\n\r\n夏威夷的觀光島嶼有四個，分別是可愛島、歐胡島、茂宜島、夏威夷島（又稱大島），檀香山國際機場位在歐胡島，是夏威夷的主要機場，從台灣有直飛航班。這趟行程大多數在歐胡島，只有其中三天飛到最南邊的大島玩 （後來深深覺得大島只玩三天根本不夠），兩個島嶼的風情截然不同。 \r\n\r\nHawaii map\r\n\r\n歐胡島 \r\n北岸景點 \r\nShark’s Cove \r\n位於歐胡島北岸的浮潛秘境，觀光客不多，被礁岩圍繞成一個天然潮池，最深只有2-3米，是我們帶朋友來小試身手的第一站。陽光灑下的淺水域很溫暖，礁石地形孕育出豐富的熱帶魚群，比以往看過的都還要大隻。我們在水裡追著魚跑，不知覺也待了一個上午。 \r\n\r\n沖洗處、廁所：有。 \r\n停車資訊：有免費停車場。\r\nShark’s Cove 魚群\r\n\r\nShark’s Cove 浮潛\r\n\r\nWaimea Bay Beach \r\n午餐過後，來到每年冬季的衝浪勝地，也是Eddie Aikau巨浪衝浪大賽的舉辦地。夏天則是風平浪靜，很適合潛水。綿延的白沙灘左邊有知名的跳水景點。把朋友留在岸邊玩沙跳水，我們就直接往外踢了，底下是一整片白沙地，隱約會看見一群閃爍的魚群，還有藏身在沙裡的螃蟹。 \r\n\r\n10米左右的深度，高清無流，雖然沒見到太多生物，但海況很棒，我們在這裡下了好幾潛，每一潛都很舒服。 上岸後靜靜的欣賞夏威夷日落，感受不斷變化顏色的天空，結束完美的一天。 \r\n\r\n沖洗處、廁所：有。 \r\n停車資訊：有免費停車場，但位子不多。\r\nWaimea Bay Beach 沙地\r\n\r\n夏威夷自潛\r\n\r\nWaimea Bay Beach 夕陽\r\n上岸後靜靜的欣賞夏威夷日落，感受不斷變化顏色的天空，結束完美的一天\r\n西岸景點  \r\nMakua Beach \r\n這天我們起的很早，雲層有點厚，雨一陣一陣的 (夏威夷的', '大家都去哪邊潛', '夏威夷', '20012801_01.jpg', 0, '2020-01-08 22:07:40', '2020-03-26 15:07:40'),
(NULL, 31, NULL, '帶了面鏡臉回家｜帛琉自由潛水潛點分享\r\n', '潛點', '帛琉(Palau)是我嚮往很久的地方，不少朋友在那當過導遊，他們總是跟我說，有機會一定要去潛水看看，那邊海底滿滿的都是魚，自由潛水就可以看到很多東西。但與帛琉的緣分，一直錯過，直到在那當導遊的朋友都陸續回來台灣了，我還是沒去。\r\n\r\n但今年四月，有幸跟了面鏡臉的團，在兩位教練：小帥與Alex的帶領下，終於是踏上帛琉。\r\n\r\n台北還是涼快的四月天，但是走出機艙時，迎來的是燥熱的空氣。帛琉四季如夏，雖然有乾雨季之分，但是雨季時其實也只是會下陣雨而已，所以整年都適合前往。若真要說有比較不適合的季節，就只有夏天時', '旅遊', '天氣好', '19073001_00-1392x928.jpg', 23, '2020-03-23 15:59:47', '2020-03-23 15:59:47'),
('M20010002', 32, NULL, '一年只開放三個月的菲律賓潛水天堂｜Tubbataha船宿浮生', '潛點', '作為潛水教練，時常是幸運的。像是長駐在Moalboal時，只要想看，背上氣瓶走五十步、游二十米，天天都能見到沙丁風暴；又例如在Tubbataha（圖巴塔哈）的潛水船上導潛，可以連續三個月幾乎每週都見到野生鯨鯊。\r\n\r\n作為潛水教練的幸運，是不需要把「看到什麼」的希望寄託在短暫的特定幾天之內，孤注一擲。時間站在我們這邊，我們有充分的籌碼能駐足等待。可是世事無常，大海更是沒有恆常不變的規律，就算是用時間換機率的我們，也有連環貢龜的時候。\r\n\r\n佛系法國水底攝影師 Anthony\r\n鯨鯊對見多識廣的潛水人來說，其實好像算不上特別難得。可是那一趟，不知道為什麼，我們幾乎什麼「大物」都沒看到。不意外地見了幾次傑克風暴、海狼群，以及各種礁鯊(Reef Shark)，還算幸運地在清潔站碰見鬼蝠魟(Manta Ray)，但始終沒遇見燕魟(Eagle Ray)、黑斑條尾魟(Marbled Ray)，也沒有虎鯊(Tiger Shark)、鎚頭鯊(Hammerhead Shark)；如果還沒能跟鯨鯊共游個一、兩次，簡直像熬夜苦讀還考零分，讓人自我懷疑到底為了什麼而做了這一切呢？\r\n\r\n為期七天、六夜、十九潛的一趟船宿行程，來到了最後一個潛水日的最後一潛，眼看船上四個潛水小組就要集體整趟貢龜了，我們卻山窮水盡無計可施。甚至裝瘋賣傻地拿起用來向Tubbataha巡邏站回報位置的無線電，呼叫鯨鯊。這種不是辦法的辦法，當然，根本沒用。\r\n抱著投降的心情，不敢再在簡報中說「有機會看見鯨鯊」，我帶著我的潛組坐上小氣艇，從母船出發前往這一趟的最後一個潛點。小氣船駕駛把我們越載越遠，我呆望著前方的環礁懷疑人生；因為不知道還能如何判斷和決定，所以一路上都沒有回頭向駕駛指示具體要下水的位置。\r\n\r\n一直到幾乎就要超過簡報潛點範圍的地方，小氣船駕駛試探性地對我點了個頭，傳達：「就這裡吧？再走就超過潛點了」，我也點點頭，心想：「隨意吧，只要還在潛點範圍內都行」。\r\n\r\n誰也沒想到，下水的第五分鐘，一隻鯨鯊猝不及防地撲面而來。真是人算不如鯨鯊算，這甚至不是平常常見到鯨鯊的潛點。', '好美', '放鬆', '20020601_00.jpg', 0, '2020-03-23 15:52:30', '2020-03-23 15:52:30'),
('M20010002', 33, NULL, '菲律賓的秘境天堂─愛妮島(El Nido)潛水去', '潛點', 'El Nido 或稱為愛妮島（愛尼島），早在我剛開始學自由潛水時，就已耳聞。當時的教練常會說，菲律賓有一個叫巴拉望的狹長島嶼，不僅是玩水天堂，還有個世界七大奇景之一的地底河流。而巴拉望最美的地方是在北邊，一個從機場下機後，還得乘車6個小時，才能抵達的菲律賓秘境──愛妮島(El Nido)。\r\n\r\n但這個秘境隨著這兩年愛妮島機場開通，不需要從公主港機場拉車上去後，對於台灣而言，愛妮島再也不是海天之遙。愛妮島只是音譯，她不是一座島嶼，而是巴拉望北端的一處有40多個島嶼的行政區。在今年一月，我終於與朋友一同飛去，親身探訪這個慕名已久的地方。\r\n\r\nEl Nido\r\n\r\n從菲律賓克拉克機場起飛，一個多小時後蔚藍的海面上出現幾座島嶼，我們來到愛妮島了。落地後，走出簡單卻有渡假風的機場，Rachel已經在機場外等我們。Rachel是已經在愛妮島生活一年多的台灣導遊，同時也是位自潛員，嚷著要我們來愛妮島找她玩已經好一陣子。\r\n\r\n第一天沒有出海行程，Rachel帶我們在鎮上晃晃。愛妮島市區（姑且這麼稱呼吧）很小，用雙腳就可以走完。與其他去過的菲律賓地區相比，這裡相對乾淨、舒適，街上外國人大多是金髮碧眼，亞洲遊客還不多。\r\n\r\n白天許多餐廳都休息中，因為遊客都出海去了，等到下午四點後，船一艘艘回來，鎮上開始變熱鬧。但雖然人潮變多，卻不擁擠。大體而言，愛妮島還是觀光破壞很小的地方。此外，愛妮島已經全面禁用塑膠吸管，不管是餐廳、或是小販，提供的通通是竹吸管，出海時也禁帶保特瓶。在這麼偏遠又看似落後的地方，環境保護意識卻走得這麼前面，實在讓人佩服。\r\n\r\n愛妮島\r\n\r\n宛如逃難的出海場景\r\n早上九點，我們一群人站在海灘上等待接我們的船到來。由於螃蟹船只能在離岸還有點距離的地方下錨，因此我們必須涉水一段路上船。愛妮島的行程都是搭船出海，海灘上這時聚滿遊客。大家頭頂行李，依序上船的畫面，像極了逃難或是大撤退的場景。', '愛妮島', '美麗', '19021301_002-1392x928.jpg', 0, '2019-02-13 00:00:00', '2020-03-26 15:55:42'),
(NULL, 34, NULL, '加拉巴哥群島GALÁPAGOS海上冒險樂園', '潛點', '世界十大潛點可以任人說，無論評估的標準為何，加拉巴哥群島在許多Diver的心中，始終佔有無法抹去的份量，是許多人的夢想中的聖盃，一生絕對要朝聖一次；在航行時間、費用、體力、潛水技術、裝備有著一定門檻，或許是讓加拉巴哥有著不敗傳說的原因。如果要問我，這趟旅程是否值得？這與每個人的價值觀和目的有關，我認為世界上每一個地方、每一趟旅程，都具有獨一無二的意義，但能在這個在1972年第一批被列入世界自然遺產中穿梭，是人生中數一數二的體驗。\r\n\r\n不管用中英文說了多少次「加拉巴哥群島」，我的朋友永遠記不得我到底去了哪裡。一般大眾對加拉巴哥的印象，可能是來自於2017中國漁船違法獵鯊的新聞；也可能是來自BBC超過五百萬次觀看，一段鬣蜥被蛇追逐的驚險動作片；或者，你有許多熱愛潛水的朋友，口中說的是辛苦，語調卻是壓抑不住的興奮，你聽到的全是令人羨慕的奇遇。有鑑於動身前，難以找到加拉巴哥的相關資訊。因此，將自身蒐羅的資訊整理條列，一併包含飛越半個地球的親身經歷，希望能為想去的人做些準備，讓不會去的人，假裝自己去了一趟。\r\n\r\n關於加拉巴哥群島，你應該知道的十件事\r\n① 所屬厄瓜多：\r\n厄瓜多位於南美洲哥倫比亞下方，而加拉巴哥群島距離厄瓜多海岸約1000公里遠，與GUAYAQUIL(瓜亞基爾)航程約2小時，與台灣時差-14小時。\r\n\r\n② 1835年啟發達爾文進化論的地點：\r\n因為其特殊的地理環境和封閉性，透過對島上生物的觀察，成為了進化論的緣起。雖然進化論已被推翻，但這裡仍充滿對達爾文的紀念。\r\n\r\n③ 加拉巴哥是一個群島：\r\n打卡時可能會打到官方名稱「科隆群島」，歐洲殖民者稱加拉巴哥群島，總共有7個大島，23個小島，50多個岩礁，整個群島都由火山噴發而成。最古老的島Española島形成於350萬年前；最年輕的Fernandina島是100萬年前形成且目前仍在擴張中。\r\n\r\n④ 整個群島97%都屬於國家公園：\r\n繼1959年宣布成立國家公園，2016將保護區延伸至北邊的狼島和達爾文島。\r\n\r\n⑤ 最近一次的火山爆發在2015年：\r\n發生在加拉巴哥的最大島Isabela島，雖然對當地居民沒有威脅，但一度威脅到粉紅陸鬣蜥(Pink Iguana)生存。\r\n\r\nPink Iguana\r\n圖片來源：https://goo.gl/tbX4ft', '世界級潛點', '海底秘境', '18080601_10-1392x928.jpg', 0, '2019-08-06 00:00:00', '2020-03-26 15:57:22'),
('M20030001', 35, NULL, '夕陽斑斕、珊瑚蓊鬱，來澎湖南方四島自潛吧\r\n', '潛點', '在湛藍海水裡，兩隻美人魚正團團包圍一個吐著泡泡的水肺潛水員，他心中不知道是困惑還是其他不為人所道的情緒，他的手中，還握著剛才拿來作案的 GoPro。在導潛沒注意到的角落，潛水員拿 GoPro 桿子敲了敲三十公分長的硨磲貝，牠嚇得趕緊關起來，他又接著想要橇開牠。被正要下潛欣賞這顆紫色硨磲貝的兩個自潛員注意到，氣到潛下去瞪他、圍著他要讓他知道這樣欺負海洋保育類動物是不對的。後來學到一招，在十米深度內，下次就把他 BCD 充氣讓他浮上水面，就能跟他在水面上溝通（吵架）了！（小朋友不要學）\r\n\r\n硨磲貝，非當事貝', '藍天', '美人魚', '19070601_00-1392x928.jpg', 0, '2020-02-06 15:59:47', '2020-03-23 15:59:47'),
(NULL, 36, NULL, '暈浪─即使不是初學者也會遇到的敵人\r\n', '教學', '不知道各位讀者愛上自由潛水的原因是什麼，筆者身邊的朋友不是男生就是女生，大部分都是想挑戰自己，以及想在海裡放鬆悠遊（的照片）。在島上（台灣），戲水季節的印象，總是配著高掛的艷陽，許多初階的朋友便是從此刻踏入自由潛水的圈中（坑）。\r\n\r\n玩了幾個月，或上過了初階課程，潛水的表現小有起色，但此時潛季也隨著夏末逐漸步入尾聲，隨之而來的冷風讓海面好不平靜，許多朋友就會在秋冬這兩季遇到一項阻礙──鬼門開……好啦是暈浪。\r\n\r\n海上夕陽\r\n\r\n暈浪是什麼啊？會被撞到地上嗎？暈浪正式點的名稱為動暈症(Motion Sickness)，也就是暈車、暈機、暈船、暈雲霄飛車以及剛提到的暈浪。這些都是因為掌管平衡的內耳，接收到跟視覺不相符的現象。相信很多人一定有類似的經驗，不管是自身感受或是見到他人的反應，動暈症的最大症狀不外乎就是嘔吐。\r\n\r\n筆者從大學時期才開始接觸海洋（不是去海邊散步那種接觸），從一開始每回必吐的船釣，到現在在海上完全免疫（但搭車玩手機還是會暈車），在此筆者分享對於暈船、暈浪的自身感受及克服的方法。\r\n不同程度的浪況會影響暈浪的感受，從最輕微開始，你會感到頭暈失衡，但這在晃動的海面上不容易感受到。再來會覺得輕微耳鳴以及唾液增加，接下來胃部就會開始有緊縮的感覺以及焦慮盜汗，最後隨之而來的便是有嘔吐噁心感。\r\n\r\n動暈症狀嚴重的人，可能船一出港，或是游到潛點要開始潛水的時候，馬上就有想嘔吐的感覺了。誰還跟你頭暈耳鳴之類的前戲，都直接張口餵魚的就是了。\r\n\r\n怎麼練到完全對暈浪免疫的？\r\n要避免／減緩暈浪及暈船的方式就是降低視覺與平衡的衝突，所以最有效的方法當然就是回到岸上啦……不過很多時候我們沒辦法這麼做，比如說教練很兇不讓你上岸，這時候你得學以下全部幾招：\r\n\r\n1.趴上浮球讓頭露出水面\r\n脫下面鏡讓你臉上的感官接收到陸地上的感覺，固定看著遠方的一個標物，都會減緩暈浪的感受\r\n\r\n2.準備暈船藥\r\n這是非常有效的方法\r\n\r\n3.當真的很想吐的時候，無保留地吐出來吧\r\n嘔吐過後會讓你很有精神，暈浪的感覺會大大消失，但這不是長久有效的，再過幾十分鐘可能又會有暈浪的感覺\r\n\r\n當然坊間也有很多方法，比如藥布、酸梅、綠油精等等的偏方，大家可以試試看，但筆者信仰科學，試過一次薑茶也是吐就再也沒用過了。\r\n\r\n4.若你在交通船上，去睡覺\r\n閉上眼睛，睡覺也可以避免暈船的狀況。', '懷孕', '寶寶', '18032001_01-1392x928.jpg', 111, '2019-12-17 14:57:40', '2020-03-26 14:57:40'),
('M20010002', 37, NULL, 'Safer Dive：懷孕時可以潛水嗎？', '教學', '懷孕時可以潛水嗎？\r\n在謎底揭曉之前，好像得先解釋一下，為什麼這個問題無法單純地以YES or NO來回答。\r\n\r\n從實證醫學的角度，為了回答孕期潛水的相關問題，我們可能需要進行以下研究：\r\n\r\n招募懷孕婦女參加實驗，在她們接受家族病史、個人病史詢問、身體檢查……之後，篩選出4000位健康的孕婦 (Ref. 7)，並抽籤進行以下分組：高強度潛水組1000人、中強度潛水組1000人、低強度潛水組1000人、懷孕期不潛水組 （即對照組） 1000人。\r\n\r\n接著請參加者依據自己的組別所設定的潛水頻率、深度、時', '懷孕', '寶寶', '0001-DSC09940-1392x928.jpg', 0, '2020-01-14 14:53:29', '2020-03-26 14:53:29'),
('M20030001', 41, NULL, '訂做一件防寒衣，讓潛水不再有冬天', '裝備', '當妳學完自由潛水一陣子後，就會發現防寒衣的重要性。不僅能保暖，也可防曬與保護身體，讓整趟潛水更舒適。在去年冬天，我們刊了一篇這個冬天，八個妳不能錯過的防寒衣品牌。一年過去，市面上又增加不少自由潛水防寒衣款式。這次我們針對提供防寒衣訂做服務，介紹台灣在地品牌，或在台灣有代理商的訂做防寒衣給讀者。\r\n\r\n雖然大多品牌的防寒衣公版尺寸都已經可以符合一般人的需求，但如果你的身材比較特別，或者是追求極致合身防寒衣的人，那麼仍然可以參考以下幾家的防寒衣訂做。買到一件適合的防寒衣，可以讓你一年四季都能舒服地潛水。\r\n\r\nMOBBY’S\r\nMOBBY’S是來自日本，由自由潛水FIM世界紀錄保持人木下紗佑里所代言的頂級防寒衣品牌。代表日本精緻工藝的防寒衣上在細節上自然有許多要求，在製版上不僅考慮身形，更考量肌肉延展／伸展方向，讓防寒衣就像第二層皮膚一樣無負擔。\r\n\r\n在訂製尺寸方面MOBBY’S依循JWMA （日本防寒衣生產協會）所規範的方式量身，共有30-35個尺寸要量。\r\n\r\n要量這麼多尺寸，是否覺得麻煩又擔心出錯？\r\n\r\nMOBBY’S引進3D人體掃描機輔助，可以在15秒內掃描出身形，再以人工輔助測量幾個機器無法測準的部位，就可快速又精細地完成尺寸測量。而這樣的3D人體掃描機輔助，台灣就有華人地區的唯一一台。\r\n\r\n3D人體掃描機\r\n\r\n3D人體掃描機\r\n3D人體掃描機掃描完的資訊\r\n以往MOBBY’S的價格總讓許多消費者覺得消費不起，但今年MOBBY’S推出新款的外布面／內Open Cell的的平價款自潛防寒衣：由日本原廠打版再由授權認證的台灣工廠生產，有兩件式也又一件式可選。目前只有黑色款，售價16000元\r\n\r\nMOBBY\'S\r\n\r\n款式參考\r\n2mm RT/CS(SCS)  一件式／兩件式  27800元\r\n3mm SS/SN  一件式／兩件式          27800元\r\n3mm FHN/CS  一件式／兩件式        16000元\r\n訂做等待期約1個月內。\r\n\r\n購買資訊：MOBBY’S Taiwan\r\n\r\nElios\r\n來自義大利，已經有50年歷史的Elios是一個十分成熟的自潛防寒衣品牌，也是許多國外自由潛水選手常用的品牌。防寒衣有分競賽型、漁獵型及普通型，這些分類是以潛水布的材質來區分。競賽型通常會使用Yamamoto滑面布料；漁獵型胸前會有硬板設計', '量身打造', '荷包哭哭', '18121301_02.jpg', 76, '2019-12-13 00:00:00', '2020-03-26 16:06:28'),
(NULL, 42, NULL, '我們都是最美的自信女孩，台灣比基尼品牌駕到', '裝備', '隨著夏天的腳步來臨，購買比基尼的季節又到了。但在沉醉於一件件漂亮泳衣的同時，難免有很多掙扎，女孩們有太多事情要擔心了。像是因為害怕上圍不夠豐滿而沒自信穿比基尼；或是穿了比基尼之後沒有辦法自在的玩水，總是擔心走光；以及買進口的泳衣在價錢上又會有諸多的考量。為了解決這些問題，台灣一些女孩以這些我們在買泳衣時會遇到的問題為基礎，為大家量身打造出適合我們台灣女性的泳衣，在這裡我們將介紹SurfAce、mounmoun、muii、ulaswin、Yummygang這些台灣自行開創的比基尼品牌：\r\n\r\n────\r\n\r\nSurfAce\r\nSurfAce的創辦人Eileen是一位瑞士與台灣混血的女孩，她在大學的時候來到台灣讀書並且開始接觸衝浪，但在她深深愛上衝浪的同時，卻苦於沒有合適的比基尼。她覺得困惑，台灣是個島嶼國家，紡織業也做的不錯，相當適合比基尼的穿著。但台灣的比基尼的風格卻太過保守，泳衣常常會帶有鋼圈，讓愛玩水的女孩總是擔心曝光，但是買進口的又不划算。由於這些因素，讓Eileen決定自己創辦品牌。\r\n\r\nSurfAce\r\n\r\n在風格上SurfAce去年以火、水、氣、土四大元素、環保為題，而今年的比基尼則是以代表海與天空的藍色為主。在版型上今年SurfAce也有很多的新的展出，下半身的版型多了丁字褲的款式，上半身則多了削肩的新品。除此之外還推出防水母衣、防磨衣、連身泳衣等，Eileen還預告最近會推出男生的防磨衣喔！\r\n\r\nSurfAce泳衣\r\n\r\nEileen說在下半身的版型上台灣女孩的接受度越來越高，過去許多女孩不敢穿的丁字褲，現在卻變成很多女孩趨之若鶩的產品，Eileen為此感到很開心，她認為自信對女孩來說是最好的穿搭。\r\n\r\nSurfAce\r\n\r\nSurfAce目前在高雄西子灣有店面，如果想親自試穿的話可以到現場看看喔~\r\n\r\n連結網址：https://www.surfaceapparel.com/\r\n\r\n※輸入女子的海折扣碼：msocean，購買可折抵100元', '比基尼', '海邊', '180515_10-1260x840.jpg', 67, '2019-05-16 00:00:00', '2020-03-26 16:02:10'),
(NULL, 43, NULL, '碳纖長蛙點點名，12雙蛙鞋的泳池平潛測試分析\r\n', '裝備', '自由潛水長蛙鞋的選擇性越來越多，不僅材質有塑膠、橡膠、玻纖與碳纖，在價格上也是琳瑯滿目。這些蛙鞋有什麼分別？到底哪一雙蛙鞋比較好？這次我們邀請阿倫教練，針對市面上的碳纖長蛙鞋作一系列測試。從開發中的小懶魚短蛙到超過100公分的C4長蛙鞋，一共12雙碳纖蛙鞋，阿倫教練用四種不同的踢法，一一感受每雙蛙鞋的個性，來告訴你這些蛙鞋有什麼特色。', '絕對準確', '大師級', '19032701_01-1392x783.jpg', 0, '2020-03-06 15:59:47', '2020-03-23 15:59:47'),
('M20010002', 44, NULL, '防寒衣製作細說從頭｜深入TRUDIVE工廠大解密', '裝備', '一件防寒衣是如何從無到有的呢？雖然我們知道防寒衣的布料是氯丁橡膠(CR, Neoprene)，但你可能無法想像它的初始狀態竟然是一片片像床墊的發泡海綿。藉由參觀TRUDIVE的防寒衣製作工廠，我們實際看到從氯丁橡膠發泡海綿面料，到製作成防寒衣的完整過程。閱讀這篇文章，可以學到了不少防寒衣製作知識，搭配女子的海先前其它關於防寒衣的文章，你也可以成為防寒衣的小專家喔。\r\n\r\n氯丁橡膠海綿\r\n\r\n氯丁橡膠發泡海綿\r\n從模具生產出來的氯丁橡膠發泡海綿原床是像床墊般一片一片，表面是光滑，但切開後裡面是佈滿許多氣孔(cell)的肉身。生產氯丁橡膠的工廠很多，例如日本Yamamoto、NJN、韓國Jako，還有臺灣的薛長興、南良。每個工廠生產的氯丁橡膠通常都會分許多型號，有著不同延展性、密度、強度等，成本不一樣，適合的用途也會不一樣。\r\n\r\n發泡氯丁橡膠\r\n\r\n雖然這些氯丁橡膠發泡海綿看起來很厚，但只要用手指戳一戳，就可以感覺出不同型號間的彈性差異。一件自由潛水防寒衣好不好穿，布料彈性很重要。每家廠商都會有幾種適合應用在防寒衣的型號，例如Yamamoto 的#39 #40 #45等，Jako的MS ,MSL,MRL以及南良的SS-1,3D,W8等。通常彈性越好的型號，價格也越高啦。\r\n\r\n南良氯丁橡膠\r\n\r\n我們常聽到的2mm,3mm,5mm等厚度，就是由這樣的氯丁橡膠發泡海綿用刀床切出需要的劈片，從0.5mm到10mm都可以切出來。不過切片通常有公差，而大部分廠商都不會列出誤差。所以有時候一些防寒衣可能標榜3mm，但如果實際量厚度會有些出入，可能就是切片時的公差。\r\n\r\n防寒衣切片機器\r\n發泡海綿原床切片機器\r\nTRUDIVE工廠\r\n切片機器的刀片\r\n10mm 防寒衣\r\n厚度10mm 的防寒衣\r\n從模具生產出來的氯丁橡膠發泡海綿原料，雖然上下貼著模具的表面是光滑的，但是裡面其實密佈很多小氣孔(cell)。上下面稱為表皮或叫滑面，中間層切出的稱為肉身，也就是我們說的open cell。肉身的彈性雖然最好，但是強度較差、容易破裂，而表皮的強度略好一些些，但也稍稍微硬一些些。一般外滑面的防寒衣，都是用發泡海綿原床的表皮製作。因為一片氯丁橡膠發泡海綿原床只能切出兩片的表皮，原料相對來說比較稀少，所以外滑面的防寒衣售價比外布面的防寒衣貴，也就不難理解。', '辣妹', '買起來', '20031008_00.jpg', 0, '2020-03-09 00:00:00', '2020-03-26 15:59:35'),
(NULL, 45, NULL, '這個冬天，九個妳不能錯過的防寒衣品牌(2020年版)', '裝備', '蒐集世界各地的防寒衣品牌，是我在接觸自由潛水後這一兩年來開始做的事。挖掘品牌的過程中總是充滿各種期待與恐懼，期待的是找到一個喜歡的牌子，恐懼的是它的價格不太可愛。這幾年來，台灣的自由潛水活動雖然持續發展，但是國內防寒衣的選擇仍然不多。曾經，我並不覺得防寒衣是個必需品，在我接觸到自由潛水後，才知道它的重要性。我第一次接觸自由潛水，剛好是台灣的冬季，上課時若沒有穿著自由潛水專用防寒衣，我是連踏入水裡的勇氣都沒有。台灣冬季的水溫，南部約在23-25度左右，北部就更低了，約在21度。如果你不知道這樣的水溫有多冷，那你可以想像在冬天走進宜蘭蘇澳冷泉中。冷泉的水溫約22度，在這個晚秋時節，光是想像就要打哆索了。因此在冬季潛水如果沒有防寒衣保暖，大概連放鬆呼吸都做不了，更別說能享受潛水了。\r\n\r\n現在有很多專為自由潛水設計的防寒衣，此種防寒衣主要都是針對人體工學，分為上下兩件式以及頭套的設計。你會發現不管是哪一個品牌自由潛水防寒衣的拼接線，都在差不多的位置。因為這些剪裁都是為了讓布料與肌膚可以更服貼的接觸，如同你的第二層肌膚般無感，讓你在進行水下活動時提供足夠保暖確不感到拘束。以台灣自有品牌來說，皇家潛水及V-Dive威帶夫應該算是大家不陌生的。前者主打CP值高，低廉的價格竟然還提供量身定做，後續保固服務也不錯；後者售價略高些，但在用料上可以看到V-Dive的用心，也嘗試走出自己的設計風格。這兩個品牌都有實體店面，剛接觸自潛想購買自己第一套防寒衣的朋友，是一個方便的選擇。\r\n\r\n但我在尋找防寒衣的時候，不會侷限在自由潛水的防寒衣品牌，而是從自己喜歡的風格開始。許多品牌都有自己的獨特設計理念及風格，甚至每一季都會推出新作品來滿足像我們一樣需要它的海人。對我們女孩來說，穿出自己的風格，找出適合自己的防寒衣，只要不影響水下活動，就是一個好的設計。以下是我與自由潛水教練CoCo嚴選整理出8個值得關注的防寒衣品牌，其中有潛水專用也有衝浪品牌 （順序與排名並無關係），透過簡單的概述介紹每個品牌的設計與特色。\r\n\r\n \r\n\r\nSEEA\r\n這是一個專為浪人設計的品牌，SEEA來自美國加州，風格非常強烈，以色塊、線條及花紋圖騰拼接出獨特味道。復古的設計，高腰的剪裁都更能突顯女性身形的優點，是Yuchi自己很喜歡的設計。防寒衣使用0.5mm C-SKIN材質，比較適合台灣春末至初秋的水溫，冬季不太適', '保暖', '裝備', '17111506_01-1392x1044.jpg', 10, '2019-11-15 00:00:00', '2020-03-26 16:03:28'),
('M20030001', 46, NULL, '給愛自拍的你｜潛水運動相機 DJI OSMO ACTION實', '裝備', 'OSMO ACTION\r\n在空拍機領域已經是龍頭老大的大彊DJI，去年2019也推出他們第一台運動相機OSMO ACTION，將他們的視角，從空中擴展到水面下。其實DJI不僅空拍機有名，在穩定器、小型雲台相機以及攝影鏡頭他們也有不少產品。已經累積這麼多相關技術，如今踏入運動攝影機市場，那麼DJI端出的菜色究竟如何呢？這篇評測，就以自潛員的視角來看看DJI OSMO ACTION到底有什麼特別之處。\r\n\r\nDJI OSMO ACTION\r\n\r\n不過在洋洋灑灑的規格前，先簡單看一下DJI OSMO ACTIO與潛水相關的特色，以及實拍影片。\r\n初步印象\r\nOSMO ACTION與GoPro運動相機的外型類似，大小也差不多。拿在手上沉甸甸，很紮實，質感頗佳。相機上有三個按鈕分別是：模式／前後螢幕切換、開關機／螢幕、拍攝，再加上觸控螢幕，整體操作上很直覺，選單也清楚易懂。\r\n\r\nOSMO ACTION的螢幕是一大賣點，除了後端有2.25吋的大螢幕，前端還有一個1.4吋的螢幕。GoPro雖然也有前螢幕，但只作資訊顯示，而OSMO ACTION的前螢幕則是能顯示畫面的彩色螢幕。對於自由潛水來說，水下自拍時可以看到拍攝畫面，不用猜測到底拍了什麼，減少NG次數，非常實用。\r\n在配件方面，OSMO ACTION使用與GoPro相同的接環，也就是說也一樣可以使用市面上主流的運動相機配件。\r\n\r\n此外DJI原廠也有出一些OSMO專用的配件，例如從Type-C接口轉接成Type-C與3.5mm的麥克風孔共有的配件，可以藉此使用外接麥克風，獲得更好音質。以及一套三組的ND減光濾鏡，使用來降低快門速度，增加畫面流動順暢感。', '相機', '測試', '10-1024x758.jpg', 5, '2020-03-25 19:46:16', '2020-03-25 19:46:16'),
('M20010002', 47, NULL, '自由潛水課程／活動公佈欄', '教學', '以下是臺灣近期自由潛水活動資訊，上課／活動／潛旅資訊，都可以在這公佈欄找到\r\n\r\n想學自由潛水，可以參考各月份開課梯次。若你無法配合連續日的上課，可以選擇「彈性開課」教練，依你的時間與教練安排上課。\r\n\r\n表格能自訂排序，方便搜尋。點選聯繫教練後，會看到教練介紹以及評價與聯繫方式。若你對教學系統還不了解，也可以參考此篇系統教學比較。\r\n\r\n除了正式課程外，若不確定自己是否適合自潛，也可以先參加體驗試試（體驗資訊點此），了解自由潛水在玩什麼。\r\n\r\n如果想去玩，可以參考潛旅資訊，由女子的海提供你安全又好玩的自由潛水旅行。\r\n\r\n最後，此公佈欄「並非涵蓋全台所有開課資訊」，若未能找到你需要的，仍然可以從教練資訊或網路中搜尋，找尋更多自由潛水課程訊息。\r\n\r\n ※任何自潛教練想刊登開課／活動資訊，請聯繫女子的海 email: msoceantw@gmail.com', '潛水', '想上課', 'MsOceanBoard-6_2-.jpg', 55, '2020-03-29 15:22:16', '2020-03-26 15:22:16'),
('M20030001', 48, NULL, '水下攝影｜還原水底照片色彩的五種方法', '教學', '大海的藍，是讓人嚮往的顏色。但是在水下攝影時，拍出來藍色一片，缺乏其他色彩的照片，就不是那麼討喜了。海裡為什麼是藍色，而不是橘色、黃色或是白色？因為光線在進入水這個介質時，光線會被吸收遞減。但是這個吸收遞減，卻不是紅橙黃綠藍靛紫，光譜上的所有顏色平均遞減；而是波長越長的光線（也就是紅色端）最先被水給吸收，所以景象就變成偏藍色調。隨著光線穿過的水層越厚，這樣的色偏就越嚴重，所以水越深，海底就越藍，直到最後變成一片黑（連藍光也被吸收光了）。\r\n\r\n透過底下這個影片，你能看到顏色在不同深度海水裡的消逝變化\r\n\r', '保險', '律師', '18121001_00-1392x928.jpg', 0, '2019-10-15 14:57:40', '2020-03-26 14:57:40');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
