import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    //Receive and store a list of quote data objects.
    this.quoteData = options.quoteData;

    //Compile the same Underscore template from Wave 1. This compiled template will replace the one used in `QuoteView` during Wave 1.
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    //Create and store a list of *at least* two `QuoteView` instances. Each instance should be given:
    //     * The data for a single quote.
    //     * The compiled Underscore template from the above step.
    this.cardList = [];
    this.quoteData.forEach(function(quote) {
      var card = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });

      this.cardList.push(card);
    }, this);

    //Store the HTML unordered list element from `index.html` that will contain the list of rendered `quotes`.
    this.listElement = this.$('.quotes');
  },

  // * Have a `render` function that should:
  render: function() {
    // this.$el.html('<p>Hello World</p>');

    // Make sure the list in the DOM is empty before we start appending items
    this.listElement.empty();
    //   * Render each `QuoteView` instance in the list created within `initialize`.
    //   * Use the stored HTML unordered list element.
    //   * Append to that element the jQuery object for each `QuoteView` instance we rendered.
    this.cardList.forEach(function(card) {
      card.render();
      this.listElement.append(card.$el);
    }, this);
    return this;
  }
});

export default ApplicationView;
