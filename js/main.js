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

const emailInput = document.querySelector('.email__address');
const submitButton = document.querySelector('#tg_btn');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (emailInput.value.trim() !== '') {
        alert(`Введенный email: ${emailInput.value}`);
    } else {
        alert('Поле email пустое');
    }
});

const mobileMenuBtn = document.querySelector('.mobile__menu__btn');
const headerNav = document.querySelector('.header__nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

const navLinks = document.querySelectorAll('.header__nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        headerNav.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});
