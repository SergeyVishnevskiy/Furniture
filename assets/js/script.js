let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(document).ready(function () {
  $('.contacts').hover(function () {
    $('.phone-list').toggleClass('active');
  });
  $('.categories-list .categories-item').hover(function () {
    $(this).find('.categoria-list').toggleClass('active');
  });

  $('.list-item__link').hover(function () {
    $('.list-item__link').removeClass('active');
    $(this).toggleClass('active');
  });

  $(function () {
    $('*[placeholder="Номер телефону"]*').mask('+3 (000) 000 00 00');
  });
});
