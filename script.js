function ToggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    /* these lines target an element from the page */
    menu.classList.toggle("open")
    icon.classList.toggle("open")
    /* when we click it, it toggles the OPEN class
     if its open it has styling from css */



}