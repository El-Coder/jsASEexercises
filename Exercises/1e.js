const rp = require('request-promise');

rp('http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data/kevin')
    .then(function (val) {
        console.log(JSON.parse(val)[0]);
    })
    .catch(function (err) {
        console.error(err);
    });