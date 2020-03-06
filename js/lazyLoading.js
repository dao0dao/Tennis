let $galery; // Sekcja galeria
let $galeryElemnts; //Tablica galerii
let $personel; // Sekcja Kadra
let $personelPhoto; // Zdjęcie kadry
let $personelText; // Tło kadry
let $pirce; // Sekcja cennik
let $priceImage; // Tło cennika
let $contact; // Kontakt
let $contactMap; // Mapa googla

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

    $contact = document.querySelector('#Contact');
    $contactMap = document.querySelector('#Contact iframe');
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
    } else if (window.scrollY + window.innerHeight > $galery.offsetTop && window.innerWidth >= 992) {
        for (const element of $galeryElemnts) {
            element.style.backgroundImage = `url(${element.dataset.lazy_galery_big_src})`
        }
    };
    if (window.scrollY + window.innerHeight > $personel.offsetTop && window.innerWidth < 992) {
        $personelPhoto.src = $personelPhoto.dataset.lazy_photo
        $personelText.style.backgroundImage = `url(${$personelText.dataset.lazy_photo_small_background})`
    } else if (window.scrollY + window.innerHeight > $personel.offsetTop && window.innerWidth >= 992) {
        $personelPhoto.src = $personelPhoto.dataset.lazy_photo
        $personelText.style.backgroundImage = `url(${$personelText.dataset.lazy_photo_big_background})`

    };
    if (window.scrollY + window.innerHeight > $pirce.offsetTop && window.innerWidth < 992) {
        $priceImage.style.backgroundImage = `url(${$priceImage.dataset.lazy_small_price_background})`
    } else if (window.scrollY + window.innerHeight > $pirce.offsetTop && window.innerWidth >= 992) {
        $priceImage.style.backgroundImage = `url(${$priceImage.dataset.lazy_big_price_background})`
    };
    if (window.scrollY + window.innerHeight > $contact.offsetTop && $contactMap.dataset.src_true == 'false') {
        $contactMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199.5624658016432!2d18.682028658276362!3d53.0360919949788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDAyJzA5LjkiTiAxOMKwNDAnNTkuMiJF!5e0!3m2!1spl!2spl!4v1582222044744!5m2!1spl!2spl"
        $contactMap.dataset.src_true = 'true'
    };
}








document.addEventListener('DOMContentLoaded', $main());