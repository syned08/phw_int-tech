let galleryArrows = document.querySelectorAll('.gallery-arrow');
let imgs = document.querySelectorAll('.gallery__element img');
let galleryIndex = 0;
let gallery = document.getElementById('gallery');

galleryArrows[1].addEventListener('click', () => {
    galleryIndex++;
    for (let el of imgs) {
        if (galleryIndex <= imgs.length - 2) {
            el.style.left = -200 * galleryIndex + 'px';
        } else {
            galleryIndex = imgs.length - 2;
        }
    }
}); 

galleryArrows[0].addEventListener('click', () => {
    galleryIndex--;
    for (let el of imgs) {
        if (galleryIndex >= 0) {
            el.style.left = -200 * galleryIndex + 'px';
        } else {
            galleryIndex = 0;
        }
    }
}); 

imgs.forEach(el => {
    el.addEventListener('click', (e) => {
        gallery.style.backgroundImage = `url("${el.src}")`;
    });
});
