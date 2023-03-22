let buttonHamburgerMenu = document.querySelector('#menu');
let sidebarMenu = document.querySelector('#sidebar');

buttonHamburgerMenu.onclick = function(){
 sidebarMenu.classList.toggle('active');
}

