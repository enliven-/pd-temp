var app = app || {};

app.OrderView = Backbone.View.extend({
  tagName       : 'div',
  className     : 'order',

  events    : {
    'click .cancel'   : 'cancelOrder',
  },


  render: function() {
    var that = this;
    $.get('/partials/mustache/order.mst', function(template) {
      var rendered = Mustache.render(template, that.model.toJSON() );
      that.$el.html( rendered );
      console.log(rendered)
    });
    return that;
  },

  cancelOrder : function() {
    this.model.cancel();
  },

});