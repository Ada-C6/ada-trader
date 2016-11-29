//Have a QuoteView class extended from Backbone.View (in src/app/views/quote_view.js)
import _ from 'underscore';
import $ from 'jquery';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    //Compile an Underscore template using the script named tmpl-quote-view
    this.template = options.template;
  },

  render: function() {
    var html = this.template(this.quote)
    this.$el.html(html);

    return this;
  }
});

export default QuoteView;
