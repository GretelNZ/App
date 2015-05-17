function ContributionController(selector){
  this.view = new ContributionView(selector);
  this.model = new ContributionModel();
};

ContributionController.prototype  = {
    run: function(){
      //call all the thing
    }
}