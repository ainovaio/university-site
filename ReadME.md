# Bringthon University Website - Complete Setup Guide

## 📁 File Structure

Your website should be organized as follows:

```
bringthon-university/
│
├── index.html
├── programs.html
├── about.html
├── contact.html
├── styles.css
├── script.js
├── logo.png
│
└── images/
    ├── hero-bg.webp
    ├── campus-1.webp
    ├── campus-2.webp
    ├── campus-3.webp
    ├── about-campus.webp
    ├── vice-chancellor.webp
    │
    ├── program-business.webp
    ├── program-computing.webp
    ├── program-healthcare.webp
    ├── program-hospitality.webp
    ├── program-engineering.webp
    │
    ├── program-business-adv.webp
    ├── program-computing-adv.webp
    ├── program-finance.webp
    ├── program-marketing.webp
    ├── program-hr.webp
    │
    ├── program-ba-business.webp
    ├── program-bsc-computing.webp
    ├── program-ba-healthcare.webp
    ├── program-ba-hospitality.webp
    └── program-beng-engineering.webp
```

## 🖼️ Image Specifications

### Logo
- **File Name:** `logo.png`
- **Format:** PNG (with transparent background)
- **Dimensions:** 200px × 200px
- **Usage:** Navigation bar and footer

### Hero Section
- **File Name:** `hero-bg.webp`
- **Format:** WebP
- **Dimensions:** 1920px × 1080px
- **Description:** University campus building or students in modern setting
- **Quality:** High resolution for large displays

### Campus Images (Rankings Section)
- **File Names:** `campus-1.webp`, `campus-2.webp`, `campus-3.webp`
- **Format:** WebP
- **Dimensions:** 
  - campus-1.webp: 600px × 600px (square)
  - campus-2.webp: 600px × 600px (square)
  - campus-3.webp: 1220px × 500px (wide rectangle)
- **Description:** Campus facilities, students studying, library interior

### About Page Images
- **File Name:** `about-campus.webp`
- **Dimensions:** 800px × 600px
- **Description:** University building or campus overview

- **File Name:** `vice-chancellor.webp`
- **Dimensions:** 600px × 800px (portrait)
- **Description:** Professional photo of university leadership

### Program Cards (Diplomas)
- **File Names:** 
  - `program-business.webp`
  - `program-computing.webp`
  - `program-healthcare.webp`
  - `program-hospitality.webp`
  - `program-engineering.webp`
- **Format:** WebP
- **Dimensions:** 800px × 600px each
- **Description:** Relevant imagery for each program (business meeting, computer lab, healthcare, hotel, engineering)

### Program Cards (Higher Diplomas)
- **File Names:**
  - `program-business-adv.webp`
  - `program-computing-adv.webp`
  - `program-finance.webp`
  - `program-marketing.webp`
  - `program-hr.webp`
- **Format:** WebP
- **Dimensions:** 800px × 600px each
- **Description:** Professional settings related to each field

### Program Cards (Top-up Degrees)
- **File Names:**
  - `program-ba-business.webp`
  - `program-bsc-computing.webp`
  - `program-ba-healthcare.webp`
  - `program-ba-hospitality.webp`
  - `program-beng-engineering.webp`
- **Format:** WebP
- **Dimensions:** 800px × 600px each
- **Description:** Graduation or advanced study imagery

## 🎨 Color Palette

- **Primary Color:** #001f3f (Dark Navy Blue)
- **Secondary Color:** #003d7a (Medium Navy Blue)
- **Accent Color:** #0074D9 (Bright Blue)
- **Text Dark:** #1a1a1a (Almost Black)
- **Text Light:** #666666 (Gray)
- **White:** #ffffff
- **Light Background:** #f8f9fa (Off-white)
- **Border Color:** #e0e0e0 (Light Gray)

## 📝 Fonts Used

The website uses Google Fonts:
- **Headings:** Playfair Display (Serif) - Weights: 400, 500, 600, 700
- **Body Text:** Inter (Sans-serif) - Weights: 300, 400, 500, 600, 700

These are loaded via CDN in the HTML files.

## 🔧 Installation Instructions

### Step 1: Create Folder Structure
1. Create a main folder called `bringthon-university`
2. Inside it, create a subfolder called `images`
3. Place all HTML, CSS, and JS files in the root folder
4. Place the logo.png in the root folder
5. Place all .webp images in the `images` folder

### Step 2: Update Image Paths
If you place images in the `images` folder, update all image sources in the HTML files:

Replace:
```html
<img src="hero-bg.webp" alt="...">
```

With:
```html
<img src="images/hero-bg.webp" alt="...">
```

Do this for all image references across all HTML files.

### Step 3: Test Locally
1. Open `index.html` in your web browser
2. Test all navigation links
3. Verify all images load correctly
4. Test responsive design by resizing browser window
5. Test on mobile devices

## 🌐 External Resources

The website uses the following CDN resources:
- **Font Awesome 6.4.0** - For icons
- **Google Fonts** - For typography
- **Google Maps** - Embedded in contact page

All are loaded from CDNs and require internet connection to display properly.

## 📱 Responsive Breakpoints

The website is fully responsive with breakpoints at:
- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** 767px and below
- **Small Mobile:** 480px and below

## ✨ Features Included

### Home Page (index.html)
- Animated loader
- Glassmorphic navbar with blur effect
- Hero section with gradient overlay
- Rankings section with image grid
- Animated statistics counter
- Inquiry form
- Responsive footer

### Programs Page (programs.html)
- Three program categories (Diplomas, Higher Diplomas, Top-up Degrees)
- 15 program cards total (5 per category)
- Modal popup for program details
- Tabbed interface in modal (Overview, Details, Modules)
- Program information sidebar

### About Page (about.html)
- University history section
- Vice Chancellor's message with photo
- Vision & Mission cards
- Core values grid (6 values)
- Why Choose Us section (6 reasons)
- Accreditations showcase
- Call-to-action section

### Contact Page (contact.html)
- Contact information cards
- Contact form
- Embedded Google Maps
- Department directory (6 departments)
- FAQ accordion (6 questions)
- Emergency contact banner

## 🎯 Key Interactions

1. **Navigation:** Smooth scroll, mobile hamburger menu
2. **Statistics:** Count-up animation on scroll
3. **Program Cards:** Hover effects, click to open modal
4. **Modal:** Tab switching, smooth open/close
5. **FAQ:** Accordion expand/collapse
6. **Forms:** Validation and submit handling
7. **Back to Top:** Floating button appears on scroll

## 🔍 SEO Considerations

- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Meta descriptions (to be added)
- Clean URL structure
- Fast loading with optimized images

## 🎨 Design Principles Applied

- **Premium Look:** Elegant typography, ample whitespace
- **University Vibe:** Professional color scheme, authoritative tone
- **Modern UI/UX:** Smooth animations, clear hierarchy
- **Accessibility:** High contrast, readable fonts
- **Mobile-First:** Fully responsive across devices

## 📊 Browser Compatibility

Tested and compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Tips

1. **Optimize Images:**
   - Use WebP format (already specified)
   - Compress images before upload
   - Recommended tool: TinyPNG or Squoosh

2. **Lazy Loading:**
   - Add `loading="lazy"` to images below the fold

3. **Minification:**
   - Minify CSS and JS for production
   - Use tools like CSSNano or UglifyJS

## 📧 Contact Information (Placeholder)

Update these in the HTML files:
- **Email:** info@bringthon.ac.uk
- **Phone:** +44 20 7946 0958
- **Address:** Brighton, United Kingdom
- **Map:** Embedded Google Maps iframe

## 🎓 Content Guidelines

### Tone of Voice
- Professional yet approachable
- Inspiring and aspirational
- Clear and concise
- Academically credible

### Content Updates
To update content:
1. Open the relevant HTML file
2. Locate the section using comments in the code
3. Edit text within HTML tags
4. Save and refresh browser

## 🔒 Security Notes

- Forms are currently front-end only
- For production, implement:
  - Server-side form validation
  - CSRF protection
  - reCAPTCHA for spam prevention
  - SSL certificate (HTTPS)

## 📱 Testing Checklist

Before going live:
- [ ] All links work correctly
- [ ] All images load
- [ ] Forms submit properly
- [ ] Mobile navigation works
- [ ] Responsive design on all devices
- [ ] Browser compatibility tested
- [ ] Loading speed optimized
- [ ] SEO elements added
- [ ] Analytics code added (if needed)
- [ ] Contact information updated

## 🎉 Launch Checklist

1. Purchase domain name
2. Set up web hosting
3. Upload all files maintaining folder structure
4. Configure DNS settings
5. Install SSL certificate
6. Test all functionality on live server
7. Set up email addresses
8. Configure contact forms backend
9. Add Google Analytics
10. Submit sitemap to search engines

## 📞 Support

For any questions or issues with the website setup, refer to:
- HTML/CSS documentation: MDN Web Docs
- JavaScript help: JavaScript.info
- Font Awesome icons: fontawesome.com
- Google Fonts: fonts.google.com

---

**Website Created:** 2025
**Version:** 1.0
**Last Updated:** November 2025

*This website is a premium, modern, and fully responsive solution for Bringthon University. All code is clean, commented, and follows best practices for maintainability and scalability.*