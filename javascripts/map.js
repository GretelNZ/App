var geocoder;

function getStoryCoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Sorry, we need your location');
  }
}


function getLocation (callback) {
  navigator.geolocation.getCurrentPosition(function (position) {
      var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      callback(coords)// formatMap(coords);
  });
}

function formatMap(coords) {
  var mapOptions = {
    center: { lat: coords.lat, lng: coords.lng},
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  getNearby(map, coords.lat, coords.lng);
}

function getGeocode(address){
  geocoder.geocode({'address': address}, function(results, status) {
    var coords = {lat: results[0].geometry.location.A,  lng: results[0].geometry.location.F }
    return formatMap(coords);
  })
}
