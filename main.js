

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
  var c = $("#code").position();

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

  $('#rn-c').click(function() {
    $('html, body').animate({
      scrollTop: c.top
    }, 500);
    return false;
  });


//image hover

  var mouse = {x:0,y:0},
      offset = {x:10, y:10};

  $('em').on('mouseenter', function() {
      var src = $(this).data('image');
      $('.popover').html('<img src="'+src+'">').show();
      offset.x = -$('.popover').width()/2;
      clearTimeout(this.timer);
  }).on('mouseleave', function() {
      this.timer = setTimeout(function() {
          $('.popover').hide();
      }, 10);
  });

  document.addEventListener('mousemove', function(e){
      mouse.x = e.pageX;
      mouse.y = e.pageY;
      $('.popover').css({
          left: (mouse.x + offset.x) + 'px',
          top: (mouse.y + offset.y) + 'px'
      });
  });




}); // ready() END
