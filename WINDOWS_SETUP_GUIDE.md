# 🪟 Windows Setup Guide - Frontend-Only Portfolio

## 🚨 Windows Fix for NODE_ENV Error

The error you're seeing is because the current `package.json` uses Unix/Linux syntax. Here's the Windows-compatible version:

### Fixed package.json (Windows Compatible)
```json
{
  "name": "ayushmaan-portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.453.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-tooltip": "^1.2.0"
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

### Fixed vite.config.ts (Simplified)
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: 'localhost'
  },
});
```

## 🚀 Windows Setup Instructions

### 1. Create New Portfolio Project
```bash
# Create project folder
mkdir ayushmaan-portfolio
cd ayushmaan-portfolio

# Initialize npm project
npm init -y
```

### 2. Install Dependencies
```bash
# Install React and core dependencies
npm install react react-dom lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate

# Install Radix UI components
npm install @radix-ui/react-toast @radix-ui/react-tooltip

# Install development dependencies
npm install --save-dev @types/react @types/react-dom @vitejs/plugin-react autoprefixer postcss tailwindcss typescript vite
```

### 3. Create Project Structure
```
ayushmaan-portfolio/
├── public/
│   ├── profile-photo.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── hooks/
│   │   ├── use-dark-mode.tsx
│   │   ├── use-scroll-progress.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

### 4. Configuration Files

#### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### index.html
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

## 🎯 Windows Commands

### Development (Windows)
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### If you still get errors, try:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rmdir /s node_modules
npm install

# Or use yarn instead of npm
yarn install
yarn dev
```

## 📁 Assets Setup

1. **Add your profile photo**: Save as `public/profile-photo.jpg`
2. **Add your resume**: Save as `public/resume.pdf`

## 🌐 Deployment for Windows Users

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Auto-deploy on every commit

### Option 2: Netlify
1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Your site is live!

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

This setup will work perfectly on Windows without any NODE_ENV issues!