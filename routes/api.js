var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = mongoose.model('Note');

/* GET json list of all notes */
router.get('/notes', function(req, res, next) {
  Note.find(function(err, notes) {
    if(err) { return next(err); }
    res.json(notes);
  });
});

/* GET json of one note */

router.param('note', function(req, res, next, id) {
  var query = Note.find('{_id:' + id + ', username:' + req.user.username + '}');
  query.exec(function(err, note) {
    if(err) { return next(err); }
    if(!note) { return next(new Error("The note cannot be found!!")); }
    req.note = note;
    return next();
  });
});

router.get('/notes/:note', function(req, res) {
  res.json(req.note);
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

router.delete('/notes/:note/remove', function(req, res, next) {
    console.log("in Delete Route");
});

module.exports = router;
