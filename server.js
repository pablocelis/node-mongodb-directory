var express = require('express');
var dir = require('./routes/directory');

var app = new express();

//app.use(express.static(__dirname + '/public'));

app.get('/employees/all', dir.findAll);
app.get('/employees/search/', dir.findByName);
app.get('/employees/:id', dir.findById);
app.get('/employees/:id/managerOf', dir.findByManager);

app.listen(8000);