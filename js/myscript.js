$(function () {
  $('a[href^=#]').click(function () {
    var href = $(this).attr("href"),
        target = $(href === "#" || href === "" ? 'html' : href);
    target.velocity("scroll", { duration: 1200, easing: "ease" });
    return false;
  });
});


$(document).ready(function(){
  $('.fuwat').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = $(window).height(),
       topWindow = $(window).scrollTop();
   $('.fuwat').each(function(){
    var objectPosition = $(this).offset().top;
    if(topWindow > objectPosition - windowHeight + 200){
     $(this).addClass("fuwatAnime");
    }
   });
  });
});


/*boxer*/
$(function(){
$(".boxer").boxer();
});

/*top_fadein*/
$(function(){
$(".top_img").velocity("fadeIn", { duration: 2500})
});

/*logo*/
$('.logo').mouseenter(function() {
    $(this).velocity({
        opacity: 0 },
      {
      duration: 200,
      visibility: "hidden"
    });
    $('.logo_hidden').velocity({
      opacity: 1 },
    {
      duration: 200,
      visibility: "visible"
    });
});
$('.logo_hidden').mouseleave(function() {
    $(this).velocity({
      opacity: 0 },
    {
      duration: 200,
      visibility: "hidden"
    });
    $('.logo').velocity({
      opacity: 1 },
    {
      duration: 200,
      visibility: "visible"
    });
});


/*flexbox*/
var hsize = 0;

var itemShow = {
  p: {
    opacity: [1, 0]
  },
  o: {
    display: "flex",
    visibility: "visible",
    duration: 1300,
    easing: 'easeIn',
    begin: function() {
      $("#position").css( "display" , "block");
    }
  }
};

var itemHide = {
  p: {
    opacity: [0, 1]
  },
  o: {
    display: "none",
    visibility: "hidden",
    duration: 300,
    easing: 'easeOut'
  }
};

$(".a").on('click',function() {
  $(".box2").velocity(itemHide);
  $(".box3").velocity(itemHide);
  $(".box1").velocity(itemShow);
  $(this).prop("disabled", true);
  $(".b").prop("disabled", false);
  $(".c").prop("disabled", false);
  });
$(".b").on('click',function() {
  $(".box1").velocity(itemHide);
  $(".box3").velocity(itemHide);
  $(".box2").velocity(itemShow);
  $(this).prop("disabled", true);
  $(".a").prop("disabled", false);
  $(".c").prop("disabled", false);
});
$(".c").on('click',function() {
  $(".box1").velocity(itemHide);
  $(".box2").velocity(itemHide);
  $(".box3").velocity(itemShow);
  $(this).prop("disabled", true);
  $(".a").prop("disabled", false);
  $(".b").prop("disabled", false);
});

$('.logo_end').click(function() {
  $('header')
    .velocity("scroll", { duration: 1000, easing: "easeIn" });
});
