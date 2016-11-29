// This is the main Javascript file

// Import ApplicationView from the application_view file. (application_view imports QuoteView)
import ApplicationView from 'app/views/application_view';
import QuoteView from 'app/views/quote_view';



// Import Backbone, jQuery and Underscore
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var sampleData = [
  { symbol: "HUMOR", price: 88.50  },
  { symbol: "CLOTH", price: 81.70  },
  { symbol: "HABIT", price: 98.00  },
  { symbol: "SUPER", price: 83.10  },
  { symbol: "INGRD", price: 79.40  },
  { symbol: "MXTPE", price: 109.20 },
  { symbol: "CNTAR", price: 90.70  },
  { symbol: "EVCLR", price: 101.90 },
  { symbol: "FUZZY", price: 88.60  }
];

// This function was handed to me with the starting file set. It takes a price quote and changes the price randonly.
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
  // NOTE: I do not understand what is happening in this line >>>>>
  quote.trigger('change:price', change);
};





$(document).ready(function() {
  var application = new ApplicationView({
    el: ("#application"),
    sampleData: sampleData
  });

  application.render();

});



//
// $(document).ready(function() {
//   var appView = new ApplicationView({
//     el: $('#application')
//   });
//
//   appView.render();
//
//   var quote = new QuoteView({
//     sampleData[0];
//   });
//
//   setInterval(function() {
//     // Call simulate() on each quote in the ApplicationView
//   }, 1000);
// });
