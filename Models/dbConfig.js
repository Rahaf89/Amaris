
const Pool = require('./node_modules/pg').Pool
const secrets = require("../secrets");

const pool = new Pool({
  user: secrets.dbuser,
  host: secrets.dbhost,
  database: secrets.dbdatabase,
  password: secrets.dbPassword,
  port: 5432
});


