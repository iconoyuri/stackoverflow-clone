class AppearenceAnimator {
    constructor(block, entries, options) {
        this.observer = null;
        this.options = options;
        this.block = block;
        this.entries = Array.from(entries);
        this.observerSetting();
    }
    observerSetting() {
        this.observer = new IntersectionObserver(
            this.callback.bind(this),
            this.options
        );
        this.observer.observe(this.block);
    }
    callback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let i = 1,
                    timeout = 700;
                this.entries.forEach((entry) => {
                    setTimeout(function () {
                        entry.classList.add("visible");
                    }, timeout * i++);
                });
            }
            this.entries.forEach((entry) => {
                entry.classList.remove("visible");
            });
        });
    }
}
