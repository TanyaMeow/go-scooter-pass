const slider = document.querySelector('.slider_container')
const slides = document.querySelectorAll('.slide');
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');



const maxSlides = slides.length;
let currentSlide = 0;

back.addEventListener('click', swipeBack);
forward.addEventListener('click', swipeForward);

function checkButtonsState() {
    back.classList.remove('inactive_slider_button');
    forward.classList.remove('inactive_slider_button');

    if (currentSlide === maxSlides - 1) {
        forward.classList.add('inactive_slider_button');
    }

    if (currentSlide === 0) {
        back.classList.add('inactive_slider_button');
    }
}

function swipeBack() {
    if (currentSlide === 0) {
        return;
    }

    currentSlide--;
    slider.scroll((slides[0].clientWidth + 15) * currentSlide, 0);
    checkButtonsState();
}

function swipeForward() {
    if (currentSlide === maxSlides - 1) {
        return;
    }

    currentSlide++;
    slider.scroll((slides[0].clientWidth + 15) * currentSlide, 0);
    checkButtonsState();
}