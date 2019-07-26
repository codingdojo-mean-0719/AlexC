const router = require('express').Router();
const { NoteController } = require('../controllers');

module.exports = router
  .get('/', NoteController.index)
  .post('/', NoteController.create)
