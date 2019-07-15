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

app.get('/', function(request, response){
    response.render('index');
});

app.get('/quotes', function(request, response){
    Quote.find({}, function(err, quotes){
        if(err){ console.log(err); }
        response.render('quotes', { quotes: quotes });
    });
});

app.post('/quotes', function(request, response){
    Quote.create(request.body, function(err){
        if(err){ console.log(err); }
        response.redirect('/quotes');
    });
});

app.listen(port, () => console.log(`express server listening on port ${port}`));
