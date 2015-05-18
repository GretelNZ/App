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
    $.ajax({
      url: "https://corpsebook-server.herokuapp.com/nearby",
      type: "GET",
      data: { 'search': {
        'lat': coords.lat,
        'lng': coords.lng
        }
      },
      success: function(data) {
        $.each(data, function(index, value){
        var lat = value.lat
        var lng = value.lng
        var myLatlng = new google.maps.LatLng(lat, lng)
        var title = value.title
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: title,
          // url: 'https://corpsebook-server.herokuapp.com/stories/' + value.id
        });
        // google.maps.event.addListener(marker, 'click', function() {
        //   getStory(value.id)
        // });
      });
      },
      error: function() {
        alert("Error");
      }
    })
  }

}

