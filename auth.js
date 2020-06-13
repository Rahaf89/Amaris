var jwt = require('jwt-simple')
var secrets = require('./secrets')
var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt    = require('jwt')
var User   = require('./models/dbConfig')


router.get('/users', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  var auth = jwt.decode(req.headers['x-auth'])
  User.findOne({username: auth.username}, function (err, user) {
    if (err) { return next(err) }
    res.json(user)
  })
})

router.post('/users', function (req, res, next) {
  var user = new User({username: req.body.username})
    if (err) { return next(err) }
    user.save(function (err) {
      if (err) { return next(err) }
      res.sendStatus(201)
    })
  })

module.exports = router

module.exports = function (req, res, next) {
  if (req.headers['x-auth']) {
    req.auth = jwt.decode(req.headers['x-auth'])
  }
  next()
}