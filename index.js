const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');

let scrollX = 0;
let scrollY = 0;

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
    navLink.forEach(link => {
        link.classList.toggle('nav-link-open');
    })

    if (document.body.classList.contains('body-sticky')) {
        document.body.classList.remove("body-sticky");
        window.scrollTo(scrollX, scrollY);
    } else {
        document.body.classList.add("body-sticky");
        scrollX = window.scrollX;
        scrollY = window.scrollY;
        window.scrollTo(0, 0);
    }
});