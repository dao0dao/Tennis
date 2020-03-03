let $section; // sekcje
let $liElement; // Elementy menu

document.addEventListener('DOMContentLoaded', () => {

    $section = document.querySelectorAll('section');
    $liElement = document.querySelectorAll('li');

    const scrollSpy = () => {
        for (i = 0; i < $liElement.length; i++) {
            if (window.scrollY + 50 >= $section[i].offsetTop - 100 && window.scrollY + 50 < $section[i].offsetTop + $section[i].clientHeight - 100) {
                $liElement[i].classList.add('Spyscroll');
            } else {
                $liElement[i].classList.remove('Spyscroll');
            };

        };
    };

    window.addEventListener('scroll', () => {
        scrollSpy();
    });
})