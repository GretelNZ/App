function MapController(selector){
  this.selector = selector;
  this.model = new MapModel();
  this.view = new MapView(selector);
  this.storyView = new StoryView()
  this.storyModel = new StoryModel();
}

MapController.prototype = {
  run: function(){
    this.view.registerMapViewEventHandler(this.model, this.view.formatMap)
    this.view.registerMapViewCompleteEventHandler(this.view.formatMap, this.model);
    this.view.registerMapViewIncompleteEventHandler(this.view.formatMap, this.model)

  }
}
