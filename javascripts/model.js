function getAllStories() {
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories',
    type: 'GET',
    success: function(data){
      allStories(data);
    },
    error: function(status, error){
      alert('Error')
    }
  });
};

function getStory(story_id) { // window.location.href --> this is the actual URL we need ,
  $.ajax({
    url: "https://corpsebook-server.herokuapp.com/stories/" + story_id,
    type: "GET",
    success: function(data) {
      contributePage(data, story_id)
    },
    error: function() {
      console.log("Error");
    }
  })
}

function createContribution(currentObj) { // window.location.href + '/contributions' --> this is the actual URL we need
  var $this = $(currentObj)
  var storyId = $this.parents('form#contributionForm').find('input[name="story_id"]').val()
  $.ajax({
    url: "https://corpsebook-server.herokuapp.com/stories/"+storyId+"/contributions",
    type: "POST",
    data: $this.parents('form#contributionForm').serialize(),
    dataType: "json",
    success: function(data) {
      console.log(data)
    },
    error: function(status, error) {
      console.log("Error")
    }
  });
};

function createStory(currentObj) {
  var $this = $(currentObj)
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories',
    type: 'POST',
    dataType: 'json',
    data: $this.parents('form.new-story-form').serialize(),
    success: function(data) {
      // console.log(data)
      getStory(data.story["id"])
    },
    error: function() {
      alert('Error')
    }
  });
}
