let closeBtns = document.querySelectorAll(".close-btn > .fas.fa-times")
closeBtns.forEach(btn => btn.addEventListener("click", function () {
    this.parentNode.parentNode.remove()
}))