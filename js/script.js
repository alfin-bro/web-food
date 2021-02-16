const navbar = document.querySelector('.navs');
const toggleMenu = document.querySelector('.toggle-menu input');
const navigasi = document.querySelectorAll('.navbar');
const backToTop = document.querySelector('.back-to-top');


window.addEventListener('scroll', function () {
    backToTop.classList.toggle('sticky', window.scrollY > 0);
})
backToTop.addEventListener('click', function () {
    backToTop.setAttribute('href', '#home')
});


navigasi.forEach(function (hilang) {
    hilang.addEventListener('click', function () {
        navigasi.classList.toggle('slide')
    })
});


toggleMenu.addEventListener('click', function () {
    navbar.classList.toggle('slide')
});



