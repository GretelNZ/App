function StoryController(selector){
  this.view = new StoryView(selector);
  this.model = new StoryModel();
  this.mapModel = new MapModel();
};

StoryController.prototype = {
  run: function(){
    this.view.loadDefaultView(this.mapModel, this.model.getIncompleteStories, this.view.showIncompleteStories)
    // this.mapModel.getLocation(function(coords){console.log(coords)})
    // On click of Incomplete Stories Button
    this.view.registerIncompleteStoriesEventHandler(this.mapModel, this.model.getIncompleteStories, this.view.showIncompleteStories)
    // On click of Complete Stories Button
    this.view.registerCompleteStoriesEventHandler(this.mapModel, this.model.getCompleteStories, this.view.showCompleteStories)
    // On click of see more button on an Incomplete story
    this.view.registerStoryInfoEventHandler(this.mapModel, this.model.getStoryInfo, this.model.inRange, this.view.showIncompleteStory)
    // On click of See more button on a Complete story
    this.view.registerCompleteStoryInfoEventHandler(this.mapModel, this.model.getCompleteStoryInfo, this.model.inRange, this.view.showCompleteStory)
    // On click of New Story button
    this.view.registerCreateStoryFormEventHandler(this.view.showCreateStoryForm)
    // On click of submit on create a new story
     this.view.registerSubmitStoryEventHandler(this.mapModel, this.model.postStory)
     // On click of List button
     this.view.registerListStoryEventHandler(this.mapModel, this.model.getIncompleteStories, this.view.showIncompleteStories)

  }
}