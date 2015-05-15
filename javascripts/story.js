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

