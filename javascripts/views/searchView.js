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
    this.selector.on('submit', '.search_by_location', function(e){
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

  showCompleteStoriesWithSearchField: function(story){
    $('#container').empty();
    // $('#search').empty();
    $('#container').load('search.html', function(data){

      var storyHTML = '<div id="story_' + story.id + '">';
      storyHTML += '<li>';
      storyHTML += '<h2>' + story.title + '</h2>';
      storyHTML +=  '<h3>'+ story.location.address + '</h3>'
      storyHTML += '<p>'+story.first_contribution['content']+'</p>'
      storyHTML += '<button class="full_story_button" value="' + story.id + '">See more</button>';
      storyHTML += '</li>';
      storyHTML += '</div>';
      // $('#container').prepend(storyHTML);
      // $('.')
    })
  }
}