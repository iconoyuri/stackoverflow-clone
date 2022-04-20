document
    .querySelector(".main")
    .querySelectorAll(".user-block")
    .forEach((userBlock) => {
        let timeout = null;
        userBlock.addEventListener("mouseover", function (e) {
            timeout = setTimeout(
                function () {
                    if (e.target.tagName == "IMG") this.classList.add("active");
                }.bind(this),
                1000
            );
        });
        userBlock.addEventListener("mouseleave", function (e) {
            this.classList.remove("active");
            clearTimeout(timeout);
        });
    });
