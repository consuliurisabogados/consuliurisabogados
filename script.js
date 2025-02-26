function toggleCollapse(contentId) {
    const content = document.getElementById(contentId); // Get the content element by ID
    const isVisible = content.style.display === 'block'; // Check if the content is currently visible

    // Collapse all content sections
    const allContents = document.querySelectorAll('.content');
    allContents.forEach((item) => {
        item.style.display = 'none'; // Hide each content section
    });

    // If the content was not visible, show it and scroll into view
    if (!isVisible) {
        content.style.display = 'block'; // Show the content
        content.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll into view smoothly
    }
}

function scrollToContactForm() {
    const contactForm = document.querySelector('.contact-form'); // Get the contact form element
    contactForm.scrollIntoView({ behavior: 'smooth' }); // Scroll into view smoothly
}