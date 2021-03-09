let button = document.getElementById('menu_hamburguer');
let menu = document.getElementById('menu');
button.addEventListener('click', toggle);
let openMnu = false;

function toggle(){
    if (!openMnu){
     menu.classList.add('open');
     button.classList.add('toggle');
     openMnu = true;     
    }
    else{
        menu.classList.remove('open');
        button.classList.remove('toggle');
        openMnu = false; 
    }
}