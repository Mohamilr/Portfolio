const navBar = document.querySelector('.bar');
const navLinkContainer = document.querySelector('.nav-links');

navBar.addEventListener('click', () => {
    navLinkContainer.classList.toggle('nav-links-toggle');
});