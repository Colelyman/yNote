var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = mongoose.model('Note');

/* Display notes */
router.get('/', function(req, res, next) {
  res.render('notes.html');
});

module.exports = router;
