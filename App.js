const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
})
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


module.exports = function(req,res,next) {
    if (req.session.role === 'user') {
        res.render('userpage');
    } else if (req.session.role === 'admin') {
        res.render('adminpage');
    } else {
        res.render('unauthenticated');
    }
};


app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

