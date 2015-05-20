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
    });
  },

  registerCompleteStoriesEventHandler: function(mapModel, getCompleteStories, showCompleteStories) {
    var controller = this.mapCtrl
    this.selector.on('click', 'a[href="#completed"]', function(e){
      e.preventDefault();
      var active2 = $(".active2").find('a.active')
      if(active2.attr('href') == '#map') {
        controller.displayMapComplete()
      } else {
        $("#container").empty()
        $("#container").load("story_row.html")
        mapModel.getLocation(function(coords){
          getCompleteStories(coords, showCompleteStories, mapModel);
        })
      }
    });
  },

  registerSubmitStoryEventHandler: function(mapModel, postStory){
    this.selector.on('submit', '.new-story-form', function(e){
      e.preventDefault();
      var data = $(this);
      mapModel.getLocation(function(coords){
        postStory(coords, data);
        var baseUrl = document.location.origin;
        window.location = baseUrl + "/templates/main.html";
      })
    });
  },

  registerListStoryEventHandler: function(mapModel, getIncompleteStories, showIncompleteStories, getCompleteStories, showCompleteStories){
    var self = this;
    this.selector.on('click', 'a[href="#list"]', function(e){
      e.preventDefault();
      var active1 = $(".active1").find('a.active')
      if(active1.attr('href') == '#uncompleted') {
        self.displayIncompleteStories(mapModel, getIncompleteStories, showIncompleteStories)
      } else {
        self.displayCompleteStories(mapModel, getCompleteStories, showCompleteStories)
      }
    });
  },

  displayCompleteStories: function(mapModel, getCompleteStories, showCompleteStories) {
    $("#container").empty()
    $("#container").load("story_row.html")
    mapModel.getLocation(function(coords){
      getCompleteStories(coords, showCompleteStories, mapModel);
    })
  },

  displayIncompleteStories: function(mapModel, getIncompleteStories, showIncompleteStories) {
    $("#container").empty()
    $("#container").load("story_row.html")
    mapModel.getLocation(function(coords){
      getIncompleteStories(coords, showIncompleteStories, mapModel);
    })
  },

  registerStoryInfoEventHandler: function(mapModel, getStoryInfo, inRange, showIncompleteStory){
    this.selector.on('click', '.a-contribution', function(e){
      e.preventDefault();
      var id = $(this).attr("data-story-id");
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
    this.selector.on('click', '.view-full-story', function(e) {
      e.preventDefault();
      var id = $(this).attr("data-story-id");
      mapModel.getLocation(function(coords) {
        getCompleteStoryInfo(showCompleteStory, mapModel, id);
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
      $(current_story + ' .pull-right').append(story.location.address);
      $(current_story + ' .btn-current-stories').attr('data-story-id', story.id).addClass('a-contribution')
      if(story.contribution_length > 0 ){
        $(current_story + ' .desc').append(story.last_contribution['content'])
      }else{
        $(current_story + ' .desc').append(' ')
      }
    }
  },

  showCompleteStories: function(story, address){
    $('.main-story').first().hide()
    if(story.completed){
      $('.post-wrapper').append('<div id=story_' + story.id + '></div>')
      current_story = '#story_' + story.id
      $('.main-story').first().clone().show().appendTo(current_story)
      $(current_story + ' .pull-left').append(story.title);
      $(current_story + ' .pull-right').append(story.location.address);
       $(current_story + ' .btn-current-stories').attr('data-story-id', story.id).addClass('view-full-story')
      if(story.contribution_length > 0 ){
        $(current_story + ' .desc').append(story.first_contribution['content'])
      }else{
        $(current_story + ' .desc').append(' ')
      }
    }

  },

  showIncompleteStory: function(story){
      $('#container').empty();
      $('#container').load("contribution_body.html", function(data){
        if(!story.completed){
          $("#story-title").text(story.title)
          $("span.location").text(story.location.address)
          $("span.last-contributor-username").text(story.last_contribution.username)
          $("input[name='story_id']").val(story.id)
          if(story.last_contribution == null){
            $("p.desc").text("This story has had no contribution yet")
          }else{
            $("p.desc").text(story.last_contribution.content)
          }
        }
      })
  },

  showCompleteStory: function(story) {
    $('#container').empty()
    $("#container").load("completed_story.html", function(data) {

    if(story.completed){
      $.each(story.all_contributions, function(index, contribution) {

        var storyHTML = '<li>'
        storyHTML += contribution.content + '<div class="pull-right"><i>' + contribution.username + '</i></div>'
        storyHTML += '</li>'
        $('.well ul').append(storyHTML)
      })
      $('.pull-left').append(story.title)
      $('.pull-right location').append(story.location.address)
    }
  })
}

}

