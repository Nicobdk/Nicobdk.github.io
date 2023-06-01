const menuHamburger = document.querySelector('.img_burger');
const navMenu = document.querySelector('.nav_menu');
const texts = document.querySelector('.bienvenue').children, 
    textLen = texts.length;
let index = 0;
const textInTimer = 3000,
    textOutTimer = 2800;

const sectionHome = document.querySelector('.section_home');


menuHamburger.addEventListener('click',()=>{
    navMenu.classList.toggle('mobile_menu');
    var img = menuHamburger.getAttribute('src');
    if (img == 'menuburger.png'){
        img.src == 'xmark.png';
    } else {
        img.src = 'menuburger.png';
        img.setAttribute('src', img);
    }
})

function animateText(){
    for(let i = 0;i< textLen; i++){
        texts[i].classList.remove('text-in', 'text-out');
    }
    texts[index].classList.add('text-in');

    setTimeout(function(){
        texts[index].classList.add('text-out');
    }, textOutTimer)

    if(index == textLen - 1){
        index = 0;
    } else index++
    setTimeout(animateText, 3000);
}

window.addEventListener('scroll', function() {
var navbar = document.querySelector('.navbar');
navbar.classList.toggle('scrolled', window.scrollY > 750);})

window.onload = animateText;

