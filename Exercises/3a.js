const rp = require('request-promise');
const uri = 'http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data/kevin'

rp(uri)
.then(function(oldBody) {
    var options = {
        method: 'PUT',
        uri: uri,
        body: {
            name: oldBody.name,
            oldMessage: oldBody.message,
            message: "Squeaky Clean New Message."
        },
        json: true
    };
    rp(options);
}).then(function() {
    return rp(uri);
}).then(function(response) {
    console.log(JSON.parse(response));
}).catch(function (err) {
    console.error(err);
});
