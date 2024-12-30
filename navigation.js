document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mainnav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        mainnav.classList.toggle('active');
    });
});
