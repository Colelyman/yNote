var mongoose = require('mongoose');
var NoteSchema = new mongoose.Schema({
  username: String,
  title: String,
  tags: [{ type: String }],
  editedDates: [{ type: Date, default: Date.now }],
  body: String
});
mongoose.model('Note', NoteSchema);

module.export = mongoose.model('NoteSchema', NoteSchema);
