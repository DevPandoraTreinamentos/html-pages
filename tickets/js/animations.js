/**
 * Animations for the page
 */
document.addEventListener('DOMContentLoaded', () => {
  // Feature cards hover animation enhancements
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Add subtle pulse effect to icon
      const icon = card.querySelector('.feature-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.feature-icon');
      if (icon) {
        icon.style.transform = 'scale(1)';
      }
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Form loading animation
  const formWrapper = document.querySelector('.form-wrapper');
  const iframe = document.querySelector('.clickup-embed');
  
  if (formWrapper && iframe) {
    // Show loading state
    formWrapper.classList.add('loading');
    
    // Listen for iframe load event
    iframe.addEventListener('load', () => {
      // Hide loading state when iframe is loaded
      formWrapper.classList.remove('loading');
    });
    
    // Fallback: Remove loading state after 5 seconds even if load event doesn't fire
    setTimeout(() => {
      formWrapper.classList.remove('loading');
    }, 5000);
  }
});