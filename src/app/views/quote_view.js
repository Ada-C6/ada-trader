import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

// We pass in an object to the function that contains multiple functions (initialize
// and render)

var QuoteView = Backbone.View.extend({
  initialize: function(options){
    this.quote = options.quote;
    this.template = options.template;
    this.on('change:price', this.updatePrice);
  },
  updatePrice: function(change){
    this.quote.price += change;
    if (this.quote.price < 0.00){
      this.quote.price = 0.00;
    }
    this.render();
  },
  render: function(){
    this.$el.html(this.template({symbol: this.quote.symbol, price: this.quote.price}));
    return this;
  },
  events: {
    'click .btn-buy': 'buyStock',
    'click .btn-sell': 'sellStock'
  },
  buyStock: function(event){
    this.quote.price += 1.00;
    this.render();
  },
  sellStock: function(event){
    this.quote.price -= 1.00;
    if (this.quote.price < 0.00){
      this.quote.price = 0.00;
    }
    this.render();
  }
});

export default QuoteView;
