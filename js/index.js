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

$('.dropdown').on('show.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function() {
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

function dropDownOpen(dropdown) {
	$(dropdown).dropdown('show')

}

function dropDownClose(dropdown) {
	$(dropdown).dropdown('hide')
}

//document.getElementsByClassName("dropdown-menu").addEventListener("wheel", dropDownClose);
