// Get the hamburger menu, navbar, and close button elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');
const closeMenuBtn = document.getElementById('close-menu');

// Toggle the visibility of the navbar when the hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('open'); // Toggle the 'open' class
});

// Close the navbar when the close button is clicked
closeMenuBtn.addEventListener('click', () => {
    navbar.classList.remove('open'); // Remove the 'open' class
});


function toggleReturnFields() {
    const tripType = document.getElementById('tripType').value;
    const returnFields = document.getElementById('returnFields');

    if (tripType === 'two-way') {
        returnFields.style.display = 'block';
        document.getElementById('returnPickupDate').required = true;
        document.getElementById('returnPickupTime').required = true;
        document.getElementById('returnPickupAddress').required = true;
        document.getElementById('returnDropoffAddress').required = true;
        document.getElementById('returnPassengers').required = true;
    } else {
        returnFields.style.display = 'none';
        document.getElementById('returnPickupDate').required = false;
        document.getElementById('returnPickupTime').required = false;
        document.getElementById('returnPickupAddress').required = false;
        document.getElementById('returnDropoffAddress').required = false;
        document.getElementById('returnPassengers').required = false;
    }
}


// Main image slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for main image slideshow
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls for main image slideshow
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Auto-sliding for main image slideshow
let autoSlideIndex = 0;
function autoSlide() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    autoSlideIndex++;
    if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }

    slides[autoSlideIndex - 1].style.display = "block";
    dots[autoSlideIndex - 1].className += " active";

    setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

autoSlide(); // Start auto-sliding

// Testimonial slider functionality
let testimonialIndex = 1;
showTestimonials(testimonialIndex);

// Next/previous controls for testimonials
function changeTestimonial(n) {
    showTestimonials(testimonialIndex += n);
}

// Dot controls for testimonials
function currentTestimonial(n) {
    showTestimonials(testimonialIndex = n);
}

function showTestimonials(n) {
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("testimonial-dot");
  
    if (n > slides.length) { testimonialIndex = 1 }  // Loop back to the first slide
    if (n < 1) { testimonialIndex = slides.length } // Loop back to the last slide
  
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
  
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
    }
  
    slides[testimonialIndex - 1].style.display = "block"; // Show the current slide
    dots[testimonialIndex - 1].className += " active";    // Add active class to the current dot
}
