
var app = app || {};

app.ListingsView = Backbone.View.extend({

  el         : $('.container'),

  initialize : function() {
    this.collection = new app.Listings();
    var that = this;
    this.collection.fetch({
      success: function(response) { that.render(); },
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

  addListing : function(e) {
    e.preventDefault();
    var listing = new app.Listing();
    this.collection.create( listing.attributes );
  }
});