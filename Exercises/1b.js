const request = require('request');

request('http://localhost:8888/data', (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(JSON.parse(body));
});