import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import ApplicationView from 'app/views/application_view';

var quoteData = [
  {
    symbol: 'HUMOR',
    price: 88.50
  }, {
    symbol: 'CLOTH',
    price: 81.90
  }, {
    symbol: 'HABIT',
    price: 98.00
  }
];

const simulate = function(quote) {
  // Calculate a random price movement
  const maxChange = 1.00;
  const minChange = 0.00;
  var change = _.random(minChange * 10, maxChange * 10) / 10;

  // Decide if the change is positive or negative
  if(_.random(0,1) === 1) {
    change *= -1;
  }

  // Actually trigger the change
  quote.trigger('change:price', change);
};

$(document).ready(function() {
  var appView = new ApplicationView({
    el: '#application',
    quoteData: quoteData
  });

  appView.render();

  setInterval(function() {
    // Call simulate() on each quote in the ApplicationView
  }, 1000);
});
