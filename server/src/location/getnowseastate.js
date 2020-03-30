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

function getnowseastate(){
    let seastatereport = [];
    axios.get('https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/O-A0018-001?Authorization=CWB-DA5A21AB-0C8A-4159-99D5-7718AEF0A89F&downloadType=WEB&format=JSON')
    .then(function(response){
        const allseastatedata = response.data.cwbopendata.dataset.location

        const NEseastateinfo = allseastatedata.filter(area => area.locationName === '龍洞浮標')
        const lastNEseastateinfo = NEseastateinfo.length - 1
        const NowNEseastateinfo = NEseastateinfo[lastNEseastateinfo]
        const pureNEseastateinfo = NowNEseastateinfo.time
        const NEStationId = NowNEseastateinfo.stationId
        const NELocationName = NowNEseastateinfo.locationName
        const NEobstime = pureNEseastateinfo.obsTime.toString().split('+')[0]
        const NEseatemperature = (pureNEseastateinfo.weatherElement[8].elementValue.value * 0.1).toFixed(1).toString()
        const NEtemperature = (pureNEseastateinfo.weatherElement[7].elementValue.value * 0.1).toFixed(1).toString()
        const NEwaveheight = pureNEseastateinfo.weatherElement[9].elementValue.value
        const NEwaveperiod = pureNEseastateinfo.weatherElement[10].elementValue.value
        let NEwavedirectionnumber  = pureNEseastateinfo.weatherElement[11].elementValue.value

        let NEwavedirection
        if(NEwavedirectionnumber<=30){
            NEwavedirection='北北東'
        } else if(NEwavedirectionnumber>=30 && NEwavedirectionnumber<=60) {
            NEwavedirection='東北'
        } else if(NEwavedirectionnumber>=60 && NEwavedirectionnumber<=90) {
            NEwavedirection='東北東'
        } else if(NEwavedirectionnumber>=90 && NEwavedirectionnumber<=120) {
            NEwavedirection='東南東'
        } else if(NEwavedirectionnumber>=120 && NEwavedirectionnumber<=150) {
            NEwavedirection='東南'
        } else if(NEwavedirectionnumber>=150 && NEwavedirectionnumber<=180) {
            NEwavedirection='南南東'
        } else if(NEwavedirectionnumber>=180 && NEwavedirectionnumber<=210) {
            NEwavedirection='南南西'
        } else if(NEwavedirectionnumber>=210 && NEwavedirectionnumber<=240) {
            NEwavedirection='西南'
        } else if(NEwavedirectionnumber>=240 && NEwavedirectionnumber<=270) {
            NEwavedirection='西南西'
        } else if(NEwavedirectionnumber>=270 && NEwavedirectionnumber<=300) {
            NEwavedirection='西北西'
        } else if(NEwavedirectionnumber>=300 && NEwavedirectionnumber<=330) {
            NEwavedirection='西北'
        } else if(NEwavedirectionnumber>=330 && NEwavedirectionnumber<=360) {
            NEwavedirection='北北西'
        }

        seastatereport.push([
            '東北角',
            NELocationName,
            NEStationId,
            NEobstime,
            NEseatemperature,
            NEtemperature,
            NEwaveheight,
            NEwaveperiod,
            NEwavedirection,
        ])

        //花蓮資料
        const ECseastateinfo = allseastatedata.filter(area => area.locationName === '花蓮浮標')
        const lastECseastateinfo = ECseastateinfo.length - 1
        const NowECseastateinfo = ECseastateinfo[lastECseastateinfo]
        const pureECseastateinfo = NowECseastateinfo.time
        const ECStationId = NowECseastateinfo.stationId
        const ECLocationName = NowECseastateinfo.locationName
        const ECobstime = pureECseastateinfo.obsTime.toString().split('+')[0]
        const ECseatemperature = (pureECseastateinfo.weatherElement[8].elementValue.value * 0.1).toFixed(1).toString()
        const ECtemperature = (pureECseastateinfo.weatherElement[7].elementValue.value * 0.1).toFixed(1).toString()
        const ECwaveheight = pureECseastateinfo.weatherElement[9].elementValue.value
        const ECwaveperiod = pureECseastateinfo.weatherElement[10].elementValue.value
        let ECwavedirectionnumber  = pureECseastateinfo.weatherElement[11].elementValue.value

        let ECwavedirection
        if(ECwavedirectionnumber<=30){
            ECwavedirection='北北東'
        } else if(ECwavedirectionnumber>=30 && ECwavedirectionnumber<=60) {
            ECwavedirection='東北'
        } else if(ECwavedirectionnumber>=60 && ECwavedirectionnumber<=90) {
            ECwavedirection='東北東'
        } else if(ECwavedirectionnumber>=90 && ECwavedirectionnumber<=120) {
            ECwavedirection='東南東'
        } else if(ECwavedirectionnumber>=120 && ECwavedirectionnumber<=150) {
            ECwavedirection='東南'
        } else if(ECwavedirectionnumber>=150 && ECwavedirectionnumber<=180) {
            ECwavedirection='南南東'
        } else if(ECwavedirectionnumber>=180 && ECwavedirectionnumber<=210) {
            ECwavedirection='南南西'
        } else if(ECwavedirectionnumber>=210 && ECwavedirectionnumber<=240) {
            ECwavedirection='西南'
        } else if(ECwavedirectionnumber>=240 && ECwavedirectionnumber<=270) {
            ECwavedirection='西南西'
        } else if(ECwavedirectionnumber>=270 && ECwavedirectionnumber<=300) {
            ECwavedirection='西北西'
        } else if(ECwavedirectionnumber>=300 && ECwavedirectionnumber<=330) {
            ECwavedirection='西北'
        } else if(ECwavedirectionnumber>=330 && ECwavedirectionnumber<=360) {
            ECwavedirection='北北西'
        }

        seastatereport.push([
            '花東海岸',
            ECLocationName,
            ECStationId,
            ECobstime,
            ECseatemperature,
            ECtemperature,
            ECwaveheight,
            ECwaveperiod,
            ECwavedirection,
        ])

        //東部離島
        const islandsseastateinfo = allseastatedata.filter(area => area.locationName === '蘭嶼浮標')
        const lastislandsseastateinfo = islandsseastateinfo.length - 1
        const Nowislandsseastateinfo = islandsseastateinfo[lastislandsseastateinfo]
        const pureislandsseastateinfo = Nowislandsseastateinfo.time
        const islandsStationId = Nowislandsseastateinfo.stationId
        const islandsLocationName = Nowislandsseastateinfo.locationName
        const islandsobstime = pureislandsseastateinfo.obsTime.toString().split('+')[0]
        const islandsseatemperature = (pureislandsseastateinfo.weatherElement[8].elementValue.value * 0.1).toFixed(1).toString()
        const islandstemperature = (pureislandsseastateinfo.weatherElement[7].elementValue.value * 0.1).toFixed(1).toString()
        const islandswaveheight = pureislandsseastateinfo.weatherElement[9].elementValue.value
        const islandswaveperiod = pureislandsseastateinfo.weatherElement[10].elementValue.value
        let islandwavedirectionnumber  = pureislandsseastateinfo.weatherElement[11].elementValue.value

        let islandswavedirection
        if(islandwavedirectionnumber<=30){
            islandswavedirection='北北東'
        } else if(islandwavedirectionnumber>=30 && islandwavedirectionnumber<=60) {
            islandswavedirection='東北'
        } else if(islandwavedirectionnumber>=60 && islandwavedirectionnumber<=90) {
            islandswavedirection='東北東'
        } else if(islandwavedirectionnumber>=90 && islandwavedirectionnumber<=120) {
            islandswavedirection='東南東'
        } else if(islandwavedirectionnumber>=120 && islandwavedirectionnumber<=150) {
            islandswavedirection='東南'
        } else if(islandwavedirectionnumber>=150 && islandwavedirectionnumber<=180) {
            islandswavedirection='南南東'
        } else if(islandwavedirectionnumber>=180 && islandwavedirectionnumber<=210) {
            islandswavedirection='南南西'
        } else if(islandwavedirectionnumber>=210 && islandwavedirectionnumber<=240) {
            islandswavedirection='西南'
        } else if(islandwavedirectionnumber>=240 && islandwavedirectionnumber<=270) {
            islandswavedirection='西南西'
        } else if(islandwavedirectionnumber>=270 && islandwavedirectionnumber<=300) {
            islandswavedirection='西北西'
        } else if(islandwavedirectionnumber>=300 && islandwavedirectionnumber<=330) {
            islandswavedirection='西北'
        } else if(islandwavedirectionnumber>=330 && islandwavedirectionnumber<=360) {
            islandswavedirection='北北西'
        }

        seastatereport.push([
            '東部離島',
            islandsLocationName,
            islandsStationId,
            islandsobstime,
            islandsseatemperature,
            islandstemperature,
            islandswaveheight,
            islandswaveperiod,
            islandswavedirection,
        ])
        //墾丁
        const SCseastateinfo = allseastatedata.filter(area => area.locationName === '小琉球浮標')
        const lastSCseastateinfo = SCseastateinfo.length - 1
        const NowSCseastateinfo = SCseastateinfo[lastSCseastateinfo]
        const pureSCseastateinfo = NowSCseastateinfo.time
        const SCStationId = NowSCseastateinfo.stationId
        const SCLocationName = NowSCseastateinfo.locationName
        const SCobstime = pureSCseastateinfo.obsTime.toString().split('+')[0]
        const SCseatemperature = (pureSCseastateinfo.weatherElement[8].elementValue.value * 0.1).toFixed(1).toString()
        const SCtemperature = (pureSCseastateinfo.weatherElement[7].elementValue.value * 0.1).toFixed(1).toString()
        const SCwaveheight = pureSCseastateinfo.weatherElement[9].elementValue.value
        const SCwaveperiod = pureSCseastateinfo.weatherElement[10].elementValue.value
        let SCwavedirectionnumber  = pureSCseastateinfo.weatherElement[11].elementValue.value

        let SCwavedirection
        if(SCwavedirectionnumber<=30){
            SCwavedirection='北北東'
        } else if(SCwavedirectionnumber>=30 && SCwavedirectionnumber<=60) {
            SCwavedirection='東北'
        } else if(SCwavedirectionnumber>=60 && SCwavedirectionnumber<=90) {
            SCwavedirection='東北東'
        } else if(SCwavedirectionnumber>=90 && SCwavedirectionnumber<=120) {
            SCwavedirection='東南東'
        } else if(SCwavedirectionnumber>=120 && SCwavedirectionnumber<=150) {
            SCwavedirection='東南'
        } else if(SCwavedirectionnumber>=150 && SCwavedirectionnumber<=180) {
            SCwavedirection='南南東'
        } else if(SCwavedirectionnumber>=180 && SCwavedirectionnumber<=210) {
            SCwavedirection='南南西'
        } else if(SCwavedirectionnumber>=210 && SCwavedirectionnumber<=240) {
            SCwavedirection='西南'
        } else if(SCwavedirectionnumber>=240 && SCwavedirectionnumber<=270) {
            SCwavedirection='西南西'
        } else if(SCwavedirectionnumber>=270 && SCwavedirectionnumber<=300) {
            SCwavedirection='西北西'
        } else if(SCwavedirectionnumber>=300 && SCwavedirectionnumber<=330) {
            SCwavedirection='西北'
        } else if(SCwavedirectionnumber>=330 && SCwavedirectionnumber<=360) {
            SCwavedirection='北北西'
        }

        seastatereport.push([
            '墾丁',
            SCLocationName,
            SCStationId,
            SCobstime,
            SCseatemperature,
            SCtemperature,
            SCwaveheight,
            SCwaveperiod,
            SCwavedirection,
        ])
        // return console.log(seastatereport);
        const deletedata = "DELETE FROM `seastate`"
        const sql = "INSERT INTO `seastate` (`Area`,`locationName`,`stationId`,`date`,`seatemperature`,`temperature`,`waveheight`,`waveperiod`,`wavedirection`) VALUES (?,?,?,?,?,?,?,?,?)"
            db.queryAsync(deletedata)
            for(y=0 ; y<seastatereport.length ; y++){ 
            db.queryAsync(sql ,
                seastatereport[y])
            }
        
    })
    

}

module.exports = getnowseastate;