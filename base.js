// Funcion triggered by the responsive menu icon that includes the css selector 
// that makes menu items to appear vertically
function responsiveMenu() {
    const menu = document.querySelector('[data-menu]')

    menu.classList.toggle('responsive')

    const menuIcon = document.querySelector('[data-menu-icon]')
    menuIcon.classList.toggle('fa-bars')
    menuIcon.classList.toggle('fa-times')
}

AddPreCacheImage('left-big-logo', 'EUBIG.PNG')
AddPreCacheImage('center-big-logo', 'VIBIG.PNG')
AddPreCacheImage('right-big-logo', 'TRIBIG.PNG')
AddPreCacheImage('left-small-logo', 'EUSMALL.PNG')
AddPreCacheImage('center-small-logo', 'VISMALL.PNG')
AddPreCacheImage('right-small-logo', 'TRISMALL.PNG')