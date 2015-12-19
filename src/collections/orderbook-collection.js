var Backbone = require('backbone');
var OrderBookModel = require('../models/orderbook-model');

var OrderBookCollection = Backbone.Collection.extend({
	model: OrderBookModel
});

module.exports = OrderBookCollection;