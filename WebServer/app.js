// app.js
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://root:ASEexample@mongo-server", { useNewUrlParser: false });
//What DB collection is being used?
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);

let port = 8888;

app.listen(port, () => {
    console.log('Webserver running on port ' + port);
});