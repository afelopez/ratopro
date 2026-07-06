# RATOPRO Redesign — Design Spec

**Date:** 2026-07-06  
**Status:** Approved  

---

## Overview

Full TypeScript rewrite of RATOPRO (formerly a Platzi CRA course project) into a polished, production-ready personal task manager. Priorities, due dates, dark theme, and a branded identity.

---

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Build | Vite 6 | Replaces unmaintained CRA; fast HMR, native ESM |
| UI | React 19 + TypeScript (strict) | Full type safety |
| Styling | Tailwind CSS v4 | Utility-first, dark theme as default |
| Icons | react-icons | Already in project |
| Deploy | gh-pages via `vite build` | Unchanged |

---

## Data Model

```typescript
type Priority = 'low' | 'medium' | 'high';

interface Todo {
  id: string;           // crypto.randomUUID()
  text: string;
  completed: boolean;
  priority: Priority;   // default: 'medium'
  dueDate: string | null; // ISO date "YYYY-MM-DD", nullable
  createdAt: string;    // ISO timestamp
}
```

### Reducer Actions

- `ADD_TODO` — append new todo
- `COMPLETE_TODO` — toggle completed by id
- `DELETE_TODO` — remove by id
- `SET_SEARCH` — update search term
- `OPEN_MODAL` / `CLOSE_MODAL` — modal visibility

### Sorting

List sorted by due date ascending (nulls last). Within same due date: high → medium → low priority.

### Filtering

Tabs: **All / Pending / Completed** — stacked with the existing text search.

---

## Component Tree

```
App.tsx
├── Header
│   ├── RatoProLogo (SVG inline component)
│   └── TodoCounter ("X of Y tasks completed")
├── TodoSearch (text input)
├── FilterTabs (All | Pending | Completed)
├── TodoList
│   └── TodoItem
│       ├── PriorityBadge (pill: high=red, medium=amber, low=green)
│       ├── DueDateChip (turns red-400 + warning icon if overdue)
│       ├── CompleteButton (checkmark)
│       └── DeleteButton (trash)
├── CreateButton (floating FAB, bottom-right)
└── Modal
    └── TodoForm
        ├── Text input
        ├── PrioritySelect (low | medium | high)
        └── DatePicker (native <input type="date">)
```

**File structure:**

```
src/
  components/    ← all UI components
  context/       ← TodoContext + useReducer
  hooks/         ← useLocalStorage<T>
  types/         ← Todo interface, Priority type
  assets/        ← RatoProLogo SVG component
  App.tsx
  main.tsx
```

---

## Visual Design

| Token | Value | Usage |
|---|---|---|
| Background | `#0f1117` | Page background |
| Card | `#1a1d27` | Todo item surface |
| Accent | `#7c3aed` | Buttons, focus rings, active states |
| High priority | `red-500` | Badge + left border |
| Medium priority | `amber-400` | Badge + left border |
| Low priority | `emerald-400` | Badge + left border |
| Overdue | `red-400` | DueDateChip when past today |
| Font | System sans-serif | Tailwind default |

Completed tasks: strikethrough text + `opacity-50`.

---

## Logo

**Concept:** Minimalist rat silhouette in profile (facing right) with a small checkmark on its body. Name "RATOPRO" in bold monospace to the right. Color: `#7c3aed` purple.

**Implementation:** Inline SVG as a React component `<RatoProLogo />` — no image dependency, scales perfectly, subtle glow-pulse CSS animation on the eye on hover.

**Tab title:** `RATOPRO — Task Manager`

**Repo description:** `Professional task manager built with React + TypeScript. Priorities, due dates, dark theme.`

---

## README Structure

```
# RATOPRO
[logo]
> Professional task manager. Priorities. Due dates. Dark theme.

## Features
## Tech Stack
## Getting Started (clone, install, dev)
## Deployment
## License
```

---

## Out of Scope

- Backend / cloud sync (localStorage only)
- Authentication
- Multiple lists / projects
- Drag-and-drop reordering
- Testing suite
