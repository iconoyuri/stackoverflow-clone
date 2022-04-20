// let observer = null;
// let sOptions = document.getElementById("s-navbar").querySelectorAll(".option")
// let defaultOptions = { root: null, rootMargin: "-100px", threshold: 0 }
// function sNavbarUpdateCallback(entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             sOptions.forEach((option) => option.classList.remove("active"));
//             // console.log(sOptions[entry.target.dataset.anchorId - 1]);
//             sOptions[entry.target.dataset.anchorId - 1].classList.add("active");
//         }
//     });
// }
// function sNavbarUpdateStart(
//     inputOptions 
// ) {
//     let options = {}
//     // options.root = inputOptions.hasOwnProperty("root")
//     //     ? inputOptions.root
//     //     : defaultOptions.root;
//     // options.rootMargin = inputOptions.hasOwnProperty("rootMargin")
//     //     ? inputOptions.rootMargin
//     //     : defaultOptions.rootMargin;
//     // options.threshold = inputOptions.hasOwnProperty("threshold")
//     //     ? inputOptions.threshold
//     //     : defaultOptions.threshold;
    
//     options.root = inputOptions?.root || defaultOptions.root;
//     options.rootMargin = inputOptions?.rootMargin || defaultOptions.rootMargin;
//     options.threshold = inputOptions?.threshold || defaultOptions.threshold;
    
//     let observer = new IntersectionObserver(sNavbarUpdateCallback, options);
// }
class sNavbarUpdater {
    constructor(buttons, blocks, options) {
        this.observer = null;
        this.options = options;
        this.buttons = Array.from(buttons);
        this.blocks = Array.from(blocks);
        this.labeling();
        this.observerSetting();
    }
    observerSetting() {
        this.observer = new IntersectionObserver(
            this.callback.bind(this),
            this.options
        );
        this.blocks.forEach(
            function (block) {
                this.observer.observe(block);
            }.bind(this)
        );
    }
    callback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.buttons.forEach((option) =>
                    option.classList.remove("active")
                );
                this.buttons[entry.target.dataset.anchorId].classList.add(
                    "active"
                );
            }
        });
    }
    labeling() {
        let i = 0;
        this.blocks.forEach((block) => {
            block.dataset.anchorId = i++;
        });
    }
}


