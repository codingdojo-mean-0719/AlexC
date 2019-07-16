const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const { Schema } = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));


const QuoteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
    },
    quote: {
        type: String,
        required: [true, 'quote is required'],
        timestamps: true,
    }
});

const Quote = mongoose.model('Quote', QuoteSchema);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/routes.js')(app)

app.listen(port, () => console.log(`express server listening on port ${port}`));
