
var app = app || {};

app.ListingsView = Backbone.View.extend({

  el         : $('.container'),
  $form      : null,
  $listings  : null,

  events    : {
    'click .buy'   : 'buy',
  },

  initialize : function() {
    this.collection = new app.Listings();
    var that = this;
    this.collection.fetch({
      success: function(response) { console.log('fetched data successfully!'); },
      error  : function(response) { console.log('error'); }
    });
  },
  
  render : function() {
    this.$listings = new ClassifiedsList();
    this.$el.html(this.$listings);
    // var that  = this;
  },

  createListing : function() {
    console.log('create!');
    var data      = this.$form.serializedFormData();
    var listing   = new app.Listing(data);
    this.collection.create( listing.attributes );
  },

  renderForm: function(options) {
    var target  = options.target_sel;
    this.$form  = new ClassifiedForm();
    $(target).html(this.$form);
    var that = this;

    $('classified-form /deep/ #create').on('click', function(e) {
      e.preventDefault();
      that.createListing();
    });
  },

  buy : function() {
    console.log("buy!!")
  }

});