import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({symbol: this.quote.symbol, price: this.quote.price});
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

    events: {
     'click .btn-sell': 'sellStock',
     'click .btn-buy': 'buyStock'
    },

   sellStock: function(event) {
     event.preventDefault();

     // subtract 1.00 from stock's price
     this.quote.price -= 1.00;

     // Re-render the specific item
     this.render();
   },

   buyStock: function(event, quote) {
     event.preventDefault();

     // add 1.00 from stock's price
     this.quote.price += 1.00;

     // Re-render the specific item
     this.render();

   }
});

export default QuoteView;
