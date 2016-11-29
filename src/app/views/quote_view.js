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
  }
});

export default QuoteView;
