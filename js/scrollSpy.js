let $section; // sekcje
let $mobileMenu; // Elementy menu wersja na komórkę
let $tabletMenu; // Elementy menu wersja od 576px

document.addEventListener('DOMContentLoaded', () => {

    $section = document.querySelectorAll('section');
    $mobileMenu = document.querySelectorAll('#Mobile li');
    $tabletMenu = document.querySelectorAll('#Tablet li');

    const scrollSpy = () => {
        //mobile
        for (i = 0; i < $mobileMenu.length; i++) {
            if (window.scrollY + 100 >= $section[i].offsetTop && window.scrollY + 100 < $section[i].offsetTop + $section[i].clientHeight) {
                $mobileMenu[i].classList.add('Spyscroll');
            } else {
                $mobileMenu[i].classList.remove('Spyscroll');
            };

            //tablet+
        };
        for (i = 0; i < $tabletMenu.length; i++) {
            if (window.scrollY + 10 >= $section[i].offsetTop && window.scrollY < $section[i].offsetTop + $section[i].clientHeight - 150) {
                $tabletMenu[i].classList.add('Spyscroll');
            } else {
                $tabletMenu[i].classList.remove('Spyscroll');
            };

        };
    };

    window.addEventListener('scroll', () => {
        scrollSpy();
    });
})