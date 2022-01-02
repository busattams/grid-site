$(document).ready(function() {

   $('#homepage-slider').slick({
      arrows: false,
      dots: true,
   });

   $('#portfolio-slider').slick({
      centerMode: true,
      centerPadding: '15vw',
      slidesToShow: 1,
      arrows: false,
      dots: true
    });

    document.getElementById('nav-toggle').addEventListener('click', function() {
      document.getElementById('nav-toggle').classList.toggle('open')
      document.getElementById('navigation-wrapper').classList.toggle('open');
      document.body.classList.toggle('nav-open')
    })



 });