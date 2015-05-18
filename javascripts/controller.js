$(document).ready(function(){

  var selector = $("body");
  var appController = new AppController($("#navbar"));
  var storyController = new StoryController(selector);
  var contributionController = new ContributionController(selector);
  var mapController = new MapController(selector);
  appController.run();
  storyController.run();
  contributionController.run();
  mapController.run();

  // homePage();

  // $('body').on('click', '#incomplete_stories_button', function(){
  //   getIncompleteStories();
  // }); <--- DONE

  // $('body').on('click', '#complete_stories_button', function(){
  //   getCompleteStories();
  // }); < --- DONE

  // $('body').on('click', '.more_button', function(){
  //   // getStory($(this).attr("value"));
  //   getTheRealStory($(this).attr("value"));
  // }); <--- DONE

  // $('body').on('click', 'button[name="btn-submit"]', function() {
  //   createContribution(this);
  // }); <--- DONE

  // $('body').on('click', '#new_story_button', function(){
  //   formNewStory(); <---DONE
  // });

  // $('body').on('submit', '.new-story-form', function(e) {
  //   e.preventDefault()
  //   createStory($(this))
  // }); <---DONE

  // $('body').on('click', '#nearby_button', function(){
  //   displayMap();
  //   getLocation();
  // }); <---- IRRELEVANT

  // $('body').on('click', '#search_button', function(){
  //   formSearch();
  // });

  // $('body').on('submit', '.search-stories-form', function(e) {
  //   e.preventDefault()
  //   displayMap();
  //   getGeocode($(this).serialize());
  // });

  // !#!#!#! TO DO !$!$!$!$

  //  FIX MAPS GLITCH (disappearing after load, or console errors on zoom)
  //  PUT LINKS BACK ON MARKERS TO CONTRIBUTE ON MAP
  //  REFACTOR SEARCH BAR STUFF
  //  READ A COMPLETED STORY
  //  MAKE SURE LISTED STORIES + CONTRIBUTIONS PAGE INCLUDE A TEXT FOR OF THE STORY'S LOCATION

}); // end doc ready
