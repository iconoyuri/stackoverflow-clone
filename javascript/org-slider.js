let orgSlider = document.querySelector(".section-2 .org-slider");
let indicators = document.querySelector(".section-2 .indicators");
let index = 0;

setInterval(() => {
    Array.from(orgSlider.children).forEach((sliderBlock) => {
        sliderBlock.classList.remove("visible");
    });
    Array.from(indicators.children).forEach((sliderBlock) => {
        sliderBlock.classList.remove("active");
    });
    setTimeout(() => {
        orgSlider.children[modulateIndex()].classList.add("visible");
        indicators.children[modulateIndex()].classList.add("active");
    }, 500);
    index++;
}, 3000);

function modulateIndex() {
    return (index %= orgSlider.children.length);
}