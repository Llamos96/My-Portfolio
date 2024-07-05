
const carouselCards = document.querySelectorAll("[class*='carousel-card']");

carouselCards.forEach(carouselCard => {
    carouselCard.classList.add('carousel-fade');
});