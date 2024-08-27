const allCarousels = Array.from(document.querySelectorAll(".carousel"));

function inc_slides(carousel, inc){
    const slidesDiv = carousel.firstElementChild;
    const slidesArray = Array.from(slidesDiv.children);
    const n = slidesArray.length;
    const a = Number.parseInt(slidesDiv.dataset.slide)-1+inc;
    slidesDiv.dataset.slide= (((a % n) + n) % n)+1;
    const current_slide = slidesArray[parseInt(slidesDiv.dataset.slide)-1];
    slidesDiv.style.left = `-${current_slide.offsetWidth*(parseInt(slidesDiv.dataset.slide)-1)}px`;
}

document.addEventListener("click", e => {
    if(e.target.classList.contains("next") || e.target.classList.contains("previous")) {
        let inc = 0;
        if(e.target.classList.contains("next")) {
            inc =1;
        } else if(e.target.classList.contains("previous")) {
            inc = -1;
        }
        inc_slides(e.target.parentNode, inc);
    }
})

window.setInterval(() => {
    allCarousels.forEach(c => inc_slides(c, 1));
}, 500);
