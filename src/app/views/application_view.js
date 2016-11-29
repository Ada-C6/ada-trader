import _ from 'underscore';
import $ from 'jquery';
import QuoteView from 'app/views/quote_view';
import Backbone from 'backbone';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {

    // Store a the full list of tasks
    this.quoteData = options.quote;

    // Compile a template to be shared between the individual tasks
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.quotes');

    // Create a QuoteView for each task
    this.quoteList = [];
    this.quoteData.forEach(function(quote) {
      var quote = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });
      this.quoteList.push(quote);
    }, this); // bind `this` so it's available inside forEach
  }, // end of init fx

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.quoteList.forEach(function(quote) {
      // Cause the task to render
      quote.render();
      // Add that HTML to our task list
      this.listElement.append(quote.$el);
    }, this);

    return this;
  } // end of render fx


});

export default ApplicationView;
