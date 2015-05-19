function MapModel(){
}

MapModel.prototype = {

  getLocation: function (callback) {
  navigator.geolocation.getCurrentPosition(function (position) {
      var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      callback(coords)
    });
  },
  getNearbyMap: function(coords, map) {
    var self = this
    $.ajax({
      url: "https://corpsebook-server.herokuapp.com/stories/nearby",
      type: "GET",
      data: { 'search': {
        'lat': coords.lat,
        'lng': coords.lng
        }
      },
      success: function(data) {
        $.each(data, function(index, value){
          self.mapSuccessLoop(value, map)
        });
      },
      error: function() {
        alert("Error");
      }
    })
  },

  getNearbyCompleteMap: function(coords, map) {
    var self = this
    $.ajax({
      url: "https://corpsebook-server.herokuapp.com/stories/nearby",
      type: "GET",
      data: { 'search': {
        'lat': coords.lat,
        'lng': coords.lng
        }
      },
      success: function(data) {
        $.each(data, function(index, value){
          if(value.completed) {
            self.mapSuccessLoop(value, map)
          }
        });
      },
      error: function() {
        alert("Error");
      }
    })
  },

  mapSuccessLoop: function(value, map) {
    var lat = value.location['lat']
    var lng = value.location['lng']
    var myLatlng = new google.maps.LatLng(lat, lng)
    var title = value.title
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: title,
      url: 'https://corpsebook-server.herokuapp.com/stories/' + value.id
    });
    // google.maps.event.addListener(marker, 'click', function() {
    //   new StoryModel().getCompleteStoryInfo(new StoryView().showCompleteStory, value.id) //HACK JOB PLEASE FIX
    // });
  }
}

