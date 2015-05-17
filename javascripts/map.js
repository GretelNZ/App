var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 8,
    center: latlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Sorry, we need your location');
  }
};

function showPosition(position) {
  var lat = position.coords.latitude
  var lng = position.coords.longitude
  formatMap(lat, lng);
};

function formatMap(lat, lng) {
  displayMap();
  var mapOptions = {
    center: { lat: lat, lng: lng},
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  getNearby(map, lat, lng);
}

function getGeocode(address) {
  var address = address.parents('form#searchLocationForm').find('input[name="location"]').val()
  geocoder.geocode( { 'address': address}, function(results, status) {
    console.log(results);
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('There was a problem.')
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
