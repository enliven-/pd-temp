var app   = app || {};
var host  = 'http://localhost:9393';

app.Listing = Backbone.Model.extend({
  urlRoot   : $.host + '/listings',
  defaults  : {
    book_id           : 1,
    price             : 400,
    user_attributes   : { name : 'Viksit Arora', mobile : '9156420350', college_id : 1},
    quality           : 0,
    markings          : 2,
    college_id        : 1
  }
});