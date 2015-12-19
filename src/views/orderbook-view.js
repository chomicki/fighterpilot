var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Handlebars = require('handlebars');

var OrderBookView = Backbone.View.extend({
	tagName: 'div',
	template: Handlebars.compile($('#orderbook-template').html()),

	render: function() {
		var viewData = {
			price: this.model.get('price'),
			quantity: this.model.get('quantity'),
			isBuy: this.model.get('isBuy')
		}
		return this.template(viewData);
	}

});


module.exports = OrderBookView;