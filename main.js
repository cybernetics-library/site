

$(document).ready(function() {


  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {

    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  });

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });



  var w = $("#workshop").position();
  var l = $("#lib").position();
  var o = $("#organizers").position();
  var s = $("#sponsors").position();

  $('#rn-w').click(function() {
    $('html, body').animate({
      scrollTop: w.top
    }, 500);
    return false;

  });

  $('#rn-l').click(function() {
    $('html, body').animate({
      scrollTop: l.top
    }, 500);
    return false;

  });

  $('#rn-o').click(function() {
    $('html, body').animate({
      scrollTop: o.top
    }, 500);
    return false;
  });

  $('#rn-s').click(function() {
    $('html, body').animate({
      scrollTop: s.top
    }, 500);
    return false;
  });

}); // ready() END
