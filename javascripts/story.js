var Story = function(params){
  this.title = params.title;
  this.origin_latitude = params.origin_latitude;
  this.origin_longitude = params.origin_longitude;
  this.contribution_limit = params.contribution_limit;
}

Story.create = function(formData, success, failure){
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories',
    type: 'POST',
    dataType: 'json',
    data: formData,
    success: function(data) {
      success(data)
    },
    error: function() {
      failure()
    }
  });
}

Story.getAll = function(){
  $.ajax({
      url: 'https://corpsebook-server.herokuapp.com/stories',
      type: 'GET',
      success: function(response){
        htmlString = generateStory(response);
        $('.story-list').html(htmlString);
      },
      error: function(status, error){
        console.log("error");
      }
    });
}

function generateStory(stories){
  var htmlString =  '<div class="story-list-render">';
    htmlString += '<h1>Story List</h1>';
      for (var i = 0; i < stories.length; i++) {
        var story = stories[i];
        htmlString += '<ul id=' + story.id + ' class="render-story" style="border: 2px solid green; list-style: none;">';
        htmlString += '<li>Title: '+ story.title +'</li>';
        htmlString += '<li>Latitude: '+ story.origin_latitude +'</li>';
        htmlString += '<li>Longitude: '+ story.origin_longitude +'</li>';
        htmlString += '<li>Contribution Length: '+ story.contribution_limit +'</li>';
        htmlString += '<li><p><a href="stories/' + story.id + '"class="submit"><input type="submit" value="View"></a></p></li>';
        htmlString += '</ul>';
      };

    htmlString += '</div>';
    return htmlString;

}

Story.createContribution = function(formData, success, failure){
  console.log(window.location.href)
  console.log(formData)
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories/2/contributions',  //window.location.href + '/contributions' --> this is the actual URL we need
    type: 'POST',
    dataType: 'json',
    data: formData,
    success: function(data) {
      success(data)
    },
    error: function() {
      failure()
    }
  });
}
