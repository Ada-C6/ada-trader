var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template(this.quote)
    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

export default QuoteView;

// equivalent of task view
