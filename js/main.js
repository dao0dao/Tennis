let $navMenuBtn; // Przycisk menu
let $navList; // Lista menu
let $lineTop; // Górna linia menu
let $lineMid; // Środkowa linia menu
let $lineBot; // Dolna linia menu
let $aboutMe; // Tekst o trenerze
let $aboutBtnTop; // Przycisk do góry w sekcji o mnie
let $aboutBtnBot; // Przycisk na dół w sekcji o mnie
let $priceElement; // Przewijany element w sekcji Cena-regulamin - TABLICA
let $btnPrice; // Przycisk cena
let $btnRegulaments; // Przycisk regulamin

const $main = () => {
    $prepairDomElemnts();
    $prepairDomEvents();
};
//Elements
const $prepairDomElemnts = () => {
    $navMenuBtn = document.querySelector('.navMenuBtn');
    $navList = document.querySelector('.navList');
    $lineTop = document.querySelector('.lineTop');
    $lineMid = document.querySelector('.lineMid');
    $lineBot = document.querySelector('.lineBot');
    $aboutMe = document.querySelector('.aboutTextBackground');
    $aboutBtnTop = document.querySelector('.farTop');
    $aboutBtnBot = document.querySelector('.farBot');
    $priceElement = document.querySelectorAll('.priceElement');
    $btnPrice = document.querySelector('.btnPrice');
    $btnRegulaments = document.querySelector('.btnRegulaments');

};
//Events
const $prepairDomEvents = () => {
    $navMenuBtn.addEventListener('click', () => {
        $showMenu();
        $animateMenu();
    });
    $navList.addEventListener('click', () => {
        $showMenu();
        $animateMenu();
    });
    $aboutMe.addEventListener('scroll', () => {
        $aboutBtnShowHide()
    });
    $aboutBtnTop.addEventListener('click', () => {
        $aboutScrollUp();
    });
    $aboutBtnBot.addEventListener('click', () => {
        $aboutScrollDown();
        
    });
    $btnRegulaments.addEventListener('click', () => {
        $moveUpPrice();
        regulamentsActiveOnly()
       
    });
    $btnPrice.addEventListener('click', () => {
        $moveDownPrice();
       
    });
};
//Functions
const $showMenu = () => {
    $navList.classList.toggle('navListActive');
};

const $hideMenu = () => {
    $navList.classList.remove('navListActive');
};

const $animateMenu = () => {
    $lineTop.classList.toggle('activeBtnTop');
    $lineMid.classList.toggle('activeBtnMid');
    $lineBot.classList.toggle('activeBtnBot');
};

const $aboutScrollUp = () => {
    $aboutMe.scrollTo(0, $aboutMe.scrollTop - 100);
};
const $aboutScrollDown = () => {
    $aboutMe.scrollTo(0, $aboutMe.scrollTop + 100);
};
const $aboutBtnShowHide = () => {
    switch ($aboutMe.scrollTop) {
        case 0:
            $aboutBtnTop.style.visibility = 'hidden';
            $aboutBtnBot.style.visibility = 'visible';
            break;
        case $aboutMe.scrollTopMax:
            $aboutBtnTop.style.visibility = 'visible';
            $aboutBtnBot.style.visibility = 'hidden';
            break;
        default:
            $aboutBtnTop.style.visibility = 'visible';
            $aboutBtnBot.style.visibility = 'visible';
    };
};
const $moveUpPrice = () => {
    for (element of $priceElement) {
        element.classList.add('priceElementActive')
    };
};
const $moveDownPrice = () => {
    for (element of $priceElement) {
        element.classList.remove('priceElementActive')
    };
};

document.addEventListener('DOMContentLoaded', $main());