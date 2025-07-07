# 🎯 Frontend-Only Portfolio - Complete Source Code Guide

## 📁 Project Structure
```
portfolio/
├── client/
│   ├── public/
│   │   ├── profile-photo.jpg    # Your personal photo
│   │   └── resume.pdf           # Your resume
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   ├── navigation.tsx   # Navigation with dark mode
│   │   │   ├── hero.tsx         # Hero section
│   │   │   ├── about.tsx        # About section
│   │   │   ├── skills.tsx       # Skills section
│   │   │   ├── experience.tsx   # Experience section
│   │   │   ├── projects.tsx     # Projects showcase
│   │   │   ├── contact.tsx      # Contact form
│   │   │   └── footer.tsx       # Footer
│   │   ├── hooks/
│   │   │   ├── use-dark-mode.tsx
│   │   │   ├── use-scroll-progress.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx              # Main app component
│   │   ├── main.tsx             # React entry point
│   │   └── index.css            # Global styles
│   └── index.html               # HTML template
├── package.json                 # Dependencies
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS config
└── tsconfig.json               # TypeScript config
```

## 🚀 Quick Start Commands

### Development
```bash
# Install dependencies
npm install

# Start development server
cd client && vite --port 5000 --host 0.0.0.0

# Alternative: Run from root (if vite is globally installed)
npm run dev
```

### Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Complete File Contents

### package.json
```json
{
  "name": "ayushmaan-portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.453.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "typescript": "5.6.3",
    "vite": "^5.4.19"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./client/src"),
    },
  },
  root: "./client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
});
```

### client/src/App.tsx
```tsx
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
```

### client/src/main.tsx
```tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### client/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ayushmaan Pandey - Full Stack Developer</title>
    <meta name="description" content="Full Stack Developer specializing in Java Spring Boot, React, Node.js, and modern web technologies" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 🎨 Key Features

### ✅ What's Included
- **Modern React + TypeScript** - Type-safe development
- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Toggle with persistence
- **Smooth Scrolling** - Navigation between sections
- **Contact Form** - Opens default email client
- **Project Showcase** - 7 real projects with filtering
- **Professional Photo** - Your actual profile image
- **Resume Download** - Direct PDF download link

### 🎯 Portfolio Sections
1. **Hero** - Your photo, name, and call-to-action
2. **About** - Professional summary and stats
3. **Skills** - Technology stack showcase
4. **Experience** - Work timeline and achievements
5. **Projects** - 7 projects with GitHub links
6. **Contact** - Contact form and social links
7. **Footer** - Copyright and additional info

### 🛠 Technologies Used
- **React 18** - Latest React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **Font Awesome** - Additional icons
- **Google Fonts** - Inter font family

## 📦 Assets Required

Add these files to `client/public/`:
- `profile-photo.jpg` - Your professional photo
- `resume.pdf` - Your resume for download

## 🌐 Deployment Options

### Static Hosting (Recommended)
- **Vercel**: Connect GitHub repo for automatic deploys
- **Netlify**: Drag and drop build folder
- **GitHub Pages**: Host directly from repository
- **Surge.sh**: Simple command-line deployment

### Build Process
1. Run `npm run build` 
2. Upload `dist` folder to your hosting provider
3. Your portfolio is live!

## 🔧 Customization

### Update Personal Information
- Edit `client/src/components/hero.tsx` - Name and title
- Edit `client/src/components/about.tsx` - Bio and stats
- Edit `client/src/components/projects.tsx` - Project data
- Edit `client/src/components/contact.tsx` - Contact details

### Styling Changes
- Edit `client/src/index.css` - Global styles and colors
- Edit `tailwind.config.ts` - Theme customization
- Components use Tailwind classes for easy styling

This is your complete frontend-only portfolio - ready to deploy anywhere! 🚀