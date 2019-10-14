//jQuery Mask
$(function(){
    $("#number").mask("+7 (999) 999-99-99", {placeholder: " "});
  });

//Popup
$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $('.ppp__window').show();
    $('.ppp_gbg').show();
  })
  $('.ppp__close').click(function() {
    $('.ppp_gbg, .ppp__window').hide();
  });

//Header Scroll for desktop
$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
  });

//Header Scroll for mobile
$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('menu').addClass('mobile-backcolor');
    } else {
        $('menu').removeClass('mobile-backcolor');
    }
  });