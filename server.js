//imports
const http = require('http');

const express = require('express');
const app = express();
const host = 'localhost';
const port = 6971;

const fs = require('fs').promises;
//var path = require('path');

//permite folosirea fisierelor ejs
app.set('view engine', 'ejs');
//permite folosirea de templaturi
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.use(express.static('/public'));
app.use('/css', express.static(__dirname+'/public/css'));
app.use('/pictures', express.static(__dirname+'/public/pictures'));
app.use('/js', express.static(__dirname+'/public/js'));

app.get('', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.render('home');
});


app.get('/bag', (req, res)=>{
    res.render('bag');
});

app.get('/contact', (req, res)=>{
    res.render('contact');
});

app.get('/login', (req, res)=>{
    res.render('login');
})

app.listen(port, host, ()=> {
    console.log(`Server is running on http://${host}:${port}`);
});