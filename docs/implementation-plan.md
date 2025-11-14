# Azulita Holistics - Implementation Plan

## Project Status: Starting from Scratch

**Last Updated:** 2025-11-14

---

## Phase 1: Foundation & Infrastructure ✅ COMPLETED

### 1.1 Project Initialization ✅
- [x] Initialize Next.js 16 with TypeScript (React 19)
- [x] Configure Tailwind CSS v4
- [x] Set up basic project structure (app/, styles/, lib/, components/, content/)
- [x] Create initial theme.css with design tokens

### 1.2 i18n Infrastructure ✅
- [x] Create LanguageContext and Provider (`lib/i18n/LanguageContext.tsx`)
- [x] Implement useLanguage hook (`lib/i18n/useLanguage.ts`)
- [x] Set up content type definitions (`lib/i18n/types.ts`)
- [x] Create placeholder content files (`content/en.ts`, `content/es.ts`)
- [x] Content loader with TypeScript validation (`content/index.ts`)

### 1.3 Design System ✅
- [x] Configure CSS variables in theme.css
- [x] Set up Tailwind v4 with `@theme inline` syntax
- [x] Create base component classes (btn-primary, btn-secondary, card-base, card-feature)
- [x] Set up globals.css with @layer components
- [x] Configure Inter font

---

## Phase 2: Core Layout Components

### 2.1 Layout Infrastructure
- [ ] Create Layout.tsx wrapper component
- [ ] Build Navigation.tsx with responsive menu
- [ ] Build LanguageToggle.tsx component
- [ ] Build Footer.tsx with Instagram/email links

### 2.2 Basic Pages Structure
- [ ] Create app/page.tsx (English home)
- [ ] Create app/about/page.tsx
- [ ] Create app/services/page.tsx
- [ ] Create app/es/page.tsx (Spanish home)
- [ ] Create app/es/about/page.tsx
- [ ] Create app/es/services/page.tsx

---

## Phase 3: Content Components

### 3.1 Homepage Components
- [ ] Build Hero.tsx with CTA
- [ ] Build ServicesOverview.tsx card grid
- [ ] Build BookingCTA.tsx reusable component

### 3.2 About/Services Components
- [ ] Build AboutSection.tsx
- [ ] Create service detail components

### 3.3 Booking Integration
- [ ] Build ErrorBoundary.tsx
- [ ] Build CalEmbed.tsx with placeholder
- [ ] Implement lazy loading for Cal.com widget

---

## Phase 4: Polish & Optimization

### 4.1 SEO & Metadata
- [ ] Create metadata.ts content structure
- [ ] Implement generateMetadata() for all pages
- [ ] Add Open Graph images

### 4.2 Responsive & Accessibility
- [ ] Test mobile responsiveness
- [ ] Verify keyboard navigation
- [ ] Add ARIA labels
- [ ] Validate color contrast

### 4.3 Performance
- [ ] Optimize images
- [ ] Test lazy loading
- [ ] Verify load times

---

## Phase 5: Deployment Prep

### 5.1 Configuration
- [ ] Create vercel.json if needed
- [ ] Add README.md with editing guide
- [ ] Test build process
- [ ] Verify static export

### 5.2 Documentation
- [ ] Document content editing process
- [ ] Document color/theme editing
- [ ] Add troubleshooting guide

---

## Known Placeholders (To Replace Later)

- **Cal.com**: Using placeholder embed code, need actual Cal.com account setup
- **Content**: All copy is placeholder, needs final English/Spanish text
- **Images**: Using placeholders from brand_assets/ or generic placeholders
- **Domain**: Will be azulitaholistics.com (needs DNS setup later)

---

## Decisions Made

1. **Colors**: Using PRD specifications (#5A9C8E primary, etc.)
2. **Fonts**: Inter for both heading and body
3. **Footer**: Instagram @azulitaholistics, email azulitaholistics@gmail.com
4. **Deployment**: Vercel (manual via website initially)
5. **Approach**: Incremental build, testing as we go

---

## Current Phase: Phase 1 - Foundation & Infrastructure

**Next Steps:** Initialize Next.js project with TypeScript and Tailwind CSS
