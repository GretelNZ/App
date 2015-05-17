var geocoder;
// var map;

// function initialize() {
//   geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(-34.397, 150.644);
//   var mapOptions = {
//     zoom: 8,
//     center: latlng
//   }
//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// }

function getStoryCoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Sorry, we need your location');
  }
}

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert('Sorry, we need your location');
//   }
// };

// function showPosition(position) {
//   var coords = {
//     lat: position.coords.latitude,
//     lng: position.coords.longitude
//   }
//   return coords
// };

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

// function getGeocode(address) {
//   var address = address.parents('form#searchLocationForm').find('input[name="location"]').val()
//   geocoder.geocode( { 'address': address}, function(results, status) {
//     console.log(results);
//     if (status == google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert('There was a problem.')
//     }
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);
