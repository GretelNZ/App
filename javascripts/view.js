function homePage() {
  $('#container').append('<button id="stories_button">Stories</button>');
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
    storyHTML += '<h2>' + story.title + '</h3>';
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
  storyHTML += "<p><label>Last Contribution:</label> " + story.last_contribution != null ? story.last_contribution['content'] : "" + "</p>"
  storyHTML += "<form method='post' id='contributionForm' action='#' enctype='application/json' class='add-contribution-form'>";
  storyHTML += "<div><label>Username:</label></div>";
  storyHTML += "<div><input name='contribution[username]' id='username' placeholder='Username' /></div>"
  storyHTML += "<div><label>Contribution:</label></div>";
  storyHTML += "<div><textarea name='contribution[content]' id='contribution' placeholder='Add a line to the story!'></textarea></div>"
  storyHTML += "<div><button type='submit' name='btn-submit' >Submit</button></div>"
  storyHTML += "<input type='hidden' name='story_id' value='"+ story_id +"' />"
  storyHTML + "</form>";
  storyHTML += "</div>";
  $("#container").append(storyHTML);
};

function formNewStory() {
  var formHTML = '<div class="new-story">'
    formHTML += '<h1>Create New Story</h1>'
    formHTML += '<form enctype="application/json" class="new-story-form">'
    formHTML += '<p><input type="text" name="story[title]" value="" placeholder="Title"></p>'
    formHTML += '<p><input type="text" name="story[lat]" value="" placeholder="Latitude"></p>'
    formHTML += '<p><input type="text" name="story[lng]" value="" placeholder="Longitude"></p>'
    formHTML += '<select name="story[contribution_limit]">'
    formHTML += '<option value="10">10</option>'
    formHTML += '<option value="15">15</option>'
    formHTML += '<option value="20">20</option>'
    formHTML += '</select>'
    formHTML += '<p class="submit"><input type="submit" value="Submit" name="btn-create-story"></p>'
    formHTML += '</form></div>'
    $("#container").append(formHTML);
}

function formSearch() {
  var searchHTML = '<div class="search-stories">'
  searchHTML += '<h1>Search by Location</h1>'
  searchHTML += '<form id="searchLocationForm" enctype="application/json" class="search-stories-form">'
  searchHTML += '<p><input type="text" name="location" value="" placeholder="Location"></p>'
  searchHTML += '<p class="submit"><input type="submit" value="Submit" name="btn-search-stories"></p>'
  searchHTML += '</form></div>'
  $("#container").append(searchHTML);
}

function displayMap() {
  $('#container').empty();
  $('#container').append('<div id="map-canvas"></div>')
}
