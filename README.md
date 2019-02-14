# ASE JavaScript Exercises

JavaScript is the dominant language of the Web. Clientside, its responsible for generating much of the rich dynamic content being displayed in your browser. Serverside javascript, typically through the use of node.js, allows developers to work in a common language on both ends of the stack.   

F5 has embraced node.js as well. iRulesLX (Language Extensions), a next generation data plane traffic manipulation technology, is implemeted in node.js. A recently released control plane integration feature, iControlLX, is based on a node.js based framework. 

## Overview

Verify that you've installed [node.js](https://nodejs.org/en/download/) so that we have a common javascript execution environment for the exercises. Once again, a text editor with IDE functionality will be useful for the session ([Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), [Notepad++](https://notepad-plus-plus.org/), etc). 

## Exercises

The tasks in these exercises will follow a similiar pattern as the python exercises -- making HTTP requests and processing the data returned. The main theme of the exercises will be getting acquainted with the asynchronous nature of JavaScript. We'll cover modern [ES6](https://www.w3schools.com/js/js_es6.asp) native concepts designed to make working with the asychronous nature of the language more pleasant. 

Yet again I've written another small web application that uses the same MongoDB backend as the previous Python exercises. The [app](./WebServer/app.py) is again packaged in a Docker container and can be easily built/run on any docker host if you want to experiment with it later. This time the app far more featured. Its designed in terms of _very_ basic [MVC framework](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) concepts and the API fully (yet barely) implements [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) concepts.

The webserver will respond in accordance to this table:

| Method | Path         | Result               |
|--------|--------------|----------------------|
| GET    | /            | index.html           |
| GET    | /data        | all db contents      |
| POST   | /data        | db insert            |
| GET    | /data/{name} | db record for {name} |
| PUT    | /data/{name} | update record        |
| DELETE | /data/{name} | delete record        |

The webserver is listening on port *8080* at the same/previous URI from the previous exercise -- [http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com](http://ec2-54-191-220-106.us-west-2.compute.amazonaws.com). THe original Python webserver is running on port 80 on the same host.

### Exercise Overviews

For each exercise, I have provided a solutions in the [Exercises](./Exercises) folder of the repository. When you clone or download this repository place your answer scripts in the [Exercises](./Exercises) directory and common packages/dependencies will already be present (they are provided in the [node_modules](./Exercises/node_modules) directory).

#### [Exercise 1](./jsExercise1.md)

Craft a GET request to / and log (``console.log()``) the response to std_out. We'll walk through multiple ways of performing this task based on built-in libraries and a couple packages. We'll walk through this exercise together.

_20min_

#### [Exercise 2](./jsExercise2.md)

Send a POST containing the necessary JSON properties to store some data in the database. Manipulate this data to return the desired value to ``console.log()``. Use the ``DELETE`` HTTP method to remove your data, recreate as needed. 

_10min_

#### [Exercise 3](./jsExercise3.md)

Make a GET request to the web server and return the ```{ message: "super secret message." }``` you left there in a previous exercise. Combine those bits of data into a ``PUT`` request to update your data and add a new JSON parameter. 

_15min_

[Start on Exercise 1](./jsExercise1.md)