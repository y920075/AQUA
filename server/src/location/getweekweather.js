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

function getweekDate(){
    
    axios.get('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-071?Authorization=CWB-DA5A21AB-0C8A-4159-99D5-7718AEF0A89F&downloadType=WEB&format=JSON')
    .then(function(response){
        let NEweekdata = [];
        const allweekdata = response.data.cwbopendata.dataset.locations.location
        const NEcapedata = allweekdata.filter(area => area.locationName === '貢寮區')
        const NEcapeweatherdata = NEcapedata[0].weatherElement
        const LocationName = NEcapedata[0].locationName
        for(i=0 ; i<14 ; i+=2){
            let date = NEcapeweatherdata[0].time[i].startTime.toString().split('T')[0];
            let WeatherDescription =  NEcapeweatherdata[14].time[i].elementValue.value
            NEweekdata.push([
                LocationName,
                date,
                WeatherDescription,
            ])
        }
        
        const deletedata = "DELETE FROM `location_weekweather` WHERE `locationName` = '貢寮區'"
        const sql = "INSERT INTO `location_weekweather` (`locationName`,`Date`,`WeatherDescription`) VALUES (?,?,?)"
            db.queryAsync(deletedata)
            for(y=0 ; y<NEweekdata.length ; y++){ 
            db.queryAsync(sql ,
                NEweekdata[y])
            }
    })

    axios.get('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-043?Authorization=CWB-DA5A21AB-0C8A-4159-99D5-7718AEF0A89F&downloadType=WEB&format=JSON')
    .then(function(response){
        let ECweekdata = [];
        const allweekdata = response.data.cwbopendata.dataset.locations.location
        const ECcapedata = allweekdata.filter(area => area.locationName === '豐濱鄉')
        const ECcapeweatherdata = ECcapedata[0].weatherElement
        const LocationName = ECcapedata[0].locationName
        for(i=0 ; i<14 ; i+=2){
            let date = ECcapeweatherdata[0].time[i].startTime.toString().split('T')[0];
            let WeatherDescription =  ECcapeweatherdata[14].time[i].elementValue.value
            ECweekdata.push([
                LocationName,
                date,
                WeatherDescription,
            ])
        }
        
        const deletedata = "DELETE FROM `location_weekweather` WHERE `locationName` = '豐濱鄉'"
        const sql = "INSERT INTO `location_weekweather` (`locationName`,`Date`,`WeatherDescription`) VALUES (?,?,?)"
            db.queryAsync(deletedata)
            for(y=0 ; y<ECweekdata.length ; y++){ 
            db.queryAsync(sql ,
                ECweekdata[y])
            }
    })

    axios.get('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-039?Authorization=CWB-DA5A21AB-0C8A-4159-99D5-7718AEF0A89F&downloadType=WEB&format=JSON')
    .then(function(response){
        let islandsweekdata = [];
        const allweekdata = response.data.cwbopendata.dataset.locations.location
        const GIdata = allweekdata.filter(area => area.locationName === '綠島鄉')
        
        const GIweatherdata = GIdata[0].weatherElement
        const GILocationName = GIdata[0].locationName
        for(i=0 ; i<14 ; i+=2){
            let date = GIweatherdata[0].time[i].startTime.toString().split('T')[0];
            let WeatherDescription =  GIweatherdata[14].time[i].elementValue.value
            islandsweekdata.push([
                GILocationName,
                date,
                WeatherDescription,
            ])
        }
        
        const Iraladata = allweekdata.filter(area => area.locationName === '蘭嶼鄉')
        const Iralaweatherdata = Iraladata[0].weatherElement
        const IralaLocationName = Iraladata[0].locationName
        for(i=0 ; i<14 ; i+=2){
            let date = Iralaweatherdata[0].time[i].startTime.toString().split('T')[0];
            let WeatherDescription =  Iralaweatherdata[14].time[i].elementValue.value
            islandsweekdata.push([
                IralaLocationName,
                date,
                WeatherDescription,
            ])
        }
        const deletedata = "DELETE FROM `location_weekweather` WHERE `locationName` = '綠島鄉' OR `locationName` ='蘭嶼鄉'"
        const sql = "INSERT INTO `location_weekweather` (`locationName`,`Date`,`WeatherDescription`) VALUES (?,?,?)"
            db.queryAsync(deletedata)
            for(y=0 ; y<islandsweekdata.length ; y++){ 
            db.queryAsync(sql ,
                islandsweekdata[y])
            }
    })

    axios.get('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-035?Authorization=CWB-DA5A21AB-0C8A-4159-99D5-7718AEF0A89F&downloadType=WEB&format=JSON')
    .then(function(response){
        let SCweekdata = [];
        const allweekdata = response.data.cwbopendata.dataset.locations.location
        const SCdata = allweekdata.filter(area => area.locationName === '恆春鎮')
        const SCweatherdata = SCdata[0].weatherElement
        const LocationName = SCdata[0].locationName
        for(i=0 ; i<14 ; i+=2){
            let date = SCweatherdata[0].time[i].startTime.toString().split('T')[0];
            let WeatherDescription =  SCweatherdata[14].time[i].elementValue.value
            SCweekdata.push([
                LocationName,
                date,
                WeatherDescription,
            ])
        }
        
        const deletedata = "DELETE FROM `location_weekweather` WHERE `locationName` = '恆春鎮'"
        const sql = "INSERT INTO `location_weekweather` (`locationName`,`Date`,`WeatherDescription`) VALUES (?,?,?)"
            db.queryAsync(deletedata)
            for(y=0 ; y<SCweekdata.length ; y++){ 
            db.queryAsync(sql ,
                SCweekdata[y])
            }
    })

}

module.exports = getweekDate;