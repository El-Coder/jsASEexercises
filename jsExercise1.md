# Exercise 1 -- Making an HTTP request

Sounds easy, right? Your browser is likely making 1000s of HTTP requests per day from a javascript library. Like many languages, there are many ways to skin this cat. Lets look at a couple of different ways.

## JavaScript HTTP/HTTPS libraries

This is a built in library -- but its quite low level. Here is a small script to make a request. Run this script inside your local ``node`` interpreter.

```bash
$ node
>
```

http.get('http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data', (res) => {

```javascript
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
```

That seems....like a pain to use. Notice how we had to build the response ``data`` chunk by chunk. Ugh. Let's do the same thing with a package built on top of that module. The ``requests`` package is much like the Python library we used in the last exercise.

You should have [``NPM``](https://www.npmjs.com/) (the Node Package Manager) installed on your machine. Let's install the ``request`` library.

```bash
$ npm install request
```

Now let's run a small script to return the same page as in the previous example.

```javascript
const request = require('request');

request('http://localhost:8888/data', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
```


