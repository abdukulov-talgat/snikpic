const burger = document.querySelector('.menu__burger');

burger.addEventListener('click', (evt) => {
    evt.target.closest('.menu__burger').classList.toggle('menu__burger--open');
    document.documentElement.classList.toggle('menu-open');
});
