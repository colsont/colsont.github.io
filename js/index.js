window.addEventListener("scroll", function () {
	var navbar = document.getElementById("nav")
	navbar.classList.toggle("bg-dark", window.scrollY > 0)
})

function opaque(navbar) {
	navbar.classList.toggle("bg-dark", true)
}

function transparent(navbar) {
	navbar.classList.toggle("bg-dark", window.scrollY > 0)
}

function dropDownOpen() {
	var dropdown = document.getElementsByClassName("dropdown-menu")
	$(dropdown).dropdown('show')
	
}

function dropDownClose() {
	var dropdown = document.getElementsByClassName("dropdown-menu")
	$(dropdown).dropdown('hide')
}
