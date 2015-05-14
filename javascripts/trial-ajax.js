$(document).ready(function(){
  $('body').click('.container', function(){
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
});