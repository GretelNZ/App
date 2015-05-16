function homePage() {
  $('#container').append('<button id="stories_button">Stories</button>')
};

function storiesPage(data) {
  $('#container').empty()
  $('#container').append('<ul>')
  $.each(data, function(i, story){
    var storyHTML = '<div id="story_' + story.id + '">'
    storyHTML += '<li>'
    storyHTML += '<h2>' + story.title + '</h3>'
    storyHTML += '</li>'
    storyHTML += '</div>'
    $('#container').append(storyHTML)
  })
  $('#container').append('</ul>')
}
