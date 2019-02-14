const rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data',
    body: {
        name: 'Sample2b',
        message: 'just a sample.'
    },
    json: true
};

rp(options)
    .then(function (parsedBody) {
        console.log(parsedBody);
    })
    .catch(function (err) {
        console.error(err);
    });