function homePage() {
  $('#container').append('<button id="incompleted_stories_button">Incompleted Stories</button>');
  $('#container').append('<button id="completed_stories_button">Completed Stories</button>');
  $('#container').append('<button id="new_story_button">New Story</button>');
  $('#container').append('<button id="nearby_button">Nearby Stories</button>');
  $('#container').append('<button id="search_button">Search Stories</button>');
};

function allStories(data) {
  $('#container').empty();
  $('#container').append('<ul>');
  $.each(data, function(i, story){
    var storyHTML = '<div id="story_' + story.id + '">';
    storyHTML += '<li>';
    storyHTML += '<h2>' + story.title + '</h2>';
    storyHTML += '<button class="more_button" value="' + story.id + '">See more</button>';
    storyHTML += '</li>';
    storyHTML += '</div>';
    $('#container').append(storyHTML);
  });
  $('#container').append('</ul>');
};

function contributePage(story, story_id) {
  $('#container').empty();
  var storyHTML = "<div class='story-detail'>";
  storyHTML += "<h3>Title of story: " +story.title+"</h3>";
  storyHTML += storyViewLogic(story, story_id);
  storyHTML += "</div>";
  $("#container").append(storyHTML);
};

function formNewStory() {
  var formHTML = '<div class="new-story">'
    formHTML += '<h1>Create New Story</h1>'
    formHTML += '<form enctype="application/json" class="new-story-form">'
    formHTML += '<p><input type="text" name="story[title]" placeholder="Title"></p>'
    // formHTML += '<p><input type="text" name="story[lat]" placeholder="Latitude"></p>'
    // formHTML += '<p><input type="text" name="story[lng]" placeholder="Longitude"></p>'
    formHTML += '<select name="story[contribution_limit]">'
    formHTML += '<option value="10">10</option>'
    formHTML += '<option value="15">15</option>'
    formHTML += '<option value="20">20</option>'
    formHTML += '</select>'
    formHTML += '<p class="submit"><button type="submit" value="Submit" id="btn-create-story">Submit</button></p>'
    formHTML += '</form></div>'
    $("#container").append(formHTML);
}

function formSearch() {
  var searchHTML = '<div class="search-stories">'
  searchHTML += '<h1>Search by Location</h1>'
  searchHTML += '<form id="searchLocationForm" enctype="application/json" class="search-stories-form">'
  searchHTML += '<p><input type="text" name="location" value="" placeholder="Location"></p>'
  searchHTML += '<p class="submit"><button type="submit" value="Submit" id="btn-search-stories">Submit</button></p>'
  searchHTML += '</form></div>'
  $("#container").append(searchHTML);
}

function displayMap() {
  $('#container').empty();
  $('#container').append('<div id="map-canvas"></div>')
}
