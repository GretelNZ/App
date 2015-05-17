function AppView(selector){
  this.selector = selector;
}

AppView.prototype = {
  loadNavBar: function(){
    this.selector.append('<button id="incomplete_stories_button">Incomplete Stories</button>');
    this.selector.append('<button id="complete_stories_button">Complete Stories</button>');
    this.selector.append('<button id="new_story_button">New Story</button>');
    this.selector.append('<button id="nearby_button">Nearby Stories</button>');
    this.selector.append('<button id="search_button">Search Stories</button>');
  }
}
