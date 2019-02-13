var rp = require('request-promise');

rp('http://localhost:8888/data')
    .then(function (val) {
        console.log(JSON.parse(val)[0]);
    })
    .catch(function (err) {
        console.err(err);
    });