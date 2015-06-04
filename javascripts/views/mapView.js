function MapView(selector){
  this.selector = selector;
}

MapView.prototype = {
  displayMap: function() {
    $('#container').empty();
    $('#container').append('<div id="map-canvas"></div></div>')
  },

  registerMapViewEventHandler: function(mapModel, formatMap) {
    self = this
    $('body').on('click', 'a[href="#map"]', function(e) {
      e.preventDefault();
      self.registerDefaultMapViewEventHandler(mapModel, formatMap)
    })
  },

  registerDefaultMapViewEventHandler: function(mapModel, formatMap) {
    self = this
    self.displayMap();
    mapModel.getLocation(function(coords){
      var map = formatMap(coords);
      mapModel.getNearbyMap(coords, map);
    })
  },

  registerMapViewCompleteEventHandler: function(formatMap, mapModel){
    mapModel.getLocation(function(coords) {
      var map = formatMap(coords);
      mapModel.getNearbyCompleteMap(coords, map);
    })
  },

  registerMapViewIncompleteEventHandler: function(formatMap, mapModel){
    mapModel.getLocation(function(coords) {
      var map = formatMap(coords);
      mapModel.getNearbyMap(coords, map);
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
