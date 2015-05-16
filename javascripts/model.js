function getAllStories() {
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories',
    type: 'GET',
    success: function(data){
      allStories(data);
    },
    error: function(status, error){
      alert('Error')
    }
  });
};

function getStory(story_id) { // window.location.href --> this is the actual URL we need ,
  $.ajax({
    url: "https://corpsebook-server.herokuapp.com/stories/" + story_id,
    type: "GET",
    success: function(data) {
      contributePage(data, story_id)
    },
    error: function() {
      console.log("Error");
    }
  })
}

function createContribution(currentObj) { // window.location.href + '/contributions' --> this is the actual URL we need
  var $this = $(currentObj)
  var storyId = $this.parents('form#contributionForm').find('input[name="story_id"]').val()
  $.ajax({
    url: "https://corpsebook-server.herokuapp.com/stories/"+storyId+"/contributions",
    type: "POST",
    data: $this.parents('form#contributionForm').serialize(),
    dataType: "json",
    success: function(data) {
      console.log(data)
    },
    error: function(status, error) {
      console.log("Error")
    }
  });
};

function createStory(currentObj) {
  var $this = $(currentObj)
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories',
    type: 'POST',
    dataType: 'json',
    data: $this.parents('form.new-story-form').serialize(),
    success: function(data) {
      getStory(data.story["id"])
    },
    error: function() {
      alert('Error')
    }
  });
}

function getNearby(map, lat, lng) {
  $.ajax({
    url: "https://corpsebook-server.herokuapp.com/nearby",
    type: "GET",
    data: { 'search': {
      'lat': lat,
      'lng': lng
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
        title: title
      });
      google.maps.event.addListener(marker, 'click', function() {
        window.location.href = this.url;
      });
    });
    },
    error: function() {
      alert("Error");
    }
  })
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
  console.log(lat)
  displayMap();
  var mapOptions = {
    center: { lat: lat, lng: lng},
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  getNearby(map, lat, lng);
}
