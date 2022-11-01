// ! -------------------------------

// Arrays de fotos com os clientes
const amigos = [
  'img/amigos/amigos2.png',
  'img/amigos/amigos3.png',
  'img/amigos/amigos4.png',
  'img/amigos/amigos5.png',
  'img/amigos/amigos6.png',
];

const fotos = [
  './img/amigos/galeria1.png',
  './img/amigos/galeria2.png',
  './img/amigos/galeria3.png',
  './img/amigos/galeria4.png',
  './img/amigos/galeria5.png',
  './img/amigos/galeria6.png',
  './img/amigos/galeria7.png',
  './img/amigos/galeria8.png',
  './img/amigos/galeria9.png',
  './img/amigos/galeria10.png',
  './img/amigos/galeria11.png',
  './img/amigos/galeria12.png',
  './img/amigos/galeria13.png',
  './img/amigos/galeria14.png',
  './img/amigos/galeria15.png',
  './img/amigos/galeria16.png',
  './img/amigos/galeria17.png',
  './img/amigos/galeria18.png',
];

//todo---------------- Variáveis
let i = 0;
let controleModal = 0;

//! Seleção dos elementos --------------------------

const trocaBtn = document.getElementById('troca');
const imagem = document.getElementById('imagem__escolhida');
const menu = document.querySelectorAll('.menu__container');
const barras = document.querySelectorAll('.bar');
const dropMenu = document.querySelectorAll('.drop__menu');
//Gallery
const photoContainers = document.querySelectorAll('.photo_card');
const containerFotos = document.querySelector('.photos_container');
//menu
const menuLinks = document.querySelectorAll('.link');
//botoões para trocar fotos
const direitaBtn = document.querySelector('.button_right');
const esquerdaBtn = document.querySelector('.button_left');
const closeBtn = document.querySelector('.close_btn');
//div modal
let divModal = document.querySelector('.modal');

//! Funções------------------------------------------

//! ----- Passa fotos

function slideFotos() {
  setInterval(function () {
    imagem.src = amigos[i];
    i++;
    if (i == 5) {
      i = 0;
    }
  }, 2000);
}

//! ----- Function criaDiv
//Função que cria as divs conforme o array das fotos e já coloca dentro do container
function criaDiv() {
  for (let i = 0; i < fotos.length; i++) {
    let newElement = document.createElement('div');
    newElement.classList.add('photo_card');
    newElement.innerHTML = `<img src="${fotos[i]}" alt="" />`;
    containerFotos.appendChild(newElement);
  }
}

//! ----- Function checkClass
//Função para aidicionar e remover a classe hiden do drop menu
function checkClass() {
  dropMenu.forEach((drop__menu) => {
    if (drop__menu.classList.contains('hidden')) {
      drop__menu.classList.remove('hidden');
    } else {
      drop__menu.classList.add('hidden');
    }
  });
}

//! ----- Function checkUrl
//Detecando a página que o site se encontra e executando rotinas de acordo.
function checkUrl() {
  if (document.URL.includes('index.html')) {
    console.log('estou na página inicial');
    slideFotos();
  } else if (document.URL.includes('galeria.html')) {
    criaDiv();
    let fotosCard = document.querySelectorAll('.photo_card');

    fotosCard.forEach((photo_card, index) => {
      photo_card.addEventListener('click', () => {
        // toggleHiddens();
        removeHidden();
        console.log(index);
        console.log(fotos[index]);
        divModal.innerHTML = `<img src="${fotos[index]}" alt="foto do corte de cabelo de alguns clientes">`;
        controleModal = index;

        //!Event handler botão fecha
        closeBtn.addEventListener('click', () => {
          console.log('fui clicado');
          // toggleHiddens();
          addHidden();
        });

        //!Event handler div (close photos)
        divModal.addEventListener('click', () => {
          console.log('fecha modal executado');
          addHidden();
        });

        //!Event handler botão direito
        direitaBtn.addEventListener('click', () => {
          console.log(controleModal);
          controleModal++;
          console.log(controleModal);
          controleModal === fotos.length
            ? (controleModal = 0)
            : (divModal.innerHTML = `<img src="${fotos[controleModal]}" alt="">`);
        });

        //!Event handler botão esquerdo
        esquerdaBtn.addEventListener('click', () => {
          console.log(controleModal);
          controleModal--;
          console.log(controleModal);
          controleModal === 0
            ? (controleModal = 17)
            : (divModal.innerHTML = `<img src="${fotos[controleModal]}" alt="">`);
        });
      });
    });
  } else if (document.URL.includes('profissionais.html')) {
  }
}

// ----- Função toggle hiddens

function removeHidden() {
  divModal.classList.remove('hidden');
  direitaBtn.classList.remove('hidden');
  esquerdaBtn.classList.remove('hidden');
  closeBtn.classList.remove('hidden');
}

function addHidden() {
  divModal.classList.add('hidden');
  direitaBtn.classList.add('hidden');
  esquerdaBtn.classList.add('hidden');
  closeBtn.classList.add('hidden');
}

//! Event handlers ---------------------------------------------
menu.forEach((menu__container) => {
  menu__container.addEventListener('click', () => {
    console.log('fui clicado');
    checkClass();
    barras.forEach((bar) => {
      bar.classList.toggle('anime');
    });
  });
});

menuLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    console.log(menuLinks[index]);
  });
});

//! Execução de funções ----------------------------------------
checkUrl();

// window.addEventListener('keypress');
//!Event handlers that will close the modal and other things ----------------
