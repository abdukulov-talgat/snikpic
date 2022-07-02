const burger = document.querySelector('.menu__burger');

burger.addEventListener('click', (evt) => {
    evt.target.closest('.menu__burger').classList.toggle('menu__burger--open');
    document.documentElement.classList.toggle('menu-open');
});


const swiper = new Swiper(document.querySelector('.swiper'), {
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        type: 'bullets',
        el: '.swiper-pagination',
    }
});
