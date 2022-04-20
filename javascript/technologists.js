class TechnologistClickEffect{
    constructor() {
        document.querySelector(".technologists")
            .addEventListener("click", this.clickEvent.bind(this));
    }
    setEvents() {
        this.technologistsContainer
    }
    clickEvent(e) {
        Array.from(e.target.closest(".technologist")?.parentNode.children)?.forEach(technologist => {
            technologist.classList.remove("active");
        });
        e.target.closest(".technologist")?.classList.toggle("active");
    }
}
new TechnologistClickEffect();