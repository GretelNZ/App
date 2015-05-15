var Story = function(params){
  this.title = params['title'];
  this.origin_latitude = params['origin_latitude'];
  this.origin_longitude = params['origin_longitude'];
  this.contribution_limit = params['contribution_limit'];
}

Story.create = function(formData){

  var formDataForStory =  {
    title: formData[0]['value'],
    origin_latitude: formData[1]['value'],
    origin_longitude: formData[2]['value'],
    contribution_limit: formData[3]['value']
  }
  var newStory;
  // console.log({story: newStory})
  $.ajax({
    url: 'http://corpsebook-server.herokuapp.com/stories',
    type: 'POST',
    dataType: 'json',
    data: {story: {
      title: formDataForStory.title,
      origin_latitude: formDataForStory.origin_latitude,
      origin_longitude: formDataForStory.origin_longitude,
      contribution_limit: formDataForStory.contribution_limit
      }},
    success: function(result){
      console.log(result.story);
      newStory = new Story(result.story)
    },
    error: function(status){
      console.log(status);
    }
  });

  return newStory
}

// var newStory = Story.create(formData)

// {story: {
//       title: newStory.title,
//       origin_latitude: newStory.origin_latitude,
//       origin_longitude: newStory.origin_longitude,
//       contribution_limit: newStory.contribution_limit
//       }
//     }