//imports
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cookieParser=require('cookie-parser');


const host = 'localhost';
const port = 6971;

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('/public'));

app.use('/css', express.static(__dirname+'/public/css'));
app.use('/pictures', express.static(__dirname+'/public/pictures'));
app.use('/js', express.static(__dirname+'/public/js'));

app.get('', (req, res) => {
    res.render('login', {user: req.cookies.user});
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
    res.render('login', {user: req.cookies.user});
})

let userList;
app.post('/verificare-login', (req, res)=>{
    const fs = require('fs');
    fs.readFile('user.json', (err, data) => {
        if (err) throw err;
        userList = JSON.parse(data);

        let ok =0;
        for (let i=0;i<userList.length;i++) {
            if (userList[i].username == req.body.fuser && userList[i].password == req.body.fpassword) {
                ok=1;

                res.cookie("user", userList[i].username);
                
                res.redirect("/home");
            }
        }

        if (ok == 0) {
            res.cookie("user", "mesajEroare");
            res.redirect("/login");
            
        }
    })
})

var mysql = require('mysql');
var con = mysql.createConnection({
   // host: "localhost",
    user: "root",
    password: "password",
    database: "cumparaturi"
});

app.get('/shop', (req, res)=>{
    res.render('shop');
    
})

/*let listaImagini;
app.get('/shopping', (req, res)=>{
    const fs = require('fs');
    fs.readFile('magazin.json', (err, data) =>{
        if (err) throw err;
        listaImagini = JSON.parse(data).listaImagini;
        res.render('bag', {listaImagini: listaImagini});
    });
})*/

app.listen(port, host, ()=> {
    console.log(`Server is running on http://${host}:${port}`);
});