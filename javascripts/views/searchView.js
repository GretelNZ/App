function SearchView(selector){
  this.selector = selector;
}

SearchView.prototype = {
  registerCompleteStoriesEventHandler: function(getCompleteStories, showStories) {
    this.selector.on('click', '#search_by_location_button', function(e){
      e.preventDefault();
      getCompleteStories(showStories);
    });
  },

  registerSubmitSearchEventHandler: function(getGeocodedLocation){
    this.selector.on('submit', '.search_by_location_form', function(e){
      e.preventDefault();
      var address = $(this).serialize();
      getGeocodedLocation(address);
      console.log("submitted search location");
    });
  },

  showStoriesWithSearchField: function(data){
    $('#container').empty();
     var searchFormHTML = "<div id='search_by_location'><form class='search_by_location_form'><input type='text' placeholder='Enter Location'></input><button type='submit' value='Submit'>Search</button></form></div>";
    $.each(data, function(i, story){
      var storyHTML = '<div id="story_' + story.id + '">';
      storyHTML += '<li>';
      storyHTML += '<h2>' + story.title + '</h2>';
      storyHTML += '<button class="more_button" value="' + story.id + '">See more</button>';
      storyHTML += '</li>';
      storyHTML += '</div>';
      $('#container').prepend(storyHTML);
      $('#container').prepend(searchFormHTML);
    });
  }
}