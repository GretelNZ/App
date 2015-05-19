function SearchController(selector){
  this.model = new SearchModel();
  this.view = new SearchView(selector);
  this.mapModel = new MapModel();
  this.mapView = new MapView()
  this.storyModel = new StoryModel();
  this.storyView = new StoryView()
}

SearchController.prototype = {
  run: function(){
    // On click of Search By Location Button
    this.view.registerCompleteStoriesEventHandler(this.storyModel.getGlobalCompleteStories, this.view.showCompleteStories, this.mapModel)

    //on submit of search by location form
    this.view.registerSubmitSearchEventHandler(this.model.getGeocode, this.mapView, this.mapModel)

  }
}

