"use strict";

function ifStatement(cardID) {
  if (cardID == "card1") {
    var image = document.getElementById("img1");
    var box = 0;
    var info = "Card 1 is being hovered over rn.  DFKSJLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL";
  } else if (cardID == "card2") {
    var image = document.getElementById("img2");
    var box = 1;
    var info = "Card 2 is being hovered over rn.  DFKSJLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL";
  } else if (cardID == "card3") {
    var image = document.getElementById("img3");
    var box = 2;
    var info = "Card 3 is being hovered over rn.  DFKSJLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL";
  } else if (cardID == "card4") {
    var image = document.getElementById("img4");
    var box = 3;
    var info = "Card 4 is being hovered over rn.  DFKSJLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL";
  }

  ;
  return [image, box, info];
}

function hoverCover(card) {
  var cardID = card.id;
  var content = ifStatement(cardID);
  content[0].classList.add("hoverover");
  var hoverText = document.getElementsByClassName("para");
  hoverText[content[1]].innerHTML = content[2];
  console.log("It's working");
}

;

function offCover(card) {
  var cardID = card.id;

  if (cardID == "card1") {
    var image = document.getElementById("img1");
    var box = 0;
    var info = "EVE offers on demand video calls with personel that can get you the help you need.";
  } else if (cardID == "card2") {
    var image = document.getElementById("img2");
    var box = 1;
    var info = "EVE provides a group of dedicated professionals who are able to meet and serve our patients medical needs.";
  } else if (cardID == "card3") {
    var image = document.getElementById("img3");
    var box = 2;
    var info = "EVE knows no boundries set by borders and it is our mission to ensure that everyone gets the help they deserve";
  } else if (cardID == "card4") {
    var image = document.getElementById("img4");
    var box = 3;
    var info = "EVE's framework ensures that our system will continue to work with our constantly changing world. As innovations are introduced EVE is prepared.";
  }

  ;
  image.classList.remove("hoverover");
  var hoverText = document.getElementsByClassName("para");
  hoverText[box].innerHTML = info;
  console.log("It's off");
}

;

window.onscroll = function (ev) {
  // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  var intro = document.getElementById("intro");
  intro.style.opacity = "1"; // }
};