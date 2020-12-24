let mouseCursor = document.querySelector('.cursor');
let text = document.querySelectorAll('.text__content');
let header = document.querySelector('.header');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

text.forEach(el => {
    el.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('change-cursor');
    });
    el.addEventListener('mouseover', () => {
        mouseCursor.classList.add('change-cursor');
    });
});

let buttonPlay = document.querySelector('#btn-play');
let audio = document.querySelector('#player');

buttonPlay.addEventListener("click", () => {
    if(audio.paused){
      audio.play();
      buttonPlay.classList.add("fa-pause");
      buttonPlay.classList.remove("fa-play");
    } else {
      audio.pause();
      buttonPlay.classList.remove("fa-pause");
      buttonPlay.classList.add("fa-play");
    }
});
