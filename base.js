// Funcion triggered by the responsive menu icon that includes the css selector 
// that makes menu items to appear vertically
function responsiveMenu() {
    var x = document.getElementById("menu");
        if (x.className === "menu") {
            x.className += " responsive";
        } else {
            x.className = "menu";
        }
}