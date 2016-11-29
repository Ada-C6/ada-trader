import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
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
  }
});

export default QuoteView;
