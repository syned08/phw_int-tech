const toTop = document.querySelector('.scroll-up-round');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add('scroll-up-round-active');
    } else {
        toTop.classList.remove('scroll-up-round-active');
    }
});
