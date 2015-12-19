var express = require('express');
var profit = require("profit");
var browserify = require('browserify-middleware');
var app = express();

app.get('/js/main.js', browserify(__dirname + '/src/main.js'));


app.get('/stocks', function(req,res) {
	profit.setApiKey("");
	var testVenue =  "TESTEX";
	var testSymbol = "FOOBAR";
	profit.getStock(testVenue, testSymbol, function(d){
		res.send(d);
	});
});

app.use(express.static(__dirname + '/app'));
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server running');
  console.log('http://%s:%s', host, port);
});