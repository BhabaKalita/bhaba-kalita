# Bhabajyoti Kalita — Portfolio

A professional portfolio website built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Dependencies

| Package | Purpose |
|---------|---------|
| next | React framework (App Router) |
| react / react-dom | UI library |
| tailwindcss | Utility-first CSS |
| framer-motion | Animations and transitions |
| lucide-react | Icon library |
| typescript | Type safety |
| eslint | Linting |

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/             # Next.js App Router (layout, page, globals.css)
├── components/      # React components (Hero, Navigation, Skills, etc.)
└── data/
    └── data.ts      # All portfolio content (edit this to update your info)
```

To update your portfolio content (name, skills, experience, services), edit `src/data/data.ts`.
