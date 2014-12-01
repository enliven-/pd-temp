var app = app || {};

app.BookView = Backbone.View.extend({
  tagName       : 'div',
  className     : 'book',
  template_path : '/partials/mustache/book.mst',

  events    : {
    'click .delete': 'deleteBook'
  },

  deleteBook : function() {
    this.model.destroy();
    this.remove();
  },

  render     : function() {
    var that = this;
    $.get('/partials/mustache/book.mst', function(template) {
      var rendered = Mustache.render(template, that.model.toJSON() );
      that.$el.html( rendered );
    });
    return that;
  }

});