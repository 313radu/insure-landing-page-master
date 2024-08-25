
const body = document.body;
const navbar = document.getElementById("navbar");

const menuButton = document.getElementById("menu-button");
const openMenuIcon = document.getElementById("open-menu");
const closeMenuIcon = document.getElementById("close-menu");


// When Button is Clicked the Navbar will Show
menuButton.addEventListener("click", () => {

    // Get the Window Current Width
    let windowWidth = window.innerWidth;

    // Get the Window Current Height
    let windowHeight = window.innerHeight;

    if (navbar.style.filter === "opacity(1)") {
        navbar.style.filter = "opacity(0)";
        openMenuIcon.style.display = "block";
        closeMenuIcon.style.display = "none";
        body.style.overflow = "scroll";
    } else {
        body.style.height = windowHeight - 100 + "px";
        body.style.overflow = "hidden";
        navbar.style.filter = "opacity(1)";
        navbar.style.height = windowHeight - 100 + "px";
        navbar.style.width = windowWidth + "px";
        closeMenuIcon.style.display = "block";
        openMenuIcon.style.display = "none";
    }
});