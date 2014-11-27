var app = app || {};


$(function() {

  // new app.ListingsView();
  var listing = new app.Listing;

// Backbone.sync = function(method, model) {
//   $.ajax({
//     url   : 'http://10.114.16.140:9393/listings',
//     type  : 'POST',
//     data  : model.toJSON()
//   })
// };

  listing.save({ contentType: 'multipart/form-data', data: listing.toJSON());


  // var listings = new app.Listings;
  // listings.fetch({
  //   success : function(c, r, o) { console.log('s'); console.log(c); console.log(r); console.log(o); },
  //   error :   function(c, r, o) { console.log('e'); console.log(c); console.log(r); console.log(o); }
  // });


  // $.ajax({
  //   url   : 'http://10.114.16.140:9393/listings',
  //   type  : 'POST',
  //   data  : listing.toJSON(),
  //   success: function(resp) { console.log(resp); },
  //   error  : function(resp) { console.log(resp.status); }
  // })

});
