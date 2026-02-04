// Foody POS i18n (Internationalization) System
// Handles bilingual EN/FR support without page redirects

(function() {
  'use strict';

  const i18n = {
    currentLang: 'en',
    translations: {},
    STORAGE_KEY: 'foody-language',
    
    // Initialize the i18n system
    async init() {
      // Determine language by precedence: URL param -> localStorage -> browser language
      const urlLang = this.getUrlLanguage();
      const storedLang = localStorage.getItem(this.STORAGE_KEY);
      const browserLang = this.getBrowserLanguage();
      
      // Set current language based on precedence
      this.currentLang = urlLang || storedLang || browserLang;
      
      // Validate language (only en/fr supported)
      if (this.currentLang !== 'en' && this.currentLang !== 'fr') {
        this.currentLang = 'en';
      }
      
      // Load translations for current language
      await this.loadTranslations(this.currentLang);
      
      // Apply translations to the page
      this.applyTranslations();
      
      // Update HTML lang attribute
      document.documentElement.setAttribute('lang', this.currentLang);
      
      // Save to localStorage
      localStorage.setItem(this.STORAGE_KEY, this.currentLang);
      
      // Update URL if lang param exists (without navigation)
      if (urlLang) {
        this.updateUrlLanguage(this.currentLang);
      }
      
      // Initialize language switcher
      this.initLanguageSwitcher();
      
      // Dispatch event for other scripts that might need to know
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    },
    
    // Get language from URL query parameter (?lang=en or ?lang=fr)
    getUrlLanguage() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('lang');
    },
    
    // Get browser language (fr -> fr, fr-FR -> fr, en-US -> en, etc.)
    getBrowserLanguage() {
      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      return browserLang.startsWith('fr') ? 'fr' : 'en';
    },
    
    // Update URL with history.replaceState (no navigation)
    updateUrlLanguage(lang) {
      const url = new URL(window.location);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url);
    },
    
    // Load translation JSON file
    async loadTranslations(lang) {
      try {
        const response = await fetch(`./assets/i18n/${lang}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load translations for ${lang}`);
        }
        this.translations = await response.json();
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to English if loading fails
        if (lang !== 'en') {
          await this.loadTranslations('en');
        }
      }
    },
    
    // Apply translations to elements with data-i18n attributes
    applyTranslations() {
      // Update meta tags
      if (this.translations.meta) {
        document.title = this.translations.meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && this.translations.meta.description) {
          metaDesc.setAttribute('content', this.translations.meta.description);
        }
      }
      
      // Update all elements with data-i18n attribute
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = this.getTranslation(key);
        
        if (translation) {
          // Check if we should update a specific attribute
          const attr = element.getAttribute('data-i18n-attr');
          
          if (attr) {
            element.setAttribute(attr, translation);
          } else {
            // Update innerHTML to support HTML tags in translations
            element.innerHTML = translation;
          }
        }
      });
      
      // Update language switcher button
      this.updateLanguageSwitcher();
    },
    
    // Get translation by key (supports nested keys with dot notation)
    getTranslation(key) {
      const keys = key.split('.');
      let value = this.translations;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return null;
        }
      }
      
      return value;
    },
    
    // Switch to a different language
    async switchLanguage(lang) {
      if (lang === this.currentLang) return;
      
      this.currentLang = lang;
      
      // Load new translations
      await this.loadTranslations(lang);
      
      // Apply translations
      this.applyTranslations();
      
      // Update HTML lang attribute
      document.documentElement.setAttribute('lang', lang);
      
      // Save to localStorage
      localStorage.setItem(this.STORAGE_KEY, lang);
      
      // Update URL with history.replaceState (no navigation)
      this.updateUrlLanguage(lang);
      
      // Dispatch event
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    },
    
    // Initialize language switcher button
    initLanguageSwitcher() {
      const switcher = document.getElementById('language-switcher');
      if (!switcher) return;
      
      // Create switcher buttons if they don't exist
      if (!switcher.querySelector('[data-lang]')) {
        switcher.innerHTML = `
          <button class="lang-btn" data-lang="en" aria-label="Switch to English">EN</button>
          <button class="lang-btn" data-lang="fr" aria-label="Passer au français">FR</button>
        `;
      }
      
      // Add click handlers
      switcher.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = btn.getAttribute('data-lang');
          this.switchLanguage(lang);
        });
      });
      
      this.updateLanguageSwitcher();
    },
    
    // Update language switcher UI to show active language
    updateLanguageSwitcher() {
      const switcher = document.getElementById('language-switcher');
      if (!switcher) return;
      
      switcher.querySelectorAll('[data-lang]').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === this.currentLang) {
          btn.classList.add('active');
          btn.setAttribute('aria-current', 'true');
        } else {
          btn.classList.remove('active');
          btn.removeAttribute('aria-current');
        }
      });
    }
  };
  
  // Make i18n available globally
  window.foodyI18n = i18n;
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
  } else {
    i18n.init();
  }
})();
