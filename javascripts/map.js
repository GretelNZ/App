var geocoder;

function getStoryCoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Sorry, we need your location');
  }
}

function getLocation () {
  navigator.geolocation.getCurrentPosition(function (position) {
      var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      formatMap(coords);
  });

}

function formatMap(coords) {
  console.log(coords)
  var mapOptions = {
    center: { lat: coords.lat, lng: coords.lng},
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  getNearby(map, coords.lat, coords.lng);
}

function getGeocode(address){
  var thisAddress = address.parents('form#searchLocationForm').find('input[name="location"]').val()
  geocoder.geocode({'address': thisAddress}, function(results, status) {
    var coords = {lat: results[0].geometry.location.A,  lng: results[0].geometry.location.F }
    console.log(coords);
    return formatMap(coords);
  })
}
