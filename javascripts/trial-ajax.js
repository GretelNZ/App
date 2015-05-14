$(document).ready(function(){
  // $('.container').click('h1', function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     url: 'http://corpsebook-server.herokuapp.com/stories',
  //     type: 'GET',
  //     success: function(response){
  //       console.log(response);
  //     },
  //     error: function(){
  //       console.log("error");
  //     }
  //   });
  // });


// NEW USER
// ___________________
  // $('.sign-in-form').on('submit', function(e){
  //   e.preventDefault();
  //   var signInInfo = $(e.target).serialize();
  //   console.log(signInInfo);
  //   $.ajax({
  //     url: 'http://corpsebook.herokuapp.com/create',
  //     type: 'POST',
  //     data: {signInInfo},
  //     success: function(result){
  //       console.log("yes");
  //       console.log(result);
  //     },
  //     error: function(status){
  //       console.log(status);
  //     }
  //   })
  // });

// SUBMIT NEW Story
// ___________________
  $('.new-story-form').on('submit', function(e){
    e.preventDefault();
    var newStory = $(e.target).serialize();
    var story = new Story(newStory);
    story.submit(newStory);
    console.log(newStory);
  });
});