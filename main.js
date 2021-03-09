let button = document.getElementById('menu_hamburguer');
button.addEventListener('click', toggleMenu);
let menu = document.getElementById('menu');
let menuOpen = false;

function toggleMenu(){
    if (!menuOpen){
        button.classList.add('toggle');
        menu.classList.add('open');
        menuOpen = true;
    }
    else{
        button.classList.remove('toggle');
        menu.classList.remove('open');
        menuOpen = false;
    }
}