$('.global-menu-button').on('click', openMenu);

function openMenu() {
  $('.global-menu-list').toggleClass('global-menu-list_show');
  $('html, body').toggleClass('no_sroll');
}

$(window).scroll(checkScroll);

function checkScroll() {
  var pixel = $(window).scrollTop();
  console.log(pixel);
  if (pixel>510) {
    $('global-menu').addClass('fixed_menu');
  } else {
    $('.global-menu').removeClass('fixed_menu');
  }
}
