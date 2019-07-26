const Note = require('../models/note.model');

module.exports = {
  index(req, res){
    Note.find({})
      .then(notes => res.json(notes))
      .catch(error => res.status(500).json(error));
  },

  create(req, res){
    Note.create(req.body)
      .then(note => res.json(note))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        res.status(500).json(errors);
      });
  }
};
