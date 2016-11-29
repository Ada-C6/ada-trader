import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({  // Keeps track of one task
  initialize: function(options) {
    this.symbol = options.symbol;
    this.price = options.price;
    this.template = options.template;
    this.price.on('change:price');
  },

  render: function() {
    var html = this.template({symbol: this.symbol, price: this.price});
    this.$el.html(html);

    // Enable chained calls
    return this;  // When render is invoked, get 'this' view back again; even if you aren't using it, 'return this' from render
  },

  events: {
    'click .btn-sell': 'sellStock', // Listen for click on an element with clear-button class
    'click .btn-buy': 'buyStock'
  },

  sellStock: function() {
    console.log("sellStock called");
    this.price -= 1;
    this.render();
  },

  buyStock: function() {
    console.log("buyStock called");
    this.price += 1;
    this.render();
  }

});

export default QuoteView;
