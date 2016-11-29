// This is the main application view, which should get information from calls to QuoteView

// import Backbone and QuoteView
import QuoteView from 'app/views/quote_view';

// Import Backbone, jQuery and Underscore
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// This Application View was handed to me with the starting file set. It is a constant with an initialize that takes no argument and a render that simply renders Hello World.
const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // Store the full list of sampleData as an instance variable called sampleData
    this.sampleData = options.sampleData;

    // Compile the template by using jQuery to locate the html helement with the ID tmpl-qote-view
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    // Send information to console to help with debugging.
    console.log("I just greated the quote template:");
    console.log(this.quoteTemplate);

    // Store the targeted list element after finding it with a jQuery search for the class quotes
    this.listElement = this.$('.quotes');

    // Create a blank array to store elements
    this.quoteList = [];

    // Iterate through the sampleData and do the following:
    this.sampleData.forEach(function(quote) {

      // Create a new TaskView with the parameters task and taskTemplate
      var listItem = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });

      // Push this item into the item array
      this.quoteList.push(listItem);
      console.log("You've just push something to quoteList. Here's where that quoteList stands:");
      console.log(this.quoteList);
    }, this); // bind `this` so it's available inside forEach (I still don't understand what this is doing)
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    console.log("You're in the ApplicationView render function, about to empty the listElement");
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.quoteList.forEach(function(listItem) {
      // Cause the object to render
      console.log("You're in the quoteList loop in the AV render function");
      console.log(listItem);
      listItem.render();

      // Add that HTML to our task list
      this.listElement.append(listItem.$el);
    }, this);

    return this; // enable chained calls
  }
});


// Export Application View
export default ApplicationView;
