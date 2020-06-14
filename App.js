const bodyParser = require("body-parser"); 
const usersRouter = require('./Handlers/clients');
const policiesRouter = require('./Handlers/policies');
const authMiddleware = require ('./auth')

const secrets = require("./Config/secrets");
const { Pool } = require("pg");

const express = require("express");
const app = express();

const pool = new Pool({
  user: secrets.dbuser,
  host: secrets.dbhost,
  database: secrets.dbdatabase,
  password: secrets.dbPassword,
  port: 5432
});


app.use(bodyParser.json());
app.use(authMiddleware(pool));


app.use("/users", usersRouter(pool));
//app.use("/policies", policiesRouter);


app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

