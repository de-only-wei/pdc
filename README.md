# Prosper Dynamic Construction - Company Website

A professional, multi-page company profile website for Prosper Dynamic Construction Sdn Bhd, built with Next.js 15, Tailwind CSS, and Shadcn UI.

## 🏗️ Project Overview

This is a modern, responsive website showcasing the services, portfolio, and expertise of Prosper Dynamic Construction, a leading construction company in Shah Alam, Selangor, Malaysia.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design using Shadcn UI components
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **Interactive Elements**: Filterable portfolio, contact forms, and smooth navigation

## 📁 Website Structure

### Pages

1. **Home Page (`/`)**

   - Hero section with full-screen background
   - Company overview snippet
   - Core values showcase
   - Services overview with cards
   - Featured project highlight
   - Client testimonials
   - Call-to-action section

2. **About Us Page (`/about`)**

   - Company overview and history
   - Mission and vision statements
   - Core values (Quality, Integrity, Collaboration)
   - Key personnel profiles (Mr. Tan Chau and team)
   - Organizational structure chart

3. **Services Page (`/services`)**

   - Detailed service listings with descriptions
   - Bungalow Construction
   - Project Management
   - Design and Build
   - Renovation and Extension
   - Interior Works
   - Commercial Construction
   - Consultation Services
   - Quality Assurance
   - Company statistics
   - Process workflow

4. **Portfolio Page (`/portfolio`)**

   - Filterable project gallery (All/Current/Previous)
   - Project cards with details
   - Track record statistics
   - Client testimonials

5. **Contact Page (`/contact`)**
   - Contact information cards
   - Interactive contact form
   - Embedded Google Maps
   - Business hours information

### Shared Components

- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info

## 🎨 Design System

### Color Palette

- **Charcoal**: `#2d3748` (Primary text and headers)
- **Dark Grey**: `#4a5568` (Secondary text)
- **Light Grey**: `#e2e8f0` (Backgrounds and borders)
- **Gold**: `#d4a574` (Accent color for CTAs and highlights)
- **Deep Blue**: `#1e3a5f` (Secondary accent and buttons)

### Typography

- **Font Family**: Inter (from Google Fonts)
- **Font Sizes**: Responsive scale from 14px to 72px
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd prosper-dynamics-construction
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 15.5.4
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Form Handling**: React hooks

## 📋 Project Structure

```
prosper-dynamics-construction/
├── app/
│   ├── about/
│   │   └── page.js          # About Us page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── portfolio/
│   │   └── page.js          # Portfolio page
│   ├── services/
│   │   └── page.js          # Services page
│   ├── favicon.ico
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.js            # Root layout with Navbar and Footer
│   └── page.js              # Home page
├── components/
│   ├── ui/
│   │   ├── button.jsx       # Button component
│   │   ├── card.jsx         # Card component
│   │   ├── input.jsx        # Input component
│   │   ├── textarea.jsx     # Textarea component
│   │   └── separator.jsx    # Separator component
│   ├── Footer.jsx           # Footer component
│   └── Navbar.jsx           # Navigation component
├── lib/
│   └── utils.js             # Utility functions (cn helper)
├── public/                  # Static assets
├── components.json          # Shadcn UI configuration
├── jsconfig.json           # JavaScript configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
└── README.md               # This file
```

## 🔧 Configuration

### Shadcn UI

The project uses Shadcn UI components configured in `components.json`. Components are stored in `components/ui/` and can be customized as needed.

### Tailwind CSS

Tailwind CSS v4 is configured with custom theme colors in `globals.css`. The design system uses CSS variables for consistent theming.

### Path Aliases

The project uses `@` as an alias for the root directory, configured in `jsconfig.json`:

- `@/components` → `/components`
- `@/lib` → `/lib`
- `@/app` → `/app`

## 📝 Content Management

### Updating Content

To update content on the website:

1. **Text Content**: Edit the respective page files in `app/`
2. **Images**: Update the image URLs in the page components
3. **Contact Information**: Update in `components/Footer.jsx` and `app/contact/page.js`
4. **Services**: Edit `app/services/page.js`
5. **Portfolio Projects**: Edit the `projects` array in `app/portfolio/page.js`

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.js` file
3. Update the navigation links in `components/Navbar.jsx` and `components/Footer.jsx`

## 🌐 Deployment

This Next.js application can be deployed to various platforms:

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## 📞 Company Contact Information

**PROSPER DYNAMICS CONSTRUCTION SDN. BHD.**

- **Address**: 32, Jalan Anggerik Vanilla W31/W, Kota Kemuning, Seksyen 31, Shah Alam, Selangor, 40460
- **Phone (Ivan)**: 012-783 2131
- **Office Tel**: 03-5122 8792 / 8793
- **Fax**: 03-5122 8754
- **Email**: sbtc600@yahoo.com / pdcsb600@gmail.com

## 📄 License

© 2024 Prosper Dynamics Construction Sdn. Bhd. All rights reserved.

## 🤝 Support

For technical support or inquiries about the website, please contact the development team or reach out through the contact form on the website.

---

Built with ❤️ using Next.js and Tailwind CSS
