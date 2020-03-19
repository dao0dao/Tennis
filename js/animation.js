const $homeHeader = document.querySelector('#Home h1'); // Nagłówek home

const $galeryHeader = document.querySelectorAll('#TenisCentrum h2 span'); // Nagłówek galerii
const $galeryLine = document.querySelector('#TenisCentrum .lineDecoration'); // Linia dekoracyjna galerii
const $galeryText = document.querySelectorAll('#TenisCentrum .textHeader p'); // Tekst galerii
// $galery = #Galery .gridContainer from lazyLoading.js - zdjęcia

const $personelHeader = document.querySelectorAll('#Personel h2 span'); // Nagłówek kadry
const $personelLine = document.querySelector('#Personel .lineDecoration'); // Linia dekoracyjna
// $personel = #Personel .gridContainer form lazyLoading.js - Trener i opis

const $priceHeader = document.querySelectorAll('#Price h2 span'); // Nagłówek cennika
const $priceLine = document.querySelector('#Price .lineDecoration'); // Linia dekoracyjna
const $priceParent = document.querySelector('#Price .price'); // Blok cennika

const $contactlHeader = document.querySelectorAll('#Contact h2 span'); //Nagłówek kontaktu
const $contactlLine = document.querySelector('#Contact .lineDecoration'); //Linia dekoracyjna
const $contactParent = document.querySelector('#Contact .contactItem'); // Blok kontaktu

$homeHeader.classList.add('animationHomeHeader');

const fShowGaleryHeader = () => {
    if (scrollY + window.innerHeight > $galeryHeader[0].offsetParent.offsetTop) {
        $galeryLine.classList.add('lineCenter');
        for (const letter of $galeryHeader) {
            letter.classList.add('animationHeaderLeft');
            $galeryHeader[0].dataset.animated = "true";
        };
        for (const element of $galeryText){
            element.classList.add('opacity');
        };
        $galery.classList.add('opacity');
        
        return $galeryHeader[0].dataset.animated;
    };
};

const fShowPersonelHeader = () => {
    if (scrollY + window.innerHeight > $personelHeader[0].offsetParent.offsetTop) {
        $personelLine.classList.add('lineCenter');
        for (const letter of $personelHeader) {
            letter.classList.add('animationHeaderRight');
            $personelHeader[0].dataset.animated = "true";
        };
        $personel.classList.add('opacity');
        return $personelHeader[0].dataset.animated;
    };
};

const fShowPriceHeader = () => {
    if (scrollY + window.innerHeight > $priceHeader[0].offsetParent.offsetTop) {
        $priceLine.classList.add('lineCenter');
        for (const letter of $priceHeader) {
            letter.classList.add('animationHeaderLeft');
            $priceHeader[0].dataset.animated = "true";
        };
        $priceParent.classList.add('opacity');
        return $priceHeader[0].dataset.animated;
    };
};

const fShowContactHeader = () => {
    if (scrollY + window.innerHeight > $contactlHeader[0].offsetParent.offsetTop) {
        $contactlLine.classList.add('lineCenter');
        for (const letter of $contactlHeader) {
            letter.classList.add('animationHeaderRight');
            $contactlHeader[0].dataset.animated = "true";
        };
        $contactParent.classList.add('opacity');
        return $contactlHeader[0].dataset.animated;
    };
};

fShowGaleryHeader();
fShowPersonelHeader();
fShowPriceHeader();
fShowContactHeader();

const $arrAnimation = [fShowGaleryHeader, fShowPersonelHeader, fShowPriceHeader, fShowContactHeader];
let $animated = document.querySelectorAll('.animated');
let $checkedAnimated;


window.addEventListener('scroll', () => {
    for (let i = 0; i < $arrAnimation.length; i++) {
        $arrAnimation[i]();
    };
});