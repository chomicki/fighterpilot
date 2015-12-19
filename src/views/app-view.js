var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var OrderBookView = require('./orderbook-view');

var AppView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addOrder);
		this.listenTo(this.collection, 'reset', this.addOrders);
	},

	addOrder: function(orderbookItem) {
		var view = new OrderBookView({
			model: orderbookItem
		});
		$('#app').append(view.render());
	},

	addOrders: function(orderbooksItems) {
		$('#app').html("");
		console.log(orderbooksItems);		for (var i = 0; i < orderbooksItems.models.length; ++i) {
			this.addOrder(orderbooksItems.models[i]);
		}
	}

});

module.exports = AppView;