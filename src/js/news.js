let arrows = document.querySelectorAll('.arrow');
let news = document.querySelectorAll('.carousel-element');
let index = 0;

arrows[1].addEventListener('click', () => {
    index++;
    for (let el of news) {
        if (index <= news.length - 2) {
            el.style.left = -540 * index + 'px';
        } else {
            index = news.length - 2;
        }
    }
}); 

arrows[0].addEventListener('click', () => {
    index--;
    for (let el of news) {
        if (index >= 0) {
            el.style.left = -540 * index + 'px';
        } else {
            index = 0;
        }
    }
}); 