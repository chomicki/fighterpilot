var Backbone = require('backbone');

var OrderBookModel = Backbone.Model.extend({
	defaults: {
		price: 0,
		quantity: 0,
		isBuy: null
	}
});

module.exports = OrderBookModel;