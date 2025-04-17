/**
 * Theme toggling functionality
 */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the browser preference
  const savedTheme = localStorage.getItem('theme');
  
  // Apply the saved theme or browser preference
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  } else if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
  } else {
    // If no saved preference, use the browser preference
    if (!prefersDarkScheme.matches) {
      document.body.classList.add('light-mode');
    }
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Save the current theme preference
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  });
});