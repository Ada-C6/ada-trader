import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({quote: this.quote});
    this.$el.html(html);

    return this;
  },

  events: {
  'click .btn-sell': 'sellStock',
  'click .btn-buy': 'buyStock'
  },

  sellStock: function(event) {
    this.quote.price -= 1;
    this.render();

  },

  buyStock: function(event) {
    this.quote.price += 1;
    this.render();
  }

});

export default QuoteView;
