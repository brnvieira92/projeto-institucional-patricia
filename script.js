let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let autoSlideInterval;

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
        dots[i].classList.toggle('active', i === slideIndex);
    });
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(parseInt(dot.getAttribute('data-index')));
    });
});

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Muda de slide a cada 3 segundos
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.slider').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.slider').addEventListener('mouseleave', startAutoSlide);

showSlide(slideIndex);
startAutoSlide();
