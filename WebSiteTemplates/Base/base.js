// Funcion triggered by the responsive menu icon that includes the css selector 
// that makes menu items to appear vertically
function responsiveMenu() {
    const menu = document.querySelector('[data-menu]')

    menu.classList.toggle('responsive')

    const menuIcon = document.querySelector('[data-menu-icon]')
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-times')
}

AddPreCacheImage('left-big-logo', 'CLIENTE.PNG')
AddPreCacheImage('right-big-logo', 'TRIDIUMBIG.PNG')

AddPreCacheImage('left-small-logo', 'CLIENTE.PNG')
AddPreCacheImage('right-small-logo', 'TRIDIUMSMALL.PNG')