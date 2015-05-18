function StoryView(selector){
  this.selector = selector;
}

StoryView.prototype = {
  registerIncompleteStoriesEventHandler: function(getIncompleteStories, showStories){
    this.selector.on('click', '#incomplete_stories_button', function(e){
      e.preventDefault();
      getIncompleteStories(showStories)
    });
  },


  registerCompleteStoriesEventHandler: function(getCompleteStories, showStories) {
    this.selector.on('click', '#complete_stories_button', function(e){
      e.preventDefault();
      getCompleteStories(showStories);
    });
  },

  registerCreateStoryFormEventHandler: function(showCreateStoryForm){
    this.selector.on('click', '#new_story_button', function(e){
      e.preventDefault();
      showCreateStoryForm();
    });
  },

  registerSubmitStoryEventHandler: function(getLocation, postStory){
    this.selector.on('submit', '.new-story-form', function(e){
      e.preventDefault();
      postStory(getLocation, $(this));
    });
  },

  showStories: function(data){
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
  },

  showCreateStoryForm: function(){
    var formHTML = '<div class="new-story">'
      formHTML += '<h1>Create New Story</h1>'
      formHTML += '<form enctype="application/json" class="new-story-form">'
      formHTML += '<p><input type="text" name="story[title]" placeholder="Title"></p>'
      formHTML += '<select name="story[contribution_limit]">'
      formHTML += '<option value="10">10</option>'
      formHTML += '<option value="15">15</option>'
      formHTML += '<option value="20">20</option>'
      formHTML += '</select>'
      formHTML += '<p class="submit"><button type="submit" value="Submit" id="btn-create-story">Submit</button></p>'
      formHTML += '</form></div>';

      $("#container").append(formHTML);
  }
}