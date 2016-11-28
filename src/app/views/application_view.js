import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.stockData = options.stockData;
    this.template = _.template($('#tmpl-quote-view').html());
  },

  render: function() {
    this.$el.html('<p>Hello World</p>');

    return this;
  }
});

export default ApplicationView;
