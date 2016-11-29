import $ from 'jquery';    // Letting us use jquery within this document
import Backbone from 'backbone'; // importing backbone
import _ from 'underscore';
import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of tasks
    this.stockData = options.stockData;

    // Compile a template to be shared between the individual tasks
    this.stockTemplate = _.template($('#tmpl-quote-view').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.quotes');

    // Create a TaskView for each task
    this.stockList = [];
    this.stockData.forEach(function(stock) {
      var card = new QuoteView({
        stock: stock,
        template: this.stockTemplate
      });
      this.stockList.push(card);
    }, this);
  }, // end initialize


  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.stockList.forEach(function(stock) {
      // Cause the task to render
      stock.render();

      // Add that HTML to our task list
      this.listElement.append(stock.$el);
    }, this);

    return this; // enable chained calls
  } // end render

}); // end Application View

export default ApplicationView;
