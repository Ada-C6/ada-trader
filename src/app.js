import $ from 'jquery';
import _ from 'underscore';
import ApplicationView from 'app/views/application_view';

var exampleQuotes = [
  {
    symbol: 'HUMOR', price: 88.50, desc: "Cristal's HumorUs capstone"
  },
  {
    symbol: 'CLOTH', price: 81.70, desc: "Sophia's Cloth Sim capstone"
  },
  {
    symbol: 'HABIT', price: 98.00, desc: "Val's Habitmon capstone"
  },
  {
    symbol: 'SUPER', price: 83.10, desc: "Rowan's Super Hero Draft capstone"
  },
  {
    symbol: 'INGRD', price: 79.40, desc: "Nicole's Ingredient Inspector capstone"
  },
  {
    symbol: 'MXTPE', price: 109.20, desc: "Jess's Digital Mixtape capstone"
  },
  {
    symbol: 'CNTAR', price: 90.70, desc: "Leah's Centaur capstone"
  },
  {
    symbol: 'EVCLR', price: 101.90, desc: "Lisa's Evolution In Color capstone"
  },
  {
    symbol: 'FUZZY', price: 88.60, desc: "Jade's Fuzz Therapy capstone"
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
    quoteList: exampleQuotes,
  });

  appView.render();

  setInterval(function() {
    // Call simulate() on each quote in the ApplicationView
  }, 1000);
});
