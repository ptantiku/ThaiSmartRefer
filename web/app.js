var express = require('express')
var app = express()

//serving static files
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index', {title: 'Hello World'})
})

app.get('/dashboard', function (req, res) {
    res.render('dashboard', {title: 'Hello World'})
})

app.set('views', './views')
app.set('view engine', 'pug');

app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
})
