# Azulita Holistics

A bilingual (English/Spanish) landing site for a holistic healing practice offering homeopathy, reiki, and related services.

## Tech Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS variables
- **Hosting**: Vercel
- **Internationalization**: Custom context-based routing (`/` for English, `/es/*` for Spanish)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Before Committing

**Always run checks before committing:**

```bash
npm run check
```

This runs both TypeScript type checking and ESLint. Fix any errors before committing.

### Build

```bash
npm run build
```

This automatically runs `npm run check` first, so broken code won't build.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes checks)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run check` - Run both typecheck and lint

## Project Structure

```
azulita/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # English homepage
│   ├── about/page.tsx       # About page (coming soon)
│   ├── services/page.tsx    # Services page (coming soon)
│   └── es/                  # Spanish routes
├── components/              # React components
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Navigation.tsx      # Header with language toggle
│   └── Footer.tsx          # Footer with contact info
├── content/                 # Bilingual content
│   ├── en.ts               # English content
│   ├── es.ts               # Spanish content
│   └── index.ts            # Content loader
├── lib/
│   └── i18n/               # Internationalization
│       ├── LanguageContext.tsx
│       ├── useLanguage.ts
│       └── types.ts
├── styles/
│   ├── theme.css           # Design tokens (colors, spacing, etc.)
│   └── globals.css         # Global styles and component classes
└── brand_assets/           # Logo, images, reference designs
```

## Editing Content

All site content is in TypeScript files for type safety. This prevents mismatches between English and Spanish translations.

### Changing Copy

1. Open `content/en.ts` (English) or `content/es.ts` (Spanish)
2. Find the section to edit (organized by page with clear comments)
3. Update text in quotes
4. **Important**: Keep the same structure in both language files
5. TypeScript will show errors if the structure doesn't match
6. Run `npm run check` to verify

**Example:**

```typescript
// content/en.ts
home: {
  hero: {
    title: "Welcome to Azulita Holistics",
    subtitle: "Natural healing through homeopathy...",
    cta: "Book Your Consultation"
  }
}

// content/es.ts - MUST have the same structure
home: {
  hero: {
    title: "Bienvenido a Azulita Holistics",
    subtitle: "Sanación natural a través de homeopatía...",
    cta: "Reserva Tu Consulta"
  }
}
```

## Editing Design

### Changing Colors

All colors are defined in one place: `styles/theme.css`

```css
:root {
  --color-primary: #5A9C8E;        /* Main brand color */
  --color-primary-light: #7FBFB2;  /* Lighter variant */
  --color-secondary: #2C4A5A;      /* Dark accent */
  --color-neutral: #E8E4DC;        /* Light backgrounds */
  --color-accent: #89CFF0;         /* Accent color */
}
```

**To change a color:**
1. Open `styles/theme.css`
2. Update the hex value
3. Changes apply everywhere automatically
4. Redeploy

### Changing Spacing or Typography

Edit the CSS variables in `styles/theme.css`:

```css
/* Spacing */
--spacing-section: 4rem;
--spacing-card: 1.5rem;

/* Typography */
--font-heading: 'Inter', sans-serif;
--font-body: 'Inter', sans-serif;
```

## How Language Switching Works

- English pages: `/`, `/about`, `/services`
- Spanish pages: `/es`, `/es/about`, `/es/services`
- Language toggle in navigation switches routes
- Preference saved to browser's localStorage
- Content loaded via `useLanguage()` hook

## Contact Information

- **Email**: azulitaholistics@gmail.com
- **Instagram**: @azulitaholistics

## Future Additions

- Cal.com booking integration (placeholder for now)
- Additional pages (About, Services with full content)
- Spanish route pages
- Open Graph images for social sharing

## Deployment

This site is designed to be deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Builds run `npm run check` first (catches errors before deploy)
4. Custom domain: azulitaholistics.com (configure in Vercel settings)

## Troubleshooting

**Build fails with type errors:**
- Run `npm run typecheck` locally to see the errors
- Usually means content structure doesn't match between en.ts and es.ts

**Lint errors:**
- Run `npm run lint` to see issues
- Most can be auto-fixed by your code editor

**Language toggle not working:**
- Check browser console for errors
- Make sure you're using the `useLanguage()` hook in components
- Verify routes exist (e.g., `/es/about` requires `app/es/about/page.tsx`)

**Styles not applying:**
- Check that class names match those defined in `styles/globals.css`
- Verify Tailwind classes are valid
- CSS variable changes require a rebuild

## Development Notes

- **No tests yet**: This is a simple marketing site. Tests will be added if/when we add complex logic.
- **Type safety**: TypeScript catches most bugs at build time.
- **Quality gates**: The build script ensures broken code never gets deployed.

---

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.
