const http = require('http');

http.get( {hostname: 'localhost', port: 8888, path: '/data' }, (res) => {
  //instantiate a blank string for our response data
  let data = '';
  // Add each chunk to the string
  res.on('data', (chunk) => {
    data += chunk;
  });
  // Print out the result when the whole response has been returned.
  res.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});