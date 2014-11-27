var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    "university"  : "Pune University"
  },

  initialize : function() { console.log('cr book'); }

});