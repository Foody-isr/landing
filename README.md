# Foody POS Landing Site

A bilingual (English/French) marketing landing site for Foody POS with light and dark theme support.

## 🌟 Features

- **Bilingual Support**: English (`/en/`) and French (`/fr/`) versions
- **Instant Automatic Redirect**: Root page (`/`) immediately redirects based on browser language
  - No manual language selection required
  - French browsers → `/fr/`
  - All other languages → `/en/` (default)
  - Fallback language chooser shown if JavaScript fails or redirect doesn't complete
- **Theme Toggle**: Light and dark modes with system preference detection
- **Theme Persistence**: User's theme choice saved in localStorage
- **Responsive Design**: Beautiful on all devices
- **SEO-Friendly**: Semantic HTML with proper meta tags
- **GitHub Pages Ready**: Static files with relative URLs

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
├── index.html              # Language chooser with auto-redirect
├── en/
│   └── index.html         # English landing page
├── fr/
│   └── index.html         # French landing page
├── assets/
│   ├── css/
│   │   └── site.css       # All styles with theme variables
│   ├── js/
│   │   └── site.js        # Theme toggle & language detection
│   └── img/               # Image assets (placeholder)
└── README.md              # This file
```

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

### Update Pricing
To update pricing information:

1. Open `en/index.html` or `fr/index.html`
2. Find the pricing section (search for `id="pricing"`)
3. Update the price values in the `.price` divs
4. Modify features lists as needed

Example:
```html
<div class="price">€ 49</div>
<div class="price-period">per month</div>
```

### Update Contact Information
Replace placeholder email addresses:
- Find `sales@foody-pos.com` and `support@foody-pos.com`
- Replace with your actual email addresses

### Add Custom Images
Place images in the `assets/img/` directory and reference them in HTML:
```html
<img src="../assets/img/your-image.png" alt="Description">
```

### Modify Colors
Edit CSS variables in `assets/css/site.css`:
```css
:root {
  --color-primary: #EB5204;  /* Change primary color */
  /* ... other variables ... */
}
```

## 🔧 Local Development

To test locally, simply open `index.html` in your browser or use a local server:

### Using Python:
```bash
python -m http.server 8000
```

### Using Node.js (http-server):
```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Copyright © 2026 Foody POS. All rights reserved.