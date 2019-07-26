const router = require('express').Router();

const NoteRouter = require('./note.route');

module.exports = router.use('/notes', NoteRouter);
