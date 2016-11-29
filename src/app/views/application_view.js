import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.quoteList = options.quoteList;
    // Compile a Underscore template
    this.template = _.template($('#tmpl-quote-view').html());

    this.quoteViewList = [];

    this.quoteList.forEach(function(quote) {
      var quoteView = new QuoteView(quote, this.template);
      this.quoteViewList.push(quoteView);
    }, this); // bind `this` so it's available inside forEach

    this.quoteListEl = $('.quotes');
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.quoteListEl.empty();

    // Loop through the data assigned to this view
    this.quoteViewList.forEach(function(quoteView) {
      // Cause the task to render
      quoteView.render();

      // Add that HTML to our task list
      this.quoteListEl.append(quoteView.$el);
    }, this);

    return this;
  }
});

export default ApplicationView;
