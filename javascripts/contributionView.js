function ContributionView(selector){
  this.selector = selector;
}

ContributionView.prototype = {
  registerContributionEventHandler: function(addContribution){
    this.selector.on('click', '.btn-submit', function(e){
      e.preventDefault();
      addContribution(this);
    });
  }
}