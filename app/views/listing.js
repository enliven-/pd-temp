var app = app || {};

app.ListingView = Backbone.View.extend({
  tagName   : 'div',
  className : 'listing',
  template  : _.template( $('#listing-template').html() ),

  events    : {
    'click .delete': 'deleteListing'
  },

  deleteListing: function() {
    this.model.destroy();
    this.remove();
  },

  render: function() {
    var rendered = this.template( this.model.toJSON() );
    this.$el.html( rendered );
    return this;
  }
});