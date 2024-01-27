const burger = document?.querySelector('[data-burger]')
const nav = document?.querySelector('.nav_main')
const header = document?.header;

burger?.addEventListener('click', () =>{
    header.classList.toggle('stop-scroll')
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
})