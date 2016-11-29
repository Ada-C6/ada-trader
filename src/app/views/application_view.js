import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.quoteData = options.quoteData;

    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    this.listElement = this.$('.quotes');

    this.cardList = [];
    this.quoteData.forEach(function(quote) {
      var card = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });
      this.cardList.push(card);
    }, this);
  },

  render: function() {
    this.listElement.empty();
    this.cardList.forEach(function(card) {
      card.render();

      this.listElement.append(card.$el);
    }, this);

    return this;
  },

});

export default ApplicationView;
