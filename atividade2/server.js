

var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 2122;

var app = express(); 

app.use(bodyParser.json())

app.get('/teste', function(request, response){
    response.header("Content-Type",
        "application/json");
    var retorno = {'success':true, 'retorno':'ok' }
    response.send(JSON.stringify(
        retorno, null, 2));
});

app.post('/atividade1', function(request, response){
    console.log(request.body);      // your JSON
    var teste = request.body;
    teste.status ='Eu consegui';
    response.send(teste);    // echo the result back
  });


var server = app.listen(port);