import _ from 'underscore';
import $ from 'jquery';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template(this.quote)
    this.$el.html(html);

    return this;
  },

  events: {
  'click .btn-buy': 'priceIncrease',
  'click .btn-sell': 'priceDecrease'
  },

  priceIncrease : function(event) {
    console.log("Buy!");
    this.quote.price += 10;
    this.render();
  },

  priceDecrease : function(event) {
    console.log("Sell!");
    this.quote.price -= 10;
    this.render();
  }

});

export default QuoteView;



// var price = this.quote.price
//
// var belowZeroCheck = function(){
//
//   console.log(price)
//   console.log("checking for negatives")
//   if ( price < 0) {
//     console.log("negative!");
//     $(".btn-sell").hide();
//   }
// }
//
// belowZeroCheck();
