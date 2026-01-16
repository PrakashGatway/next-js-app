# GAway Global - Study Abroad Website

## Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page (uses components)
│   │   ├── page-old.tsx      # Backup of original monolithic code
│   │   ├── layout.tsx        # Root layout
│   │   └── favicon.ico       # Site icon
│   └── components/
│       ├── TopBar.tsx        # Top navigation bar with contact info
│       ├── Header.tsx        # Main header with logo and navigation
│       ├── HeroSection.tsx   # Hero section with main heading and CTA
│       ├── StatisticsSection.tsx  # Statistics display section
│       └── UniversitySlider.tsx   # University partners carousel
├── public/
│   ├── logo.png              # Main logo
│   ├── logo-design.png       # Graduation cap logo
│   ├── first-page.jpg        # Hero background image
│   ├── university1.svg       # University partner logos (1-10)
│   ├── university2.svg
│   ├── ...
│   └── university10.svg
└── package.json

```

## Components Overview

### TopBar (`src/components/TopBar.tsx`)
- Contact information
- "Free Demo" and "Student Login" buttons
- Responsive layout

### Header (`src/components/Header.tsx`)
- Logo display
- Navigation menu (Home, About, Universities, Countries, Services, Success, Contact)
- Mobile menu button
- Dropdown arrows for specific menu items

### HeroSection (`src/components/HeroSection.tsx`)
- Main heading: "Your Gateway to the World's Top Universities"
- Subheading with specialization info
- Two CTA buttons: "Get Free Counselling" and "Check Your Eligibility"
- Graduation cap image with decorative airplane elements
- Fully responsive design

### StatisticsSection (`src/components/StatisticsSection.tsx`)
- Four statistics cards showing:
  - 97% Application Acceptance
  - #1 Consultancy for Top-Tier Programs
  - (repeated for visual balance)

### UniversitySlider (`src/components/UniversitySlider.tsx`)
- Carousel of 10 university partner logos
- Auto-scrolling functionality
- Pause on hover
- Responsive slides (2.5, 3.5, or 5.5 visible based on screen size)

## Color Scheme

- Primary Orange: `#f46c44`
- Hover Orange: `#e35a34`
- Dark: `#1f2937` (gray-900)
- Background: White and light grays

## Assets Location

All images and SVG files are stored in the `/public` directory:
- University logos: `university1.svg` to `university10.svg`
- Main logo: `logo.png`
- Graduation cap: `logo-design.png`
- Hero background: `first-page.jpg`

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Keen Slider** - Carousel functionality
- **Next/Image** - Optimized images

## Notes

- All components are client-side rendered where needed (`'use client'`)
- Fully responsive design with mobile-first approach
- Uses Poppins font family
- Original monolithic code preserved in `page-old.tsx`

