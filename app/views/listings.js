
var app = app || {};

app.ListingsView = Backbone.View.extend({

  el         : $('.container'),
  $form      : null,

  events    : {
    // 'click #create'   : 'createListing',
  },

  initialize : function() {
    this.collection = new app.Listings();
    var that = this;
    this.collection.fetch({
      success: function(response) {  },
      error  : function(response) { console.log('error'); }
    });
  },
  
  render : function() {
    // this.collection.each(function(item) { 
    //   this.renderListing(item);
    // }, this );
    $.get('/partials/polymer/classifieds-list.mst', function(template) {
      var rendered = Mustache.render(template);
      $('.container').html(rendered)
    });
  },

  renderListing: function( item ) {
    var listingView = new app.ListingView({ model: item });
    this.$el.append( listingView.render().el );
  },

  renderForm: function(options) {
    this.$form  = new ClassifiedForm();
    var target  = options.target_sel;
    $(target).html(this.$form);
    // var id     = options.id;
    // var target = options.target_sel;
    // if (id) {

    // } else {
    //   $.get('/partials/polymer/classified-form.mst', function(template) {
    //     var rendered = Mustache.render(template);
    //     $(target).html(rendered);
    //   });
    // }
    var that = this;
    $('classified-form /deep/ #create').on('click', function(e) {
      // console.log('ccc')
      that.createListing();
    });
  },

  createListing : function() {
    console.log('create!');
    var data      = this.$form.serializedFormData();
    var listing   = new app.Listing(data);
    this.collection.create( listing.attributes );
  },

  

});