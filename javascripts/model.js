var geocoder = new google.maps.Geocoder();
var map;

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

function getStory(story_id) {
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

function createContribution(currentObj) {
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
  var $this = $(currentObj).serialize()
  console.log($this)
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories',
    type: 'POST',
    dataType: 'json',
    data: $this,
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
      console.log(data)
      $.each(data, function(index, value){
      var lat = value.lat
      var lng = value.lng
      var myLatlng = new google.maps.LatLng(lat, lng)
      var title = value.title
      console.log(value.id)
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: title,
        url: 'https://corpsebook-server.herokuapp.com/stories/' + value.id
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





