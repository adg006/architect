window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 4000);
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('change');
});