function StoryView(selector){
  this.selector = selector;
  this.mapCtrl = new MapController(selector);
}

StoryView.prototype = {
  loadDefaultView: function(mapModel, getIncompleteStories, showStories){
    $( "#top-menu" ).load( "top_menu.html");
    this.mapCtrl.displayDefaultMap()
  },

  registerIncompleteStoriesEventHandler: function(mapModel, getIncompleteStories, showStories){
    var controller = this.mapCtrl
    this.selector.on('click', 'a[href="#uncompleted"]', function(e){
      e.preventDefault();

      var active2 = $(".active2").find('a.active')
      if(active2.attr('href') == '#map') {
        controller.displayMapIncomplete()
      } else {
        $("#container").empty()
        $("#container").load("story_row.html")
        mapModel.getLocation(function(coords){
          getIncompleteStories(coords, showStories, mapModel);
        })
      }
// displayMapComplete



    });
  },

  registerCompleteStoriesEventHandler: function(mapModel, getCompleteStories, showCompleteStories) {
    var controller = this.mapCtrl
    this.selector.on('click', 'a[href="#completed"]', function(e){
      e.preventDefault();

// console.log(controller)
      var active2 = $(".active2").find('a.active')
      if(active2.attr('href') == '#map') {
        controller.displayMapComplete()
        // console.log(this)
      } else {
        $("#container").empty()
        $("#container").load("story_row.html")
        mapModel.getLocation(function(coords){
          getCompleteStories(coords, showCompleteStories, mapModel);
        })
      }


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

  registerListStoryEventHandler: function(mapModel, getIncompleteStories, showIncompleteStories){
    $('#navbar').on('click', '#list_button', function(e){
      e.preventDefault();
      mapModel.getLocation(function(coords){
        getIncompleteStories(coords, showIncompleteStories);
      })
    });
  },

  registerStoryInfoEventHandler: function(mapModel, getStoryInfo, inRange, showIncompleteStory){
    this.selector.on('click', '.more_button', function(e){
      e.preventDefault();
      var id = $(this).attr("value");
      mapModel.getLocation(function(coords){
        inRange(coords, id).done(function(result){
          if(result){
            getStoryInfo(showIncompleteStory, id, mapModel);
          }else{
            console.log("You are not in range of the story. Walk faster.")
          }
        })
      })
    });
  },

  registerCompleteStoryInfoEventHandler: function(mapModel, getCompleteStoryInfo, showCompleteStory) {
    this.selector.on('click', '.full_story_button', function(e) {
      e.preventDefault();
      var id = $(this).attr("value");
      mapModel.getLocation(function(coords) {
        getCompleteStoryInfo(mapModel, showCompleteStory, id);
      })
    })
  },

  showIncompleteStories: function(story, address){
    $('.main-story').first().hide()
    if(!story.completed){
      $('.post-wrapper').append('<div id=story_' + story.id + '></div>')
      current_story = '#story_' + story.id
      $('.main-story').first().clone().show().appendTo(current_story)
      $(current_story + ' .pull-left').append(story.title);
      $(current_story + ' .pull-right').append(address);

      if(story.contribution_length > 0 ){
        $(current_story + ' .desc').append(story.last_contribution['content'])
      }else{
        $(current_story + ' .desc').append(' ')
      }
    }
  },

  showCompleteStories: function(story, address){
    console.log(story)
    $('.main-story').first().hide()
    if(story.completed){
      $('.post-wrapper').append('<div id=story_' + story.id + '></div>')
      current_story = '#story_' + story.id
      $('.main-story').first().clone().show().appendTo(current_story)
      $(current_story + ' .pull-left').append(story.title);
      $(current_story + ' .pull-right').append(address);

      if(story.contribution_length > 0 ){
        $(current_story + ' .desc').append(story.first_contribution['content'])
      }else{
        $(current_story + ' .desc').append(' ')
      }
    }

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
  },

  showIncompleteStory: function(story, address){
    var self = this;
    if(!story.completed){
      $('#container').empty();
      var storyHTML = "<div class='story-detail'>";
      storyHTML += "<h3>Title of story: " +story.title+"</h3>";
      storyHTML += "<h3>Location: " +address+"</h3>";
      if(story.contribution_length > 0){
        storyHTML += "<p><label>Last Contribution:</label> " + story.last_contribution['content'] + ' - ' + story.last_contribution['username'] + "</p>";
        console.log(story.last_contribution)
      }else{
        storyHTML += "<p>This story has had no contribution yet</p>"
      }

        // Contribution Form
        storyHTML += "<form id='contributionForm' enctype='application/json' class='add-contribution-form'>";
        storyHTML += "<div><label>Username:</label></div>";
        storyHTML += "<div><input name='contribution[username]' id='username' placeholder='Username' /></div>"
        storyHTML += "<div><label>Contribution:</label></div>";
        storyHTML += "<div><textarea name='contribution[content]' id='contribution' placeholder='Add a line to the story!'></textarea></div>"
        storyHTML += "<div><button class='btn-submit' name='btn-submit' >Submit</button></div>"
        storyHTML += "<input type='hidden' name='story_id' value='"+ story.id +"' />"
        storyHTML += "</form>";
        storyHTML += "</div>";

        $("#container").append(storyHTML);
    }
  },

  showCompleteStory: function(story, address) {
    $('#container').empty()
    if(story.completed) {
      var fullStoryHTML = '<div id="full-story">'
      fullStoryHTML += "<h3>Title of story: " +story.title+"</h3>";
      fullStoryHTML += "<h3>Location: "+address+"</h3>"
      fullStoryHTML += '<ul>'
      $.each(story.all_contributions, function(
        index, contribution){
        fullStoryHTML += '<li>'
        fullStoryHTML += contribution['content'] + ' - '
        fullStoryHTML += '<i>' + contribution['username'] + '</i>'
        fullStoryHTML += '</li>'
      });
    fullStoryHTML += '</ul></div>'
    $('#container').append(fullStoryHTML)
    }
  }

}
