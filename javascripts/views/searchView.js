function SearchView(selector){
  this.selector = selector;
}

SearchView.prototype = {
  registerCompleteStoriesWithSearchEventHandler: function(getGlobalCompleteStories, showCompleteStoriesWithSearchField, mapModel) {
    this.selector.on('click', '#search_by_location_button', function(e){
      e.preventDefault();
      getGlobalCompleteStories(showCompleteStoriesWithSearchField, mapModel);
    });
  },

  registerSubmitSearchEventHandler: function(getGeocodedLocation, mapView, mapModel){
    this.selector.on('submit', '.search_by_location_form', function(e){
      e.preventDefault();
      var address = $(this).serialize();
      mapView.displayMap();
      getGeocodedLocation(address, function(coords){
        $(e.target).find("input[type='text']").val('')
        var map = mapView.formatMap(coords);
        mapModel.getNearbyCompleteMap(coords, map);
      })
    })
  },

  // showCompleteStories: function(story, address){

  //   $.each(function(i, story){

  //     var storyHTML = '<div id="story_' + story.id + '">';
  //     storyHTML += '<li>';
  //     storyHTML += '<h2>' + story.title + '</h2>';
  //     storyHTML +=  '<h3>'+ address + '</h3>';
  //     storyHTML += '<p>'+story.first_contribution['content']+'</p>';
  //     storyHTML += '<button class="full_story_button" value="' + story.id + '">See more</button>';
  //     storyHTML += '</li>';
  //     storyHTML += '</div>';
  //     $('#container').prepend(storyHTML);
  //   });

  },

  showCompleteStoriesWithSearchField: function(story, address){
    $('#container').empty();
    $('#search').empty();
    var searchFormHTML = "<form class='search_by_location_form'>";
    searchFormHTML += "<input type='text' name='address' placeholder='Enter Location'></input>";
    searchFormHTML += "<button type='submit' value='submit'>Search</button>";
    searchFormHTML += "</form>";
    $('#search').append(searchFormHTML);

    var storyHTML = '<div id="story_' + story.id + '">';
    storyHTML += '<li>';
    storyHTML += '<h2>' + story.title + '</h2>';
    storyHTML +=  '<h3>'+ address + '</h3>';
    storyHTML += '<p>'+story.first_contribution['content']+'</p>';
    storyHTML += '<button class="more_button" value="' + story.id + '">See more</button>';
    storyHTML += '</li>';
    storyHTML += '</div>';
    $('#container').prepend(storyHTML);
  }
}