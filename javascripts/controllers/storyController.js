function StoryController(selector){
  this.view = new StoryView(selector);
  this.model = new StoryModel();
  this.mapModel = new MapModel();
};

StoryController.prototype = {
  run: function(){

    this.view.loadDefaultView(this.mapModel, this.model.getIncompleteStories, this.view.showIncompleteStories)
    // this.view.registerIncompleteStoriesEventHandler(this.mapModel, this.model.getIncompleteStories, this.view.showIncompleteStories)
    // this.view.registerCompleteStoriesEventHandler(this.mapModel, this.model.getCompleteStories, this.view.showCompleteStories)
    // this.view.registerStoryInfoEventHandler(this.mapModel, this.model.getStoryInfo, this.model.inRange, this.view.showIncompleteStory)
    // this.view.registerCompleteStoryInfoEventHandler(this.mapModel, this.model.getCompleteStoryInfo, this.view.showCompleteStory)
    // this.view.registerCreateStoryFormEventHandler(this.view.showCreateStoryForm)
    //  this.view.registerSubmitStoryEventHandler(this.mapModel, this.model.postStory)
    //  this.view.registerListStoryEventHandler(this.mapModel, this.model.getIncompleteStories, this.view.showIncompleteStories)

  }
}
