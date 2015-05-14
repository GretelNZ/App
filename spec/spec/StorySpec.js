describe("Story", function() {
  var story;

  beforeEach(function() {
    story = new Story({title: "Alex and Sreynak say hello", geocode: {lat: -41.2969092, lng: 174.7742193}, contributionLimit: 10});
  });

  it("has a title", function() {
    // story.title = ;
    expect(story.title).toEqual("Alex and Sreynak say hello");
  });

  it("has a geocode location", function() {
    // story.title = ;
    expect(story.geocode).toEqual({lat: -41.2969092, lng: 174.7742193});
  });

  it("has a contribution limit", function() {
    // story.title = ;
    expect(story.contributionLimit).toEqual(10);
  });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });


});

// Story:

// title
// origin geocode (pair of coordinates) eg. {lat: -41.2969092,lng: 174.7742193}
// contribution limit