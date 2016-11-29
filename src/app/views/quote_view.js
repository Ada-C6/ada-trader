import $ from 'jquery';    // Letting us use jquery within this document
import Backbone from 'backbone'; // importing backbone
import _ from 'underscore';

var QuoteView = Backbone.View.extend({
  initialize: function(options){
    this.stock = options.stock;
    this.template = options.template;
  },

  render: function(){
    var html = this.template({stock: this.stock})
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
    // format is ====>  "event css-selector": 'functionName'
    'click .btn-sell': 'lowerPrice', // Want this to be sumbit and reference the form so we can access the input information
    'click .btn-buy ': 'raisePrice'
  }, // end events

  raisePrice: function() {
    this.stock.price += 1.00;
    this.render();
  },

  lowerPrice: function() {
    this.stock.price -= 1.00;
    this.render();
  },

});

export default QuoteView;
