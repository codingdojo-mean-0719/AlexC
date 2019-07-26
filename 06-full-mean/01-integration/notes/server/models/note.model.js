const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema({
  content: {
    type: String,
    required: [true, 'provide a note'],
    trim: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
