import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of quotes
    this.Stocks = options.Stocks;

    // Compile a template to be shared between the individual tasks
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    // Keep track of the <ul> element
    this.quoteElement = this.$('.quotes');

    // Create a QuoteView for each task
    this.quotesList = [];

    this.Stocks.forEach(function(quote) {
      var quote = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });
      this.quotesList.push(quote);
    }, this); // bind `this` so it's available inside forEach
  },

  render: function() {
  // Make sure the list in the DOM is empty
  // before we start appending items
    this.quoteElement.empty();
  // Loop through the data assigned to this view
    this.quotesList.forEach(function(quote) {
  // Cause the quote to render
    quote.render();
  // Add that HTML to our stock list
    this.quoteElement.append(quote.$el);
  }, this);

  return this; // enable chained calls
},

});

export default ApplicationView;
