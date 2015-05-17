var geocoder = new google.maps.Geocoder();
var map;

function getIncompleteStories() {
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

function getCompleteStories() {
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/completed',
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
  navigator.geolocation.getCurrentPosition(function (position) {
      var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      postStory(currentObj, coords)
  });
}

function postStory(currentObj, coords) {
  var $this = $(currentObj).serialize()
  $this += '&story%5Blat%5D=' + coords.lat + '&story%5Blng%5D=' + coords.lng
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
        getStory(value.id)
      });
    });
    },
    error: function() {
      alert("Error");
    }
  })
}

function inRange(story){

  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories/'+story.id+'/in_range',
    type: 'GET',
    data: {search: {lat: story.lat, lng: story.lng}},
    success: function(data){
      if (data.in_range){
        renderStory(storyViewLogic(story, story.id));
      } else {
        alert("Not in range")
      }
    },
    error: function(response){
      console.log(response);
    }
  })
}

function inRangeLogic(story, story_id){
  if (story.last_contribution != null) {
    return
}

function storyViewLogic(story, story_id) {
  if (story.last_contribution != null) {
    var incompleteStoryHTML = lastContribution(story);
    return incompleteStoryHTML += storyIncomplete(story, story_id);
  } else if (story.all_contributions) {
    return completeStory(story.all_contributions);
  } else {
    return storyIncomplete(story, story_id);
  }
}

function lastContribution(story) {
  return "<p><label>Last Contribution:</label> " + story.last_contribution['content'] + ' - ' + story.last_contribution['username'] + "</p>";
}

function storyIncomplete(story, story_id) {
    var storyHTML = "<form id='contributionForm' enctype='application/json' class='add-contribution-form'>";
    storyHTML += "<div><label>Username:</label></div>";
    storyHTML += "<div><input name='contribution[username]' id='username' placeholder='Username' /></div>"
    storyHTML += "<div><label>Contribution:</label></div>";
    storyHTML += "<div><textarea name='contribution[content]' id='contribution' placeholder='Add a line to the story!'></textarea></div>"
    storyHTML += "<div><button name='btn-submit' >Submit</button></div>"
    storyHTML += "<input type='hidden' name='story_id' value='"+ story_id +"' />"
    storyHTML += "</form>";
    return storyHTML
}

function completeStory(stories) {
  console.log(stories)
    var fullStoryHTML = '<div id="full-story">'
    fullStoryHTML += '<ul>'
  $.each(stories, function(index, story){
    fullStoryHTML += '<li>'
    fullStoryHTML += story.content + ' - '
    fullStoryHTML += '<i>' + story.username + '</i>'
    fullStoryHTML += '</li>'
  });
  fullStoryHTML += '</ul></div>'
  return fullStoryHTML
}






