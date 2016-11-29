import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

const QuoteView = Backbone.View.extend({
  initialize: function(quote, template) {
    this.quote = quote;

    if (!template) {
      // Compile a Underscore template
      this.template = _.template($('#tmpl-quote-view').html());
    } else {
      this.template = template;
    }
  },

  render: function() {
    var html = this.template({
      symbol: this.quote.symbol,
      price: this.quote.price,
    });

    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
    'click .btn-buy': 'buy',
    'click .btn-sell': 'sell'
  },

  buy: function(event) {
    this.quote.price += 1.0;
    this.render();
  },

  sell: function(event) {
    if (this.quote.price > 1.0) {
      this.quote.price -= 1.0;
    }

    this.render();
  },
});

export default QuoteView;
