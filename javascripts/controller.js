$(document).ready(function(){

  homePage();

  $('body').on('click', '#stories_button', function(){
    getAllStories();
  });

  $('body').on('click', '.more_button', function(){
    getStory($( this).attr("value"));
  });

  $('body').on('click', 'button[name="btn-submit"]', function() {
    e.preventDefault();
    createContribution(this)
  });

  $('body').on('click', '#new_story_button', function(){
    formNewStory();
  });

  $('body').on('click', 'input[name="btn-create-story"]', function() {
    createStory($(this))
  });

  $('body').on('click', '#nearby_button', function(){
    getLocation();
  });

  $('body').on('click', '#search_button', function(){
    formSearch();
  });

  $('body').on('click', 'input[name="btn-search-stories"]', function(e) {
    e.preventDefault();
    getGeocode($(this));
  });


}); // end doc ready
