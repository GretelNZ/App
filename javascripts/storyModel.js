function StoryModel(){

}

StoryModel.prototype = {
  getIncompleteStories: function(showIncompleteStories){
    $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/stories',
      type: 'GET',
      success: function(data){
        showIncompleteStories(data);
      },
      error: function(status, error){
        alert('Error')
      }
    });
  }
}