var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = mongoose.model('Note');

/* GET note json */
router.get('/notes', function(req, res, next) {
  Note.find(function(err, notes) {
    if(err) { return next(err); }
    res.json(notes);
  });
});

/* POST note json */
router.post('/notes', function(req, res, next) {
  console.log("in POST note");
  var note = new Note(req.body);
  note.save(function(err, note) {
    if(err) { return next(err); }
    res.json(note);
  });
});

module.exports = router;
