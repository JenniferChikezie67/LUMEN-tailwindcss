// Mobile Navigation Toggle
let navMenu = document.getElementById('nav-menu');

function toggleNavmenu() {
    // navMenu.classList.remove('-left-54')
    // navMenu.classList.add('left-0')
    if (navMenu.classList.contains('-left-54')) {
        navMenu.classList.replace('-left-54', 'left-0')
    } else {
        navMenu.classList.replace('left-0', '-left-54')
    }
}

// Dark Mode Toggle
let toggleMode = (mode) => {
    let htmlEl = document.documentElement;
    // htmlEl.classList.toggle('dark') // toggle the dark class on the root HTML element

    if (mode == 'light') {
        htmlEl.classList.remove('dark');
        window.localStorage.setItem('theme', 'light');
    }

    if (mode == 'dark') {
        htmlEl.classList.add('dark')
        window.localStorage.setItem('theme', 'dark');
    }

    if (mode == 'system') {
        window.localStorage.removeItem('theme');
        let isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isSystemDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

}
