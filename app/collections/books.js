var app = app || {};

app.Books = Backbone.Collection.extend({
  model   : app.Book,
  url     : 'http://192.168.1.100:9393/books'
});