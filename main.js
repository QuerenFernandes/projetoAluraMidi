/*
SERIA NECESSÁRIO UM BLOCO DE CÓDIGO DESSE PARA CADA TECLA, EXISTE UMA FORMA MELHOR DE FAZER*/
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
/*
document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
}