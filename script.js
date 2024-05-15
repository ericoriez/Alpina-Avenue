
// ********************************************************************
// JE SELECTIONNE ET JE STOCK
// ********************************************************************

// la DIV container-dark-mode
const containerDarkMode = document.querySelector('.container-dark-mode');
// console.log(containerDarkMode);

// le main containerMain
const mainBody = document.querySelector('.containerMain');

// la DIV switch
const switchBox = document.querySelector('.switch');

// la DIV btn-dark-mode (le cercle)
const btnDarkMode = document.querySelector('.btn-dark-mode');

// l'icône
const icone = document.querySelector('.fas.fa-moon');

// le titre
const titre = document.querySelector('.titre-dark-mode');

// h1 de la page index
const colorWhite = document.querySelectorAll('.color-h1');

// la navbar
const backgroundColorNav = document.querySelector('.bckndhead');
console.log(backgroundColorNav);

// les sous menu de la navbar
const backgroundColorSousNav = document.querySelectorAll('.ss-menu-nav');
console.log(backgroundColorSousNav);

// le footer
const backgroundColorFooter = document.querySelector('footer');

// *******************************************************************
// JE SOUMETS LA DIV SWITCH A UNE ACTION AU CLIC
// *******************************************************************

switchBox.addEventListener('click', function(){
    // teste de la function au click affiche div cliquée dans la console
    console.log('div cliquée');

    // je déplace le cercle et modifie sa couleur de fond avec les nouvelles proprietés de la class btn-dark-mode-change
    btnDarkMode.classList.toggle('btn-dark-mode-change');
    // je déplace l'icône
    icone.classList.toggle('i-change');
    // je change l'icône
    icone.classList.toggle('fa-sun');
    // la DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change');
    // la DIV mainBody change de couleur de fond
    mainBody.classList.toggle('containerDarkModeMain-change');
    // j'applique la couleur a tous les elements qui on la class color-h1
    colorWhite.forEach(x => x.classList.toggle('color-white'));

    // Change le background en noir de la navbar et du footer
    backgroundColorNav.classList.toggle('containerDarkMode-change');
    backgroundColorFooter.classList.toggle('containerDarkMode-change');
    backgroundColorSousNav.forEach(b => b.classList.toggle('containerDarkMode-change'));

    // je modifie le texte du titre si le text et égale a 'DARK MODE' au clique je modifie le text en 'LIGHT MODE' sinon afficher le text 'DARK MODE'   
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE";
    } else {
        titre.innerText = "DARK MODE";
    };
});
