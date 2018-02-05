const path = require('path');
const express = require('express')
const http = require('http');
const https = require('https');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

http.createServer(app).listen(80);
https.createServer(app).listen(443);
console.log("Listening");