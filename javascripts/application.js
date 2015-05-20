$(document).ready(function(){

  var selector = $("body");
  var appController = new AppController($("#navbar"));
  var storyController = new StoryController(selector);
  var contributionController = new ContributionController(selector);
  var mapController = new MapController(selector);
  var searchController = new SearchController(selector);
  appController.run();
  storyController.run();
  contributionController.run();
  mapController.run();
  searchController.run();

}); // end doc ready
