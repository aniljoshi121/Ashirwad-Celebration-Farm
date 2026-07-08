# Ashirwad Celebration Farm

A single-page marketing website for Ashirwad Celebration Farm — a wedding and event venue. Built with React, Vite, Tailwind CSS, and Motion for animations.

🌐 **Live site:** [ashirwadcelebrationfarm.com](https://ashirwadcelebrationfarm.com/)

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling (via `@tailwindcss/vite`)
- **[Motion](https://motion.dev)** (`motion/react`) — animations
- **lucide-react** — icons
- **clsx** + **tailwind-merge** — conditional class name handling

## Project Structure

```
src/
├── App.jsx              # Page layout — composes all sections
├── main.jsx              # React entry point
├── App.css, index.css    # Global styles
├── lib/
│   └── utils.js           # `cn()` helper (clsx + tailwind-merge)
├── components/
│   ├── Nav.jsx             # Site navigation
│   ├── Hero.jsx            # Landing hero section
│   ├── Intro.jsx           # Intro / about section
│   ├── PackagePoster.jsx   # Package promo poster
│   ├── Packages.jsx        # Pricing / package cards
│   ├── Facilities.jsx      # Venue facilities
│   ├── VenueAreas.jsx      # Venue area highlights
│   ├── Gallery.jsx         # Photo gallery
│   ├── Enquiry.jsx         # Enquiry / contact form
│   ├── Footer.jsx          # Site footer
│   └── ui/
│       ├── Button.jsx        # Reusable button
│       ├── PhotoFrame.jsx    # Framed image component
│       ├── RoyalSeal.jsx     # Decorative seal graphic
│       └── Tilt.jsx          # 3D tilt-on-hover wrapper
└── assets/
    ├── gallery/              # Gallery images
    └── venue/                # Venue images
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the local dev server with hot module reloading:

```bash
npm run dev
```

### Build

Create an optimized production build in `dist/`:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Animations

All motion in this project is powered by [Motion](https://motion.dev) (the successor to Framer Motion), imported as:

```js
import { motion } from "motion/react";
```

Animated components include the nav (`Nav.jsx`, with `AnimatePresence` for mobile menu transitions), the hero and intro sections, package cards, facilities, venue areas, gallery, enquiry form, and interactive elements like the tilt-on-hover cards (`ui/Tilt.jsx`) and buttons (`ui/Button.jsx`).

## Path Aliases

The `@` alias points to `src/`, configured in `vite.config.js`:

```js
import { cn } from "@/lib/utils";
```
