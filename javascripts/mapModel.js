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
  }

}

