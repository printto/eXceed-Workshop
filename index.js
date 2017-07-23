$(document).ready(function() {

  var link = "http://158.108.165.223/data/group13/"

  var lightOn = false
  var doorOn = false
  var airOn = false

  <!-- people -->
  setInterval(function() {
    $.ajax({
      url: link + "3"
    }).done(function(data) {
      $('#people').text(data);
      if (data == 0) {
        $('#house_pic').attr("src", "img/home2.png");
      } else {
        $('#house_pic').attr("src", "img/home.png");
      }
    }).fail(function(data) {
      console.log(data);
    });
  }, 1000);

  <!-- temp -->
  setInterval(function() {
    $.ajax({
      url: link + "2"
    }).done(function(data) {
      $('#temp').text(data);
    }).fail(function(data) {
      console.log(data);
    });
  }, 1000);

  <!-- bright -->
  setInterval(function() {
    $.ajax({
      url: link + "1"
    }).done(function(data) {
      $('#bright').text(data);
    }).fail(function(data) {
      console.log(data);
    });
  }, 1000);

  <!-- door -->
  setInterval(function() {
    $.ajax({
      url: link + "4"
    }).done(function(data) {
      if(data == "1"){
        doorOn = true
      }
      else {
        doorOn = false
      }
      if (doorOn) {
        $('#door_pic').attr("src", "img/door-on.png");
      } else {
        $('#door_pic').attr("src", "img/door-off.png");
      }
    }).fail(function(data) {
      console.log(data);
    });
  }, 1000);

  $('#door').click(function() {
    var doorChange = 1
    if(doorOn == true){
      doorChange = 0
    }
    $.ajax({
      url: link + "4/set/" + doorChange
    }).done(function() {
      if (doorChange == 1) {
        $('#door_pic').attr("src", "img/door-on.png");
        console.log("Door Opened");
      }
      else {
        $('#door_pic').attr("src", "img/door-off.png");
        console.log("Door Closed");
      }
    }).fail(function() {
      console.log("Failed");
    });
  });

});
