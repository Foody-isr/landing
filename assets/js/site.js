// Foody POS Landing Site JavaScript

// Theme Management
const THEME_STORAGE_KEY = 'foody-theme';

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  setTheme(theme);
  updateThemeToggleIcon(theme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  setTheme(newTheme);
  updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme) {
  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
    toggleBtn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }
}

// Language Detection and Redirect (for root page)
function detectAndRedirect() {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.toLowerCase().split('-')[0];
  
  // Redirect immediately based on browser language
  if (langCode === 'fr') {
    window.location.replace('./fr/');
  } else {
    // Default to English for all other languages
    window.location.replace('./en/');
  }
  
  // Show fallback links after 2 seconds if redirect somehow failed
  setTimeout(() => {
    const fallback = document.getElementById('language-fallback');
    if (fallback) {
      fallback.style.display = 'block';
    }
  }, 2000);
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  
  // Setup theme toggle button
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Setup smooth scrolling
  initSmoothScroll();
  
  // If on root page with auto-redirect, start the redirect
  if (document.getElementById('auto-redirect')) {
    detectAndRedirect();
  }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only auto-update if user hasn't set a preference
  if (!localStorage.getItem(THEME_STORAGE_KEY)) {
    const theme = e.matches ? 'dark' : 'light';
    setTheme(theme);
    updateThemeToggleIcon(theme);
  }
});
