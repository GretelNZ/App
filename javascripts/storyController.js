function StoryController(selector){
  this.view = new StoryView(selector);
  this.model = new StoryModel();
  this.mapModel = new MapModel();
};

StoryController.prototype = {
  run: function(){
    // On click of Incomplete Stories Button
    this.view.registerIncompleteStoriesEventHandler(this.model.getIncompleteStories, this.view.showStories)
    // On click of Complete Stories Button
    this.view.registerCompleteStoriesEventHandler(this.model.getCompleteStories, this.view.showStories)
    // On click of see more button on a story
    // this.view.registerStoryInfoEventHandler(this.model.getStoryInfo, this.view)
    // On click of New Story button
    this.view.registerCreateStoryFormEventHandler(this.view.showCreateStoryForm)
    // On click of submit on create a new story
    this.mapModel.getLocation()
     this.view.registerSubmitStoryEventHandler(this.mapModel.getLocation, this.model.postStory)


  }
}