var Story = function(params){
  this.title = params.title;
  this.origin_latitude = params.origin_latitude;
  this.origin_longitude = params.origin_longitude;
  this.contribution_limit = 10;
}

Story.prototype.submit = function(){
  thisStory = this;

  var newStory = newStory;
  $.ajax({
    url: 'http://corpsebook-server.herokuapp.com/stories',
    type: 'POST',
    data: {newStory},
    success: function(result){
      console.log(result);
    },
    error: function(status){
      console.log(status);
    }
  });
}

