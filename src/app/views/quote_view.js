import Backbone from 'backbone';

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
  }
})

export default QuoteView;
