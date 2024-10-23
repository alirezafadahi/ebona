$('.inimagebox ul li').click(
  function(){
    $(this).find('.defaultimg').css('opacity','0');
    $(this).find('.hoverimg').css('opacity','0');
    $(this).find('.incardclicked').css('opacity','1');
    $(this).addClass('active');
});

$('#sad').change(function() { 
  if ($('#sad').is(':checked')) {
    $('.signinbtn').addClass('slactive');
    $('.loginbtn').removeClass('slactive');
    $('.signinbtn').addClass('slactive');
    $('.signinslbox').css('opacity','0');
    $('.signinslbox').css('visibility','hidden');
    $('.loginslbox').css('opacity','1');
    $('.loginslbox').css('visibility','visible');
    $('.signinboxres').fadeOut(0);
    $('.loginboxres').fadeIn(0);
  }
  else{
    $('.signinbtn').removeClass('slactive');
    $('.loginbtn').addClass('slactive');
    $('.signinslbox').css('opacity','1');
    $('.signinslbox').css('visibility','visible');
    $('.loginslbox').css('opacity','0');
    $('.loginslbox').css('visibility','hidden');
    $('.loginboxres').fadeOut(0);
    $('.signinboxres').fadeIn(0);
  }
});

$('.loginbtn').click( function(){
  $(this).removeClass('slactive');
  $('#sad').prop("checked", true); 
  $('.signinbtn').addClass('slactive');
  $('.signinslbox').css('opacity','0');
  $('.signinslbox').css('visibility','hidden');
  $('.loginslbox').css('opacity','1');
  $('.loginslbox').css('visibility','visible');
  $('.loginboxres').fadeIn(0);
  $('.signinboxres').fadeOut(0);
});

$('.signinbtn').click( function(){
  $(this).removeClass('slactive');
  $('#sad').prop("checked", false); 
  $('.loginbtn').addClass('slactive');
  $('.signinslbox').css('opacity','1');
  $('.signinslbox').css('visibility','visible');
  $('.loginslbox').css('opacity','0');
  $('.loginslbox').css('visibility','hidden');
  $('.signinboxres').fadeIn(0);
  $('.loginboxres').fadeOut(0);
});

$(document).ready(function(){
  $('.slbox').height($('.signinslbox').height());
});

$('.linebtn').click( function(){
  $('.acwbtn').slideToggle('slow');
  $('.contentarea').fadeToggle('slow');
  $('.resmenu3vec').css('opacity','1');
});

$('.resmenu2').click( function(){
  $('.resmenu2 .geoque').slideToggle();
});

$('.resformbox2btn').click( function(){
  $('.resformbox2form').slideToggle();
  $(this).toggleClass('resformbox2btnrotate');
});

$('.tbboxdots').click( function(){
  $('.timerboxbg').addClass('timerboxeffect');
  $('.timerboxdisplay').slideDown();
  $('.tbboxdots').css('transform','rotate(-90deg)');
  $('.tbboxdots').css('opacity','0');
  $('.tbboxdots').css('visibility','hidden');
  $('.tbbox2 svg').css('visibility','visible');
  $('.tbbox2 svg').css('opacity','1');
  $('.tbbox2 svg').css('transform','none');
});

$('.tbbox2 svg').click( function(){
  $('.timerboxbg').removeClass('timerboxeffect');
  $('.timerboxdisplay').slideUp();
  $('.tbboxdots').css('transform','none');
  $('.tbboxdots').css('opacity','1');
  $('.tbboxdots').css('visibility','visible');
  $('.tbbox2 svg').css('visibility','hidden');
  $('.tbbox2 svg').css('opacity','0');
  $('.tbbox2 svg').css('transform','rotate(45deg)');
});


$('.upbtn').click(function(){
  $("html, body").animate({ scrollTop: 0 });
});


$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 200) {
    $('.upbtn').css("opacity","1");
    $('.upbtn').css("visibility","visible");
  }
  else{
    $('.upbtn').css("opacity","0");
    $('.upbtn').css("visibility","hidden");
  }
});



$(document).ready(function() {
  var $swiper = $(".notifslider");
  var mySwiper = new Swiper(".notifslider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    navigation:false,
  });
});

$('.notifbox').click( function(){
  $('.notifareaboxbg').toggleClass('notifareaboxbgclass');
  $('.notifboxicon').toggleClass('notifactive');
});

$(document).ready(function(){
  $('.notifareaboxbg').css('margin-top', -$('.notifareaboxbg').height() - 150);
});

$('.menuopen').click( function(){
  $('.resmainmenu').css('visibility','visible');
  $('.resmainmenu').css('opacity','1');
});

$('.resmainmenuvec').click( function(){
  $('.resmainmenu').css('visibility','hidden');
  $('.resmainmenu').css('opacity','0');
});

$('.notifboxdesk').click( function(){
  $('.notifboxdesk').toggleClass('notifactive');
  $('.notifareadesk').toggleClass('notifareaboxbgclass2');
});

$(document).ready(function(){
  $('.notifareadesk').css('margin-top', -$('.notifareadesk').height() - 40);
});


$('.inimgb2').click(function(){
  $(".inimagebox2 ul").animate({ scrollTop: 0 },2000);
});

$('.inimagebox2 ul').scroll(function(){
  var scroll2 = $('.inimagebox2 ul').scrollTop();
  if (scroll2 > 200) {
    $('.inimgb2').css("opacity","1");
    $('.inimgb2').css("visibility","visible");
  }
  else{
    $('.inimgb2').css("opacity","0");
    $('.inimgb2').css("visibility","hidden");
  }
});