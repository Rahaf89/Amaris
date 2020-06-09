const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({
    secret: application_secret,
    resave: false,
    saveUninitialized: false
})
);

module.exports = function(req,res,next) {
    if (req.session.role === 'user') {
        res.render('userpage');
    } else if (req.session.role === 'admin') {
        res.render('adminpage');
    } else {
        res.render('unauthenticated');
    }
};