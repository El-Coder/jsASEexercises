const request = require('request');


console.log("Pre-Request.");

request('http://localhost:8888/data', (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("Inside the Request.")
  console.log(JSON.parse(body));
});

console.log("Post-Request.");

