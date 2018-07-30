$(function() {
  var $win = $(window),
    $main = $('main'),
    $nav = $('nav'),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = 'is-fixed';
  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if (value > navPos) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});
$(function() {
  $('.list-mv07').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('mv07');
    } else {
      $(this).stop().removeClass('mv07');
    }
  });
});
$(function() {
  $(".and").click(function() {
    $($(this).next(".more")).animate({ height: "toggle", opacity: "toggle" },
      "nomal"
    );
  });
});