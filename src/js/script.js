@@include('cursor.js');
@@include('gallery.js');
@@include('listen.js');
@@include('news.js');
@@include('toTop.js');

let cards = document.querySelectorAll('.about__members__card');

cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        e.stopPropagation();
        e.target.children[3].classList.remove('links-hidden');
    });
    card.addEventListener('mouseleave', (e) => {
        e.stopPropagation();
        e.target.children[3].classList.add('links-hidden');
    });
})