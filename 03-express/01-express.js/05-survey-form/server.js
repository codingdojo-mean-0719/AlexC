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

app.post('/result', function(request, response){
    const userData = {
        name: request.body.name,
        dojoLocation: request.body.dojoLocation,
        favoriteLanguage: request.body.favoriteLanguage,
        comment: request.body.comment
    };
    response.render('result', { userData: userData });
});

app.listen(port, () => console.log(`listening on port ${port}`));