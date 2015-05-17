function StoryView(selector){
  this.selector = selector;
}

StoryView.prototype = {
  registerIncompleteStoriesEventHandler: function(getIncompleteStories, showIncompleteStories){
    this.selector.on('click', '#incomplete_stories_button', function(e){
      e.preventDefault();
      getIncompleteStories(showIncompleteStories)
    });
  },

  showIncompleteStories: function(data){
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
  }
}