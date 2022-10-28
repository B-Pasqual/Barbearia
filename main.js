// ! -------------------------------

// Arrays de fotos com os clientes
const amigos = [
  'img/amigos/amigos2.png',
  'img/amigos/amigos3.png',
  'img/amigos/amigos4.png',
  'img/amigos/amigos5.png',
  'img/amigos/amigos6.png',
];

//todo---------------- Variáveis
let i = 0;

//! Seleção dos elementos --------------------------

const trocaBtn = document.getElementById('troca');
const imagem = document.getElementById('imagem__escolhida');
const menu = document.querySelector('.menu__container');
const barras = document.querySelectorAll('.bar');
const dropMenu = document.querySelector('.drop__menu');

//! Funções------------------------------------------

//Passa fotos

setInterval(function () {
  imagem.src = amigos[i];
  i++;
  if (i == 5) {
    i = 0;
  }
}, 2000);

//! Menu ---------------------------------------------

menu.addEventListener('click', () => {
  checkClass();
  // dropMenu.classList.toggle('hidden');
  barras.forEach((bar) => {
    bar.classList.toggle('anime');
  });
});

//Função para aidicionar e remover a classe hiden do drop menu

function checkClass() {
  if (dropMenu.classList.contains('hidden')) {
    console.log('removi o hidden');
    dropMenu.classList.remove('hidden');
  } else {
    console.log('adicionei o hidden');
    dropMenu.classList.add('hidden');
  }
}
