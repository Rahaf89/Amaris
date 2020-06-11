const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const usersRouter = require('./Handlers/clients');
const policiesRouter = require('./Handlers/policies');

const router = express.Router();


app.route("/users", usersRouter);
app.route("/policies", policiesRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


module.exports = router, app;


app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

