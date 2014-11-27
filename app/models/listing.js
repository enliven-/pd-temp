var app = app || {};

app.Listing = Backbone.Model.extend({
  urlRoot   : 'http://10.114.16.140:9393/listings',
  defaults  : {
    book_id           : 1,
    price             : 400,
    user_attributes   : { name : 'Viksit Arora', mobile : '9156420350', college_id : 1},
    quality           : 0,
    markings          : 0,
  },
  initialize : function() { 
  },


  validate : function(attrs, options) {
  }



});