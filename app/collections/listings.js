var app = app || {};

app.Listings = Backbone.Collection.extend({
  model   : app.Listing,
  url     : 'http://localhost:5000/listings'
});