let currentSlide = 0;
const slidesContainer = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

setInterval(nextSlide, 3000); // Авто-листание каждые 3 секунды
