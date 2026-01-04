# 💒 Modern Wedding Website Template

A beautiful, immersive, and highly customizable wedding website built with Next.js 15, featuring stunning animations and a modern design.

## ✨ Features

### 🎨 Beautiful Design & Animations
- **Smooth scroll animations** with Framer Motion
- **Fade-in effects** as you scroll through sections
- **Parallax backgrounds** for depth and immersion
- **Floating decorative elements** for visual interest
- **Interactive hover effects** throughout
- **Responsive design** - looks great on all devices

### 📋 Complete Wedding Website Sections
1. **Hero Section** - Stunning landing with countdown timer
2. **Our Story** - Share how you met and your engagement story
3. **Event Details** - Ceremony, cocktail hour, reception info with maps
4. **Timeline** - Visual timeline of the day's events
5. **Registry** - Beautiful cards linking to your registries
6. **Travel & Accommodations** - Hotels, airports, parking, shuttles
7. **Wedding Party** - Photo grid of bridesmaids and groomsmen
8. **FAQ** - Expandable accordion with common questions
9. **RSVP Form** - Beautiful form with meal choices, song requests
10. **Smooth Navigation** - Fixed navbar with mobile menu

### 🔧 Easy Customization
- **Config-driven design** - All wedding info in one file
- **Theme customization** - Easy color and font changes
- **Plug-and-play** - Perfect for offering as a service

## 🚀 Getting Started

### Installation

```bash
# Navigate to project folder
cd wedding-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your website.

### Customization

#### 1. Update Wedding Data
Edit `config/wedding-data.ts` to customize all content:
- Couple names
- Wedding date and location
- Event details
- Story and engagement
- Timeline
- Registry links
- Travel information
- Wedding party members
- FAQ questions

#### 2. Update Theme (Optional)
Edit `config/theme.ts` to customize:
- Color palette
- Fonts
- Animation settings

#### 3. Add Photos
Place your photos in the `public/images` folder:
```
public/
  images/
    hero-bg.jpg
    wedding-party/
      emily.jpg
      jessica.jpg
      ...
```

Update the image paths in `config/wedding-data.ts`.

## 📦 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Intersection Observer** - Scroll-triggered animations

## 🎯 For Service Providers

This template is designed to be **plug-and-play** for offering custom wedding websites to clients:

1. Clone this repo for each new client
2. Update `config/wedding-data.ts` with their information
3. Add their photos to `public/images`
4. Optionally customize theme colors
5. Deploy to Vercel

Each website takes ~30 minutes to customize!

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms
- Netlify
- AWS Amplify
- Cloudflare Pages

## 📝 Adding Backend for RSVP

The RSVP form currently uses a mock submission. To add a real backend:

### Option 1: Next.js API Routes + Database

Create `app/api/rsvp/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Save to your database
  // await db.rsvp.create({ data });
  
  // Send email notification
  // await sendEmail({ to: 'you@email.com', data });
  
  return NextResponse.json({ success: true });
}
```

Then update the RSVP component to POST to `/api/rsvp`.

### Option 2: External Services
- **Google Sheets** - Use Google Sheets API
- **Airtable** - Simple database solution
- **Supabase** - PostgreSQL database with auth

## 🎨 Customization Examples

### Change Color Scheme

Edit `config/theme.ts`:

```typescript
colors: {
  primary: {
    main: "#your-color",
  },
  // ...
}
```

### Change Fonts

Update `app/globals.css` with your Google Fonts URL and update the theme config.

### Add More Sections

Create new components in `components/sections/` and add them to `app/page.tsx`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, please open an issue on GitHub.

## 💝 Perfect For

- Couples planning their own wedding website
- Wedding planners offering websites to clients
- Web developers looking for a wedding template
- Anyone wanting a modern, beautiful wedding site

---

Built with ❤️ using Next.js and Framer Motion
