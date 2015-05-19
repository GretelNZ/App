function SearchModel(){

}

SearchModel.prototype = {
  getGeocode: function(address, callback){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, function(results, status) {
      var coords = {lat: results[0].geometry.location.A,  lng: results[0].geometry.location.F }
    callback(coords);
    });
  }
}