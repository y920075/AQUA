const db = require( __dirname + '/db_connect');
const express = require('express');
const app = express();


app.use(express.static(__dirname + '/../public'));
app.use('/login', require(__dirname + '/login/login'))