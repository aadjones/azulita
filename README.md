# Azulita Holistics

A bilingual (English/Spanish) website for a holistic healing practice.

## For Editing Content

📝 **[How to Edit Website Copy](./docs/EDITING_COPY.md)** - Change text on any page

🎨 **[How to Edit Visual Styles](./docs/EDITING_STYLES.md)** - Change colors, fonts, spacing

## Quick Start

```bash
npm install         # Install dependencies
npm run dev         # Start development server
npm run dev:clean   # Kill port 3000 and start fresh
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 16 with React 19
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Project Structure

```
azulita/
├── app/              # Pages (English and Spanish)
├── components/       # Reusable UI components
├── content/          # All website text
│   ├── en.ts        # English content
│   └── es.ts        # Spanish content
└── styles/
    └── theme.css    # Colors, fonts, spacing
```

## Deployment

Pushes to `main` automatically deploy to Vercel.

---

Built with Next.js, React, TypeScript, and Tailwind CSS.
