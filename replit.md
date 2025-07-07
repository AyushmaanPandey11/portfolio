# Ayushmaan Pandey - Full Stack Developer Portfolio

## Overview

This is a frontend-only portfolio web application built for showcasing Ayushmaan Pandey's professional experience, skills, and projects. The application features a modern, responsive design with React and TypeScript, styled with Tailwind CSS and shadcn/ui components, and includes dark mode support.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Architecture
- **Frontend Only**: Pure React application with no backend dependencies
- **Contact Form**: Uses mailto links for direct email communication
- **Data Storage**: Static data embedded in components (no database required)
- **Development**: Vite development server with hot reloading

## Key Components

### Frontend Structure
- **Components**: Modular React components organized by feature
  - UI components from shadcn/ui library
  - Custom components for portfolio sections (Hero, About, Skills, Experience, Projects, Contact)
  - Navigation with scroll progress indicator
  - Dark mode support with theme persistence
- **Hooks**: Custom React hooks for common functionality
  - `use-dark-mode`: Theme switching functionality
  - `use-scroll-progress`: Scroll position tracking
  - `use-toast`: Toast notification system
  - `use-mobile`: Mobile breakpoint detection

### Project Structure
- **Components**: Modular React components for each portfolio section
- **Static Assets**: Profile photo and resume served from public directory
- **Contact System**: Frontend-only contact form using mailto links
- **Project Data**: Static project information embedded in components

## Data Flow

1. **Static Content**: All portfolio data is statically defined in React components
2. **User Interaction**: Contact form creates mailto links for direct email
3. **Asset Loading**: Images and documents served from public directory
4. **Navigation**: Smooth scrolling between sections using JavaScript
5. **State Management**: React useState for component-level state (dark mode, form data)

## External Dependencies

### Core Technologies
- **Static Site**: No backend or database dependencies
- **Email Integration**: Direct mailto links for contact functionality
- **Development Tools**: 
  - Replit integration for development environment
  - Vite for development server and production builds

### UI/UX Libraries
- **Component Library**: Comprehensive shadcn/ui component set
- **Icons**: Lucide React icons
- **Animations**: CSS-based animations with Tailwind utilities
- **Forms**: React Hook Form with Zod validation

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite development server with instant updates
- **Asset Serving**: Static assets served directly from public directory
- **No Database**: All data is static and embedded in components

### Production Build
- **Frontend Only**: Vite builds optimized React application to `dist`
- **Static Assets**: All files ready for static hosting
- **No Server**: Can be deployed to any static hosting platform

### Build Commands
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for static deployment
- `npm run preview`: Preview production build locally

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
- July 07, 2025. Converted to frontend-only application - removed server, database, and API dependencies
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```