// $(document).ready(function(){
//   $(".click-on").click(function(){
//   	$(".menu-toggle").fadeToggle();
//   	$(".line-1, .line-2").css("background-color","#111")
//   	$(".line-1").css("transform","rotate(-45deg) translate(-3px, 2.5px)")
//   	$(".line-2").css("transform","rotate(45deg) translate(-6.5px, -6.5px)")
//     $("body").addClass("body1")
//   });
// });
$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});
$(document).ready(function(){
  $(".click-on").click(function(){
  	$(".menu-toggle").toggleClass("fade-toggle");
  	// $("body").toggleClass("body1");
  	$(".line-1").toggleClass("line-1x");
  	$(".line-2").toggleClass("line-2x");
  	$(".background").fadeToggle(100);
  	$(".menu-top").toggleClass("magic-1");
    //$("body").toggleClass("body1")
  });
});
$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 160){
$('.menu-top').css("background-color","#dcdcdc");
$('.line-1, .line-2').css("background-color","#111");
$('.name').css("color","#EE8572");
} else{
$('.menu-top').css("background-color","initial");
$('.line-1, .line-2').css("background-color","#fff");
$('.name').css("color","#fff");
// $(".slide-menu").slideToggle("slow");
}
});