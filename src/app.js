import $ from 'jquery';
import _ from 'underscore';
import ApplicationView from 'app/views/application_view';
import QuoteView from 'app/views/quote_view';

var stockData = [
 {
   symbol: 'HUMOR',
   price: 8850
 }, {
   symbol: 'CLOTH',
   price: 8170
 }, {
   symbol: 'HABIT',
   price: 9800
 }, {
   symbol: 'SUPER',
   price: 8310
 }
];
//
// const simulate = function(quote) {
//   // Calculate a random price movement
//   const maxChange = 1.00;
//   const minChange = 0.00;
//   var change = _.random(minChange * 10, maxChange * 10) / 10;
//
//   // Decide if the change is positive or negative
//   if(_.random(0,1) === 1) {
//     change *= -1;
//   }

//   // Actually trigger the change
//   quote.trigger('change:price', change);
// };

$(document).ready(function() {
  var appView = new ApplicationView({
    el: $('#application'),
    quote: stockData
  });

  appView.render();

  // setInterval(function() {
  //   // Call simulate() on each quote in the ApplicationView
  // }, 1000);
});
