


//------------------------------------Home Typing Effect----------------------------------------//

const words = ["WP Developer", "Designer", "Innovator", "Investor"];

let wordIndex = 0; // Live word
let charIndex = 0; // Typing word
let isDeleting = false; // word delete or no

const typingText = document.querySelector(".typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    // text change accourding to delete or not
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }


    let typingSpeed = isDeleting ? 50 : 100; 


    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; 
        isDeleting = true;
    } 

    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        typingSpeed = 500; 
    }


    setTimeout(typeEffect, typingSpeed);
}


document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});



//------------------------------------Menu Icon Toggle----------------------------------------//
const menuIconBox = document.querySelector('#menu-icon');
const menuIcon = document.querySelector('#menu-icon i');
const navList = document.querySelector('.nav-list');

menuIconBox.addEventListener('click', () => {

    navList.classList.toggle('open');


    if(navList.classList.contains('open')) {
        menuIcon.classList.replace('ri-menu-line', 'ri-close-line');
    } else {
        menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
    }
});


const navLinks = document.querySelectorAll('.nav-list-items a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
        menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
    });
});


const currentLocation = window.location.href;
const menuItems = document.querySelectorAll('.nav-list-items a');

menuItems.forEach(link => {

    if (link.href === currentLocation) {
        link.classList.add('active');
    }
});