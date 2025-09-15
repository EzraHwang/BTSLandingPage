# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite travel landing page built with TypeScript, shadcn/ui components, and Tailwind CSS. The project uses modern React patterns with React Router for navigation and TanStack Query for state management.

## Development Commands

**Primary development workflow:**
```bash
cd ticket-trip-ai-main
npm run dev          # Start development server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

**Installation:**
```bash
cd ticket-trip-ai-main
npm i               # Install dependencies
```

## Project Structure

The main project is located in `ticket-trip-ai-main/` directory:

```
ticket-trip-ai-main/
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components (50+ components)
│   │   ├── Hero.tsx         # Landing page hero section
│   │   ├── ValueProposition.tsx
│   │   ├── FeaturesProof.tsx
│   │   ├── TrustCredibility.tsx
│   │   ├── EngagementSection.tsx
│   │   └── Footer.tsx
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Main landing page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   └── App.tsx              # Main app with routing setup
├── public/                  # Static assets
└── package.json             # Dependencies and scripts
```

## Architecture Notes

**Main Technologies:**
- **React 18** with TypeScript
- **Vite** as build tool with SWC for fast compilation
- **shadcn/ui** component library (extensive UI components in `src/components/ui/`)
- **Tailwind CSS** for styling with custom configuration
- **React Router** for client-side routing
- **TanStack Query** for data fetching and state management
- **React Hook Form** with Zod validation

**Key Patterns:**
- Single-page application with component-based landing page sections
- Path alias `@/` points to `src/` directory
- All main landing page components are imported into `Index.tsx`
- Uses modern React patterns (hooks, functional components)
- ESLint configured with TypeScript and React-specific rules

**Styling:**
- Tailwind CSS with custom configuration in `tailwind.config.ts`
- Component styling follows shadcn/ui patterns
- Responsive design patterns throughout components

**Development Server:**
- Runs on port 8080 (configured in vite.config.ts)
- Hot reload enabled
- Component tagging enabled in development mode via lovable-tagger

**Build Configuration:**
- TypeScript strict mode enabled
- Path resolution configured for `@/` alias
- Separate development and production build commands available