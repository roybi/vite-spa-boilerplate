# Vite SPA Boilerplate

A modern, lightweight Single Page Application (SPA) boilerplate built with Vite and vanilla JavaScript.

## ⚡ Features

- **Ultra Fast Development**: Powered by Vite with instant hot module replacement
- **Modern JavaScript**: ES6+ syntax with native module support
- **Zero Configuration**: Works out of the box with sensible defaults
- **Lightning Build**: Optimized production builds with tree-shaking
- **Development Server**: Built-in dev server with automatic browser refresh
- **Mobile Ready**: Responsive design foundation included

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.19.0+ or v22.12.0+)
- npm, yarn, or pnpm

### Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/roybi/vite-spa-boilerplate.git
cd vite-spa-boilerplate
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser:**
Navigate to `http://localhost:5173` to see your application running!

## 📁 Project Structure

```
vite-spa-boilerplate/
├── public/                 # Static assets served directly
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── main.js           # Application entry point
│   ├── style.css         # Global styles
│   ├── counter.js        # Example counter component
│   └── javascript.svg    # JavaScript logo asset
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration (auto-generated)
└── README.md            # This documentation
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |

## 🎨 Development

### Adding Components

Create new JavaScript modules in the `src/` directory:

```javascript
// src/components/button.js
export function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', onClick);
  button.className = 'custom-button';
  return button;
}
```

Import and use in your main application:

```javascript
// src/main.js
import { createButton } from './components/button.js';

const app = document.querySelector('#app');
const myButton = createButton('Click me!', () => {
  alert('Button clicked!');
});
app.appendChild(myButton);
```

### Styling

- **Global Styles**: Edit `src/style.css` for application-wide styles
- **Component Styles**: Import CSS files directly in your JavaScript modules
- **CSS Preprocessors**: Vite supports Sass, Less, and Stylus out of the box

### Environment Variables

Create `.env` files for different environments:

```bash
# .env.local
VITE_API_URL=http://localhost:3000/api
VITE_APP_TITLE=My Awesome App
```

Access in your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
```

## 🚀 Production Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory with:
- Minified JavaScript and CSS
- Asset optimization and compression
- Tree-shaking for smaller bundle sizes
- Source maps for debugging

### Deployment Options

Deploy the `dist/` folder to any static hosting service:

#### Netlify
```bash
# Drag and drop the dist/ folder to netlify.com
# Or connect your GitHub repo for automatic deployments
```

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

#### GitHub Pages
```bash
# Push dist/ contents to gh-pages branch
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run deploy
```

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

## 🧪 Testing

Add your preferred testing framework:

```bash
# Vitest (recommended for Vite projects)
npm install -D vitest jsdom @testing-library/dom

# Jest
npm install -D jest @testing-library/dom jest-environment-jsdom

# Cypress for E2E testing
npm install -D cypress
```

## 🔧 Configuration

### Vite Configuration

Customize build settings in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build',
    sourcemap: true
  },
  base: '/your-app/'  // For GitHub Pages subdirectory
})
```

### Adding Dependencies

```bash
# Production dependencies
npm install axios date-fns lodash

# Development dependencies  
npm install -D eslint prettier @types/node
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow ES6+ best practices
- Use meaningful variable and function names
- Keep functions small and focused
- Add JSDoc comments for complex functions
- Test your changes across different browsers

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
- Vite will automatically try the next available port (5174, 5175, etc.)

**Import errors:**
- Check file paths and extensions
- Ensure proper export/import syntax

**Build failures:**
- Run `npm run build` to see detailed error messages
- Check for missing dependencies or syntax errors

**HMR not working:**
- Try refreshing the browser
- Restart the dev server
- Check browser console for errors

### Getting Help

- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vite)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend build tool
- [Rollup](https://rollupjs.org/) - Module bundler used by Vite
- [esbuild](https://esbuild.github.io/) - Extremely fast JavaScript bundler

---

**Ready to build something amazing?** 🚀

Start developing with `npm run dev` and happy coding!