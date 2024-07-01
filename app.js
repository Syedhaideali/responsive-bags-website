let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

// Toggle search box and hide navbar when search icon is clicked
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// Toggle navbar and hide search box when menu icon is clicked
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

// Remove active classes from navbar and search box when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// Toggle header class based on scroll position
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});