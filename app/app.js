var app       = app || {};
$.host        = 'http://localhost:9393';

$(function() {
  Backbone.sync = function(method, model) {
    if (method.toLowerCase() === 'create') { method = 'POST'; }
    $.ajax({
      url   : host + model.urlRoot,
      type  : 'POST',
      data  : model.toJSON()
    })
  };

  new app.ListingsView();
  var listing = new app.Listing;
  listing.save();

});
