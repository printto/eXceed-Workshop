$(document).ready(function() {

  var link = "http://158.108.165.223/data/group13/"

  var lastMessage = ""

  <!-- people -->
  setInterval(function() {
    $.ajax({
      url: link + "p"
    }).done(function(data) {
      if (lastMessage != data) {
        $('#people').text(data);
        lastMessage = data
      }
    }).fail(function(data) {
      console.log(data);
    });
  }, 1000);

  <!-- temp -->
  setInterval(function() {
    $.ajax({
      url: link + "t"
    }).done(function(data) {
      if (lastMessage != data) {
        $('#temp').text(data);
        lastMessage = data
      }
    }).fail(function(data) {
      console.log(data);
    });
  }, 1000);

  <!-- bright -->
  setInterval(function() {
    $.ajax({
      url: link + "b"
    }).done(function(data) {
      if (lastMessage != data) {
        $('#bright').text(data);
        lastMessage = data
      }
    }).fail(function(data) {
      console.log(data);
    });
  }, 1000);

  $('#send').click(function() {
    var message = $('#message').val();
    console.log(message);
    $.ajax({
      url: link + "set/" + message
    }).done(function() {
      console.log("Done");
    }).fail(function() {
      console.log("Failed");
    });
  });

});
