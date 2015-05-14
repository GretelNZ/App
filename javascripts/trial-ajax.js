$(document).ready(function(){
  $('.container').click('h1', function(e){
    e.preventDefault();
    $.ajax({
      url: 'http://corpsebook.herokuapp.com/',
      type: 'GET',
      success: function(response){
        console.log(response);
      },
      error: function(){
        console.log("error");
      }
    });
  });
  $('.sign-in').on('submit', function(e){
    e.preventDefault();
    var signInInfo = $(e.target).serialize();
    console.log(signInInfo);
    $.ajax({
      url: 'http://corpsebook.herokuapp.com/create',
      type: 'POST',
      data: {signInInfo},
      success: function(result){
        console.log("yes");
        console.log(result);
      },
      error: function(status){
        console.log(status);
      }
    })
  });
});