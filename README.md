# Comic Portfolio

A comic-book-inspired personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and GSAP. It presents projects, skills, role-focused filtering, and project detail modals in an interactive single-page layout.

## Features

- Role lenses for AI Software Engineering, Data Analysis, and Data Science
- Skill-based project highlighting
- Animated sections and scroll progress using GSAP
- Project detail modals with technology stacks and links
- Responsive layout styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
src/
├── components/          Reusable React components
├── data/                Portfolio content and types
├── assets/              Static imported assets
├── App.tsx              Main portfolio page
├── App.css              Component styles
└── main.tsx             Application entry point
```

Update portfolio content in `src/data/portfolioData.ts`.
