# TimeTravel Agency

A premium, dark-themed webapp for a fictional time-travel agency. Built with **Next.js 16**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer)

---

## Overview

TimeTravel Agency is an immersive showcase website where users can browse time-travel destinations across history. The project demonstrates modern frontend patterns: scroll-triggered animations, responsive mobile-first design, accessible markup, and a cohesive dark/gold design system.

### Destinations

| Destination | Era | Highlights |
|---|---|---|
| **Paris 1889** | Exposition Universelle | Eiffel Tower inauguration, Belle Epoque atmosphere |
| **Cretace -65M** | Mesozoic Era | Dinosaur safari, prehistoric landscapes |
| **Florence 1504** | Italian Renaissance | Michelangelo's David unveiling, Da Vinci's workshop |

---

## Features

- **Animated Hero** -- Full-screen gradient with staggered entrance animations and gold accent lines
- **Scroll Reveal** -- Framer Motion `useInView`-based fade-in on scroll for all sections
- **Interactive Cards** -- Hover lift effects, shimmer borders, and smooth transitions
- **Chatbot Widget** -- "Chronos" AI assistant with mocked contextual responses and typing indicator
- **Responsive Navbar** -- Scroll-aware blur background with animated mobile menu (AnimatePresence)
- **Accessibility** -- Semantic HTML (`<article>`, `<nav>`, `<address>`), ARIA attributes, `sr-only` labels, `role="log"` on chat
- **Performance** -- Lazy-loaded images with `sizes` attributes, priority loading for hero content

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties (design tokens) |
| UI Components | shadcn/ui |
| Animations | Framer Motion |
| Fonts | Playfair Display (headings) + Inter (body) via `next/font/google` |

---

## Project Structure

```
app/
  page.tsx                        # Home page
  layout.tsx                      # Root layout (fonts, navbar, footer, chatbot)
  globals.css                     # Design tokens + global styles
  destinations/
    page.tsx                      # Destinations grid page
    [slug]/page.tsx               # Dynamic destination detail page

components/
  hero.tsx                        # Full-screen hero with animated gradient
  about-section.tsx               # About section with feature cards
  featured-destinations.tsx       # Featured destinations CTA section
  destinations-grid.tsx           # Animated grid of destination cards
  destination-card.tsx            # Individual destination card (motion)
  destination-detail.tsx          # Full destination detail page content
  navbar.tsx                      # Responsive navbar with scroll detection
  footer.tsx                      # Site footer
  chatbot-widget.tsx              # Floating chatbot with mocked responses
  scroll-reveal.tsx               # Reusable scroll-triggered animation wrapper
  ui/                             # shadcn/ui components

lib/
  destinations.ts                 # Destination data (types + content)
  utils.ts                        # Utility functions (cn)

public/
  images/
    paris-1889.jpg
    cretace-65m.jpg
    florence-1504.jpg
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/RobinThiriet/v0-time-travel-agency.git
cd v0-time-travel-agency

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using shadcn CLI

```bash
npx shadcn@latest init
```

---

## Design System

The project uses a custom dark theme with gold accents, defined via CSS custom properties in `globals.css`:

| Token | Role | Value |
|---|---|---|
| `--background` | Page background | Dark navy `hsl(220, 15%, 5%)` |
| `--foreground` | Body text | Warm off-white `hsl(40, 20%, 92%)` |
| `--primary` | Gold accent | `hsl(43, 60%, 52%)` |
| `--secondary` | Card/surface backgrounds | `hsl(220, 10%, 14%)` |
| `--muted` | Subtle backgrounds | `hsl(220, 10%, 12%)` |
| `--border` | Borders and dividers | `hsl(220, 10%, 16%)` |

Typography uses **Playfair Display** for all headings (`font-serif`) and **Inter** for body text (`font-sans`).

---

## Deploy

Deploy instantly on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RobinThiriet/v0-time-travel-agency)

---

## License

MIT
