import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.quoteData = options.quoteData;

    this.listElement = this.$('.quotes');

    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    this.quoteList = [];
    this.quoteData.forEach(function(stock) {  // Loop through task data above
      var stockQuote = new QuoteView({    // Create new card around each task
        symbol: stock.symbol,
        price: stock.price,
        template: this.quoteTemplate
      });
      this.quoteList.push(stockQuote);   // Put card into array
    }, this); // bind `this` so it's available inside forEach; In other words, you're using anonymous function outside of loop, but using forEach lets you use it inside the loop

  },

  render: function() {

    this.listElement.empty();
    // Loop through the data assigned to this view
    this.quoteList.forEach(function(quote) {
      // Cause the task to render
      quote.render();

      // Add that HTML to our task list
      this.listElement.append(quote.$el);
    }, this);

    return this;
  }
});

export default ApplicationView;
