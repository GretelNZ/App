$(document).ready(function(){
  homePage();

  $('body').on('click', '#stories_button', function(){
    getAllStories();
  });

  $('body').on('click', '.more_button', function(){
    getStory($( this).attr("value"));
  });

  $('body').on('click', 'button[name="btn-submit"]', function(e) {
    e.preventDefault()
    createContribution(this)
  });

  $('body').on('click', '#new_story_button', function(){
      formNewStory();
  });

  $('body').on('click', 'input[name="btn-create-story"]', function(e) {
    e.preventDefault()
    createStory($(this))
  });


}); // end doc ready
