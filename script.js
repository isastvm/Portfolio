// ==============================
//  CURSOR PERSONALIZADO
// ==============================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor cresce em links e botões
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1.8)';
        follower.style.borderColor = 'var(--rose)';
    });
    el.addEventListener('mouseleave', () => {
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.borderColor = 'var(--rose-light)';
    });
});

// ==============================
//  MENU RESPONSIVO
// ==============================
const menuBtn  = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ==============================
//  REVEAL AO SCROLL
// ==============================
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight  = window.innerHeight;
    const elementVisible = 90;

    reveals.forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - elementVisible) {
            // Delay escalonado por grupo
            const delay = (i % 4) * 80;
            setTimeout(() => el.classList.add('active'), delay);
        }
    });
}

window.addEventListener('scroll', revealOnScroll, { passive: true });
document.addEventListener('DOMContentLoaded', revealOnScroll);

// ==============================
//  HEADER: sombra ao rolar
// ==============================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.style.boxShadow = '0 4px 30px rgba(194, 104, 126, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}, { passive: true });
