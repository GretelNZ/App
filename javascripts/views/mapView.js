function MapView(selector){
  this.selector = selector;
}

MapView.prototype = {
  displayMap: function() {
    $('#container').empty();
    $('#container').append('<div id="map-canvas"></div>')
  },

  registerMapViewEventHandler: function(mapModel, formatMap) {
    self = this
    $('#navbar').on('click', '#map_button', function(e) {
      e.preventDefault();
      self.displayMap();
      mapModel.getLocation(function(coords){
        var map = formatMap(coords);
        mapModel.getNearbyMap(coords, map);
      })
    })
  },

  registerMapViewCompleteEventHandler: function(formatMap, mapModel){
    $('#navbar').on('click', '#complete_stories_map', function(e) {
      e.preventDefault();
      mapModel.getLocation(function(coords) {
        var map = formatMap(coords);
        mapModel.getNearbyCompleteMap(coords, map);
      })

    })
  },

  registerMapViewIncompleteEventHandler: function(formatMap, mapModel){
    $('#navbar').on('click', '#incomplete_stories_map', function(e){
      e.preventDefault();
      mapModel.getLocation(function(coords) {
        var map = formatMap(coords);
        mapModel.getNearbyMap(coords, map);
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
