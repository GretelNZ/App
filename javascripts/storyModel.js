function StoryModel(){

}

StoryModel.prototype = {
  getIncompleteStories: function(coords, showStories){
    var search = {search:
                    {
                      lat: coords.lat,
                      lng: coords.lng
                    }
                  }
    $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/nearby',
      type: 'GET',
      data: search,
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
    var story = data.serialize();
    story += '&story%5Blat%5D=' + coords.lat + '&story%5Blng%5D=' + coords.lng
    $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/stories',
      type: 'POST',
      dataType: 'json',
      data: story,
      success: function(data) {
        console.log(data);
        location.reload();
      },
      error: function() {
        alert('Error')
      }
    });
  }
}