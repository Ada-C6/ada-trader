import Backbone from 'backbone';
import _ from 'underscore';

// We pass in an object to the function that contains multiple functions (initialize
// and render)

var QuoteView = Backbone.View.extend({
  initialize: function(options){
    this.quote = options.quote;
    this.template = options.template;
  },
  render: function(){
    this.$el.html(this.template({symbol: this.quote.symbol, price: this.quote.price}));
    return this;
  }
});

export default QuoteView;
