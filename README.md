# AQUA 自由潛水綜合資訊站

資策會-前端工程師養成班大專題  
AQUA 是以自由潛水為主題的資訊分享結合電商購物網站包含了五大功能

- 專業課程
- 揪團活動
- 文章分享
- 裝備販賣
- 潛點介紹

以及設計完善的會員系統及賣家系統，提供給使用者最優良的體驗

## 如何使用

安裝 [Docker](https://docs.docker.com/engine/install/) 與 [docker-compose](https://docs.docker.com/compose/install/)
輸入指令:

```
docker-compose up
```

然後前往 `http://localhost:8000` ，即可看到畫面。

## 揪團功能展示

1. AQUA-揪團首頁及地圖展示  
   [![AQUA-揪團首頁及地圖展示](http://img.youtube.com/vi/RL8RmWDP3Mw/0.jpg)](http://www.youtube.com/watch?v=RL8RmWDP3Mw "AQUA-揪團首頁及地圖展示")
2. AQUA-揪團報名及新增、刪除、修改展示  
   [![AQUA-揪團報名及新增、刪除、修改展示](http://img.youtube.com/vi/9FPbrApRsQU/0.jpg)](http://www.youtube.com/watch?v=9FPbrApRsQU "AQUA-揪團報名及新增、刪除、修改展示")
3. AQUA-揪團聊天室展示  
   [![AQUA-揪團聊天室展示](http://img.youtube.com/vi/xPW3W4aGD0Y/0.jpg)](http://www.youtube.com/watch?v=xPW3W4aGD0Y "AQUA-揪團聊天室展示")

## 已知 Bug

- 中央氣象局 API 異常，潛點天氣資訊已無法運作 - 2021/04-15
- 揪團爬蟲取得天氣資料功能已失效 - 2020/11/01
- 揪團地圖查找功能隨著 api 移除失效 - 2020/11/01
