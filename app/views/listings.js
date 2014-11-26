
var app = app || {};

app.ListingsView = Backbone.View.extend({

  el          : $('#content'),
  
  events      : {
    'click #add': 'addListing'
  },

  initialize : function() {
    this.collection = new app.Listings();
    var that = this;
    this.collection.fetch({
      success: function(response) { that.render(); },
      error  : function(response) { console.log('er'); }
    });
  },
  
  render : function() {
    var that = this;
    this.collection.each( function(item) { that.renderListing(item); } )
  },

  renderListing: function( item ) {
    var listingView = new app.ListingView({ model: item });
    this.$el.append( listingView.render().el );
  }

});