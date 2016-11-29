import Backbone from 'backbone';
import QuoteView from 'app/views/quote_view';
import $ from 'jquery';
import _ from 'underscore';

var ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.stocks = options.stocks;
    this.quoteTemplate = _.template($("#tmpl-quote-view").html());
    this.quoteList = [];
    for (var i = 0; i < this.stocks.length; i++){
      var newQuote = new QuoteView({quote: this.stocks[i], template: this.quoteTemplate});
      this.quoteList.push(newQuote);
    }
    this.containerForQuotes = $('.quotes');
  },

  render: function() {
    this.containerForQuotes.empty();
    for (var i = 0; i < this.quoteList.length; i++){
      this.containerForQuotes.append(this.quoteList[i].render().$el);
    }

    return this;
  }
});

export default ApplicationView;
