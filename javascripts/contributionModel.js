function ContributionModel(){
}

ContributionModel.prototype = {
  addContribution: function(contributionForm){
    var input = $(contributionForm)
    var storyId = input.parents('form#contributionForm').find('input[name="story_id"]').val()
    $.ajax({
      url: "https://corpsebook-server.herokuapp.com/stories/"+storyId+"/contributions",
      type: "POST",
      data: input.parents('form#contributionForm').serialize(),
      dataType: "json",
      success: function(data) {
        location.reload();
      },
      error: function(status, error) {
        console.log("Error")
      }
    });
  }
}