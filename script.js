
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

    // ටයිප් වෙන වේගය (මිලි තත්පර වලින්)
    let typingSpeed = isDeleting ? 50 : 100; // මකන වේගය 50, ටයිප් වෙන වේගය 100

    // වචනය සම්පූර්ණයෙන්ම ටයිප් කරලා ඉවර නම්
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // ඊළඟට මැකෙන්න කලින් තත්පර 2ක් නවතින්න
        isDeleting = true;
    } 
    // වචනය සම්පූර්ණයෙන්ම මැකිලා ඉවර නම්
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // ඊළඟ වචනයට යන්න
        typingSpeed = 500; // අලුත් වචනය ටයිප් වෙන්න කලින් මිලි තත්පර 500ක් නවතින්න
    }

    // Loop එකක් විදිහට මේ function එක දිගටම දුවන්න
    setTimeout(typeEffect, typingSpeed);
}

// වෙබ් පිටුව Load වෙද්දිම Animation එක පටන් ගන්න
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});



// Mobile Menu Toggle කිරීම
const menuIconBox = document.querySelector('#menu-icon');
const menuIcon = document.querySelector('#menu-icon i');
const navList = document.querySelector('.nav-list');

menuIconBox.addEventListener('click', () => {
    // Menu එක එළියට ගැනීම සහ හැංගීම
    navList.classList.toggle('open');

    // Icon එක (Menu -> Close) වෙනස් කිරීම
    if(navList.classList.contains('open')) {
        menuIcon.classList.replace('ri-menu-line', 'ri-close-line');
    } else {
        menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
    }
});

// Menu එකේ Link එකක් Click කළාම Menu එක ඔටෝ වැසී යාම
const navLinks = document.querySelectorAll('.nav-list-items a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
        menuIcon.classList.replace('ri-close-line', 'ri-menu-line');
    });
});