$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

   $(".news-container").owlCarousel({
     loop: false,
     margin: 20,
     responsiveClass: true,
     autoplay: true,
     autoplayTimeout: 10000,
     responsive: {
       0: {
         items: 1,
         nav: true
       },
       500: {
         items: 2,
         nav: true
       },
       820: {
         items: 3,
         nav: true
       }
     }
   });

   $(".slider").owlCarousel({
     loop: true,
     autoplay: true,
     autoplayTimeout: 10000,
     items: 1,
     nav: true
   });
});