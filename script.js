const cubo = document.querySelector('.cubo');
const cano = document.querySelector('.cano');
const tela_do_jogo = document.querySelector('.tela-do-jogo');

// faz o cubo pular
const pular = () => {
    cubo.classList.add('pulo');

    setTimeout(() => {
        cubo.classList.remove('pulo');
    }, 1000);
}

// loop que verifica a colisao do cubo no cano
const colisao = setInterval(() => {
    const posicao_cano = cano.offsetLeft;
    const posicao_cubo = +window.getComputedStyle(cubo).getPropertyValue('bottom').replace('px', '');
    console.log(posicao_cubo);

    // verifica a colisao
    if (posicao_cano <= 265 && posicao_cubo < 200 && posicao_cano > 0 ) {
        cano.style.animation = 'none';
        cano.style.left = `${posicao_cano}px`;

        // add "morte" class to tela_do_jogo === nao funciona
        tela_do_jogo.classList.add('morte');

        // para de rodar o loop desnecessariamente, o jogo ja acabou
        clearInterval(colisao);
    }

}, 10);

// ve se apertaram algum botao
document.addEventListener('keydown', pular);
