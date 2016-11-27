var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()

//use cookie
app.use(cookieParser())

//serving static files
app.use(express.static('public'));

app.get('/', function (req, res) {

    var title = req.cookies.title;
    res.cookie('title','test');
    res.render('index', {title: title})
})

app.get('/dashboard', function (req, res) {
    var lastblock = 0;
    if(req.cookies.lastblock) {
        lastblock = req.cookies.lastblock;
    }

    res.render('dashboard', {title: 'Hello World', lastblock: lastblock})
})

app.set('views', './views')
app.set('view engine', 'pug');

app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
})
