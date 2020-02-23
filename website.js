var window = $(Window);
var road = $(".infinite");

function roadDisapper() {
    if (window.innerWidth < 849); {
        road.style.display = none;
    }
}