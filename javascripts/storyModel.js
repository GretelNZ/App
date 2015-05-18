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
  },

  postStory: function(coords, data){
    // var coords = getLocation();
    console.log("3", data)
    // var story = storyForm.serialize();
    // story += '&story%5Blat%5D=' + coords.lat + '&story%5Blng%5D=' + coords.lng
    // $.ajax({
    //   url: 'https://corpsebook-server.herokuapp.com/stories',
    //   type: 'POST',
    //   dataType: 'json',
    //   data: story,
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   error: function() {
    //     alert('Error')
    //   }
    // });
  }
}