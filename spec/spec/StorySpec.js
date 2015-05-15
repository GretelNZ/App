describe("Story", function() {
  var story;

  beforeEach(function() {
    story = new Story({title: "Alex and Sreynak say hello", origin_latitude: -41.2969092, origin_longitude: 174.7742193, contribution_limit: 10});
  });

  it("has a title", function() {
    // story.title = ;
    expect(story.title).toEqual("Alex and Sreynak say hello");
  });

  it("has an origin_latitude", function() {
    // story.title = ;
    expect(story.origin_latitude).toEqual(-41.2969092);
  });

  it("has a origin_longitude", function() {
    // story.title = ;
    expect(story.origin_longitude).toEqual(174.7742193);
  });

  it("has a contribution limit", function() {
    // story.title = ;
    expect(story.contribution_limit).toEqual(10);
  });

  describe("#create", function() {

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function(){
      jasmine.Ajax.uninstall();
    });

    it("sends a json object of based on new story form data", function() {
      var formData = "story%5Btitle%5D=The+Best+Story&story%5Borigin_latitude%5D=123&story%5Borigin_longitude%5D=321&story%5Bcontribution_limit%5D=15";
      var doneFn = jasmine.createSpy("success");
      var errorFn = jasmine.createSpy("failure");

      Story.create(formData, doneFn, errorFn);

      var request = jasmine.Ajax.requests.mostRecent();

      expect(request.url).toBe('https://corpsebook-server.herokuapp.com/stories');
      expect(request.method).toBe('POST');

      // expect(request.data()).toEqual(formData);
      // expect(doneFn).not.toHaveBeenCalled();
      // jasmine.Ajax.requests.mostRecent().respondWith({
      //   "status" : 200,
      //   "contentType" : "text/plain",
      //   "responseText" : "meow"
      // });

      // expect(doneFn).toHaveBeenCalled()
    });
  });

  describe("#getAll", function() {
    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function(){
      jasmine.Ajax.uninstall();
    });

    it("gets a json object of all stories", function() {

      var doneFn = jasmine.createSpy("success");
      var errorFn = jasmine.createSpy("failure");

      Story.getAll();

      var request = jasmine.Ajax.requests.mostRecent();

      expect(request.url).toBe('https://corpsebook-server.herokuapp.com/stories');
      expect(request.method).toBe('GET');
    });

  });

  // describe("generateStory", function() {
  //   it("takes a story object as parameter")
  // });

});

// Story:

// .title
// .origin_latitude
// .origin_longitude geocode (pair of coordinates) eg. {lat: -41.2969092,lng: 174.7742193}
// .contribution_limit
