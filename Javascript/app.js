function changeimage(source) {
    document.querySelector('.trainers').src = source;
}



var sizes = document.getElementsByClassName("size");
var i;

for (i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", function() {
        toggleSizeActive(this)
    });
}

function toggleSizeActive(size) {
    size.classList.toggle("active")
    for (i = 0; i < sizes.length; i++) {

        var current = sizes[i]
        if (current != size) {
            current.classList.remove("active")
        }
    }
}