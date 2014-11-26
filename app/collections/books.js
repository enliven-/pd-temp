var app = app || {};

app.Books = Backbone.Collection.extend({
  model   : app.Book,
  url     : 'http://localhost:5000/books'
});