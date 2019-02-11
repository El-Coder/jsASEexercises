var express = require('express');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.use(express.bodyParser());
//Return the index page
app.get('/', function(req, res){
    console.log('GET /')
    var html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
//Return MangoDB data
app.get('/data', function(req, res){
    MongoClient.connect(dbUrl).then(function (db) {
        db.collection("users").findOne({}).then(function(data) {
             console.log(data)
        }).catch(function (err) {//failure callback
             console.log(err)
        });
    }).catch(function (err) {})
});
//Accept POST data, write to mongo
app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

dbURL = 'mongomongomongo'
db = 
collection = 
port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)

MongoClient.connect(uri).then(client => 
client.db("db").collection("users").find()).then(data => 
    console.log(data)).catch(err => console.log(err));
