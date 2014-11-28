var app   = app || {};
// var host  = 'http://localhost:9393';

app.Listings = Backbone.Collection.extend({
  model   : app.Listing,
  url     : $.host + '/listings'
});