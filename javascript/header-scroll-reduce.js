let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 60) header.classList.add("reduced");
    else header.classList.remove("reduced");
});
