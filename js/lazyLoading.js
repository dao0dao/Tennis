let $galery; // Sekcja galeria
let $galeryElemnts; //Tablica galerii
let $personel; // Sekcja Kadra
let $personelPhoto; // Zdjęcie kadry
let $personelText; // Tło kadry
let $pirce; // Sekcja cennik
let $priceImage; // Tło cennika

const $main = () => {
    $prepairDomElemnts();
    $prepairDomEvents();
};

//Elements
const $prepairDomElemnts = () => {
    $galeryElemnts = document.querySelectorAll('.lazyGalerty');
    $galery = document.querySelector('#TenisCentrum .gridContainer');

    $personel = document.querySelector('#Personel .gridContainer');
    $personelPhoto = document.querySelector('#Personel img');
    $personelText = document.querySelector('#Personel .aboutTextBackground');

    $pirce = document.querySelector('#Price');
    $priceImage = document.querySelector('#Price .priceImage');
};
//Events
const $prepairDomEvents = () => {
    showGalery();
    window.addEventListener('scroll', showGalery);
}
// Functions

const showGalery = function () {
    if (window.scrollY + window.innerHeight > $galery.offsetTop && window.innerWidth < 992) {
        for (const element of $galeryElemnts) {
            element.style.backgroundImage = `url(${element.dataset.lazy_galery_smal_src})`;
        }
    } else {
        for (const element of $galeryElemnts) {
            element.style.backgroundImage = `url(${element.dataset.lazy_galery_big_src})`
        }
    };
    if (window.scrollY + window.innerHeight > $personel.offsetTop && window.innerWidth < 992) {
        $personelPhoto.src = $personelPhoto.dataset.lazy_photo
        $personelText.style.backgroundImage = `url(${$personelText.dataset.lazy_photo_small_background})`
    } else {
        $personelPhoto.src = $personelPhoto.dataset.lazy_photo
        $personelText.style.backgroundImage = `url(${$personelText.dataset.lazy_photo_big_background})`

    };
    if (window.scrollY + window.innerHeight > $pirce.offsetTop && window.innerWidth < 992) {
        $priceImage.style.backgroundImage = `url(${$priceImage.dataset.lazy_small_price_background})`
    } else {
        $priceImage.style.backgroundImage = `url(${$priceImage.dataset.lazy_big_price_background})`
    };
}








document.addEventListener('DOMContentLoaded', $main());