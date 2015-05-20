function StoryModel(){

}

StoryModel.prototype = {
  getIncompleteStories: function(coords, showIncompleteStories, mapModel){
    var search = {search:
                    {
                      lat: coords.lat,
                      lng: coords.lng
                    }
                  }
    $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/stories/nearby',
      async: false, // Quick fix, maybe find another way
      type: 'GET',
      data: search,
      success: function(data){
        $.each(data, function(index, story){
          mapModel.reverseGeocode(story.location['lat'], story.location['lng'], function(address) {showIncompleteStories(story, address)
          })
        })
      },
      error: function(status, error){
        alert('Error')
      }
    });
  },

  getCompleteStories: function(coords, showCompleteStories, mapModel){
    var search = {search:
                    {
                      lat: coords.lat,
                      lng: coords.lng
                    }
                  }
    $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/stories/nearby',
      type: 'GET',
      data: search,
      success: function(data){
        $.each(data, function(index, story){
          mapModel.reverseGeocode(story.location['lat'], story.location['lng'], function(address) {showCompleteStories(story, address)
          })
        })
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
  },

  inRange: function(coords, id){
    return $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/stories/'+id+'/in_range',
      type: 'GET',
      data: {search: {lat: coords.lat, lng: coords.lng}},
      success: function(data){
        return true
      },
      error: function(response){
        console.log(response);
      }
    })
  },

  getStoryInfo: function(showIncompleteStory, id, mapModel){
    $.ajax({
      url: "https://corpsebook-server.herokuapp.com/stories/" + id,
      type: "GET",
      success: function(data) {
        mapModel.reverseGeocode(data.location['lat'], data.location['lng'], function(address) {showIncompleteStory(data, address)
        })
      },
      error: function() {
        console.log("Error");
      }
    })
  },

  getCompleteStoryInfo: function(showCompleteStory, mapModel, id) {
    $.ajax({
      url: "https://corpsebook-server.herokuapp.com/stories/" + id,
      type: "GET",
      success: function(data) {
        mapModel.reverseGeocode(data.location['lat'], data.location['lng'], function(address) {showCompleteStory(data, address)
        })
      },
      error: function() {
        console.log("Error");
      }
    })
  }

}
