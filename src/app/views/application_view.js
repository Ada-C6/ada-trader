import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
  // Store a the full list of quotes
  this.quoteData = options.quoteData;

  // Compile a template to be shared between the individual tasks
  this.quoteTemplate = _.template($('#tmpl-quote-view').html());

  // Keep track of the <ul> element
  this.listElement = this.$('.quotes-row');

  // Create a QuoteView for each task
  this.quoteList = [];
  // console.log(quoteData);
  this.quoteData.forEach(function(quote) {
    var quoteCard = new QuoteView({
      quote: quote,
      template: this.quoteTemplate
    });
    this.quoteList.push(quoteCard);
  }, this); // bind `this` so it's available inside forEach

//   // Keep track of our form input fields
//   this.input = {
//   title: this.$('.new-task input[name="title"]'),
//   description: this.$('.new-task input[name="description"]')
// };
},

render: function() {
  // Make sure the list in the DOM is empty
  // before we start appending items
  this.listElement.empty();

  // Loop through the data assigned to this view
  this.quoteList.forEach(function(quoteCard) {
    // Cause the quote to render
    quoteCard.render();

    // Add that HTML to our quote list
    this.listElement.append(quoteCard.$el);
  }, this);

  return this; // enable chained calls
}
});

export default ApplicationView;
