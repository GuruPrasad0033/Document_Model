# 📁 Public Folder - Assets Guide

The `public/` folder contains static assets that don't need to be processed by Webpack/Vite.

## Files to Add

### Logos & Images
```
public/
├── logo.png                 # Company logo (recommended: 200x200px)
├── logo-white.png          # Logo for dark backgrounds
├── favicon.ico             # Browser tab icon
├── og-image.png            # Open Graph image (1200x630px)
└── hero-bg.jpg             # Optional hero background image
```

### Documents
```
public/
├── company-profile.pdf     # Company profile for download
├── brochure.pdf            # Service brochure
├── case-studies.pdf        # Project case studies
└── contact-info.pdf        # Contact information document
```

### Optional Assets
```
public/
├── placeholder-1200x800.jpg    # Placeholder for project images
├── meter-diagram.svg           # Smart meter diagram
├── billing-flow.svg            # Billing system diagram
└── utility-grid.svg            # Utility grid visualization
```

---

## 🖼️ Recommended Image Specifications

### Logo
- **Format**: PNG with transparency
- **Size**: 200x200px or larger
- **Weight**: < 50KB
- **Purpose**: Navigation and footer

### Open Graph Image
- **Format**: JPG
- **Size**: 1200x630px
- **Weight**: < 200KB
- **Purpose**: Social media sharing

### Hero Background
- **Format**: JPG (optimized)
- **Size**: 1920x1080px or larger
- **Weight**: < 500KB
- **Purpose**: Page header backround

### Favicon
- **Format**: ICO or PNG
- **Size**: 32x32px or 64x64px
- **Purpose**: Browser tab icon

---

## 🎨 How to Use in Your Website

### Using Logo in Navigation

#### Method 1: PNG File
```tsx
// In Navigation.tsx
<img 
  src="/logo.png" 
  alt="Nsoft Logo" 
  className="h-8 w-8"
/>
```

#### Method 2: Inline SVG
```tsx
// For better control and smaller file size
<svg className="w-8 h-8" viewBox="0 0 200 200">
  {/* Your SVG content */}
</svg>
```

### Using Company Profile PDF

In `Footer.tsx`:
```tsx
<a
  href="/company-profile.pdf"
  download="nsoft-company-profile.pdf"
  className="inline-block bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800"
>
  Download Company Profile
</a>
```

### Using Hero Background Image

In `Hero.tsx`:
```tsx
style={{
  backgroundImage: backgroundImage
    ? `linear-gradient(135deg, rgba(22, 163, 74, 0.85) 0%, rgba(202, 138, 4, 0.85) 100%), 
       url(${backgroundImage})`
    : 'linear-gradient(135deg, #16a34a 0%, #ca8a04 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
```

### Using in HTML Head (Favicon)

In `index.html`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

### Using in HTML Meta Tags

```html
<meta property="og:image" content="/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

---

## 🔗 Path References

### In React Components
```tsx
<img src="/public-folder-file.png" alt="Description" />
// Correct: <img src="/public-folder-file.png" ... />

<img src="/logo.png" alt="Logo" />
<img src="/company-profile.pdf" alt="Profile" />
```

### In CSS
```css
background-image: url(/bg-image.jpg);
```

### In HTML
```html
<a href="/document.pdf" download>Download Document</a>
```

---

## 📊 File Size Optimization

### Image Optimization Tools
- **TinyPNG**: Compress images (tinypng.com)
- **ImageOptim**: Mac tool for image optimization
- **FileZilla**: Fast FTP uploads
- **FFMPEG**: Video processing

### Best Practices
- Use JPG for photos/complex images (save as quality 75-85%)
- Use PNG for logos/diagrams with transparency
- Use SVG for icons and illustrations
- Compress all images before uploading
- Use WebP format for modern browsers

---

## 📝 Complete Asset List

### Recommended Total
For a fully functional website, you should have:

```
public/
├── logo.png                 (50KB)
├── favicon.ico              (20KB)
├── og-image.png             (150KB)
├── company-profile.pdf      (500KB)
├── brochure.pdf             (400KB)
└── hero-bg.jpg              (300KB)

Total: ~1.4MB
```

---

## 🔐 Security Notes

- ✅ Only store public-facing assets in `/public`
- ✅ Never store API keys or secrets here
- ✅ Don't put sensitive documents here
- ✅ Use environment variables for sensitive config
- ✅ Large files: Consider CDN for optimization

---

## 🚀 Deployment with Assets

### When Deploying to Vercel/Netlify
- All files in `/public` are automatically served
- No additional configuration needed
- Assets are cached and optimized

### When Deploying to Traditional Server
```bash
# Build
npm run build

# This creates:
dist/           # All compiled code
dist/           # + all files from public/

# Upload entire dist/ folder to server
```

---

## 🎯 Quick Setup Checklist

- [ ] Create `/public` folder (if not exists)
- [ ] Add company logo (logo.png)
- [ ] Add favicon (favicon.ico)
- [ ] Add company profile PDF
- [ ] Update references in components
- [ ] Test all links
- [ ] Verify images load
- [ ] Check PDF downloads

---

## 💡 Tips

1. **Git Tracking**: Add large files to `.gitignore` if needed
2. **CDN**: Consider CDN for very large files
3. **Compression**: Always compress before uploading
4. **Naming**: Use clear, lowercase names (logo.png, not Logo File.png)
5. **Formats**: Use appropriate formats for different file types

---

**That's it! Add your assets and you're ready to go!**
