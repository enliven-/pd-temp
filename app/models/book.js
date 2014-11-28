var app   = app || {};

app.Book = Backbone.Model.extend({
  urlRoot  : $.host + '/books',
  defaults : {
    "university"  : "Pune University"
  },

  initialize : function() {

  },

  validate : function(attrs, options) {
    assert(function1() && function2() && function3(), "some text");
  }

});