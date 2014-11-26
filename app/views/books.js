var app = app || {};

app.BooksView = Backbone.View.extend({

  el          : $('#content'),
  
  events      : {
    'click #add': 'addBook'
  },

  initialize : function() {
    this.collection = new app.Books();
    var that = this;
    this.collection.fetch({
      success: function(response) { that.render(); },
      error  : function(response) { }
    });
  },
  
  render : function() {
    var that = this;
    this.collection.each( function(item) { that.renderBook(item); } )
  },

  renderBook: function( item ) {
    console.log(item);
    var bookView = new app.BookView({ model: item });
    this.$el.append( bookView.render().el );
  }

});