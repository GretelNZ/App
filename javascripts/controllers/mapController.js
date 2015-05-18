function MapController(selector){
  this.selector = selector;
  this.model = new MapModel();
  this.view = new MapView(selector);
}

MapController.prototype = {
  run: function(){
    this.view.registerMapViewEventHandler(this.model.getLocation, this.view.formatMap, this.model.getNearbyMap)
  }
}