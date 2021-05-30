const http = require('http');

const express = require('express');
const app = express();

const host='localhost';
const port = 8010;

const fs = require('fs').promises;
var path = require('path')

app.use("/public", express.static(__dirname + "/public"));

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/public/index.html")
    .then(contents => {
        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
    
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});