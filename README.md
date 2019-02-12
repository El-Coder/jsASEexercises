# jsASEexercises

# ASE JavaScript Exercises

JavaScript is the dominant language of the Web. Clientside, its responsible for generating much of the dynamic content. Serverside javascript, typically through the use of node.js, allows developers to work in a common language on both ends of the stack. The Node Package Manager (NPM) is a package manager with a registry of thousands of packages to simplify node.js projects.   

F5 has embraced node.js as well. An extension to the F5's iRules data plane traffic manipulation technology, iRulesLX (Language eXtension), is based on node.js. A recently released control plane integration feature, iControlLX, is based on a node.js based framework. 

## Overview

Verify that you've installed [node.js](https://nodejs.org/en/download/) so that we have a common javascript execution environment for the exercises. Once again, a text editor with IDE functionality will be useful for the session ([Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), [Notepad++](https://notepad-plus-plus.org/), etc). 

## Exercises

The tasks in these exercises will follow a similiar pattern as the python exercises -- making HTTP requests (GETs and POSTs) and processing the data returned. The main theme of the exercises will be getting acquainted with the asynchronous nature of JavaScript. We'll cover modern [ES6](https://www.w3schools.com/js/js_es6.asp) native concepts designed to make working with the asychronous nature of the language more pleasant. 

Yet again I've written another small web server that uses the same MongoDB backend as the previous Python exercises. The [app](./WebServer/app.py) is again packaged in a docker container and can be easily built/run on any docker host if you want to experiment with it later. 

The webserver will respond in accordance to this table:

| Method | Path         | Result               |
|--------|--------------|----------------------|
| GET    | /*           | index.html           |
| GET    | /data        | db contents          |
| GET    | /data/{name} | db record for {name} |
| POST   | /*           | db insert            |

### Exercise Overviews

For each exercise, I have provided a solution based on running node.js interactively. Please package your answers in scripts so they can be easily shared, placed in a SCM repository, etc. Your answers will start like this:
```javascript


###your code here###
```

<details><summary>Optional</summary>
<p>

If you are comfortable with git, clone the repo, create a branch, and collect your answers in directory under the [answers](./answers) directory of the repository. Initiate a [pull request](https://help.github.com/articles/about-pull-requests/) when you're done.
      
</p>
</details>

#### [Exercise 1](./jsExercise1.md)

Craft a GET request to / and ``console.log()`` the response to std_out. We'll do this a couple ways -- incorrectly and the correctly.

_10min_

#### [Exercise 2](./jsExercise2.md)

Send a POST containing the necessary JSON properties to store some data in the database.

_10min_

#### [Exercise 3](./pyExercise3.md)

Return the contents of the database (GET to /data) and store as the appropiate Python data structure. Perform some rudimentary data manipulation.

_15min_

<details><summary>Optional Advanced Exercises</summary>
<p>

Update the WebServer, [app.py](./WebServer/app.py) to be a little more useful. Here are some ideas:

Display a proper error page when recieving requests for paths that don't exist.
```bash
$ curl http://example.app/foo
HTTP/1.0 404 NOT FOUND
```
Implement a URI routing scheme that displays individual database entries based on path.
```bash
$ curl http://example.app/kevin
{'name': 'kevin', 'message': 'calmer than you are'}
HTTP/1.0 200 OK
```
Implement the DELETE http method to remove an individual record.
```bash
$ curl -X DELETE http://example.app/kevin
{'response': 'db entry "kevin" deleted'}
HTTP/1.0 200 OK
```
Or any other modification you'd like. 
      
</p>
</details>


[Start on Exercise 1](./pyExercise1.md)