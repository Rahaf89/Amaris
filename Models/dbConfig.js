
const Pool = require('./node_modules/pg').Pool
const secrets = require("./secrets");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Amaris",
  password: secrets.dbPassword,
  port: 5432
});


