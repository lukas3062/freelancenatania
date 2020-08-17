// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
   $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
   });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
   target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
   $('.navbar-toggle:visible').click();
});

$('.carousel').carousel({
  interval: 900000
});

// Change navbar color
function sticky_relocate() {
   var window_top = $(window).scrollTop();
   var anchor = $('.nav-marker').offset();
   if($(window).width() >= 768){
      if (window_top > anchor) {
      $('.navbar-default').addClass('bg-nav');
   } else {
      $('.navbar-default').removeClass('bg-nav');
   }
   }
}

$( "#nxtform" ).click(function() {
$('#fix').css('height','600px');
$("#primerForm").addClass("ocultar");
$("#segundoform").removeClass("ocultar");
var name = document.getElementById("nameinput").value;
document.getElementById("nameplane").innerHTML = name+"nombre";
});
$( "#terminar" ).click(function() {
  $('#fix').css('height','700px');
$("#segundoform").addClass("ocultar");
$("#primerForm").removeClass("ocultar");
});
$( "#btn" ).click(function() {
$("#fix").css("display","block");
$("#primerForm").removeClass("ocultar");
$("#segundoform").addClass("ocultar");
});
$( "#formclose" ).click(function() {
$("#fix").css("display","none");
$("#primerForm").addClass("ocultar");
$("#segundoform").addClass("ocultar");
});
$(function(){
   $(window).scroll(sticky_relocate);
   sticky_relocate();
});
