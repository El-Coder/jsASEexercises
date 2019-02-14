var request = require('request')

var postData = {
  name: 'Eliezer',
  message: 'just a message'
}

var options = {
  method: 'POST',
  body: postData,
  json: true,
  url: 'http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data'
}

request(options, function (err, res, body) {
  if (err) {
    console.error(err)
  }
  console.log(body)
});