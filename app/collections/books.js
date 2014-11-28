var app   = app || {};
var host  = 'http://localhost:9393';

app.Books = Backbone.Collection.extend({
  model   : app.Book,
  url     : $.host + '/books'
});