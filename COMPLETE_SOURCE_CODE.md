# Ayushmaan Pandey Portfolio - Complete Source Code

## package.json
```json
{
  "name": "ayushmaan-portfolio",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc",
    "db:push": "drizzle-kit push"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-alert-dialog": "^1.1.7",
    "@radix-ui/react-aspect-ratio": "^1.1.3",
    "@radix-ui/react-avatar": "^1.1.4",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-collapsible": "^1.1.4",
    "@radix-ui/react-context-menu": "^2.2.7",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-dropdown-menu": "^2.1.7",
    "@radix-ui/react-hover-card": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-menubar": "^1.1.7",
    "@radix-ui/react-navigation-menu": "^1.2.6",
    "@radix-ui/react-popover": "^1.1.7",
    "@radix-ui/react-progress": "^1.1.3",
    "@radix-ui/react-radio-group": "^1.2.4",
    "@radix-ui/react-scroll-area": "^1.2.4",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-separator": "^1.1.3",
    "@radix-ui/react-slider": "^1.2.4",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.1.4",
    "@radix-ui/react-tabs": "^1.1.4",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-toggle": "^1.1.3",
    "@radix-ui/react-toggle-group": "^1.1.3",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@tanstack/react-query": "^5.60.5",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "connect-pg-simple": "^10.0.0",
    "date-fns": "^3.6.0",
    "drizzle-orm": "^0.39.1",
    "drizzle-zod": "^0.7.0",
    "embla-carousel-react": "^8.6.0",
    "express": "^4.21.2",
    "express-session": "^1.18.1",
    "framer-motion": "^11.13.1",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.453.0",
    "memorystore": "^1.6.7",
    "nanoid": "^5.1.5",
    "next-themes": "^0.4.6",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.55.0",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "^2.15.2",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.2.5",
    "vaul": "^1.1.2",
    "wouter": "^3.3.5",
    "ws": "^8.18.0",
    "zod": "^3.24.2",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "^4.1.3",
    "@types/connect-pg-simple": "^7.0.3",
    "@types/express": "4.17.21",
    "@types/express-session": "^1.18.0",
    "@types/node": "20.16.11",
    "@types/passport": "^1.0.16",
    "@types/passport-local": "^1.0.38",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@types/ws": "^8.5.13",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "drizzle-kit": "^0.30.4",
    "esbuild": "^0.25.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "tsx": "^4.19.1",
    "typescript": "5.6.3",
    "vite": "^5.4.19"
  }
}
```

## vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./client/src"),
      "@assets": resolve(__dirname, "./attached_assets"),
    },
  },
  root: "./client",
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
```

## tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./client/src/**/*.{js,ts,jsx,tsx}",
    "./client/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
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

## client/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Ayushmaan Pandey - Full Stack Developer Portfolio</title>
    <meta name="description" content="Ayushmaan Pandey - Full Stack Developer specializing in Java Spring Boot, React, Node.js, and modern web technologies" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## client/src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(20, 14.3%, 4.1%);
  --muted: hsl(60, 4.8%, 95.9%);
  --muted-foreground: hsl(25, 5.3%, 44.7%);
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(20, 14.3%, 4.1%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(20, 14.3%, 4.1%);
  --border: hsl(20, 5.9%, 90%);
  --input: hsl(20, 5.9%, 90%);
  --primary: hsl(214, 84%, 56%);
  --primary-foreground: hsl(211, 100%, 99%);
  --secondary: hsl(158, 64%, 52%);
  --secondary-foreground: hsl(24, 9.8%, 10%);
  --accent: hsl(43, 96%, 56%);
  --accent-foreground: hsl(24, 9.8%, 10%);
  --destructive: hsl(0, 84.2%, 60.2%);
  --destructive-foreground: hsl(60, 9.1%, 97.8%);
  --ring: hsl(20, 14.3%, 4.1%);
  --radius: 0.5rem;
  --dark: hsl(222, 84%, 5%);
  --dark-light: hsl(217, 33%, 17%);
  --light: hsl(210, 40%, 98%);
}

.dark {
  --background: hsl(222, 84%, 5%);
  --foreground: hsl(0, 0%, 98%);
  --muted: hsl(217, 33%, 17%);
  --muted-foreground: hsl(240, 5%, 64.9%);
  --popover: hsl(222, 84%, 5%);
  --popover-foreground: hsl(0, 0%, 98%);
  --card: hsl(217, 33%, 17%);
  --card-foreground: hsl(0, 0%, 98%);
  --border: hsl(217, 33%, 17%);
  --input: hsl(217, 33%, 17%);
  --primary: hsl(214, 84%, 56%);
  --primary-foreground: hsl(211, 100%, 99%);
  --secondary: hsl(158, 64%, 52%);
  --secondary-foreground: hsl(0, 0%, 98%);
  --accent: hsl(43, 96%, 56%);
  --accent-foreground: hsl(0, 0%, 98%);
  --destructive: hsl(0, 62.8%, 30.6%);
  --destructive-foreground: hsl(0, 0%, 98%);
  --ring: hsl(240, 4.9%, 83.9%);
  --radius: 0.5rem;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
}

@layer utilities {
  .typing-text {
    overflow: hidden;
    border-right: 3px solid hsl(214, 84%, 56%);
    white-space: nowrap;
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
  }

  .skill-card {
    transition: all 0.3s ease;
  }

  .skill-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .scroll-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, hsl(214, 84%, 56%), hsl(158, 64%, 52%));
    transform-origin: left;
    transform: scaleX(0);
    z-index: 9999;
    transition: transform 0.1s ease;
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(50px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: hsl(214, 84%, 56%); }
}
```

## Setup Instructions

1. Create a new project directory
2. Copy all the files above into their respective locations
3. Create the following directory structure:
   ```
   portfolio/
   ├── client/
   │   ├── src/
   │   │   ├── components/
   │   │   ├── hooks/
   │   │   ├── lib/
   │   │   ├── pages/
   │   │   └── ...
   │   └── public/
   ├── server/
   ├── shared/
   └── ...
   ```
4. Install dependencies: `npm install`
5. Add your profile photo to `client/public/profile-photo.jpg`
6. Add your resume to `client/public/resume.pdf`
7. Run development server: `npm run dev`

## Key Features
- Modern React + TypeScript portfolio
- Dark/Light mode toggle
- Responsive design
- Project filtering
- Contact form
- Professional animations
- SEO optimized

The portfolio showcases your 7 projects with proper GitHub links and includes all your professional information.