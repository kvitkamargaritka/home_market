$(function() {
/** Fotorama **/

  $('.fotorama').fotorama({
    width: 875,
    height: 290,
    maxwidth: '100%',
    //ratio: 16/9,
    //allowfullscreen: true,
    nav: 'dots',
    //autoplay: true,
  });
/** end Fotorama **/

/** slick **/

  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  });

/** end slick **/

  var elements = $('.general-menu__link');

  elements.each(function (index, el) {
    $(el).hover(function () {
      //$(this).parent().find('.content').toggle();
      $(this).parent().find('.general-menu__dropdown').fadeToggle();
    })
  });


});





