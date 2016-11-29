// This is the quote view, which should act independently and pass information to the application view.

// Import Backbone, jQuery and Underscore
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;

    // .template is a function that takes a hash with one key: quote
    this.template = options.template;

    // this is currently returning undefined
    console.log(this.template);
  },
  render: function() {
    // I am currently reaching this line but cannot act on the template call.
    console.log("You're in the QV render function but you haven't made new HTML");

    // NOTE: SOMEONE HAD BETTER EXPLAIN TO ME WHY THIS TEMPLATE DOESN'T TAKE A HASH THE WAY THAT THE OTHER TEMPLATE FROM TASK LIST DID
    var html = this.template(this.quote);
    console.log("You've made new HTML'");

    this.$el.html(html);

    // return this;
    console.log("You've left the QV render function");

  },

  events: {
    'click .btn-sell': 'buyFunction',
    'click .btn-buy': 'sellFunction'
  },

  // NOTE: WHY IS THIS THE CORRECT SYNTAX?
  buyFunction: function() {
    this.quote.price += 1.00;
    this.render();
  },

  sellFunction: function() {
    this.quote.price -= 1.00;
    this.render();
  }


});


export default QuoteView;
