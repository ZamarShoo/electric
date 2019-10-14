//jQuery Mask
$(function(){
    $("#number").mask("+7 (999) 999-99-99", {placeholder: " "});
  });

//Header Scroll for desktop
$(window).scroll(function(){
  if ($(this).scrollTop() > 800) {
      $('nav').addClass('fixed');
  } else {
      $('nav').removeClass('fixed');
  }
});

//Popup
$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $('.ppp__window').show();
    $('.ppp_gbg').show();
  })
  $('.ppp__close').click(function() {
    $('.ppp_gbg, .ppp__window').hide();
  })