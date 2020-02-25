const menuBtn = document.querySelector('.menu-btn');
const menuBtnBurger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav_item')
let showMenu= false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu (){
  if(!showMenu){
    menuBtnBurger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item=>item.classList.add('open'))

    showMenu = true;
  } else {
    menuBtnBurger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item=>item.classList.remove('open'))

    showMenu = false;
  }
}

