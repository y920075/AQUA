const express = require('express');
const moment = require('moment-timezone');

const multer = require("multer");
const upload = multer({dest: 'tmp_uploads/'});

const fs = require('fs');
const axios = require('axios')

const db = require(__dirname + '/../db_connect');
var async = require('async');

const router = express.Router();


const dateFormat = "YYYY-MM-DD";

function getTideDate(){
    let Tidedata = [];
    axios.get('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-A0021-001?Authorization=CWB-DA5A21AB-0C8A-4159-99D5-7718AEF0A89F&downloadType=WEB&format=JSON')
    .then(function(response){
        const alltidedate = response.data.cwbopendata.dataset.location
        const NEtideinfo =  alltidedate.filter(area => area.locationName === '新北市貢寮區')
        const weekNEtideinfo = NEtideinfo[0].time.slice(0,3)
        const StationId = NEtideinfo[0].stationId
        const LocationName = NEtideinfo[0].locationName
        
        for(i=0 ; i<weekNEtideinfo.length ; i++){
            let tideDate = weekNEtideinfo[i].validTime.startTime.toString().split('T')[0];
            const dayTides = weekNEtideinfo[i].weatherElement[2].time
            const Lunardate = weekNEtideinfo[i].weatherElement[0].value
            const Tidalrange = weekNEtideinfo[i].weatherElement[1].value
            for(let e=0; e<dayTides.length; e++){
                Tidedata.push([
                    StationId,
                    LocationName,
                    tideDate,
                    Lunardate,
                    Tidalrange,
                    dayTides[e].weatherElement[0].value,
                    dayTides[e].weatherElement[1].value.toString().split('+')[0],
                    dayTides[e].weatherElement[2].elementValue.value,
                ]);
                // console.log( dayTides[e].weatherElement[2])
                // console.log( dayTides[e].weatherElement[2].elementValue)
                // console.log( dayTides[e].weatherElement[2].elementValue.value)
            }
        }
        const ECtideinfo =  alltidedate.filter(area => area.locationName === '花蓮縣豐濱鄉')
        const weekECtideinfo = ECtideinfo[0].time.slice(0,3)

        const ECStationId = ECtideinfo[0].stationId
        const ECLocationName = ECtideinfo[0].locationName 
        for(i=0 ; i<weekECtideinfo.length ; i++){
            let tideDate = weekECtideinfo[i].validTime.startTime.toString().split('T')[0];
            const dayTides = weekECtideinfo[i].weatherElement[2].time
            const Lunardate = weekECtideinfo[i].weatherElement[0].value
            const Tidalrange = weekECtideinfo[i].weatherElement[1].value
            for(let e=0; e<dayTides.length; e++){
                Tidedata.push([
                    ECStationId,
                    ECLocationName,
                    tideDate,
                    Lunardate,
                    Tidalrange,
                    dayTides[e].weatherElement[0].value,
                    dayTides[e].weatherElement[1].value.toString().split('+')[0],
                    dayTides[e].weatherElement[2].elementValue.value,
                ]);
            }
        }
        const GItideinfo =  alltidedate.filter(area => area.locationName === '臺東縣綠島鄉')
        const weekGItideinfo = GItideinfo[0].time.slice(0,3)

        const GIStationId = GItideinfo[0].stationId
        const GILocationName = GItideinfo[0].locationName 
        for(i=0 ; i<weekGItideinfo.length ; i++){
            let tideDate = weekGItideinfo[i].validTime.startTime.toString().split('T')[0];
            const dayTides = weekGItideinfo[i].weatherElement[2].time
            const Lunardate = weekGItideinfo[i].weatherElement[0].value
            const Tidalrange = weekGItideinfo[i].weatherElement[1].value
            for(let e=0; e<dayTides.length; e++){
                Tidedata.push([
                    GIStationId,
                    GILocationName,
                    tideDate,
                    Lunardate,
                    Tidalrange,
                    dayTides[e].weatherElement[0].value,
                    dayTides[e].weatherElement[1].value.toString().split('+')[0],
                    dayTides[e].weatherElement[3].elementValue.value,
                ]);
            }
        }
        const Otideinfo =  alltidedate.filter(area => area.locationName === '臺東縣蘭嶼鄉')
        const weekOtideinfo = Otideinfo[0].time.slice(0,3)

        const OStationId = Otideinfo[0].stationId
        const OLocationName = Otideinfo[0].locationName 
        for(i=0 ; i<weekOtideinfo.length ; i++){
            let tideDate = weekOtideinfo[i].validTime.startTime.toString().split('T')[0];
            const dayTides = weekOtideinfo[i].weatherElement[2].time
            const Lunardate = weekOtideinfo[i].weatherElement[0].value
            const Tidalrange = weekOtideinfo[i].weatherElement[1].value
            for(let e=0; e<dayTides.length; e++){
                Tidedata.push([
                    OStationId,
                    OLocationName,
                    tideDate,
                    Lunardate,
                    Tidalrange,
                    dayTides[e].weatherElement[0].value,
                    dayTides[e].weatherElement[1].value.toString().split('+')[0],
                    dayTides[e].weatherElement[3].elementValue.value,
                ]);
            }
        }
        const SCtideinfo =  alltidedate.filter(area => area.locationName === '屏東縣恆春鎮')
        const weekSCtideinfo = SCtideinfo[0].time.slice(0,3)

        const SCStationId = SCtideinfo[0].stationId
        const SCLocationName = SCtideinfo[0].locationName 
        for(i=0 ; i<weekSCtideinfo.length ; i++){
            let tideDate = weekSCtideinfo[i].validTime.startTime.toString().split('T')[0];
            const dayTides = weekSCtideinfo[i].weatherElement[2].time
            const Lunardate = weekSCtideinfo[i].weatherElement[0].value
            const Tidalrange = weekSCtideinfo[i].weatherElement[1].value
            for(let e=0; e<dayTides.length; e++){
                Tidedata.push([
                    SCStationId,
                    SCLocationName,
                    tideDate,
                    Lunardate,
                    Tidalrange,
                    dayTides[e].weatherElement[0].value,
                    dayTides[e].weatherElement[1].value.toString().split('+')[0],
                    dayTides[e].weatherElement[2].elementValue.value,
                ]);
            }
        }
        // return console.log(Tidedata);
        
        const deletedata = "DELETE FROM `tide`"
        const sql = "INSERT INTO `tide` (`StationId`,`LocationName`,`Date`,`Lunardate`,`Tidalrange`,`Tidetype`,`Tidetime`,`Tideheight`) VALUES (?,?,?,?,?,?,?,?)"
            db.queryAsync(deletedata)
            for(y=0 ; y<Tidedata.length ; y++){ 
            db.queryAsync(sql ,
                Tidedata[y])
            }
    })
    // DEBUG
    // .then(result=>{
    //     res.json(result)
    //  }) 
    

}

module.exports = getTideDate;