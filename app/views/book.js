var app = app || {};

app.BookView = Backbone.View.extend({
  tagName   : 'div',
  className : 'book',
  template  : _.template( $('#book-template').html() ),

  events    : {
    'click .delete': 'deleteBook'
  },

  deleteBook: function() {
    this.model.destroy();
    this.remove();
  },

  render: function() {
    var rendered = this.template( this.model.toJSON() );
    this.$el.html( rendered );
    return this;
  }
});