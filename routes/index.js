var express = require('express');
var passport = require('passport');
var Account = require('../models/Account');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
  res.render('register', { });
});

router.post('/register', function(req, res) {
  //console.log("This is what the router.post gets" + JSON.stringify(req));
  Account.register(new Account({
    username : req.body.username }),
    req.body.password,
    function(err, account) {
      if (err) {
        return res.render('register', { info : "Sorry. That username already exists. Please try again with a different username!!"});
      }

      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
    });
});

router.get('/login', function(req, res, next) {
  console.log("In /login GET");
  res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log("In post /login to redirect");
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res) {
  res.status(200).send("pong!");
});

module.exports = router;
