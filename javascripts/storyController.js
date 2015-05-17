function StoryController(selector){
  this.view = new StoryView(selector);
  this.model = new StoryModel();
};

StoryController.prototype = {
  run: function(){
    this.view.registerIncompleteStoriesEventHandler(this.model.getIncompleteStories, this.view.showStories)
    this.view.registerCompleteStoriesEventHandler(this.model.getCompleteStories, this.view.showStories)
  }
}