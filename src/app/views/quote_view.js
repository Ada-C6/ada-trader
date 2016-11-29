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
  }
});
