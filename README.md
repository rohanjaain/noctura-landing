# Noctura Landing Page

A standalone, modern landing page for Noctura with a waitlist signup form. This is completely independent from the main Noctura application and can be deployed separately.

## 🚀 Quick Start

```bash
cd client/landing
npm install
npm run dev
```

Open `http://localhost:5173` to view the landing page.

## 📁 Project Structure

```
client/landing/
├── src/
│   ├── components/ui/          # Reusable UI components
│   ├── pages/
│   │   └── LandingPage.tsx    # Main landing page component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── index.html                 # HTML template
```

## 🎨 Features

- **Modern Design**: Clean, professional layout with glass morphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Waitlist Form**: Email collection with validation and success feedback
- **Smooth Scrolling**: Navigation between sections
- **Component Library**: Reusable UI components built with Radix UI
- **TypeScript**: Full type safety and IntelliSense support

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Customization

### 1. Content Updates

Edit `src/pages/LandingPage.tsx` to customize:
- Hero section text and messaging
- Feature descriptions
- Benefits list
- Footer links and company information

### 2. Styling

The design system is defined in `src/index.css`:
- Color variables (primary, secondary, etc.)
- Typography scales
- Spacing and layout utilities
- Custom animations and effects

### 3. Waitlist Integration

Replace the simulated API call in `handleWaitlistSubmit` with your actual service:

```typescript
// Example: Mailchimp, ConvertKit, or custom API
const response = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
})
```

## 🚀 Deployment

### Static Hosting (Recommended)

This landing page is perfect for static hosting services:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: `npm run build && gh-pages -d dist`
- **AWS S3 + CloudFront**: Upload `dist/` folder

### Build Output

```bash
npm run build
```

The build creates a `dist/` folder with optimized, production-ready files.

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any configuration:

```bash
VITE_WAITLIST_API_URL=https://your-api.com/waitlist
VITE_ANALYTICS_ID=your-analytics-id
```

### Tailwind CSS

Customize the design system in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // Add your custom colors
      }
    }
  }
}
```

## 📱 Responsive Design

The landing page is built with a mobile-first approach:

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid for features
- **Desktop**: Full-width layout with optimal spacing

## 🎨 Design System

### Colors
- **Primary**: Purple accent color for CTAs and highlights
- **Secondary**: Subtle backgrounds and borders
- **Muted**: Text and UI elements that are less prominent

### Typography
- **Headings**: Large, bold text for hierarchy
- **Body**: Readable text with proper line height
- **Captions**: Small text for metadata and descriptions

### Components
- **Cards**: Elevated containers with subtle shadows
- **Buttons**: Multiple variants (primary, outline, ghost)
- **Inputs**: Form fields with focus states
- **Icons**: Lucide React icons for consistency

## 🔗 Integration

### Analytics

Add your analytics service to track page views and conversions:

```typescript
// Google Analytics
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

useEffect(() => {
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_path: location.pathname,
  })
}, [location])
```

### SEO

Update `index.html` with your meta tags:

```html
<title>Noctura - Secure AI Infrastructure</title>
<meta name="description" content="Enterprise-grade security for AI agents" />
<meta property="og:title" content="Noctura - Secure AI Infrastructure" />
```

## 🤝 Contributing

1. Make your changes in the `src/` directory
2. Test with `npm run dev`
3. Build and test with `npm run build`
4. Deploy to your hosting service

## 📄 License

This project is part of Noctura and follows the same license terms. 