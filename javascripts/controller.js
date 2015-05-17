$(document).ready(function(){
  homePage();


  $('body').on('click', '#incomplete_stories_button', function(){
    getIncompleteStories();
  });

  $('body').on('click', '#complete_stories_button', function(){
    getCompleteStories();
  });

  $('body').on('click', '.more_button', function(){
    getStory($(this).attr("value"));
  });

  $('body').on('click', 'button[name="btn-submit"]', function() {
    createContribution(this);
  });

  $('body').on('click', '#new_story_button', function(){
    formNewStory();
  });

  $('body').on('submit', '.new-story-form', function(e) {
    e.preventDefault()
    createStory($(this))
  });

  $('body').on('click', '#nearby_button', function(){
    displayMap();
    getLocation();
  });

  $('body').on('click', '#search_button', function(){
    formSearch();
  });

  $('body').on('submit', '.search-stories-form', function(e) {
    e.preventDefault()
    displayMap();
    getGeocode($(this).serialize());
  });


}); // end doc ready
