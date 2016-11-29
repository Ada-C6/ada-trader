import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var QuoteView = Backbone.View.extend({

/////////////////// straight up copied

  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    // alert('it has been rendered');
    var html = this.template({quote: this.quote});
    this.$el.html(html);
    return this;
  },

  events: {
    'click .btn-buy': 'buy',
    'click .btn-sell': 'sell'
  }, // end of events

  buy: function(event) {
    event.preventDefault();
    // take the price and increment by 10, then re-render
    this.quote.price += 10;
    this.render();
  },

  sell: function(event) {
    event.preventDefault();
    // subtract 10 from the price, re-render
    this.quote.price -= 10;
    this.render();
  }
})

export default QuoteView;
