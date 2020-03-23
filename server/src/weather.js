const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const axios = require('axios')
//引入 jQuery機制
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const $ = require('jquery')(window);
const headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
};

let dataArr = []; // 存放所有天氣資料的陣列
let weatherData = {}; //存放天氣資料的物件

async  function step1(lat=24.1371034,lng=121.2758385){
    console.log('啟動...')
    dataArr = [];
    const url = `https://www.windy.com/${lat}/${lng}/waves?waves,24.112,121.841,8,m:el8ajyf`;
    console.log('請求路徑 : ' + url)
    await nightmare
            .goto(url,headers)
            .wait(2000)
            .catch((err)=>console.error(err))
};

async  function step2(){
    console.log('收集浪高、浪向資料...')
    let wavesHtml = await nightmare.evaluate(()=>{
        return document.documentElement.innerHTML;
    })
    await   $(wavesHtml)
            .find('table#detail-data-table')
            .find('tr.td-days.height-days')
            .find('td.sticky-title-wrapper')
            .each((index,element)=>{
                if ( index <= 5){

                    let date = $(element).attr('data-day')
                    weatherData.date = date;
                    let indexDate = new Date(`${date} 12:00:00`).getTime()

                    $(element)
                    .closest('tr.td-days.height-days')
                    .next('tr.td-hour.height-hour.d-display-waves')
                    .find('td')
                    .each((index,element)=>{
                        let ts = $(element).attr('data-ts')
                        if ( ts == indexDate ) {

                            let waveH =     $(element)
                                            .closest('tr.td-hour.height-hour.d-display-waves')
                                            .nextAll('tr.td-waves.height-waves.d-display-waves')
                                            .find('td')
                                            .eq(index).text().split('#')[1];

                            let waveDir =   $(element)
                                            .closest('tr.td-hour.height-hour.d-display-waves')
                                            .nextAll('tr.td-waves.height-waves.d-display-waves')
                                            .find("td").eq(index)
                                            .find('div').css('transform');
                            
                            if ( waveDir ) {
                                waveDir = parseFloat(waveDir.match(/\d+/));
                                weatherData.waveDirNum = waveDir;
                                switch(true){
                                    case 22.5<waveDir && waveDir<67.4:
                                        waveDir = '東北';
                                        break;
                                    case 67.5<waveDir && waveDir<112.4:
                                        waveDir = '東';
                                        break;
                                    case 112.5<waveDir && waveDir<157.4:
                                        waveDir = '東南';
                                        break;
                                    case 157.5<waveDir && waveDir<202.4:
                                        waveDir = '南';
                                        break;
                                    case 202.5<waveDir && waveDir<247.4:
                                        waveDir = '西南';
                                        break;
                                    case 247.5<waveDir && waveDir<292.4:
                                        waveDir = '西';
                                        break;
                                    case 292.5<waveDir && waveDir<337.4:
                                        waveDir = '西北';
                                        break;
                                    case 337.5<waveDir && waveDir<360:
                                        waveDir = '北';
                                        break;
                                    case 0<waveDir && waveDir<22.4:
                                        waveDir = '北';
                                        break;
                                }
                            }            
                            weatherData.target = index ;
                            weatherData.waveH = waveH || '無資料';
                            weatherData.waveDir = waveDir || '無資料';
                        }
                    })
                    dataArr.push(weatherData);
                    weatherData = {};
                }
            })
};

async function step3(){
    console.log('收集氣溫資料...')
    await   nightmare
            .click('div[data-do="set,meteogram"]')
            .wait('tr.td-tempCombined.height-tempCombined.d-display-meteogram')
    let meteogramHtml = await nightmare.evaluate(()=>{
        return document.documentElement.innerHTML;
    })
    let i = 0
    await   $(meteogramHtml)
            .find('tr.td-tempCombined.height-tempCombined.d-display-meteogram')
            .find('td')
            .each((index,element)=>{
                if ( i<6 ) {
                    if ( index == dataArr[i].target ) {
                        dataArr[i].MaxT = $(element).text().split('°')[0];
                        dataArr[i].MinT = $(element).find('small').text().split('°')[0];
                        i++
                    }
                }
            })
}

async function step4(){
    console.log('收集降雨量、天氣現象資料...')
    await   nightmare
            .click('div[data-do="set,table"]')
            .wait('tr.td-rain.height-rain.d-display-table')
    let tableHtml = await nightmare.evaluate(()=>{
        return document.documentElement.innerHTML;
    })
    let k = 0
    await   $(tableHtml)
            .find('tr.td-rain.height-rain.d-display-table')
            .find('td')
            .each((index,element)=>{
                if ( k<6 ) {
                    if ( index == dataArr[k].target ) {
                        dataArr[k].rain = $(element).text();
                        if ( $(element).text()==='' ) {
                            dataArr[k].rain = '0 mm';
                        } else {
                            dataArr[k].rain = $(element).text() + ' mm';
                        }
                        dataArr[k].WxImg =  'https://www.windy.com/'+$(element)
                                            .closest('tr.td-rain.height-rain.d-display-table')
                                            .prevAll('tr.td-icon.height-icon.d-display-table')
                                            .find('td').eq(index)
                                            .find('img').attr('srcset').split(' ')[0];
                        k++
                    }
                }
            })
}

async function step5(){
    await nightmare.end();
    console.log(dataArr);
    console.log('資料收集完成，關閉程式...');
}


const getWeatherData = async (lat,lng)=>{
    await step1(lat,lng)
    await step2()
    await step3()
    await step4()
    console.log('所有資料收集完成，回傳數據...')
    return dataArr;
};

module.exports = getWeatherData;