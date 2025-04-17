/**
 * Main JavaScript functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.querySelector('.footer-logo p');
  if (copyrightElement) {
    copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2025', currentYear);
  }
  
  // Handle mobile navigation toggle if it exists
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      
      // Update aria-expanded attribute for accessibility
      const isExpanded = mainNav.classList.contains('active');
      mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
  
  // Custom functionality for the ClickUp form iframe
  const clickUpIframe = document.querySelector('.clickup-embed');
  if (clickUpIframe) {
    // Listen for messages from the iframe
    window.addEventListener('message', (event) => {
      // Check if the message is from the ClickUp form
      if (event.data && event.data.type === 'form_submit_success') {
        // Form was successfully submitted
        console.log('Form submitted successfully!');
        
        // You could add a success message or redirect here
        // For example:
        // showSuccessMessage('Your ticket has been submitted successfully!');
      }
    });
  }
  
  // Function to show a success message
  function showSuccessMessage(message) {
    // Create success message element
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = message;
    
    // Add success message to the page
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
      formContainer.appendChild(successElement);
      
      // Remove message after 5 seconds
      setTimeout(() => {
        successElement.remove();
      }, 5000);
    }
  }
  
  // Initialize any tooltips or popovers if needed
  initializeTooltips();
});

/**
 * Initialize tooltips for elements with data-tooltip attribute
 */
function initializeTooltips() {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      const tooltipText = element.getAttribute('data-tooltip');
      
      // Create tooltip element
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = tooltipText;
      
      // Position the tooltip
      document.body.appendChild(tooltip);
      
      const elementRect = element.getBoundingClientRect();
      tooltip.style.top = `${elementRect.top - tooltip.offsetHeight - 10}px`;
      tooltip.style.left = `${elementRect.left + (elementRect.width / 2) - (tooltip.offsetWidth / 2)}px`;
      tooltip.style.opacity = '1';
      
      // Store tooltip reference for removal
      element._tooltip = tooltip;
    });
    
    element.addEventListener('mouseleave', () => {
      if (element._tooltip) {
        element._tooltip.remove();
        element._tooltip = null;
      }
    });
  });
}