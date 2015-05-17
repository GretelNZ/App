function StoryController(selector){
  this.view = new StoryView(selector);
  this.model = new StoryModel();
};

StoryController.prototype = {
  run: function(){
    this.view.registerIncompleteStoriesEventHandler(this.model.getIncompleteStories())
  }
}