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
     dots: false,
     autoplayTimeout: 10000,
     navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
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
     dotsContainer: ".dots",
     autoplayTimeout: 10000,
     items: 1,
     navText: [
       '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
       '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'
     ],
     nav: true
   });
});

let modal1 = document.querySelector("#modal-1");
let modal2 = document.querySelector("#modal-2");
let modalOverlay = document.querySelector("#modal-overlay");
let closeButton1 = document.querySelector("#close-button-1");
let closeButton2 = document.querySelector("#close-button-2");
let openButton1 = document.querySelector("#open-button-1");
let openButton2 = document.querySelector("#open-button-2");
let openButtonTest = document.querySelector("#testbuy");

openButtonTest.addEventListener("click", function() {
  modal1.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

openButton1.addEventListener("click", function() {
  modal1.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

openButton2.addEventListener("click", function() {
  modal2.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

closeButton1.addEventListener("click", function() {
  modal1.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

closeButton2.addEventListener("click", function() {
  modal2.classList.toggle("on");
  modalOverlay.classList.toggle("on");
});

