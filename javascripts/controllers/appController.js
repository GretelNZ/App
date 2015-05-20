function AppController(selector){
  this.selector = selector;
  this.view = new AppView(selector);
  // this.model = new AppModel();
}

AppController.prototype = {
  run: function(){
    this.view.loadNavBar();
    this.view.loadMapNavBar();
    this.view.loadListNavBar();
    this.view.loadSearchButton();
  }
}
