import $ from 'jquery';
import _ from 'underscore';
import ApplicationView from 'app/views/application_view';

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
  console.log(change);
};

var stocks = [{symbol: "HUMOR", price: 88.50}, {symbol: "CLOTH", price: 81.70}, {symbol: "HABIT", price: 98.00}, {symbol: "SUPER", price: 83.10}]

$(document).ready(function() {
  var appView = new ApplicationView({
    el: '#application',
    stocks: stocks
  });

  appView.render();

  setInterval(function() {
    // Call simulate() on each quote in the ApplicationView
    for(var i = 0; i < appView.quoteList.length; i++){
      simulate(appView.quoteList[i]);
    }
  }, 1000);
});
