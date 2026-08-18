function loadCalendly() {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Remove the intersection observer once loaded
    observer.disconnect();
}

// Function to check if element is in viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadCalendly();
        }
    });
}

// Create the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '50px', // Start loading when widget is 50px from viewport
    threshold: 0
});

// Start observing the Calendly container
document.addEventListener('DOMContentLoaded', function() {
    const calendlyContainer = document.getElementById('calendly-container');
    if (calendlyContainer) {
        observer.observe(calendlyContainer);
    }
});