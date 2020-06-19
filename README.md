API Test:


This is the api code created for the clients exercise as a job test on Node and databases. The ApI is protected by an auth system that will attach the X-Auth-User header to any requests that it receives, so we know which user is making the request.

This project is an example on how to create an api storing and retrieving information from a database.

How to make it work?
In order to run this project you must:

*	Fork and clone the project
*	Excute the querys from dbClient and dbPolicies in your PostgreSQL database
*	Add secrets.js file in Config folder and adjust it according to your database configurations like what setted in secretExample.js file.
*	Execute npm install in order to install all dependencies
*	Execute npm start to launch the server


### Authentication

Requests must have the header X-Auth-User set to the ID of an existing user. Requests will be process using the role of this user.

## Endpoints 

* GET /users/ returns all the users
* GET /users/name/:name returns filtered by user name
* GET /users/id/:id returns users filtered by user id
* GET /policies/name/:name returns policies linked to user name
* GET /users/policy/:id returns users linked to policy number



<img src="https://media1.tenor.com/images/03d14d3bfe12e420efd76774ab1615c9/tenor.gif?itemid=6007757" height="150" width="200">
