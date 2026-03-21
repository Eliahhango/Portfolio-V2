# EliTechWiz Portfolio React

A modern, animated portfolio website built with React, Vite, Framer Motion, and Tailwind CSS.

## Features

✨ **Smooth Animations** - Framer Motion animations with stagger effects, fade-ins, and scroll triggers
📱 **Fully Responsive** - Mobile-first design that works on all devices
🎨 **Modern Design** - Beautiful UI with custom Tailwind CSS configuration
⚡ **Fast Performance** - Built with Vite for lightning-fast development
🚀 **Production Ready** - Optimized for deployment

## Technologies Used

- **React 18** - UI library
- **Vite** - Next generation frontend tooling
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   ├── AnimatedText.jsx    # Reusable animated text component
│   └── Footer.jsx          # Footer with links
├── sections/
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Expertise.jsx       # Skills/expertise section
│   ├── Journey.jsx         # Timeline section
│   ├── Portfolio.jsx       # Projects showcase
│   ├── Contact.jsx         # Contact form
│   └── Newsletter.jsx      # Newsletter signup
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css              # Global styles
```

## Installation

1. Navigate to project directory:
```bash
cd elitechwiz-react
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Animation Features

### Framer Motion Animations Used

- **Fade-In Animations** - Elements fade in on scroll
- **Stagger Effects** - Text and lists appear sequentially
- **Slide-In Animations** - Elements slide from different directions
- **Scale Animations** - Hover effects with scale transforms
- **Hover Effects** - Interactive UI elements with smooth transitions
- **Scroll Triggers** - Animations trigger on viewport entry

## Customization

### Update Colors
Edit the `tailwind.config.js` color theme to match your brand

### Modify Content
Update section data in each component file

### Change Font
Update font imports in `index.html` and `tailwind.config.js`

## Performance Tips

- Uses `whileInView` for scroll-triggered animations
- Lazy loads images
- Optimized for Core Web Vitals
- Code splitting with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 EliTechWiz Innovations. All rights reserved.

## Author

Built by EliTechWiz - Visionary Technologist & Creative Designer

---

**Website:** https://elitechwiz.site
**GitHub:** https://github.com/Eliahhango
