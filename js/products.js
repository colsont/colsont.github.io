
function ifStatement(cardID){
    if(cardID == "card1") {
        var image = document.getElementById("img1")
        var box = 0
        var info = "The largest service offered by EVE Telemedicine is our On-Demand Video Calls. These video calls are used to easily and quickly connect you to an EVE professional for any of your telemedicine needs. EVE has our own web app and servers available 24/7 for anyone to use."
    } else if(cardID == "card2") {
        var image = document.getElementById("img2")
        var box = 1
        var info = "At EVE Telemedicine we pride ourselves on having the best staff in the nation. Patients may choose whichever professional they are comfortable with. Many of our staff have over 20 years of experience in the field."
    } else if(cardID == "card3") {
        var image = document.getElementById("img3")
        var box = 2
        var info = "Unlike most other telemedicine companies, EVE offers our services worldwide. The EVE Global Coverage Program is an essential service, especially during the COVID-19 pandemic. Many international patients are also qualified for the Reduced Pricing Program. With over 100 international representatives, EVE is the current largest worldwide telemedicine company. "
    } else if(cardID == "card4") {
        var image = document.getElementById("img4")
        var box = 3
        var info = "One of the most prominent concerns in the last decade is global warming and sustainability. For this reason, EVE Telemedicine is certified carbon-neutral and plans to be carbon-negative by 2025. EVE also has focused on keeping the company’s energy sources all renewable while we have also worked hard to bring renewable energy to countries in need. Read more in Partnerships and Plans"
    };
    return [image, box, info]
}

function hoverCover(card) {
    var cardID = card.id
    var content = ifStatement(cardID)
    content[0].classList.add("hoverover")
    var hoverText = document.getElementsByClassName("para")
    var cardText = hoverText[content[1]]
    cardText.innerHTML = content[2]
    hoverText[content[1]].classList.add("overlayingText")
};

function offCover(card) {
    var cardID = card.id

    if(cardID == "card1") {
        var image = document.getElementById("img1")
        var box = 0
        var info = "EVE offers on demand video calls with personel that can get you the help you need."
    } else if(cardID == "card2") {
        var image = document.getElementById("img2")
        var box = 1
        var info = "EVE provides a group of dedicated professionals who are able to meet and serve our patients medical needs."
    } else if(cardID == "card3") {
        var image = document.getElementById("img3")
        var box = 2
        var info = "EVE knows no boundries set by borders and it is our mission to ensure that everyone gets the help they deserve"
    } else if(cardID == "card4") {
        var image = document.getElementById("img4")
        var box = 3
        var info = "EVE's framework ensures that our system will continue to work with our constantly changing world. As innovations are introduced EVE is prepared."
    };
    image.classList.remove("hoverover")
    var hoverText = document.getElementsByClassName("para")
    hoverText[box].classList.remove("overlayingText")
    hoverText[box].innerHTML = info
    console.log("It's off")
};


window.onscroll = function(ev) {
    // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        var intro = document.getElementById("intro")
        intro.style.opacity = "1"
    // }
};
