function SearchView(selector){
  this.selector = selector;
}

SearchView.prototype = {
  registerCompleteStoriesWithSearchEventHandler: function(getGlobalCompleteStories, showCompleteStoriesWithSearchField, mapModel) {
    $('body').on('click', '#search_by_location_button', function(e){
      e.preventDefault();
      // $('#container').empty();
      getGlobalCompleteStories(showCompleteStoriesWithSearchField, mapModel);
    });
  },

  registerSubmitSearchEventHandler: function(getGeocodedLocation, mapView, mapModel){
    $('body').on('submit', '.search_by_location', function(e){
      e.preventDefault();
      var address = $(this).serialize();
      mapView.displayMap();
      getGeocodedLocation(address, function(coords){
        $(e.target).find("input[type='text']").val('')
        var map = mapView.formatMap(coords);
        console.log(coords);
        mapModel.getNearbyCompleteMap(coords, map);
      })
    })
  },

  showCompleteStoriesWithSearchField: function(story){
    console.log(story);
    // $('#main').empty();
    // $('#search').empty();
    $('#main').load('search.html .content-wrapper')
     // function(data){
    $('.main-story').first().hide();
    $('.post-wrapper').append('<div id=story_' + story.id + '></div>');
    var current_story = '#story_' + story.id;
    $('.main-story').first().clone().show().appendTo(current_story);
    $(current_story + ' .pull-left').append(story.title);
    $(current_story + ' .pull-right').append(story.location.address);
    $(current_story + ' .btn-current-stories').attr('data-story-id', story.id).addClass('view-full-story');
    if(story.contribution_length > 0 ){
      $(current_story + ' .desc').append(story.first_contribution['content'])
    }

      // var storyHTML = '<div id="story_' + story.id + '">';
      // storyHTML += '<li>';
      // storyHTML += '<h2>' + story.title + '</h2>';
      // storyHTML +=  '<h3>'+ story.location.address + '</h3>'
      // storyHTML += '<p>'+story.first_contribution['content']+'</p>'
      // storyHTML += '<button class="full_story_button" value="' + story.id + '">See more</button>';
      // storyHTML += '</li>';
      // storyHTML += '</div>';
      // $('#container').prepend(storyHTML);
      // $('.')
    // })
  }
}