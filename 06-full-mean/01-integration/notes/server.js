const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();


require('./server/config/database');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/books')));
app.use(require('./server/routes'));

app.listen(port, () => console.log(`express server listening on port ${port}`));
