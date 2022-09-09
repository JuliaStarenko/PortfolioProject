const navMenu = document.querySelector(".navbar");
const mobileButton = document.querySelector(".mobile-menu");

mobileButton.addEventListener("click", () => {
    const visibility = navMenu.getAttribute("data-visible");

    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        mobileButton.setAttribute("aria-expanded", true);
    } else {
        navMenu.setAttribute("data-visible", false);
        mobileButton.setAttribute("aria-expanded", false);
    }
});