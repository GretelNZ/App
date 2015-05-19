function SearchController(selector){
  this.model = new SearchModel();
  this.view = new SearchView(selector);
  this.mapModel = new MapModel();
  this.storyModel = new StoryModel();
  this.storyView = new StoryView()
  this.mapView = new MapView()
}

SearchController.prototype = {
  run: function(){
    // On click of Search By Location Button
    this.view.registerCompleteStoriesEventHandler(this.storyModel.getGlobalCompleteStories, this.view.showStoriesWithSearchField)

    //on submit of search by location form
    this.view.registerSubmitSearchEventHandler(this.model.getGeocode, this.mapView, this.mapModel)

    //on

    // On click of See more button on a Complete story
    // this.storyView.registerCompleteStoryInfoEventHandler(this.mapModel, this.storyModel.getCompleteStoryInfo, this.storyView.showCompleteStory)

  }
}

