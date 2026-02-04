# Foody POS Landing Site

A bilingual (English/French) marketing landing site for Foody POS with client-side language switching and lead capture form.

## 🌟 Features

- **Client-Side Bilingual Support**: English and French with in-place language switching
  - No page redirects or separate language pages
  - Language switcher in header/top bar
  - Language preference persists in localStorage
  - Supports URL query parameter (`?lang=en` or `?lang=fr`)
  - Smart language detection: URL param → localStorage → browser language
- **Translation System**: JSON-based translations with data-i18n attributes
- **Lead Capture Form**: Integrated Formspree form with language tracking
- **Responsive Design**: Beautiful on all devices
- **SEO-Friendly**: Semantic HTML with proper meta tags
- **GitHub Pages Ready**: Static files, no build process required

## 🎨 Branding

The site follows Foody POS brand guidelines:

### Colors
- Primary Orange: `#EB5204`
- Accent Gold: `#D89B35`
- Accent Green: `#77BA4B`
- Accent Red: `#F73838`
- Light surfaces: `#FFFFFF`, `#F5F6F8`, `#F0F2F5`
- Dark surfaces: `#272834`, `#32333F`, `#3C3D4D`

### Typography
- Font Family: Nunito Sans (Google Fonts)
- Weights: 300, 400, 600, 700, 800

### Spacing Scale
- XS: 6px
- SM: 10px
- MD: 14px
- LG: 20px
- XL: 28px
- 2XL: 36px

### Border Radius
- Standard: 10px
- Card: 12px
- Modal: 24px

## 📁 Structure

```
landing/
├── index.html              # Main bilingual landing page
├── assets/
│   ├── css/
│   │   └── site.css       # Shared styles (legacy, kept for compatibility)
│   ├── js/
│   │   ├── i18n.js        # Translation loader and language switcher
│   │   └── site.js        # Additional site functionality
│   ├── i18n/
│   │   ├── en.json        # English translations
│   │   └── fr.json        # French translations
│   └── img/
│       ├── screenshots/   # Product screenshots
│       └── videos/        # Product demo videos
├── en/                     # Legacy English page (deprecated)
│   └── index.html
├── fr/                     # Legacy French page (deprecated)
│   └── index.html
└── README.md              # This file
```

## 🌐 How Language Switching Works

### Language Detection Priority
1. **URL Query Parameter**: `?lang=en` or `?lang=fr` takes highest priority
2. **localStorage**: Previously saved language preference
3. **Browser Language**: `navigator.language` (fr → French, others → English)

### User Experience
- Language switcher is always visible in top-right corner
- Clicking a language button:
  - Loads new translations instantly (no page reload)
  - Updates all text via data-i18n attributes
  - Saves preference to localStorage
  - Updates URL with `history.replaceState` (no navigation)
  - Updates meta tags (title, description)

### For Developers
The `i18n.js` script handles all translation logic:
- Auto-initializes on page load
- Fetches JSON translations from `assets/i18n/`
- Applies translations to elements with `data-i18n` attributes
- Supports HTML content in translations
- Dispatches `languageChanged` event for custom integrations

## 🚀 Deployment to GitHub Pages

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 2: Wait for Deployment
GitHub will automatically build and deploy your site. This usually takes 1-2 minutes.

### Step 3: Access Your Site
Your site will be available at:
```
https://foody-isr.github.io/landing/
```

## ✏️ Editing Content

### Managing Translations

All user-facing text is stored in JSON files under `assets/i18n/`:

#### English (`assets/i18n/en.json`)
```json
{
  "header": {
    "title": "Your Title Here",
    "lead": "Your description here"
  }
}
```

#### French (`assets/i18n/fr.json`)
```json
{
  "header": {
    "title": "Votre titre ici",
    "lead": "Votre description ici"
  }
}
```

**Steps to add/edit translations:**

1. Open both `en.json` and `fr.json`
2. Find the key you want to modify (e.g., `header.title`)
3. Update the text in both files
4. Translations support HTML tags for formatting (e.g., `<b>bold</b>`)
5. Save and refresh the page

**To add new translatable content:**

1. Add the translation keys to both JSON files:
   ```json
   {
     "new_section": {
       "title": "New Title",
       "description": "New description"
     }
   }
   ```

2. Add corresponding HTML with `data-i18n` attribute:
   ```html
   <h2 data-i18n="new_section.title">New Title</h2>
   <p data-i18n="new_section.description">New description</p>
   ```

3. For placeholder attributes, use `data-i18n-attr`:
   ```html
   <input 
     type="text" 
     data-i18n="form.placeholder" 
     data-i18n-attr="placeholder">
   ```

### Configuring the Contact Form

The site includes a lead-capture form integrated with Formspree:

1. **Create a Formspree account** at https://formspree.io
2. **Create a new form** and get your form ID
3. **Update the form action** in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID

The form automatically includes:
- Name, Email, Company (optional), Message fields
- Hidden language field (populated with active language)
- Form validation
- Success/error messages (translated)
- Disabled state during submission

### Adding Media Assets

#### Screenshots

1. Place PNG/JPG images in `assets/img/screenshots/`
2. Recommended: 1200x800px or higher (3:2 ratio)
3. Use descriptive filenames: `pos-dashboard.png`, `qr-menu.jpg`

To add screenshots to the page:
```html
<img src="./assets/img/screenshots/pos-dashboard.png" 
     alt="POS Dashboard" 
     style="width:100%; border-radius:var(--radius-card);">
```

#### Videos

1. Place MP4 videos in `assets/img/videos/`
2. Keep files under 10MB for web performance
3. For larger videos, consider YouTube/Vimeo embedding

To add videos to the page:
```html
<video controls poster="./assets/img/videos/demo-thumbnail.jpg">
  <source src="./assets/img/videos/demo-overview.mp4" type="video/mp4">
  Your browser doesn't support video.
</video>
```

Or embed from YouTube:
```html
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allowfullscreen>
</iframe>
```

## 🔧 Local Development

To test locally, simply open `index.html` in your browser or use a local server:

### Using Python:
```bash
python3 -m http.server 8000
# or
python -m http.server 8000
```

### Using Node.js (http-server):
```bash
npx http-server
```

### Using PHP:
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Testing Language Switching

1. **Default behavior**: Opens with browser language (or English)
2. **Test URL parameter**: Visit `http://localhost:8000?lang=fr`
3. **Test switcher**: Click language buttons in top-right
4. **Test persistence**: Refresh page after switching - should remember choice
5. **Test form**: Try submitting form (won't work without Formspree ID)

## 🚀 Deployment to Production

### Prerequisites
- Configure Formspree form ID in `index.html` (if using contact form)

### GitHub Pages Deployment

The site will be automatically deployed to:
```
https://foody-isr.github.io/landing/
```

Test language-specific URLs:
- Default: `https://foody-isr.github.io/landing/`
- English: `https://foody-isr.github.io/landing/?lang=en`
- French: `https://foody-isr.github.io/landing/?lang=fr`

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Copyright © 2026 Foody POS. All rights reserved.