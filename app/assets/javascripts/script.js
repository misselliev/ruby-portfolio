$(document).ready(function () {
  $(window).scroll(function (e) {
    var s = $(window).scrollTop(),
      opacityVal = (s / 200);

    $('.blurred-image').css('opacity', opacityVal);
    
    console.log("hola",$(window).scrollTop())
    if ($(window).scrollTop() > 680) {
      $('#nav-bar').addClass('navbar-fixed');
      $('.navbar-fixed').css({"background-color":"black"});
      $('.navbar-fixed').css({"opacity":"0.5"});
    }
    if ($(window).scrollTop() < 680) {
      $('#nav-bar').removeClass('navbar-fixed');
      $('#nav-bar').removeAttr("style");
    }
  });
});