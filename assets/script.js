document.addEventListener("DOMContentLoaded", () => {
    
    // 1. --- Mobile Menu Toggle Logic ---
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            
            // Change icon based on menu state
            if (navLinks.classList.contains("active")) {
                menuBtn.innerHTML = "✖"; // Close icon
            } else {
                menuBtn.innerHTML = "☰"; // Hamburger icon
            }
        });
    }

    // 2. --- Scroll Reveal Animation Logic ---
    const elementsToAnimate = document.querySelectorAll('section, .feature-card, .section-card, .image-card, .step-card, .contact-info-box, .contact-form-box');
    
    // Add the starting 'reveal' class to all of them
    elementsToAnimate.forEach(el => el.classList.add('reveal'));

    // Create the observer that watches when the user scrolls
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible on the screen
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Trigger the animation
                observer.unobserve(entry.target); // Stop watching it so it only animates once
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the element is visible on screen
    });

    // Start observing each element
    elementsToAnimate.forEach(el => observer.observe(el));

}); // End of DOMContentLoaded

// 3. --- Mock function for downloading the admission form ---
// (This stays outside the DOMContentLoaded block so the HTML buttons can find it)
function downloadForm() {
    alert("Thank you for your interest! The admission form PDF will start downloading shortly.");
}