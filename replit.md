# Ayushmaan Pandey - Full Stack Developer Portfolio

## Overview

This is a full-stack portfolio web application built for showcasing Ayushmaan Pandey's professional experience, skills, and projects. The application features a modern, responsive design with a React frontend and Express backend, utilizing PostgreSQL for data storage and styled with Tailwind CSS and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions
- **Development**: Hot reloading with Vite integration

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

### Backend Structure
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Route Management**: Centralized route registration system
- **Development Integration**: Vite middleware for development server
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user authentication structure
  - ID (serial primary key)
  - Username (unique text field)
  - Password (text field)
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **Client Requests**: Frontend makes API calls using React Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: React Query caches and synchronizes server state

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL via Neon Database serverless
- **Authentication**: JWT tokens with bcrypt password hashing
- **Development Tools**: 
  - Replit integration for development environment
  - ESBuild for production bundling
  - Drizzle Kit for database migrations

### UI/UX Libraries
- **Component Library**: Comprehensive shadcn/ui component set
- **Icons**: Lucide React icons
- **Animations**: CSS-based animations with Tailwind utilities
- **Forms**: React Hook Form with Zod validation

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite dev server with Express middleware integration
- **Database**: Development database connection via environment variables
- **Asset Serving**: Static assets served through Vite in development

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database Migrations**: Drizzle Kit handles schema updates
- **Environment**: Production configuration via NODE_ENV

### Build Commands
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

## Changelog

```
Changelog:
- July 07, 2025. Converted React portfolio to standalone HTML file with CDN dependencies
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```