let navMenu = document.getElementById('nav-menu');

function toggleNavmenu() {
    // navMenu.classList.remove('-left-54')
    // navMenu.classList.add('left-0')
    if (navMenu.classList.contains('-left-54')) {
        navMenu.classList.replace('-left-54', 'left-0')
    }else{
        navMenu.classList.replace('left-0', '-left-54')
    }
}
