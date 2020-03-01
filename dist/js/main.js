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

let nameIntro = document.getElementById('name-intro')
let nameIntroText = 'Hi, my name is';
let speed = 300;
let i = 0;
function displayNameIntro (){
  if (i < nameIntroText.length) {
    nameIntro.innerHTML+= nameIntroText.charAt(i);
    i++;
    setTimeout(displayNameIntro, speed)
  }

  if(i >= nameIntroText.length){
    document.getElementById('my-name').style.display='block'
    //document.getElementById('tech-role').style.display='block'
  }
}
displayNameIntro()