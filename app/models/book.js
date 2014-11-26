var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    "title"       : "",
    "authors"     : "",
    "publication" : "",
    "edition"     : "",
    "price"       : null,
    "department"  : "",
    "course"      : null,
    "semester"    : "",
    "subject"     : "",
    "college"     : "",
    "university"  : "Pune University"
  },

});