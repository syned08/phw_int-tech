let listenBtn = document.querySelector('.listen-btn');
let modal = document.querySelector('#modal-wrapper');
let modalBox = document.querySelector('.modal');

listenBtn.addEventListener('click', () => {
    modal.classList.remove('modal-hidden');
});

modal.addEventListener('click', (e) => {
    modal.classList.add('modal-hidden');
});

modalBox.addEventListener('click', (e) => {
    e.stopPropagation();
});
