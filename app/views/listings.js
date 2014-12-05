
var app = app || {};

app.ListingsView = Backbone.View.extend({

  el         : $('.container'),

  initialize : function() {
    this.collection = new app.Listings();
    var that = this;
    this.collection.fetch({
      success: function(response) { console.log('fetched data successfully!'); },
      error  : function(response) { console.log('error'); }
    });
  },
  
  render : function() {
    this.collection.each(function(item) { 
      this.renderListing(item);
    }, this );
  },

  renderListing: function( item ) {
    var listingView = new app.ListingView({ model: item });
    this.$el.append( listingView.render().el );
  },

  renderForm: function(options) {
    var target = options.target_sel;
    $.get('/partials/polymer/classified-form.mst', function(template) {
      var rendered = Mustache.render(template);
      $(target).html(rendered);
    });
  },

  createListing : function() {
    var listing   = new app.Listing();
    this.collection.create( listing.attributes );
  }

});