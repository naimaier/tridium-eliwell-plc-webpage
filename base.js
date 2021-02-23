// Funcion triggered by the responsive menu icon that includes the css selector 
// that makes menu items to appear vertically
function responsiveMenu() {
    var menu = document.querySelector('[data-menu]')

    menu.classList.toggle('responsive')
}