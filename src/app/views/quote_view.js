import Backbone from 'backbone';

var QuoteView = Backbone.View.extend({
  initialize: function() {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {

    return this;
  }
})

export default QuoteView;
