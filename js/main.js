new Swiper('.destination__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#nextDestinationBtn",
        prevEl: "#prevDestinationBtn",
    },
});

new Swiper('.categories__swiper', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#nextBtn",
        prevEl: "#prevBtn",
    },
});


function clearInput() {
    document.getElementById('emailInput').value = '';
}