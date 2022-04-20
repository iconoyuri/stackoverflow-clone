let jobLines = document.querySelectorAll(".jobs .full-line");
let jobPanes = document.querySelectorAll(".job-presenting-pane > main");

jobLines.forEach((jobLine) => {
    jobLine.addEventListener("click", function (e) {
        if (!e.target.closest(".close-btn") && window.innerWidth > 1000) {
            Array.from(this.parentNode.children).forEach((child) => {
                child.classList.remove("active");
            });
            this.classList.add("active");
            jobPanes.forEach((jobPane) => {
                jobPane.classList.remove("active");
            });
            jobPanes[Array.from(jobLines).indexOf(this)].classList.add(
                "active"
            );
        }
    });
});

(function closeBtnEvents() {
    jobLines.forEach((jobLine) => {
        jobLine.querySelectorAll(".close-btn").forEach((btn) => {
            btn.addEventListener("click", function () {
                jobPanes[
                    Array.from(jobLines).indexOf(this.parentNode)
                ].remove();
                this.parentNode.remove();
            });
        });
    });
})()
