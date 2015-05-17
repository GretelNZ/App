function StoryModel(){

}

StoryModel.prototype = {
  getIncompleteStories: function(showStories){
    $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/stories',
      type: 'GET',
      success: function(data){
        showStories(data);
      },
      error: function(status, error){
        alert('Error')
      }
    });
  },

  getCompleteStories: function(showStories){
    $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/completed',
      type: 'GET',
      success: function(data){
        showStories(data);
      },
      error: function(status, error){
        alert('Error')
      }
    });
  }
}