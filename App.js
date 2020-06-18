const usersRouter = require("./Handlers/users");
const policiesRouter = require("./Handlers/policies");
const { authMiddleware } = require("./auth");

const secrets = require("./Config/secrets");
const { Pool } = require("pg");

const express = require("express");
const app = express();

const db = new Pool({
  user: secrets.dbuser,
  host: secrets.dbhost,
  database: secrets.dbdatabase,
  password: secrets.dbPassword,
  port: 5432,
});

app.use(authMiddleware(db));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("error");
});

app.use("/users", usersRouter(db));
app.use("/policies", policiesRouter(db));

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
