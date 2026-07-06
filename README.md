# RATOPRO

> **Professional task manager. Priorities. Due dates. Dark theme.**

Live: http://afelopez.github.io/ratopro

---

## Features

- Create tasks with a floating action button
- **Priority levels** — High (red), Medium (amber), Low (green) with color-coded badges and border accents
- **Due dates** — optional per task; overdue tasks flagged in red
- **Smart sorting** — earliest due date first, then by priority within same date; undated tasks at the bottom
- **Filter tabs** — All, Pending, Completed
- **Live search** — filter by text as you type
- **Persistent** — tasks saved to localStorage, survive page refreshes
- **Dark theme** — always dark, no toggle needed
- **Responsive** — works on mobile and desktop

## Tech Stack

| Layer | Technology |
|---|---|
| Build | Vite 6 |
| UI | React 19 + TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Icons | react-icons 5 |
| State | React Context + useReducer |
| Storage | localStorage |
| Deploy | GitHub Pages via gh-pages |

## Getting Started

```bash
git clone https://github.com/afelopez/ratopro.git
cd ratopro
npm install
npm run dev
```

## Build and Deploy

```bash
npm run build
npm run preview
npm run deploy
```

## License

MIT
