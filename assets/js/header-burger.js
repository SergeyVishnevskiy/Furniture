$(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.item-link').on('click', function () {
    $('.item-link').removeClass('active');
    $(this).addClass('active');
  });
  $('.categories-list__toggler').click(function (event) {
    $('.categories-list').slideToggle('slow');
    $('.arrow').toggleClass('show-list');
    $('.arrow, .header-link_project').toggleClass('header-link_project-bold');
    $('.item-link').toggleClass('show-list');
  });
});
