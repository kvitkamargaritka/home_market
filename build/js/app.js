$(function() {
/** Fotorama **/

  $('.fotorama').fotorama({
    width: 875,
    height: 290,
    maxwidth: '100%',
    //ratio: 16/9,
    //allowfullscreen: true,
    nav: 'dots',
    autoplay: true
  });

/** end Fotorama **/

/** slick **/

  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,

  });

  $('.carousel-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true
  });

/** end slick **/

/** drop-down **/

  $('.sidebar__el').mouseover (function () {
    $(this).children('.drop-down').stop().show(100);
    $(this).children('.drop-down').css('display', 'inline-flex');
  });
  $('.sidebar__el').mouseout(function() {
    $(this).children('.drop-down').stop().hide(100);
  });

/** end drop-down **/

/** animate **/
  $('.social__ico').hover(function(){
    $(this).addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated tada')
    });
  });
/** end animate **/
});
