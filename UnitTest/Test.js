const data = require('./Models/DB_Config'); 
import app from "./App"

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })