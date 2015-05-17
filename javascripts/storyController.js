function StoryController(selector){
  this.view = new StoryView(selector);
  this.model = new StoryModel();
};