const menu = document.querySelector('.menu');
      mainmenu = document.querySelector('.menu-navegar');

menu.addEventListener('click',() => {
    mainmenu.classList.toggle('spread');
    })

window.addEventListener('click', e => {
    if (mainmenu.classList.contains('spread') && e.target != mainmenu && e.target != menu) {
        mainmenu.classList.toggle('spread');
    }})

    
