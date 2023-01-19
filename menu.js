'use strict'
const btnHamburguer = document.getElementById('btn__hamburguer');
function hamburguer(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
btnHamburguer.addEventListener('click', hamburguer);
btnHamburguer.addEventListener('touchstart', hamburguer);

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})