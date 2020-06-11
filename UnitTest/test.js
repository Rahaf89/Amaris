const data = require('./Models/dbConfig'); 
import app from "./App"

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
