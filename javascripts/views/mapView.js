function MapView(selector){
  this.selector = selector;
}

MapView.prototype = {
  displayMap: function() {
    $('#container').empty();
    $('#container').append('<div id="map-canvas"></div>')
  },

  registerMapViewEventHandler: function(getLocation, formatMap, getNearbyMap) {
    self = this
    $('#navbar').on('click', '#map_button', function(e) {
      e.preventDefault();
      self.displayMap();
      getLocation(function(coords){
        var map = formatMap(coords);
        getNearbyMap(coords, map);
      })
    })
  },

  formatMap: function(coords) {
    var mapOptions = {
      center: { lat: coords.lat, lng: coords.lng},
      zoom: 13
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    return map
    }

}
