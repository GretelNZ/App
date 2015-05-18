function StoryView(selector){
  this.selector = selector;
}

StoryView.prototype = {
  loadDefaultView: function(mapModel, getIncompleteStories, showStories){
    mapModel.getLocation(function(coords){
      getIncompleteStories(coords, showStories);
    })
  },

  registerIncompleteStoriesEventHandler: function(mapModel, getIncompleteStories, showStories){
    this.selector.on('click', '#incomplete_stories_button', function(e){
      e.preventDefault();
      mapModel.getLocation(function(coords){
        getIncompleteStories(coords, showStories);
      })
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

  registerSubmitStoryEventHandler: function(mapModel, postStory){
    this.selector.on('submit', '.new-story-form', function(e){
      e.preventDefault();
      var data = $(this);
      mapModel.getLocation(function(coords){
        postStory(coords, data);
      })
    });
  },

  showStories: function(data){
    $('#container').empty();
    // $('#container').append('<ul>');
    $.each(data, function(i, story){
      var storyHTML = '<div id="story_' + story.id + '">';
      storyHTML += '<li>';
      storyHTML += '<h2>' + story.title + '</h2>';
      storyHTML += '<button class="more_button" value="' + story.id + '">See more</button>';
      storyHTML += '</li>';
      storyHTML += '</div>';
      $('#container').prepend(storyHTML);
    });
    // $('#container').append('</ul>');
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
      $("#container").empty();
      $("#container").append(formHTML);
  }
}