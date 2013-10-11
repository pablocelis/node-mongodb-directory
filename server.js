var express = require('express');
var path = require('path');
var dir = require('./routes/directory');

var app = new express();

app.configure( function() {

	// parses request body and populates request.body
	app.use( express.bodyParser() );

	// checks request.body for HTTP method overrides
	app.use( express.methodOverride() );

	// serve the static content
	app.use ( express.static( path.join( __dirname, 'backbone' )));

	// show errors
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/employees/all', dir.findAll);
app.get('/employees/search/', dir.findByName);
app.get('/employees/:id', dir.findById);
app.get('/employees/:id/managerOf', dir.findByManager);

app.listen(8000);