const request = require('request');

console.log("Pre-Request.");

request('http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data/kevin', (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("Inside the Request.")
  console.log(JSON.parse(body));
});

console.log("Post-Request.");

