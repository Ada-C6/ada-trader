import Backbone from 'backbone';
// import _ from 'underscore';

// Have an initialize function that should:
// Receive and store a JavaScript object with quote data (symbol and price). See Example Stocks for inspiration. (Symbol: HUMOR, Price: $88.50 - Cristal's HumorUs capstone)

// Compile an Underscore template using the script named tmpl-quote-view (which is already defined in index.html).

// Have a render function that should:
// Use the compiled template to render HTML for a single quote, using the quote data stored by initialize.

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    // options = an element in a list of quotes
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({quote: this.quote});
    this.$el.html(html);
    return this;
  },

  // The `QuoteView` class should:
  //   * Have an `events` property that defines two handlers for the `click` event, one for each `button` in the quote template.
  events: {
    'click .btn-sell' : 'decreasePrice',
    'click .btn-buy' : 'increasePrice',
  },

  //   * Have a function that runs when the `click` event happens on the buy button. This function should:
  //     * Increase the stock's price by a fixed amount (say, $1.00).
  //     * Re-render the view so that the new price is displayed to the user.

  increasePrice: function(event) {
    console.log("increasePrice called");
    this.quote.price += 1;
    this.render();
  },

  //   * Have a function that runs when the `click` event happens on the sell button. This function should:
  //     * Decrease the stocks' price by a fixed amount (say, $1.00).
  //     * Re-render the view so that the new price is displayed to the user.
  decreasePrice: function(event) {
    console.log("decreasePrice called");
    this.quote.price -= 1;
    this.render();
  },
});

export default QuoteView;
