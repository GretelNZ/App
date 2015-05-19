function SearchView(selector){
  this.selector = selector;
}

SearchView.prototype = {
  registerCompleteStoriesEventHandler: function(getGlobalCompleteStories, showStoriesWithSearchField) {
    this.selector.on('click', '#search_by_location_button', function(e){
      e.preventDefault();
      getGlobalCompleteStories(showStoriesWithSearchField);
    });
  },

  registerSubmitSearchEventHandler: function(getGeocodedLocation, mapView, mapModel){
    this.selector.on('submit', '.search_by_location_form', function(e){
      e.preventDefault();
      var address = $(this).serialize();
      mapView.displayMap();
      getGeocodedLocation(address, function(coords){
        var map = mapView.formatMap(coords);
        mapModel.getNearbyCompleteMap(coords, map);
      })
    })
  },

  // registerMapViewEventHandler: function(mapModel, formatMap) {
  //   self = this
  //   $('#navbar').on('click', '#map_button', function(e) {
  //     e.preventDefault();
  //     self.displayMap();
  //     mapModel.getLocation(function(coords){
  //       var map = formatMap(coords);
  //       mapModel.getNearbyMap(coords, map);
  //     })
  //   })
  // },

  // formatMap: function(coords) {
  //   var mapOptions = {
  //     center: { lat: coords.lat, lng: coords.lng},
  //     zoom: 13
  //   };
  //   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  //   return map
  // },

  showStoriesWithSearchField: function(data){
    $('#container').empty();
    var searchFormHTML = "<div id='search_by_location'>";
    searchFormHTML += "<form class='search_by_location_form'>";
    searchFormHTML += "<input type='text' name='address' placeholder='Enter Location'></input>";
    searchFormHTML += "<button type='submit' value='submit'>Search</button>";
    searchFormHTML += "</form>";
    searchFormHTML += "</div>";
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