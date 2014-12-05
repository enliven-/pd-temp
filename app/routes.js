var Router = Backbone.Router.extend({
  routes: {
    'listings'        : 'home',
    'new'             : 'new',
    ':id/edit'        : 'edit',
    'orders'          : 'orders'
  }
});

var router        = new Router;
var listingsView  = new app.ListingsView();
var myOrders      = new app.OrdersView();

router
  .on('route:home', function() {
    $('.container').html("");
    listingsView.render();
  })

  .on('route:new', function() {
    console.log('new')
    $('.container').html("");
    listingsView.renderForm({target_sel: '.container'})
  })

  .on('route:orders', function() {
    console.log('my orders');
    $('.container').html("");
    myOrders.render();
  });

Backbone.history.start();