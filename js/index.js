function ifStatement(cardID){
    if(cardID == "review1") {
		var image = document.getElementById("review1")
        var box = 0
    } else if(cardID == "review2") {
		var image = document.getElementById("review2")
        var box = 1
    } else if(cardID == "review3") {
		var image = document.getElementById("review3")
		var box = 2

    };
    return [image, box]
}

var hoverText = document.getElementsByClassName("reviewText")
var i;
for (i = 0; i == 2; i+=1) {
	hoverText[i].style.opacity = "0";
}

function clickedAni(button) {
    var buttonId = button.id
    var content = ifStatement(buttonId)
    content[0].classList.add("hoverover")
    var hoverText = document.getElementsByClassName("reviewText")
	hoverText[content[1]].style.opacity = "1";
};

window.addEventListener("scroll", function () {

	var navbar = document.getElementById("nav")
	navbar.classList.toggle("bg-dark", window.scrollY > 0)
})

function opaque(navbar) {
	navbar.classList.toggle("bg-dark", true)
}

function transparent(navbar) {
	navbar.classList.toggle("bg-dark", window.scrollY > 0 && !($('#nav').is(':hover')))
}


// $('.dropdown').on('hide.bs.dropdown', function() {
// 	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
// });

function dropDownOpen(dropdown) {
	$(dropdown).dropdown('show')

}

function dropDownClose(dropdown) {
	$(dropdown).dropdown('hide')
}




//document.getElementsByClassName("dropdown-menu").addEventListener("wheel", dropDownClose);