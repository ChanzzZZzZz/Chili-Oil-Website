const toggler = document.getElementById('menu-toggler');      // top navbar toggler
const sideToggler = document.getElementById('menu-toggler-left'); // inside X button
const sideSection = document.getElementById('side-section');

function toggleSide() {
    sideSection.classList.toggle('active');
}

toggler.addEventListener('click', toggleSide);
sideToggler.addEventListener('click', toggleSide);
