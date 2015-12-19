var profit = require("profit");
var testAccount = "EXB123456";
var testVenue =  "TESTEX";
var testSymbol = "FOOBAR";

profit.setApiKey("");

setInterval(function(){
	profit.getStock(testVenue, testSymbol, function(d){
		console.log(d);
	});
	},
	1000
);

var order = {
	account: testAccount,
	venue: testVenue,
	stock: testSymbol,
	price: 800,
	qty: 100,
	direction: 'buy',
	orderType: 'limit'
}

profit.postOrder(order, function(d){
	console.log(d);
});