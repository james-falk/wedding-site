# 🎯 Quick Setup Guide

This guide will help you customize this wedding website for your clients in under 30 minutes!

## ⚡ Quick Start Checklist

### Step 1: Initial Setup (5 minutes)
- [ ] Clone or copy this project
- [ ] Run `npm install`
- [ ] Run `npm run dev` to start development server
- [ ] Visit http://localhost:3000 to see the default site

### Step 2: Update Wedding Information (15 minutes)

Open `config/wedding-data.ts` and update:

#### Essential Information
```typescript
couple: {
  bride: { firstName: "...", lastName: "...", fullName: "..." },
  groom: { firstName: "...", lastName: "...", fullName: "..." },
  coupleNames: "...",  // e.g., "Sarah & Michael"
  hashtag: "...",      // e.g., "#DavisWedding2025"
},

weddingDate: {
  date: "YYYY-MM-DD",
  displayDate: "...",
  dayOfWeek: "...",
},
```

#### Event Details
Update all events with:
- Names (Ceremony, Cocktail Hour, Reception)
- Dates and times
- Venue information
- Addresses
- Google Maps links

#### Personal Stories
```typescript
story: {
  howWeMet: "...",
  engagement: "...",
  quote: "...",
}
```

#### Other Sections
- Timeline of events
- Registry links
- Travel information (hotels, airports)
- Wedding party members
- FAQ questions
- Contact information

### Step 3: Add Photos (5 minutes)

1. Create folders in `public/images/`:
```
public/
  images/
    hero-bg.jpg (optional - currently using gradient)
    wedding-party/
      bridesmaid1.jpg
      bridesmaid2.jpg
      groomsman1.jpg
      ...
```

2. Update photo paths in `config/wedding-data.ts`:
```typescript
weddingParty: {
  bridesmaids: [
    {
      name: "...",
      photo: "/images/wedding-party/emily.jpg",
      ...
    }
  ]
}
```

### Step 4: Customize Theme (Optional - 5 minutes)

Edit `config/theme.ts` to match wedding colors:

```typescript
colors: {
  primary: {
    main: "#your-primary-color",
  },
  accent: {
    gold: "#...",
    rose: "#...",
  }
}
```

### Step 5: Test & Deploy (5 minutes)

1. **Test locally:**
   - Check all sections scroll smoothly
   - Test RSVP form
   - Test on mobile (Chrome DevTools)
   - Verify all links work

2. **Deploy to Vercel:**
```bash
# Install Vercel CLI (one time)
npm install -g vercel

# Deploy
vercel

# Follow prompts to connect to your Vercel account
```

## 🎨 Customization Tips

### Changing Colors Throughout

The site uses Tailwind colors. Main colors to search/replace:
- `rose-` → Your primary color
- `purple-` → Your accent color

Use VS Code search/replace to update colors in all component files.

### Adding Custom Sections

1. Create new component in `components/sections/YourSection.tsx`
2. Add to `app/page.tsx`:
```typescript
<div id="yoursection">
  <YourSection />
</div>
```
3. Add to navigation in `components/Navigation.tsx`

### Connecting RSVP to Database

See `README.md` section "Adding Backend for RSVP" for detailed instructions.

## 📱 Mobile Optimization

The site is already mobile-responsive, but test these:
- [ ] Navigation menu works on mobile
- [ ] All text is readable
- [ ] Forms are easy to fill out
- [ ] Images load quickly
- [ ] Animations perform well

## 🚀 Performance Tips

1. **Optimize Images:**
   - Use WebP format
   - Compress images before uploading
   - Recommended max size: 1920px wide

2. **Test Performance:**
   - Use Lighthouse in Chrome DevTools
   - Aim for 90+ performance score

## 🎯 Client Handoff

Provide your clients with:
1. Deployed website URL
2. Admin access to update content (if using CMS)
3. Instructions for viewing RSVP responses
4. Contact for support

## 💡 Common Customizations

### Different Event Types
- Rehearsal dinner only
- Multi-day weddings
- Destination weddings
- Micro weddings

Just update the relevant sections in `config/wedding-data.ts` or hide sections you don't need by commenting them out in `app/page.tsx`.

### Hiding Sections
Don't need a section? Comment it out:
```typescript
{/* <div id="registry">
  <Registry />
</div> */}
```

Also remove from navigation array in `components/Navigation.tsx`.

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Animations Not Working
- Check browser console for errors
- Ensure Framer Motion is installed: `npm install framer-motion`
- Clear browser cache

## 📞 Support

For additional help:
1. Check the main README.md
2. Review Next.js documentation
3. Check Framer Motion docs for animation questions

---

Happy wedding website building! 🎉

