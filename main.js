//MENU DESPLEGABLE PARA TODO

const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
   menu.classList.toggle('active');
   
  
  

const rutaActual = e.target.getAttribute('src');

  if(rutaActual == 'img/cruzNegra.png'){
    e.target.setAttribute('src', 'img/menuhambur.png');
    
    
    
  }else{
    e.target.setAttribute('src', 'img/cruzNegra.png');
    
  }
});





//modal enduido

const cerrar = document.querySelectorAll('.cerrar')[0];
const abrir = document.querySelectorAll('.producto')[0];
const modal = document.querySelectorAll('.modal')[0];
const modalCont = document.querySelectorAll('.modal-container')[0];



abrir.addEventListener('click', function(e){
  e.preventDefault();
  modalCont.style.opacity = "1";
  modalCont.style.visibility = "visible";
  modalCont.style.transition = "0.5s"
  modal.classList.toggle("modal-cerrar");
});

cerrar.addEventListener('click', function(){
  modal.classList.toggle("modal-cerrar");
 
  setTimeout(function(){
    modalCont.style.opacity = "0";
    modalCont.style.visibility = "hidden";
  }, 100)
});

window.addEventListener('click', function(e){
    if (e.target == modalCont){
      modal.classList.toggle("modal-cerrar");

      setTimeout(function(){
        modalCont.style.opacity = "0";
        modalCont.style.visibility = "hidden";
      }, 100)
    }
})


//modal latex

const cerrarDos = document.querySelectorAll('.cerrar-dos')[0];
const abrirDos = document.querySelectorAll('.latex')[0];
const modalDos = document.querySelectorAll('.segundo-modal')[0];
const modalContDos = document.querySelectorAll('.segundo-modal-container')[0];

abrirDos.addEventListener('click', function(e){
  e.preventDefault();
  modalContDos.style.opacity = "1";
  modalContDos.style.visibility = "visible";
  modalContDos.style.transition = "0.5s"
});

cerrarDos.addEventListener('click', function(){
  modalDos.classList.toggle("segundo-modal-cerrar");

  setTimeout(function(){
    modalContDos.style.opacity = "0";
    modalContDos.style.visibility = "hidden";
  }, 100)
});

window.addEventListener('click', function(e){
  if (e.target == modalContDos){
    modalDos.classList.toggle("segundo-modal-cerrar");

    setTimeout(function(){
      modalContDos.style.opacity = "0";
      modalContDos.style.visibility = "hidden";
    }, 100)

  }
})


//modal fijador

const cerrarTres = document.querySelectorAll('.cerrar-tres')[0];
const abrirTres = document.querySelectorAll('.fijador')[0];
const modalTres = document.querySelectorAll('.tercer-modal')[0];
const modalContTres = document.querySelectorAll('.tercer-modal-container')[0];

abrirTres.addEventListener('click', function(e){
  e.preventDefault();
  modalContTres.style.opacity = "1";
  modalContTres.style.visibility = "visible";
  modalContTres.style.transition = "0.5s"
});

cerrarTres.addEventListener('click', function(){
  modalTres.classList.toggle("tercer-modal-cerrar");

  setTimeout(function(){
    modalContTres.style.opacity = "0";
    modalContTres.style.visibility = "hidden";
  }, 100)
});

window.addEventListener('click', function(e){
  if (e.target == modalContTres){
    modalTres.classList.toggle("tercer-modal-cerrar");

    setTimeout(function(){
      modalContTres.style.opacity = "0";
      modalContTres.style.visibility = "hidden";
    }, 100)

  }
});


//modal latex exterior

const cerrarCuatro = document.querySelectorAll('.cerrar-cuatro')[0];
const abrirCuatro = document.querySelectorAll('.latex-exterior')[0];
const modalCuatro = document.querySelectorAll('.cuarto-modal')[0];
const modalContCuatro = document.querySelectorAll('.cuarto-modal-container')[0];

abrirCuatro.addEventListener('click', function(e){
  e.preventDefault();
  modalContCuatro.style.opacity = "1";
  modalContCuatro.style.visibility = "visible";
  modalContCuatro.style.transition = "0.5s"
});

cerrarCuatro.addEventListener('click', function(){
  modalCuatro.classList.toggle("cuarto-modal-cerrar");

  setTimeout(function(){
    modalContCuatro.style.opacity = "0";
    modalContCuatro.style.visibility = "hidden";
  }, 100)
});

window.addEventListener('click', function(e){
  if (e.target == modalContCuatro){
    modalCuatro.classList.toggle("cuarto-modal-cerrar");

    setTimeout(function(){
      modalContCuatro.style.opacity = "0";
      modalContCuatro.style.visibility = "hidden";
    }, 100)
  }
});


//modal enduido exterior

const cerrarCinco = document.querySelectorAll(".cerrar-cinco")[0];
const abrirCinco = document.querySelectorAll('.enduido-exterior')[0];
const modalCinco = document.querySelectorAll('.quinto-modal')[0];
const modalContCinco = document.querySelectorAll('.quinto-modal-container')[0];

abrirCinco.addEventListener('click', function(e){
  e.preventDefault()
    modalContCinco.style.opacity = "1"
    modalContCinco.style.visibility = "visible";
    modalContCinco.style.transition = "0.5s"
});

cerrarCinco.addEventListener('click', function(){
  modalCinco.classList.toggle("quinto-modal-cerrar");

  setTimeout(function(){
    modalContCinco.style.opacity = "0";
    modalContCinco.style.visibility = "hidden";
  }, 100)
});

window.addEventListener('click', function(e){
  if (e.target == modalContCinco){
    modalCinco.classList.toggle("quinto-modal-cerrar");

    setTimeout(function(){
      modalContCinco.style.opacity = "0";
      modalContCinco.style.visibility = "hidden";
    }, 100)
  }
});




