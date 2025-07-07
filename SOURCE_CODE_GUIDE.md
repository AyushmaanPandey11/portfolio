# Portfolio Source Code Guide

This is a complete guide to recreate Ayushmaan Pandey's portfolio website.

## Project Structure
```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/ (shadcn/ui components)
│   │   │   ├── navigation.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── contact.tsx
│   │   │   └── footer.tsx
│   │   ├── hooks/
│   │   │   ├── use-dark-mode.tsx
│   │   │   ├── use-scroll-progress.tsx
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── utils.ts
│   │   │   └── queryClient.ts
│   │   ├── pages/
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   │   └── resume.pdf
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json
├── drizzle.config.ts
└── postcss.config.js
```

## Key Technologies Used
- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite
- **State Management**: React Query (TanStack Query)
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with CSS custom properties for theming

## Features Implemented
- ✅ Responsive design with dark/light mode toggle
- ✅ Smooth scrolling navigation with progress indicator
- ✅ Professional hero section with typing animation
- ✅ About section with contact info and stats
- ✅ Skills categorized by technology type
- ✅ Experience timeline with current and past positions
- ✅ Projects showcase with filtering by technology
- ✅ Contact form with social media links
- ✅ Downloadable resume functionality
- ✅ Modern animations and hover effects

## Projects Showcased
1. **Journal App** - Java Spring Boot, MongoDB, JWT
2. **Job Portal** - Java Spring Boot, PostgreSQL, JWT
3. **Movie Recommendation App** - React, Redux, Firebase
4. **Food Delivery App** - React, Swiggy API
5. **Kickstarter Blockchain** - Solidity, Ethereum
6. **Event Booking App** - GoLang, Gin, SQLite
7. **Cross-Currency Payment** - MERN Stack

## Setup Instructions
1. Clone/create project directory
2. Copy all files from this guide
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start development server
5. Access portfolio at `http://localhost:5000`

## GitHub Repository Links
- Main Profile: https://github.com/AyushmaanPandey11
- Journal App: https://github.com/AyushmaanPandey11/journal-app
- Job Portal: https://github.com/AyushmaanPandey11/job-portal
- Movie App: https://github.com/AyushmaanPandey11/Movie-Recommendation-App
- Food App: https://github.com/AyushmaanPandey11/Food-Delivery-App
- Blockchain: https://github.com/AyushmaanPandey11/kickstarter

## Contact Information
- Email: ayushmaan1122pandey@gmail.com
- Phone: +91 8639619547
- Location: Hyderabad, Telangana
- GitHub: https://github.com/AyushmaanPandey11

---

**Note**: This portfolio is built with modern web technologies and follows best practices for performance, accessibility, and SEO. All components are fully responsive and optimized for both desktop and mobile devices.