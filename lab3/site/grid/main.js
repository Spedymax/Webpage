function toggleFooterNav() {
    const navList = document.getElementById("footer-nav-list");
    navList.classList.toggle("open");

    const button = document.querySelector(".footer-menu-button");
    button.classList.toggle("change"); // Animate the burger icon into an 'X'
}