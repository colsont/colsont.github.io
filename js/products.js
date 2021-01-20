

function hoverCover(card) {
    var image1 = document.getElementById("img1")
    var image2 = document.getElementById("img2")
    var image3 = document.getElementById("img3")
    var image4 = document.getElementById("img4")
    if(card.id == "img1") {
        image1.style.opacity = "0"
        
    } else if(card.id == "img2")
    console.log("It's working")

    
};

function offCover(card, image1, image2, image3, image4) {
    image1.style.opacity = "1"
    console.log("It's working")
};