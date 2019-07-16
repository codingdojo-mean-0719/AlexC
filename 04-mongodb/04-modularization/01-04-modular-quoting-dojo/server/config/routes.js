const mongoose = require('mongoose'),
Quote = mongoose.model('Quote')
module.exports = function(app){

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
}