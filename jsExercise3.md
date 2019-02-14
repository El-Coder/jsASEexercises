# Exercise 3

_Goal: Make a GET request to the old Python web server and retrieve your old data. Make a GET request to this lesson's web server and retrieve today's data. Take the message from the old data and ``update`` today's data (using the ``PUT`` method) with a JSON property of ``oldMessage``._

Sound easy, right? Use ``Promises`` to pass response data to your later requests. 

## Organize

Here are the steps we need to take;
* GET request to the web server, retrieve your current data
* Create a payload where the current message is now the ``oldMessage``. Add a new message as ``message``.
* PUT request to the web server to update your data with the new payload (which will include ``name``, ``message``, and ``oldMessage``.)
* Another GET request to verify our data has been properly updated.

The ``PUT`` request needs to happen last and it needs the data from the first ``GET`` request to do its work.

## Psuedo Code
Here is some example (psuedo) code to get you started.

```javascript
request(GET current data)
.then(function(current data) {
    //Create my new payload
    var options = {
        //new payload
        //set method
    };
    //Make my PUT request with new payload
    request(PUT new data);
}).then(function() {
    //Make another GET request to verify changes
    return request(GET new/current data);
}).then(function(new data) {
    //Do something with our new data
}).catch(function(err) {
    //Do something with the error
})
```

Feel free to come up with your own answer using a different approach. There is rarely one right answer to any problem being solved in code.

<details><summary>Solution</summary>
<p>

Review the answer in [Exercises](./Exercises) labelled ``3a.js``. 

```javascript
const rp = require('request-promise');
const uri = 'http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com:8080/data/kevin'

rp(uri)
.then(function(oldBody) {
    var options = {
        method: 'PUT',
        uri: uri,
        body: {
            name: oldBody.name,
            oldMessage: oldBody.message,
            message: "Squeaky Clean New Message."
        },
        json: true
    };
    rp(options);
}).then(function() {
    return rp(uri);
}).then(function(response) {
    console.log(JSON.parse(response));
}).catch(function (err) {
    console.log(err);
});
```
      
</p>
</details>
