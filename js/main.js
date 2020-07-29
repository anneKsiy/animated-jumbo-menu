const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");
const menuButton = document.getElementById("open-menu");

menuButton.addEventListener("click", function() {
    overlay.classList.add("show-menu");
});

document.getElementById("close-menu").addEventListener("click", function() {
    overlay.classList.add("hide-menu");
    // overlay.classList.remove("show-menu");
    // overlay.classList.remove("hide-menu");
    setTimeout(function() {
    overlay.classList.remove("show-menu");
    overlay.classList.remove("hide-menu");
}, 3200);

});