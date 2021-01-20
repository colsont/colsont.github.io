"use strict";

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("nav");
  navbar.classList.toggle("bg-dark", window.scrollY > 0);
});

function opaque(navbar) {
  navbar.classList.toggle("bg-dark", true);
}

function transparent(navbar) {
  navbar.classList.toggle("bg-dark", window.scrollY > 0 && !$('#nav').is(':hover'));
}

$('.dropdown').on('show.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});
$('.dropdown').on('hide.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

function dropDownOpen(dropdown) {
  $(dropdown).dropdown('show');
}

function dropDownClose(dropdown) {
  $(dropdown).dropdown('hide');
}

function changeVideo1() {
  var btn1 = document.getElementById("btn1");
  btn1.classList.toggle("bg-dark", true);
  var source = document.createElement("source");
  var videoSource = document.getElementById("video1");
  videoSource.style.visibility = "hidden";
}

;

function carouselAni(button) {
  var displaying = 0;
  button.classList.toggle("bg-dark", true);
  var review1 = document.getElementById("review1");
  var review2 = document.getElementById("review2");
  var review3 = document.getElementById("review3");
  var dim = button.getBoundingClientRect();
  var limit = review3.getBoundingClientRect();
  var a = dim.right;
  var b = limit.right;
  var c = b - a;
  var i;

  if (button.id == "review1") {
    review2.style.opacity = "0";
    review3.style.opacity = "0";
    var displaying = 1;
  } else if (button.id == "review2") {
    review1.style.opacity = "0";
    review3.style.opacity = "0";
    var displaying = 2;
  } else {
    review2.style.opacity = "0";
    review1.style.opacity = "0";
    var displaying = 3;
  }

  ;

  if (displaying == 1) {} else if (displaying == 2) {} else if (displaying == 3) {} else {
    console.log("Something is wrong!");
  }

  ;
  $(button).animate({
    left: c + 'px'
  });
  var para = document.createElement("h4");
}

; //document.getElementsByClassName("dropdown-menu").addEventListener("wheel", dropDownClose);