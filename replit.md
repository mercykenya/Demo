# Debugging in Space - Station Aurora

## Overview

"Debugging in Space - Station Aurora" is an interactive space debugging simulation game built as a web application. Players take on the role of Engineer Kane navigating Station Aurora to restore critical systems through debugging challenges. The game features a retro sci-fi aesthetic inspired by space station simulation games like Dead Space and Alien Isolation, with terminal-style interfaces and atmospheric tension.

The application is a full-stack TypeScript project using React for the frontend and Express.js for the backend, with a focus on immersive UI/UX and real-time game state management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for component-based UI development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single route `/` serving the game)
- React Query (@tanstack/react-query) for server state management and data fetching

**UI Component System**
- Shadcn/ui component library (New York style variant) for base UI components
- Radix UI primitives for accessible, unstyled component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme extending Tailwind with space-themed color palette (dark backgrounds, cyan/blue accents)

**Design System**
- Retro sci-fi aesthetic with terminal-style interfaces
- Color system: Deep space backgrounds (gray-900, gray-800, black) with cyan primary accents (#06b6d4)
- Status-based color coding: red for critical, yellow for warnings, green for active/success
- Typography: System fonts with uppercase labels, wide tracking for sci-fi feel
- Component patterns defined in `design_guidelines.md` for consistent HUD elements, buttons, and containers

**Game Architecture**
- State management through React hooks (useState, useEffect)
- Component hierarchy: `Game` page → `MainMenu` / `GameWorld` → game-specific components
- Core game components:
  - `GameHUD`: Top navigation and status bars (health, oxygen)
  - `GameMap`: Interactive 2D game world with object interaction
  - `ObjectivesPanel`: Mission objectives and system status
  - `RightPanel`: Tabbed interface for logs, map, and inventory
  - `InspectionModal`: Detailed object examination interface
  - `Starfield`: Animated background effect

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for RESTful API server
- ESM module system (type: "module" in package.json)
- Custom middleware for request logging and JSON body parsing
- HTTP server creation for potential WebSocket upgrades

**Development vs Production**
- Development: Vite dev server integration with HMR
- Production: Static file serving from built assets
- Environment-based configuration via NODE_ENV

**Storage Layer**
- In-memory storage implementation (`MemStorage` class)
- Interface-based design (`IStorage`) for easy database swapping
- Current schema supports user management (id, username, password)
- Prepared for database migration with Drizzle ORM configured

**API Structure**
- Routes defined in `server/routes.ts` with `/api` prefix convention
- Storage interface for CRUD operations
- Request/response logging with JSON capture and 80-character truncation

### Data Storage Solutions

**Current Implementation**
- In-memory Map-based storage for development and testing
- User entities with UUID generation via crypto.randomUUID()

**Database Migration Path**
- Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless`
- Schema defined in `shared/schema.ts` using Drizzle's schema builder
- Migration files output to `./migrations` directory
- Zod schema validation integration via `drizzle-zod`
- Users table schema: varchar id (primary key, UUID default), unique text username, text password

**Session Management**
- `connect-pg-simple` dependency suggests PostgreSQL-backed session storage
- Cookie-based sessions with configured max age and security settings (not yet implemented)

### External Dependencies

**Core Libraries**
- React 18 ecosystem: react, react-dom, react-hook-form
- Routing: wouter (lightweight alternative to react-router)
- State Management: @tanstack/react-query
- Form Validation: react-hook-form, @hookform/resolvers, zod

**UI Component Libraries**
- Radix UI: Complete suite of 25+ accessible component primitives
- Shadcn/ui: Pre-styled component configurations
- Lucide React: Icon library
- cmdk: Command menu/palette component
- Embla Carousel: Carousel/slider functionality

**Styling & Utilities**
- Tailwind CSS: Utility-first CSS framework
- class-variance-authority: Component variant management
- clsx & tailwind-merge: Conditional class merging utilities
- date-fns: Date manipulation and formatting

**Database & ORM**
- Drizzle ORM: Type-safe SQL query builder
- @neondatabase/serverless: PostgreSQL serverless driver
- drizzle-zod: Schema-to-Zod validation generator
- drizzle-kit: Database migration toolkit

**Development Tools**
- Vite: Build tool and dev server
- TypeScript: Static type checking
- ESBuild: Production bundler for server code
- TSX: TypeScript execution for development
- Replit-specific plugins: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner

**Build & Deployment**
- Scripts: `dev` (development server), `build` (production build), `start` (production server), `db:push` (database migrations)
- Client build output: `dist/public`
- Server bundle output: `dist/index.js`