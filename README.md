# Adaptive Optix Website

A modern, professional brochureware website for Adaptive Optix showcasing financial technology products and solutions.

## 🚀 Features

### Products
- **FX Pricing** - Real-time currency pricing and market intelligence
- **Loyalty** - Customer loyalty and rewards programs
- **Offers & Campaigns** - Dynamic promotional campaign management

### Solutions
- **Backend as a Service (BaaS)** - Fully managed backend infrastructure
- **Software as a Service (SaaS)** - Cloud-based software solutions
- **APIs & Integration** - Comprehensive API suite for seamless integration

### Additional Features
- ✨ Responsive design (mobile, tablet, desktop)
- 🎨 Customizable colors and styling via CSS variables
- 📧 Contact form for lead generation
- 🏃 Fast performance with Next.js
- 📱 Mobile-first approach
- 🔒 Built with modern security best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Build Tool**: Turbopack
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with header/footer
│   ├── products/
│   │   ├── fx-pricing/page.tsx
│   │   ├── loyalty/page.tsx
│   │   └── offers-campaigns/page.tsx
│   └── solutions/
│       ├── baas/page.tsx
│       ├── saas/page.tsx
│       └── api/page.tsx
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer with links
│   └── ContactForm.tsx       # Contact/interest form
├── data/
│   └── config.ts             # Centralized configuration
└── styles/
    └── theme.css             # Theme and CSS variables
```

## 🎨 Customization

### Change Colors
Edit the CSS variables in `src/styles/theme.css`:

```css
:root {
  --color-primary: #0066CC;        /* Main brand color */
  --color-secondary: #00D4FF;      /* Accent color */
  --color-dark: #0A0E27;           /* Dark background */
  /* ... more variables ... */
}
```

### Update Site Content
Edit `src/data/config.ts` to update:
- Site name and tagline
- Products and features
- Solutions and benefits
- Navigation structure

### Edit Copy/Text
All text is in the respective page files (`.tsx` files) and can be easily updated.

## 📚 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "d:\adaptive optix website\adaptive-optix-website"
```

2. Dependencies are already installed. If needed, reinstall:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Production Build

Create an optimized production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔗 Forms & Integration

The contact form is currently set up to:
1. Validate user input
2. Show success message on submission
3. Log form data to console (for demo purposes)

### To integrate with a backend:

In `src/components/ContactForm.tsx`, replace the `setTimeout` simulation with an actual API call:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, products, solutions, and CTA |
| `/products/fx-pricing` | FX Pricing product details |
| `/products/loyalty` | Loyalty product details |
| `/products/offers-campaigns` | Offers & Campaigns product details |
| `/solutions/baas` | Backend as a Service details |
| `/solutions/saas` | Software as a Service details |
| `/solutions/api` | APIs & Integration details |

## 🚀 Deployment

### Vercel (Recommended)
The site is optimized for Vercel deployment:

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Other Hosting
Can be deployed to any Node.js hosting platform (Heroku, AWS, DigitalOcean, etc.)

## 📝 License

All rights reserved © Adaptive Optix

## 🤝 Support

For questions or issues, contact the development team.

---

**Last Updated**: January 6, 2026
