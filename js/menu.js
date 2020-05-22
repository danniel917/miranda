var btn = document.getElementById('menu-btn');
var $menu = document.getElementById('menu');

const active_menu = () => $menu.classList.toggle('active');

btn.addEventListener('click', active_menu);

/****ACTIVE MENU */
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.menu-desktop ul li a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = 'menu-clicked'
    }
}