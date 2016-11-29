import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function(stock) {
    this.stock = stock;

    // Compile a Underscore template
    this.template = _.template($('#tmpl-quote-view').html());
  },

  render: function() {
    var html = this.template({
      symbol: this.stock.symbol,
      price: this.stock.price,
    });

    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

export default QuoteView;
