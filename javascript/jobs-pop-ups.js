document.querySelectorAll(".container").forEach(container => {
    new PopUpHandler(container.querySelector("button"), container.querySelector(".pop-up"))
})