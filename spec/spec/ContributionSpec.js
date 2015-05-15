describe("Contribution", function() {
  var contribution;

  beforeEach(function() {
    contribution = new Contribution({content: "Alex and Sreynak say hello to the dog", story_id: 4, });
  });

  it("has a content", function() {
    expect(contribution.content).toEqual("Alex and Sreynak say hello to the dog");
  });
});
