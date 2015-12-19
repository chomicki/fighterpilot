var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var http = require('http');

var OrderBookCollection = require('./collections/orderbook-collection');
var OrderBookModel = require('./models/orderbook-model');
var AppView = require('./views/app-view');



var App = Backbone.Router.extend({
	start: function() {

		orderbook = new OrderBookCollection();
		window.view = new AppView({
			el: '#app',
			collection: orderbook
		});
		view.render();


		http.get('/stocks', function(res){
			var data = ""
			res.on('data', function(d){
				data += d;
			});
			res.on('end', function(){
				data = JSON.parse(data);
				var models = [];
				for (var i = 0; i < data.bids.length; ++i) {
					models.push(
						new OrderBookModel({
							price: data.bids[i].price,
							quantity: data.bids[i].qty,
							isBuy: data.bids[i].isBuy
						})
					);
				}
				console.log("ORDERBOOK", orderbook);
				orderbook.reset(models);
				console.log(data);
				console.log(data.bids);
				console.log(data.asks);
				view.render();
			});
		});

		orderbook.add([{price:1000,quantity:2,isBuy:false}]);
	}
});

module.exports = new App();