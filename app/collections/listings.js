var app = app || {};

app.Listings = Backbone.Collection.extend({
  model   : app.Listing,
  url     : 'http://10.114.16.140:9393/listings'
});