const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const { Schema } = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/animals', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));


const AnimalSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'age is required'],
    }
});

const Animal = mongoose.model('Animal', AnimalSchema);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response){
    Animal.find({})
        .then(animals => {
            response.render('index', { animals: animals })
        })
        .catch(err => {
            console.log('error finding data:', err)
        });
});

app.get('/animals/new', function(request, response){
    response.render('new');
});

app.post('/animals', function(request, response){
    const animal = new Animal(request.body);
    animal.save(function(err){
        if(err){
            console.log('There was a problem');
            response.redirect('/animals/new');
        } else {
            console.log('Successfully entered into the db');
            response.redirect('/');
        }
    });
});

app.get('/animals/:id', function(request, response){
    Animal.find({ id: request.params.id })
        .then(details => {
            response.render('show', { details: details })
        })
        .catch(err => {
            console.log('error finding data:', err)
        });
});

app.get('/animals/edit/:id', function(request, response){
    Animal.find({ _id: request.params.id })
        .then(details => {
            response.render('edit', { details: details })
        })
        .catch(err => {
            console.log('error finding data:', err)
        });
});

app.post('/animals/:id', function(request, response){
    Animal.update({ _id: request.params.id }, { $set: { name: request.body.name, age: request.body.age } }, function(err){
        response.redirect('/')
    });
});

app.post('/animals/destroy/:id', function(request, response){
    Animal.remove({ _id: request.params.id }, function(err){
        response.redirect('/')
    });
});

app.listen(port, () => console.log(`express server listening on port ${port}`));