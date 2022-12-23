function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
/*
document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio =`#som_${instrumento}`;//template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onekeyup = function () {
        tecla.classList.remove('ativa');
    }

}