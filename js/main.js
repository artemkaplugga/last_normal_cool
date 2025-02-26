new Swiper('.destination__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 25,
});

new Swiper('.categories__swiper', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true
});


function clearInput() {
    document.getElementById('emailInput').value = '';
}