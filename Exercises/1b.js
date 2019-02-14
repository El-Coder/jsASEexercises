const request = require('request');

request('http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data', (err, res, body) => {
  if (err) { return console.error(err); }
  console.log(JSON.parse(body));
});