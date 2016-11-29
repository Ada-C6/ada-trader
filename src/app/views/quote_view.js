import Backbone from 'backbone';

const QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.stock  = options.stock;
    // need to make symbol and price because of how template is laid out
    this.symbol = this.stock.symbol;
    this.price  = this.stock.price / 100;

    this.template = options.template;
  },

  render: function() {
    var html = this.template({symbol: this.symbol, price: this.price});
    this.$el.html(html);

    return this;
  },

  events: {
    'click .btn-buy': 'buyStock',
    'click .btn-sell': 'sellStock'
  },

  buyStock: function(event) {
    this.price += 1;
    this.render();
  },

  sellStock: function(event) {
    this.price -= 1;
    this.render();
  },

});

export default QuoteView;
