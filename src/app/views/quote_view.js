import Backbone from 'backbone';

// Have an initialize function that should:
// Receive and store a JavaScript object with quote data (symbol and price). See Example Stocks for inspiration. (Symbol: HUMOR, Price: $88.50 - Cristal's HumorUs capstone)

// Compile an Underscore template using the script named tmpl-quote-view (which is already defined in index.html).


// Have a render function that should:
// Use the compiled template to render HTML for a single quote, using the quote data stored by initialize.

var QuoteView = Backbone.View.extend({
  initialize: function(quote) {
    this.symbol = quote.symbol;
    this.price = quote.price;
    this.about = quote.about;
    this.template = quote.template; // Compile an Underscore template using the script named tmpl-quote-view (which is already defined in index.html).
  },

  render: function() {
    var html = this.template({price: this.price});
    this.$el.html(html);
    return this;
  }
});
