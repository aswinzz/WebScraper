$(document).scroll(function() {
  $(".header").css("top","-" + $(document).scrollTop()/2 + "px");
});