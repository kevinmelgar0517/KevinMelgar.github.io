const slides = Array.from(document.querySelectorAll('.km-slide'));
const dots = Array.from(document.querySelectorAll('.km-dot'));

let idx = 0;
const DURATION = 6000;

function goTo(i) {
    slides.forEach((s, n) => {
        s.setAttribute('aria-hidden', n === i ? 'false' : 'true');
    });

    dots.forEach((d, n) => {
        d.classList.toggle('km-dot--active', n === i);
    });

    idx = i;
}

function nextSlide() {
    goTo((idx + 1) % slides.length);
}

// inicial
goTo(0);

// auto slide
let timer = setInterval(nextSlide, DURATION);

// dots click
dots.forEach(d => {
    d.addEventListener('click', () => {
        const newIndex = Number(d.dataset.index);
        goTo(newIndex);

        clearInterval(timer);
        timer = setInterval(nextSlide, DURATION);
    });
});
