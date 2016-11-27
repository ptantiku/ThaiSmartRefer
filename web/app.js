var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

//use cookie
app.use(cookieParser())

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

app.get('/refer', function (req, res) {
    res.render('refer', {})
})

app.post('/refer', function (req, res) {
    /*
    // Web3
    var Web3 = require("web3")
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    }

    var mywallet_id = web3.eth.accounts[0];
    var contract_id = "0x343c0e9796Ca35158877063973BdD58Fe4AdF996";
    var abi = [ { "constant": false, "inputs": [ { "name": "date_time", "type": "uint256" }, { "name": "est_time", "type": "uint256" }, { "name": "name", "type": "string" }, { "name": "sex", "type": "string" }, { "name": "age", "type": "uint256" }, { "name": "personal_id", "type": "string" }, { "name": "src_id", "type": "uint256" }, { "name": "dest_id", "type": "uint256" }, { "name": "department_id", "type": "uint256" }, { "name": "symptom", "type": "string" }, { "name": "severity", "type": "uint256" } ], "name": "add", "outputs": [], "payable": false, "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "date_time", "type": "uint256" }, { "indexed": false, "name": "est_time", "type": "uint256" }, { "indexed": false, "name": "name", "type": "string" }, { "indexed": false, "name": "sex", "type": "string" }, { "indexed": false, "name": "age", "type": "uint256" }, { "indexed": false, "name": "personal_id", "type": "string" }, { "indexed": false, "name": "src_id", "type": "uint256" }, { "indexed": false, "name": "dest_id", "type": "uint256" }, { "indexed": false, "name": "department_id", "type": "uint256" }, { "indexed": false, "name": "symptom", "type": "string" }, { "indexed": false, "name": "severity", "type": "uint256" } ], "name": "alert", "type": "event" } ];
    //setup contract
    var MyContract = web3.eth.contract(abi);
    var ContractInstance = MyContract.at(contract_id);
    var name = req.body.name;
    var now = Math.floor(Date.now()/1000);
    console.log("call add function name="+name+" now="+now);

    //send
    ContractInstance.add( now, 3600, name, "M", 25, "9876543210123", 1, 2, 1, "Headache", 1, {from: mywallet_id}, function(error,result){
        if(!error) 
            console.log("Tx=" + result);
    });
    */

    res.send('ส่งข้อมูลเรียบร้อย '+ JSON.stringify(req.body))
})

app.set('views', './views')
app.set('view engine', 'pug');

app.listen(3000, function () {
      console.log('Example app listening on port 3000!')
})
