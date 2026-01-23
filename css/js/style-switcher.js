/* ================================
   Style Switcher Toggle
================================ */

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

/* Close style switcher on scroll */
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ================================
   Color Theme Switcher
================================ */

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* ================================
   Dark / Light Mode Toggle
================================ */

const dayNight = document.querySelector(".day-night");
const icon = dayNight.querySelector("i");

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
});

/* Set correct icon on page load */
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
    } else {
        icon.classList.add("fa-moon");
    }
});
