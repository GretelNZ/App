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

function generateStory(story){
  var htmlString =  '<div class="story-list-render">';
    htmlString += '<h1>Story List</h1>';
      for (var i = 0; i <story.length; i++) {
        htmlString += '<ul class="render-story" style="border: 2px solid green; list-style: none;">';
        htmlString += '<li>Title: '+ story[i].title +'</li>';
        htmlString += '<li>Latitude: '+ story[i].origin_latitude +'</li>';
        htmlString += '<li>Longitude: '+ story[i].origin_longitude +'</li>';
        htmlString += '<li>Contribution Length: '+ story[i].contribution_limit +'</li>';
        htmlString += '<li><p class="submit"><input type="submit" value="Contribute"></p></li>';
        htmlString += '</ul>';
      };

    htmlString += '</div>';
    return htmlString;

}

Story.addContribution = function(formData, success, failure){
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
