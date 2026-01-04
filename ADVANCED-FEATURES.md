# 🎬 Advanced Animation Features

This wedding website now includes **premium, immersive animations** inspired by award-winning photography sites!

## 🚀 Implemented Features

### 1. **Smooth Scroll** (Lenis)
- Buttery smooth momentum-based scrolling throughout the entire site
- Professional feel like Apple, Nike, and other premium brands
- Automatic integration - works everywhere

### 2. **Fixed Background with Scrolling Text** (GSAP ScrollTrigger)
- Images stay pinned while content scrolls over them
- **Just like your Example #1** (the luxury wedding site)
- Perfect for storytelling moments
- Background image subtly scales on scroll for depth

**Component:** `<FixedImageSection />`

```tsx
<FixedImageSection
  imageUrl="/your-image.jpg"
  imageAlt="Description"
  title="Our Story"
  subtitle="How it all began"
  description="Your story text here..."
  darkOverlay={true}
/>
```

### 3. **Image Reveal Animations** (GSAP)
- Images appear with a "wipe" effect as you scroll
- White overlay slides away to reveal the image
- Image zooms in slightly for extra drama
- Can reveal from left, right, top, or bottom

**Component:** `<ImageReveal />`

```tsx
<ImageReveal 
  alt="Photo description" 
  direction="left"
>
  {/* Your image here */}
</ImageReveal>
```

### 4. **Parallax Images** (GSAP)
- Images move at different speeds than content
- Creates depth and immersion
- Perfect for background sections

**Component:** `<ParallaxImage />`

```tsx
<ParallaxImage
  alt="Background"
  speed={0.5}  // 0.5 = slower than scroll
  className="h-[800px]"
>
  {/* Your content */}
</ParallaxImage>
```

### 5. **Advanced Hero Section**
- Parallax background that moves as you scroll
- Content fades out elegantly as you scroll down
- Animated gradient orbs
- Professional countdown timer
- Scroll indicator with bounce animation

**Component:** `<HeroAdvanced />`

## 📚 Libraries Used

### **GSAP (GreenSock Animation Platform)**
- **Best for:** Professional scroll-based animations
- **Industry standard:** Used by Apple, Nike, Google
- **Features:** ScrollTrigger, pinning, scrubbing, timelines
- **License:** Free for most uses
- **Docs:** https://gsap.com/

### **Lenis Smooth Scroll**
- **Best for:** Smooth momentum scrolling
- **Modern:** Native-feeling scroll behavior
- **Performant:** 60fps smooth scrolling
- **Lightweight:** Small bundle size
- **Docs:** https://lenis.darkroom.engineering/

### **Framer Motion**
- **Best for:** React component animations
- **Easy API:** Simple to use with React
- **Already included** in your project
- **Docs:** https://www.framer.com/motion/

## 🎨 Effects Breakdown

### Effect #1: Fixed Image + Scrolling Text
**What it does:** Image stays in place, text scrolls over it

**How it works:**
1. Image container is `position: sticky`
2. GSAP pins it with ScrollTrigger
3. Content scrolls normally
4. Image scales 1.0 → 1.1 for subtle zoom

**Used in:** Story sections, hero moments

### Effect #2: Image Reveal/Wipe
**What it does:** Image appears with sliding overlay

**How it works:**
1. Image starts scaled to 1.3 (zoomed in)
2. White overlay covers it initially  
3. As you scroll, overlay slides away
4. Image scales down to 1.0 (zoom out)

**Used in:** Photo galleries, engagement photos

### Effect #3: Parallax
**What it does:** Elements move at different speeds

**How it works:**
1. Element moves with `transform: translateY`
2. Movement is tied to scroll position
3. Speed multiplier determines effect strength
4. `scrub: 1` makes it smooth

**Used in:** Backgrounds, decorative elements

## 🔧 Customization Guide

### Adjust Scroll Speed
In `SmoothScroll.tsx`:
```tsx
duration: 1.2,  // Higher = slower, Lower = faster
```

### Change Parallax Speed
In `ParallaxImage.tsx` or `FixedImageSection.tsx`:
```tsx
speed={0.5}  // 0 = no movement, 1 = normal, 2 = double speed
```

### Modify Reveal Direction
In `ImageReveal.tsx`:
```tsx
direction="left"   // left, right, top, bottom
```

### Adjust Pin Duration
In `FixedImageSection.tsx`:
```tsx
scrollTrigger: {
  start: "top top",     // When pinning starts
  end: "bottom bottom", // When pinning ends
  scrub: 1,            // 1 = smooth, true = instant
}
```

## 🎯 Performance Tips

1. **Optimize Images:**
   - Use WebP format
   - Compress before uploading
   - Max width: 1920px
   - Use Next.js Image component

2. **GSAP Best Practices:**
   - Always cleanup ScrollTriggers on unmount
   - Use `will-change: transform` for animated elements
   - Keep scrub values between 0.5-2 for best feel

3. **Smooth Scroll:**
   - Already optimized for performance
   - Uses requestAnimationFrame
   - No layout thrashing

## 📱 Mobile Considerations

- **Smooth Scroll:** Disabled on touch devices by default (better native behavior)
- **Parallax:** Automatically adjusts for mobile
- **Fixed Images:** Works on mobile Safari
- **Reveals:** Optimized for mobile performance

## 🆚 Before & After

### Before (Basic):
- Simple fade-in animations
- Standard scrolling
- Static backgrounds
- Basic transitions

### After (Advanced):
- ✅ **Smooth momentum scrolling** (feels premium)
- ✅ **Fixed image sections** (like luxury sites)
- ✅ **Image reveal wipes** (dramatic entrances)
- ✅ **Parallax depth** (immersive experience)
- ✅ **Advanced hero parallax** (professional intro)

## 🎬 Animation Recipes

### Recipe 1: Luxury Story Section
```tsx
<FixedImageSection
  imageUrl="/romantic-photo.jpg"
  title="Our Love Story"
  description="Text here..."
/>
```

### Recipe 2: Photo Gallery with Reveals
```tsx
<div className="grid grid-cols-2 gap-8">
  <ImageReveal direction="left">
    <Image src="/photo1.jpg" ... />
  </ImageReveal>
  <ImageReveal direction="right">
    <Image src="/photo2.jpg" ... />
  </ImageReveal>
</div>
```

### Recipe 3: Parallax Background Section
```tsx
<div className="relative">
  <ParallaxImage speed={0.5} className="h-screen">
    <Image src="/background.jpg" ... />
  </ParallaxImage>
  <div className="absolute inset-0 flex items-center">
    <YourContent />
  </div>
</div>
```

## 🐛 Troubleshooting

### Animations not working?
- Check browser console for errors
- Ensure GSAP is imported: `import { gsap } from "gsap"`
- Register ScrollTrigger: `gsap.registerPlugin(ScrollTrigger)`

### Scroll feels choppy?
- Check FPS in dev tools
- Reduce number of animated elements
- Optimize images

### Mobile issues?
- Test on real devices, not just browser dev tools
- Check if smooth scroll is interfering (it's disabled by default on mobile)
- Reduce parallax intensity on mobile

## 📈 Next Steps

Want even more advanced effects?

1. **3D Animations:** Add Three.js with React Three Fiber
2. **WebGL Effects:** Implement shader-based transitions
3. **Magnetic Buttons:** Add cursor-following hover effects
4. **Custom Cursors:** Create branded cursor experience
5. **Page Transitions:** Add route change animations

## 🎓 Learning Resources

- **GSAP Docs:** https://gsap.com/docs/v3/
- **ScrollTrigger Guide:** https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- **Lenis Docs:** https://lenis.darkroom.engineering/
- **Award-winning sites:** https://www.awwwards.com/

---

Built with ❤️ using industry-leading animation libraries

