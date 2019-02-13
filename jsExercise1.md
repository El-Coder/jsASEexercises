# Exercise 1 -- Making an HTTP request

Sounds easy, right? Your browser is likely making 1000s of HTTP requests per day from a javascript library. Like many languages, there are many ways to skin this cat. Lets look at a couple of different ways. For the examples in this exercise, I've provided the scripts under the [Exercises](https://github.com/kreynoldsf5/jsASEexercises) folder. Please clone this repo locally so you can walk through the exercises. Once downloaded, change to the exercises directory so that package dependencies should be resolved.

```bash
$ cd ~/Repos/jsASEexercises/Exercises/
```
(Please adjust for wherever you downloaded the repository.)

## JavaScript HTTP/HTTPS libraries

This is a built in library -- but its quite low level. Here is a small script to make a request. 

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

Run the script from the ```Exercises``` directory.
```bash
$ node 1a.js
```

``http.get()``'s first argument can be a URL or an ``options`` object. We are using the latter in this example. The second argument is a callback function. The response, ``res``, that is being passed to the callback function is a stream object.  

That seems....like it could be a pain (we have to handle the http chunking ourselves?!?!). Notice how we had to use a callback function to build the response ``data`` chunk by chunk from the streamed object of ``res``. Ugh. Let's do the same thing with a package built on top of that module. The ``request`` package is much like the Python library we used in the last set of exercises.

## NPM Requests Library

[``NPM``](https://www.npmjs.com/) (the Node Package Manager) is the node.js standard way of adding packages to your projects. I've installed the [``request``](https://www.npmjs.com/package/request) library and provided that dependency in the ``node_modules`` directory under ``Exercises``. You don't have to do anything for this step.

Now let's run a small script to return the same page as in the previous example.

```javascript
const request = require('request');

request('http://localhost:8888/data', (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(JSON.parse(body));
});
```

```bash
$ node 1b.js
```

That seems...a little more reasonable. Notice we can parse the whole body in our callback without putting it back together in chunks. 

## Async Aside

Consider the following (flawed) example:

```javascript
const request = require('request');

console.log("Pre-Request.");

request('http://localhost:8888/data', (err, res, body) => {
  if (err) { return console.log(err); }
  console.log("Inside the Request.")
  console.log(JSON.parse(body));
});

console.log("Post-Request.");
```

```bash
$ node 1c.js
```

Study the logging output (specifically the order of the messages). Why did that happen? What if we needed to use some JSON value from the response body later in our code?

### Callback Hell

If we needed to pass returned function values to other functions our code can quickly nest into callback hell.

![callback hell](https://pbs.twimg.com/media/CbHuC7nWIAUOiOS.png:large)

As you learned from the code academy lessons, there is a cleaner way of dealing with this problem in JavaScript.

### Promises

A promise is an object. It represents the eventual completion of an asynchronous operation. A promise is created with the Promise constructor -- or returned natively from a package that's been written to do so. The constructor accepts one argument, a function which takes ``resolve`` & ``reject`` as parameters. Once your data has been returned, you can call ``resolve``, passing in the data you want to work with later. If there is an error, call ``reject`` instead.

Using the ``request`` library we are alrady familiar with, we can construct an example Promise.

```javascript
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
```

```bash
$ node 1d.js
```

We've defined a function that makes our HTTP request. We can then call that function (which returns a promise) followed by ``.then`` to perform some action on the eventual returned value of the promise. You can use ``.catch`` to catch a ``reject()``. Make sense?

It shouldn't be suprising that some enterprising develeopers have 'promisified' requests long ago. Here's an example.

```javascript
var rp = require('request-promise');

rp('http://localhost:8888/data')
    .then(function (val) {
        console.log(val[0]);
    })
    .catch(function (err) {
        console.err(err);
    });
```

```bash
$ 1e.js
```

That's...pretty reasonable. Let move on to [Exercise 2](https://github.com/kreynoldsf5/jsASEexercise/jsExercise2.md)









