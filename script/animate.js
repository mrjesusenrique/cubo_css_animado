const animar = document.querySelector('#animar').onclick = animacion;
const pausar = document.querySelector('#pausar').onclick = detener;

function animacion() {
    document.querySelector('.cubo').style.animationPlayState = 'running';
};

function detener() {
    document.querySelector('.cubo').style.animationPlayState = 'paused';
};