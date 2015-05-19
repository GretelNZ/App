function AppView(selector){
  this.selector = selector;
}

AppView.prototype = {
  loadNavBar: function(){
    this.selector.append('<button id="list_button">List</button>');
    this.selector.append('<button id="map_button">Map</button>');
    this.selector.append('<button id="incomplete_stories_button">Incomplete Stories List</button>');
    this.selector.append('<button id="complete_stories_button">Complete Stories List</button>');
    this.selector.append('<button id="new_story_button">New Story</button>');
    this.selector.append('<button id="search_by_location_button">Search By Location</button>');
  },

  loadMapNavBar: function(){
    this.selector.on('click', '#map_button', function(e){
      e.preventDefault();
    $("#navbar").empty();
    $('#navbar').append('<button id="list_button">List</button>');
    $('#navbar').append('<button id="map_button">Map</button>');
    $('#navbar').append('<button id="incomplete_stories_map">Incomplete Stories Map</button>');
    $('#navbar').append('<button id="complete_stories_map">Complete Stories Map</button>');
    $('#navbar').append('<button id="new_story_button">New Story</button>');
    $('body').append('<div> <button id="search_by_location_button">Search By Location</button></div>');

    });
  },

  loadListNavBar: function(){
    this.selector.on('click', '#list_button', function(e){
      e.preventDefault();
    $("#navbar").empty();
    $("#navbar").append('<button id="list_button">List</button>');
    $("#navbar").append('<button id="map_button">Map</button>');
    $("#navbar").append('<button id="incomplete_stories_button">Incomplete Stories List</button>');
    $("#navbar").append('<button id="complete_stories_button">Complete Stories List</button>');
    $("#navbar").append('<button id="new_story_button">New Story</button>');
    $('#navbar').append('<button id="search_by_location_button">Search By Location</button>');
    $('body').append('<div>button id="search_by_location_button">Search By Location</button></div>')
    });
  }
}
