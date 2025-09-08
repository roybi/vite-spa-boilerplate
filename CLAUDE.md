# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **NeuroSync** - a sophisticated Single Page Application showcasing a brain wave AI device. Built with Vite and vanilla JavaScript, it features an Apple-inspired design with comprehensive theme switching capabilities.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (requires Node.js v20.19+ or v22.12+) |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

**Note:** The current Node.js version may cause dev server issues, but `build` and `preview` commands work correctly.

## Application Architecture

### Core Structure
The application follows a **class-based SPA architecture** with the main `NeuroSyncApp` class orchestrating all functionality:

```javascript
class NeuroSyncApp {
  init() {
    this.createApp()           // Renders all sections
    this.setupThemeSystem()    // Theme switching logic
    this.setupScrollAnimations() // Intersection Observer animations
    this.setupMicroInteractions() // Hover effects and interactions  
    this.setupParallaxEffects()   // Scroll-based animations
  }
}
```

### Section Rendering Pattern
Each major section has its own `create*()` method that returns HTML strings:
- `createNavigation()` - Fixed navigation with theme toggle
- `createHero()` - Main hero section with device visual
- `createProductShowcase()` - Apple-style product cards (3 device variants)
- `createProductGallery()` - Interactive gallery with device details
- `createFeatures()` - Feature cards with icons and descriptions
- `createTechSpecs()` - Technical specifications grid
- `createFooter()` - Footer with links

### Theme System Architecture

**Dual Theme Support:** Light and Dark modes with CSS custom properties
- Theme state stored in `localStorage` as `'neurosync-theme'`
- HTML `data-theme` attribute controls theme application
- CSS variables defined per theme in `:root` and `[data-theme]` selectors

**Key Theme Variables:**
```css
--bg-primary, --bg-secondary, --bg-tertiary  // Background layers
--text-primary, --text-secondary, --text-tertiary  // Text hierarchy
--card-bg, --card-bg-alt, --card-border  // Card styling
--border-primary, --border-secondary  // Border colors
```

### Animation System

**Scroll Animations:** Uses Intersection Observer for fade-in effects on `.scroll-fade` elements

**Micro-interactions:** JavaScript-driven hover effects for:
- Device cards with 3D transforms
- Feature cards with tilt effects based on mouse position  
- Navigation elements with smooth hover states

**Parallax Effects:** RequestAnimationFrame-based scroll effects for device elements

### Styling Architecture

**CSS Structure:**
- CSS Custom Properties for theming
- Component-based styling (navigation, hero, showcase, etc.)
- Responsive breakpoints at 768px and 1200px
- Smooth transitions (0.3s ease) for all theme changes
- Performance optimizations with `will-change` and `transform-style: preserve-3d`

**Key Design Patterns:**
- Apple-inspired gradients and typography
- Card-based layouts with consistent spacing
- Subtle animations and micro-interactions
- Mobile-first responsive design

### Device Visualization Components

The app includes custom CSS-based device mockups:
- **Main device view** - Circular design with sensor array animation
- **Profile view** - Side profile with ergonomic curves  
- **Tech view** - Circuit board with data flow animations
- **Ecosystem view** - Connected devices with pulse animations

## File Organization

```
vite-spa-boilerplate/
├── src/
│   ├── main.js        # Core application class and logic
│   └── style.css      # Complete theming and styling system
├── public/
│   └── brain-icon.svg # Custom brain icon for favicon
└── index.html         # Entry point with Inter font loading
```

## Development Notes

- **All content is dynamically generated** - no static HTML sections
- **Theme persistence** automatically saves user preference
- **Smooth scrolling** is implemented for all navigation links  
- **Mobile responsive** with collapsing navigation menu
- **Performance optimized** with efficient scroll listeners and RAF-based animations

## Extending the Application

When adding new sections:
1. Create a new `create*()` method following the existing pattern
2. Add the method call to `createApp()`
3. Implement corresponding CSS with theme variables
4. Add scroll animation class `.scroll-fade` for fade-in effects
5. Consider mobile responsiveness in CSS media queries