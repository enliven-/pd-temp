var Router = Backbone.Router.extend({
  routes: {
    'listings'        : 'home',
    'new'             : 'new',
    ':id/edit'        : 'edit',
  }
});

var router = new Router;
var listingsView  = new app.ListingsView();

router
  .on('route:home', function() {
    listingsView.render();
  })

  .on('route:new', function() {
    listingsView.renderForm({target_sel: '.container'})
  })

Backbone.history.start();