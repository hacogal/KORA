'use strict';

/* Adding event on element */
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    }else{
        elem.addEventListener(type, callback);
    }
}

/* Navbar Toggle */
const navbar = document.querySelector("[data-navbar]"); 
const navTogglers = document.querySelectorAll("[data-nav-toggler]"); 
const navLinks = document.querySelectorAll("[data-nav-link]"); 
const overlay = document.querySelector("[data-overlay]"); 

const toggleNavbar = function () { 
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { 
    navbar.classList.remove("active"); 
    overlay.classList.remove("active");  
}

addEventOnElem(navLinks, "click", closeNavbar);

/* Header Active */
const header = document.querySelector("[data-header]");

const backTopBtn = document.querySelector("[data-back-top-btn]"); 

window.addEventListener("scroll", function () { 
    if (window.scrollY >= 100) { 
        header.classList.add("active");
        backTopBtn.classList.add("active"); 
    } else { 
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

const sections = document.querySelectorAll("[data-section]");

const reveal = function () { 
    for (let i = 0; i < sections.length; i++) {
        
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active"); 
        } 
    } 
} 

reveal(); 
addEventOnElem(window, "scroll", reveal);

/* JavaScript for Form Validation */

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    this.reset();
});


document.addEventListener("DOMContentLoaded", function () {
    const serviceLinks = document.querySelectorAll(".service-link");
    const messageField = document.getElementById("message");

    // When a product title is clicked, update the message field
    serviceLinks.forEach(link => {
        link.addEventListener("click", function () {
            const serviceName = this.getAttribute("data-service");
            messageField.value = `I would like more information about: ${serviceName}`;
        });
    });

    // Check if there's a service in the URL and pre-fill the message
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get("service");
    if (selectedService) {
        messageField.value = `I would like more information about: ${selectedService}`;
    }
});
