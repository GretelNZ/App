function getAll() {
  $.ajax({
    url: 'https://corpsebook-server.herokuapp.com/stories',
    type: 'GET',
    success: function(data){
      storiesPage(data);
    },
    error: function(status, error){

    }
  });
};
