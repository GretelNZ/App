$(document).ready(function() {
  $("#slider").slider({
    animate: true,
    value:1,
    min: 0,
    max: 30,
    step: 1,
    slide: function(event, ui) {
      update(1,ui.value); //changed
    }
  });

  //Added, set initial value.
  $("input[name='story[contribution_limit]']").val(0);
  
  update();
});

//changed. now with parameter
function update(slider,val) {
  //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
  var $amount = slider == 1?val:$("input[name='story[contribution_limit]']").val();

  $( "input[name='story[contribution_limit]']" ).val($amount);

  $('#slider a').html('<label><span class="row-left"></span> '+ $amount+ ' <span class="row-right"></span></label>');
}
