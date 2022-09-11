const navMenu = document.querySelector(".navbar");
const mobileButtonOpen = document.querySelector(".mobile-menu-open");
const mobileButtonClose = document.querySelector(".mobile-menu-close");

mobileButtonOpen.addEventListener("click", () => {
    const visibility = navMenu.getAttribute("data-visible");

    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        mobileButtonOpen.setAttribute("aria-expanded", true);
        mobileButtonClose.setAttribute("aria-expanded", false);
    } 

});

mobileButtonClose.addEventListener("click", () => {
    const visibility = navMenu.getAttribute("data-visible");

    if (visibility === "true") {
        navMenu.setAttribute("data-visible", false);
        mobileButtonClose.setAttribute("aria-expanded", true);
        mobileButtonOpen.setAttribute("aria-expanded", false);
    } 
});
