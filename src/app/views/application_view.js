import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.stockData = options.stockData;
    this.template = _.template($('#tmpl-quote-view').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.quotes');

    // we will iterate over this list to disply the quotes in render()
    this.quoteList = [];

    // use this loop to make the quotes for quote list
    this.stockData.forEach(function(stock) {

    var quote = new QuoteView({
      stock: stock,
      template: this.template
    });

    this.quoteList.push(quote);
    }, this); // bind `this` so it's available inside forEach
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.quoteList.forEach(function(stock) {
    // Cause the task to render
    stock.render();

    // Add that HTML to our quote list
    this.listElement.append(stock.$el);
    }, this);

    return this; // enable chained calls

  }
});

export default ApplicationView;
