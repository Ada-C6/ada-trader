import $ from 'jquery';    // Letting us use jquery within this document
import Backbone from 'backbone'; // importing backbone
import _ from 'underscore';

var QuoteView = Backbone.View.extend({
  initialize: function(options){
    this.stock = options.stock;
    this.template = options.template;
  },

  render: function(){
    var html = this.template({stock: this.stock})
    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

export default QuoteView;




// var TaskView = Backbone.View.extend({
//
//   // initialize takes in parameters (needs to be in here)
//   initialize: function(options) {
//     this.task = options.task;
//     this.template = options.template;
//   },
//
//
//   // render is another backbone thing
//   render: function() {
//     var html = this.template({task: this.task})
//     this.$el.html(html);
//
//     // Enable chained calls
//     return this;
//   }
// });
