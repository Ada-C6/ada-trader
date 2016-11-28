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

    // Enable chained calls
    return this;
  }
});

// task_view.js
export default QuoteView;
