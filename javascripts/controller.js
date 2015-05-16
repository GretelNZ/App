$(document).ready(function(){
  homePage();

  $('#stories_button').on('click', function(){
    var stories = getAll();
  });
}); // end doc ready
