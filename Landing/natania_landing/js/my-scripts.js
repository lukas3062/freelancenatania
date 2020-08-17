// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
   $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
   });
   //modal 1
   var valor1 = document.getElementById("title-blog1").innerHTML;
   var valor2 = document.getElementById("parrafo-blog1").innerHTML;
   var x = valor2.length;
   var suma = 0;
   var y = 300;
   if (x<y) {
     suma = valor2;
   }
   else{
     suma = valor2.slice(0,y);
     suma=suma.concat("...");
   }
   document.getElementById("title1").innerHTML = valor1;
   document.getElementById("parrafo1").innerHTML = suma;
   //modal2
   var valor1 = document.getElementById("title-blog2").innerHTML;
   var valor2 = document.getElementById("parrafo-blog2").innerHTML;
   var x = valor2.length;
   var suma = 0;
   var y = 300;
   if (x<y) {
     suma = valor2;
   }
   else{
     suma = valor2.slice(0,y);
     suma=suma.concat("...");
   }
   document.getElementById("title2").innerHTML = valor1;
   document.getElementById("parrafo2").innerHTML = suma;
   //modal3
   var valor1 = document.getElementById("title-blog3").innerHTML;
   var valor2 = document.getElementById("parrafo-blog3").innerHTML;
   var x = valor2.length;
   var suma = 0;
   var y = 300;
   if (x<y) {
     suma = valor2;
   }
   else{
     suma = valor2.slice(0,y);
     suma=suma.concat("...");
   }
   document.getElementById("title3").innerHTML = valor1;
   document.getElementById("parrafo3").innerHTML = suma;
   //modal4
   var valor1 = document.getElementById("title-blog4").innerHTML;
   var valor2 = document.getElementById("parrafo-blog4").innerHTML;
   var x = valor2.length;
   var suma = 0;
   var y = 300;
   if (x<y) {
     suma = valor2;
   }
   else{
     suma = valor2.slice(0,y);
     suma=suma.concat("...");
   }
   document.getElementById("title4").innerHTML = valor1;
   document.getElementById("parrafo4").innerHTML = suma;
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
   target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
   $('.navbar-toggle:visible').click();
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
