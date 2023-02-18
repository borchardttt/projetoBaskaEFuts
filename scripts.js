$(document).ready(function() {
  var hamburguer = $('.navbar-toggler');
  var navbar = $('.navbar-collapse');

  hamburguer.on('click', function() {
    $(this).toggleClass('active');
    navbar.toggleClass('show');
  });
});