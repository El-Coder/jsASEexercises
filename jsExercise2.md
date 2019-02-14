# Exercise 2 - POSTs and other methods

_Goal: Make a POST request and add some data to the API. Log the response. Manipulate the response and log the message._

Feel free to use any of the ``request`` packages/methods that we talked about earlier (the *next* exercise will be easier with the use of ``request-promise`` if you'd like to familiarize yourself with that package).

Note the examples from both the [``request``](https://www.npmjs.com/package/request) package and the [``request-promise``](https://www.npmjs.com/package/request-promise) package that use an ``options`` object. 

Here's an example of setting HTTP headers on your request:
```javascript
var request = require('request');
 
var options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};
```

The ``options`` concept is that you can build a JSON object of all needed information (method, headers, body/payload, form data, etc.) for your request and then pass that object as parameter of the method call. We'll use ``options`` object to perform a handful of tasks in this exercise.

## HTTP POST

In this exercise you will need to craft an HTTP POST following the same schema as we used last week. 

```json
"name": "kevin",
"message": "insert witty message here."
```

This payload needs to be posted to ``/data`` of the target [web server](http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data). Here is an example to get you started.

```javascript
const rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://api.supersecret.io',
    body: {
        some: 'payload',
        other: 'payload'
    },
    json: true //Stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        // POST succeeded...
    })
    .catch(function (err) {
        // POST failed...
    });
```

Now write your own script to POST your data to the webserver. A successful POST will echo back your payload in the response.

<details><summary>Solution</summary>
<p>

Solutions using ``request`` ([2a.js](./Exercises/2a.js)) and ``request-promise`` ([2b.js](./Exercises/2b.js))are under the [Exercises](./Exercises) directory. If you run them they will fail as those users already exist in the database. Write your own script based on one of these patterns.
      
</p>
</details>


## Other HTTP Verbs

For these exercises, our API has basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionality. Using HTTP verbs, we can create, read, update, and delete entries. 

| Method     | Action   |
|------------|----------|
| GET        | Read     | 
| POST       | Create   | 
| PUT,PATCH  | Update   | 
| DELETE     | Delete   | 

We've already created an entry in the last exercise. Now let's read an entry.

```javascript
rp('http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data/kevin')
.then(function (body) {
    console.log(body)
});
```

Next, let's use the ``options`` object to delete our entry.

```javascript
var options = {
    uri: 'http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data/kevin',
    method: 'DELETE'
};

rp(options)
.then(function (body) {
    console.log(body)
});
```

Please ``DELETE`` your own entry. You should receive a JSON reponse that your request was received:

```json
{ 'message': 'Delete Received.'}
```

Verify your entry was deleted with a GET request to your endpoint or a GET request to ``/data``. 

Finally, re-``POST`` your data so that its present when we move on to [Exercise 3](./jsExercise3.md).






