new Swiper('.destination__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: "#nextDestinationBtn",
        prevEl: "#prevDestinationBtn",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
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
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    }
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
    headerNav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});


const navLinks = document.querySelectorAll('.header__nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});
