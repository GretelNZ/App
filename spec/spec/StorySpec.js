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

  describe("#submit", function() {

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function(){
      jasmine.Ajax.uninstall();
    });

    it("sends a json object of new story", function() {

      var doneFn = jasmine.createSpy("success");
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(args) {
        if (this.readyState == this.DONE) {
          doneFn(this.responseText);
          console.log(this.responseText);
        }
      };

      xhr.open("POST", "http://corpsebook-server.herokuapp.com/stories");
      xhr.send();

      expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://corpsebook-server.herokuapp.com/stories');
      expect(doneFn).not.toHaveBeenCalled();

      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'text/plain',
        "responseText": 'awesome response'
      });
      expect(doneFn).toHaveBeenCalledWith('awesome response');
    });
  });
});

// Story:

// .title
// .origin_latitude
// .origin_longitude geocode (pair of coordinates) eg. {lat: -41.2969092,lng: 174.7742193}
// .contribution_limit
