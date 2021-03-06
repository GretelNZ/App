function MapModel(){
  this.geocoder = new google.maps.Geocoder();
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
          if(!value.completed){
            var marker = self.mapSuccessLoop(value, map)
            self.incompleteStoryMapMarkerListener(marker, value)
          }
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
            var marker = self.mapSuccessLoop(value, map)
            self.completeStoryMapMarkerListener(marker, value)
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
      title: title
    });
    return marker
  },
  completeStoryMapMarkerListener: function(marker, value) {
      google.maps.event.addListener(marker, 'click', function() {
      new StoryModel().getCompleteStoryInfo(new StoryView().showCompleteStory, new MapModel(), value.id)
    });
  },

  incompleteStoryMapMarkerListener: function(marker, value) {
      google.maps.event.addListener(marker, 'click', function() {
      new StoryModel().getStoryInfo(new StoryView().showIncompleteStory, value.id, new MapModel())
    });
  },

  reverseGeocode: function(lat, lng, callback) {
    console.log("reverse Geo")
    var latlng = new google.maps.LatLng(lat, lng);
    this.geocoder.geocode({'latLng': latlng}, function(results, status) {
        if(status == google.maps.GeocoderStatus.OK) {
            if(results[0]) {
                callback(results[0].address_components[1].long_name);
            } else {
                alert('No results found');
            }
        }
    });
  }
}

