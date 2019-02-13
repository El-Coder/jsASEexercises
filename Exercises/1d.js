const request = require('request');

function exAsyncRequest() {
    return new Promise(function(resolve, reject){
        return request('http://localhost:8888/data', (err, res, body) => {
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