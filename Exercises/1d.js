const request = require('request');

function exAsyncRequest() {
    return new Promise(function(resolve, reject){
        return request('http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data', (err, res, body) => {
         if (err) return reject(err);
            resolve(JSON.parse(body));
        });
    });
}

exAsyncRequest().then(function(val) {
    //Let's just log the first member of the array
    console.log(val[0]);
}).catch(function(err) {
    console.err(err);
});