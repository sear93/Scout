$(document).ready(function () {
    $().UItoTop({ easingType: "easeOutQuart" });
    
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

let modal = document.querySelector("#modal");
let modalOverlay = document.querySelector("#modal-overlay");
let closeButton = document.querySelector("#close-button");
let openButton = document.querySelector("#open-button");
let openButtonTest = document.querySelector("#testbuy");

openButtonTest.addEventListener("click", function() {
  modal.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

openButton.addEventListener("click", function() {
  modal.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

closeButton.addEventListener("click", function() {
  modal.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

