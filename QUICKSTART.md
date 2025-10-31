# Quick Start Guide - Prosper Dynamic Construction Website

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Open Browser

Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Website Pages

### Live Routes

- **Home**: `http://localhost:3000/`
- **About Us**: `http://localhost:3000/about`
- **Services**: `http://localhost:3000/services`
- **Portfolio**: `http://localhost:3000/portfolio`
- **Contact**: `http://localhost:3000/contact`

## ✏️ Quick Edits

### Update Company Information

**File**: `components/Footer.jsx` and `app/contact/page.js`

```javascript
// Contact details are in both files
Address: "32, Jalan Anggerik Vanilla W31/W...";
Phone: "012-783 2131";
Email: "sbtc600@yahoo.com";
```

### Add/Remove Projects

**File**: `app/portfolio/page.js`

```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    location: "Location",
    category: "current" or "previous",
    // ... more fields
  }
]
```

### Modify Services

**File**: `app/services/page.js`

```javascript
const services = [
  {
    icon: Home,
    title: "Service Name",
    description: "Service description",
    features: ["Feature 1", "Feature 2"],
  },
];
```

### Change Color Scheme

**File**: `app/globals.css`

```css
--color-charcoal: #2d3748;
--color-gold: #d4a574;
--color-deep-blue: #1e3a5f;
```

## 🎨 Design Elements

### Primary Colors

- **Charcoal**: `#2d3748` - Main text and headers
- **Gold**: `#d4a574` - Call-to-action buttons
- **Deep Blue**: `#1e3a5f` - Secondary elements
- **Light Grey**: `#e2e8f0` - Backgrounds

### Components Available

All components are in `components/ui/`:

- `Button` - Styled buttons with variants
- `Card` - Content cards
- `Input` - Form inputs
- `Textarea` - Text areas
- `Separator` - Dividers

Usage example:

```jsx
import { Button } from "@/components/ui/button";

<Button variant="gold" size="lg">
  Click Me
</Button>;
```

## 🖼️ Image Placeholders

Current images use Unsplash URLs. To replace:

1. Add your images to `public/images/`
2. Update URLs in page components:

```javascript
// Old
backgroundImage: "url('https://images.unsplash.com/...')";

// New
backgroundImage: "url('/images/your-image.jpg')";
```

## 📝 Content Sections

### Home Page Sections

1. Hero with company name and tagline
2. About Us snippet
3. Core Values (3 cards)
4. Services Overview (4 cards)
5. Featured Project
6. Testimonials (3 cards)
7. Call to Action

### About Page Sections

1. Company Overview
2. Mission & Vision
3. Core Values (3 detailed cards)
4. Key Personnel (Mr. Tan Chau + 3 team members)
5. Organizational Structure

### Services Page Sections

1. 8 Detailed Service Listings
2. Why Choose Us statistics
3. 5-Step Process

### Portfolio Page

1. Filter buttons (All/Current/Previous)
2. Project cards (9 projects total)
3. Statistics section
4. Testimonial

### Contact Page

1. Contact information cards
2. Contact form
3. Google Maps embed

## 🔧 Common Tasks

### Add a New Navigation Link

**File**: `components/Navbar.jsx`

```javascript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/new-page", label: "New Page" }, // Add this
  // ... rest
];
```

### Change Hero Image

**File**: `app/page.js`

```javascript
backgroundImage: "url('YOUR_IMAGE_URL')";
```

### Update Testimonials

**Files**: `app/page.js` (Home testimonials)

Find the testimonials section and edit:

```javascript
<p>"Your testimonial text here..."</p>
<p className="font-semibold">Client Name</p>
<p className="text-sm">Client Title</p>
```

### Modify Footer Links

**File**: `components/Footer.jsx`

Edit the Quick Links section:

```jsx
<Link href="/your-link">Your Link Text</Link>
```

## 📦 Build for Production

```bash
# Build
npm run build

# Test production build
npm start
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applied

```bash
# Restart dev server
# Press Ctrl+C to stop, then:
npm run dev
```

## 📞 Need Help?

- Check the main `README.md` for detailed documentation
- Review component files in `components/ui/` for usage examples
- Visit [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Explore [Shadcn UI](https://ui.shadcn.com/)

## ✅ Pre-Launch Checklist

- [ ] Test all pages on mobile, tablet, and desktop
- [ ] Replace placeholder images with actual photos
- [ ] Update all contact information
- [ ] Test contact form submission
- [ ] Add Google Maps API key if needed
- [ ] Review all text content for accuracy
- [ ] Check all internal and external links
- [ ] Test navigation on all pages
- [ ] Optimize images for web
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure domain and hosting
- [ ] Set up SSL certificate
- [ ] Test page load speed
- [ ] Verify SEO meta tags

## 🌟 Features Included

✅ Fully responsive design
✅ Mobile-friendly navigation
✅ Professional color scheme
✅ Shadcn UI components
✅ Contact form with validation
✅ Filterable portfolio gallery
✅ Google Maps integration
✅ SEO-optimized pages
✅ Fast loading times
✅ Modern design aesthetic
✅ Accessible components
✅ Cross-browser compatible

---

Happy building! 🏗️

