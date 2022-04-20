// console.log(document.querySelectorAll(".search-form .close-icon"));
document.querySelectorAll(".search-form .close-icon").forEach((btn) => {
    btn.addEventListener("click", function () {
        btn.previousElementSibling.value = "";
        btn.previousElementSibling.focus();
    });
});

document
    .querySelector(".search-input.one")
    .addEventListener("focus", function () {
        this.parentNode.parentNode.style.setProperty("--portion", "60%");
    });
document
    .querySelector(".search-input.one")
    .addEventListener("blur", function () {
        this.parentNode.parentNode.style.setProperty("--portion", "50%");
    });
document
    .querySelector(".search-input.two")
    .addEventListener("focus", function () {
        this.parentNode.parentNode.style.setProperty("--portion", "40%");
    });
document
    .querySelector(".search-input.two")
    .addEventListener("blur", function () {
        this.parentNode.parentNode.style.setProperty("--portion", "50%");
    });
