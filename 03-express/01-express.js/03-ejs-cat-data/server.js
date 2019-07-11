const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response){
    response.render('index');
});

app.get('/cars', function(request, response){
    response.render('cars');
});

app.get('/cats', function(request, response){
    response.render('cats');
});

app.get('/cats/fancy-cat', function(request, response){
    var cat_details = [{
        name: "Fancy-cat",
        age: 3
    }];
    response.render('details', { details: cat_details });
});

app.get('/cats/tidy-cat', function(request, response){
    var cat_details = [{
        name: "Tidy-cat",
        age: 4
    }];
    response.render('details', { details: cat_details });
});

app.get('/cats/driving-cat', function(request, response){
    var cat_details = [{
        name: "Driving-cat",
        age: 2
    }];
    response.render('details', { details: cat_details });
});

app.listen(port, () => console.log(`listening on port ${port}`))