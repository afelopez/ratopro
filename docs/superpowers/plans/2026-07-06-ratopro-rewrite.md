# RATOPRO — Full TypeScript Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite RATOPRO from Create React App to a branded Vite + React + TypeScript todo app with priorities, due dates, dark theme, logo, and a proper README — then push to GitHub.

**Architecture:** Single-page React app. Context + useReducer owns all state; localStorage persists todos via lazy initializer + useEffect sync. All components TypeScript strict. Tailwind v4 utilities handle all styling. No backend.

**Tech Stack:** Vite 6, React 19, TypeScript 5 strict, Tailwind CSS v4 (`@tailwindcss/vite`), react-icons 5, gh-pages 6

## Global Constraints

- TypeScript `strict: true` — no `any`, no implicit returns
- Tailwind CSS v4 — config via CSS `@theme {}`, NOT `tailwind.config.js`
- App name in all UI: `RATOPRO` (uppercase)
- `package.json` name: `ratopro`, homepage: `http://afelopez.github.io/ratopro`
- Accent color: `#7c3aed` (purple)
- Background: `#0f1117`, card surface: `#1a1d27`
- Always dark — no light/dark toggle; no `dark:` prefix needed
- `vite.config.ts` must set `base: '/ratopro/'` for GitHub Pages
- Deploy: `vite build` → `dist/`, gh-pages serves `dist/`

---

### Task 1: Clone repo, remove CRA files, scaffold Vite + TypeScript

**Files:**
- Clone: entire repo to `/home/afelopez/Black-List/ratopro`
- Delete: `src/`, `public/`, `package.json`, `package-lock.json`
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`
- Keep: `docs/` (spec + plan)

**Interfaces:**
- Produces: `npm run dev` starts at `http://localhost:5173/ratopro/` showing "RATOPRO"

- [ ] **Step 1: Clone the repository**

```bash
cd /home/afelopez/Black-List
git clone https://github.com/afelopez/ratopro.git
cd ratopro
```

- [ ] **Step 2: Remove all CRA-generated files**

```bash
rm -rf src public package.json package-lock.json
```

- [ ] **Step 3: Create package.json**

Create `package.json`:
```json
{
  "name": "ratopro",
  "version": "1.0.0",
  "homepage": "http://afelopez.github.io/ratopro",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.4.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "gh-pages": "^6.2.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 4: Create vite.config.ts**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/ratopro/',
  plugins: [react(), tailwindcss()],
});
```

- [ ] **Step 5: Create tsconfig.json**

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

- [ ] **Step 6: Create tsconfig.app.json**

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

- [ ] **Step 7: Create tsconfig.node.json**

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 8: Create index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RATOPRO — Task Manager</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 9: Create src/index.css**

```css
@import "tailwindcss";
```

- [ ] **Step 10: Create src/App.tsx**

```tsx
function App() {
  return <div>RATOPRO</div>;
}

export default App;
```

- [ ] **Step 11: Create src/main.tsx**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- [ ] **Step 12: Install dependencies**

```bash
npm install
```

Expected: no errors, `node_modules/` created.

- [ ] **Step 13: Verify dev server**

```bash
npm run dev
```

Expected: server at `http://localhost:5173/ratopro/` showing "RATOPRO".

- [ ] **Step 14: Commit**

```bash
git add -A
git commit -m "chore: migrate from CRA to Vite + TypeScript"
```

---

### Task 2: Tailwind CSS v4 dark theme

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.tsx` (smoke test)

**Interfaces:**
- Produces: `bg-bg-primary` → `#0f1117`, `text-accent` → `#7c3aed`

- [ ] **Step 1: Replace src/index.css**

```css
@import "tailwindcss";

@theme {
  --color-bg-primary: #0f1117;
  --color-bg-card: #1a1d27;
  --color-accent: #7c3aed;
  --color-accent-hover: #6d28d9;
  --color-text-primary: #f1f5f9;
  --color-text-muted: #64748b;
  --color-border: #2d3148;
}

* { box-sizing: border-box; }

body {
  background-color: #0f1117;
  color: #f1f5f9;
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
}
```

- [ ] **Step 2: Update App.tsx to smoke-test Tailwind**

```tsx
function App() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <h1 className="text-4xl font-bold font-mono tracking-widest text-accent">
        RATOPRO
      </h1>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Expected: dark `#0f1117` background, "RATOPRO" in purple `#7c3aed`.

- [ ] **Step 4: Commit**

```bash
git add src/index.css src/App.tsx
git commit -m "feat: add Tailwind v4 dark theme configuration"
```

---

### Task 3: Types + useLocalStorage hook

**Files:**
- Create: `src/types/todo.ts`
- Create: `src/hooks/useLocalStorage.ts`

**Interfaces:**
- Produces:
  - `Priority`: `'low' | 'medium' | 'high'`
  - `FilterTab`: `'all' | 'pending' | 'completed'`
  - `Todo`: `{ id, text, completed, priority, dueDate, createdAt }`
  - `TodoState`: `{ todos, searchTerm, activeFilter, isModalOpen }`
  - `TodoAction`: discriminated union of all reducer actions
  - `useLocalStorage<T>(key, initialValue)` → `[T, (v: T) => void]`

- [ ] **Step 1: Create src/types/todo.ts**

```typescript
export type Priority = 'low' | 'medium' | 'high';
export type FilterTab = 'all' | 'pending' | 'completed';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  dueDate: string | null;
  createdAt: string;
}

export interface TodoState {
  todos: Todo[];
  searchTerm: string;
  activeFilter: FilterTab;
  isModalOpen: boolean;
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: Omit<Todo, 'id' | 'createdAt'> }
  | { type: 'COMPLETE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTER'; payload: FilterTab }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' };
```

- [ ] **Step 2: Create src/hooks/useLocalStorage.ts**

```typescript
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // Storage unavailable — continue in-memory only
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no output (no errors).

- [ ] **Step 4: Commit**

```bash
git add src/types/todo.ts src/hooks/useLocalStorage.ts
git commit -m "feat: add Todo types and useLocalStorage hook"
```

---

### Task 4: TodoContext + useReducer + Provider

**Files:**
- Create: `src/context/TodoContext.tsx`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx` (smoke test)

**Interfaces:**
- Consumes: `Todo`, `TodoState`, `TodoAction`, `FilterTab` from `../types/todo`
- Produces: `useTodo()` → `{ state, dispatch, filteredTodos, completedCount, totalCount }` and `<TodoProvider>`

- [ ] **Step 1: Create src/context/TodoContext.tsx**

```tsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { Todo, TodoState, TodoAction, FilterTab } from '../types/todo';

const STORAGE_KEY = 'RATOPRO_V1';
const PRIORITY_ORDER: Record<string, number> = { high: 0, medium: 1, low: 2 };

function sortTodos(todos: Todo[]): Todo[] {
  return [...todos].sort((a, b) => {
    if (a.dueDate === null && b.dueDate === null)
      return (PRIORITY_ORDER[a.priority] ?? 1) - (PRIORITY_ORDER[b.priority] ?? 1);
    if (a.dueDate === null) return 1;
    if (b.dueDate === null) return -1;
    const dateDiff = a.dueDate.localeCompare(b.dueDate);
    if (dateDiff !== 0) return dateDiff;
    return (PRIORITY_ORDER[a.priority] ?? 1) - (PRIORITY_ORDER[b.priority] ?? 1);
  });
}

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...action.payload, id: crypto.randomUUID(), createdAt: new Date().toISOString() },
        ],
        isModalOpen: false,
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter(t => t.id !== action.payload) };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    case 'SET_FILTER':
      return { ...state, activeFilter: action.payload };
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };
  }
}

function loadInitialState(): TodoState {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const todos = saved !== null ? (JSON.parse(saved) as Todo[]) : [];
    return { todos, searchTerm: '', activeFilter: 'all' as FilterTab, isModalOpen: false };
  } catch {
    return { todos: [], searchTerm: '', activeFilter: 'all' as FilterTab, isModalOpen: false };
  }
}

interface TodoContextValue {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
  filteredTodos: Todo[];
  completedCount: number;
  totalCount: number;
}

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, undefined, loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos));
    } catch { /* storage unavailable */ }
  }, [state.todos]);

  const filteredTodos = sortTodos(
    state.todos.filter(todo => {
      const matchesSearch = todo.text.toLowerCase().includes(state.searchTerm.toLowerCase());
      if (!matchesSearch) return false;
      if (state.activeFilter === 'pending') return !todo.completed;
      if (state.activeFilter === 'completed') return todo.completed;
      return true;
    })
  );

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        filteredTodos,
        completedCount: state.todos.filter(t => t.completed).length,
        totalCount: state.todos.length,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo(): TodoContextValue {
  const ctx = useContext(TodoContext);
  if (ctx === null) throw new Error('useTodo must be used within <TodoProvider>');
  return ctx;
}
```

- [ ] **Step 2: Wrap app in src/main.tsx**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './context/TodoContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
);
```

- [ ] **Step 3: Smoke-test context in App.tsx**

```tsx
import { useTodo } from './context/TodoContext';

function App() {
  const { completedCount, totalCount } = useTodo();
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <p className="text-text-primary">{completedCount}/{totalCount} tasks</p>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit && npm run dev
```

Expected: no TS errors, browser shows "0/0 tasks".

- [ ] **Step 5: Commit**

```bash
git add src/context/TodoContext.tsx src/main.tsx src/App.tsx
git commit -m "feat: add TodoContext with useReducer and localStorage persistence"
```

---

### Task 5: RatoProLogo + Header + TodoCounter

**Files:**
- Create: `src/assets/RatoProLogo.tsx`
- Create: `src/components/TodoCounter.tsx`
- Create: `src/components/Header.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `useTodo()` → `completedCount`, `totalCount`
- Produces: `<RatoProLogo />`, `<TodoCounter />`, `<Header />`

- [ ] **Step 1: Create src/assets/RatoProLogo.tsx**

```tsx
interface RatoProLogoProps { className?: string; }

export function RatoProLogo({ className = '' }: RatoProLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 120 60" width="72" height="36" aria-hidden="true" className="group">
        {/* Tail */}
        <path d="M 32 40 Q 14 52 7 39 Q 2 28 11 22" stroke="#7c3aed" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Body */}
        <ellipse cx="60" cy="36" rx="28" ry="17" fill="#7c3aed" />
        {/* Head */}
        <circle cx="91" cy="30" r="14" fill="#7c3aed" />
        {/* Ear outer */}
        <circle cx="87" cy="17" r="8" fill="#7c3aed" />
        {/* Ear inner */}
        <circle cx="87" cy="17" r="4.5" fill="#4c1d95" />
        {/* Back legs */}
        <ellipse cx="44" cy="51" rx="6" ry="3.5" fill="#6d28d9" />
        <ellipse cx="56" cy="52" rx="6" ry="3.5" fill="#6d28d9" />
        {/* Front legs */}
        <ellipse cx="74" cy="51" rx="6" ry="3.5" fill="#6d28d9" />
        <ellipse cx="84" cy="52" rx="6" ry="3.5" fill="#6d28d9" />
        {/* Eye white */}
        <circle cx="97" cy="27" r="3.5" fill="white" />
        {/* Eye pupil — glows on hover */}
        <circle cx="98" cy="27" r="2" fill="#7c3aed" className="group-hover:fill-violet-300 transition-colors duration-300" />
        {/* Nose */}
        <ellipse cx="105" cy="31" rx="2.5" ry="2" fill="#a78bfa" />
        {/* Checkmark on body */}
        <path d="M 48 36 L 55 43 L 70 27" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-2xl font-bold font-mono tracking-widest text-violet-400 select-none">
        RATOPRO
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Create src/components/TodoCounter.tsx**

```tsx
import { useTodo } from '../context/TodoContext';

export function TodoCounter() {
  const { completedCount, totalCount } = useTodo();
  return (
    <p className="text-text-muted text-sm">
      <span className="text-accent font-semibold">{completedCount}</span>
      {' of '}
      <span className="font-semibold text-text-primary">{totalCount}</span>
      {' tasks completed'}
    </p>
  );
}
```

- [ ] **Step 3: Create src/components/Header.tsx**

```tsx
import { RatoProLogo } from '../assets/RatoProLogo';
import { TodoCounter } from './TodoCounter';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border">
      <RatoProLogo />
      <TodoCounter />
    </header>
  );
}
```

- [ ] **Step 4: Update App.tsx**

```tsx
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-2xl mx-auto">
        <Header />
      </div>
    </div>
  );
}

export default App;
```

- [ ] **Step 5: Verify in browser**

Run `npm run dev`. Expected: dark header with rat SVG + "RATOPRO" in purple, counter showing "0 of 0 tasks completed".

- [ ] **Step 6: Commit**

```bash
git add src/assets/RatoProLogo.tsx src/components/TodoCounter.tsx src/components/Header.tsx src/App.tsx
git commit -m "feat: add logo, header, and counter components"
```

---

### Task 6: TodoSearch + FilterTabs

**Files:**
- Create: `src/components/TodoSearch.tsx`
- Create: `src/components/FilterTabs.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `useTodo()` → `state.searchTerm`, `state.activeFilter`, `dispatch`; `FilterTab` type
- Produces: `<TodoSearch />`, `<FilterTabs />`

- [ ] **Step 1: Create src/components/TodoSearch.tsx**

```tsx
import { FiSearch } from 'react-icons/fi';
import { useTodo } from '../context/TodoContext';

export function TodoSearch() {
  const { state, dispatch } = useTodo();
  return (
    <div className="relative px-6 pt-4">
      <FiSearch className="absolute left-10 top-1/2 mt-2 -translate-y-1/2 text-text-muted w-4 h-4 pointer-events-none" />
      <input
        type="text"
        placeholder="Search tasks..."
        value={state.searchTerm}
        onChange={e => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
        className="w-full bg-bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
      />
    </div>
  );
}
```

- [ ] **Step 2: Create src/components/FilterTabs.tsx**

```tsx
import { useTodo } from '../context/TodoContext';
import type { FilterTab } from '../types/todo';

const TABS: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

export function FilterTabs() {
  const { state, dispatch } = useTodo();
  return (
    <div className="flex gap-2 px-6 pt-3 pb-1">
      {TABS.map(tab => (
        <button
          key={tab.value}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: tab.value })}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            state.activeFilter === tab.value
              ? 'bg-accent text-white'
              : 'bg-bg-card text-text-muted border border-border hover:border-accent hover:text-text-primary'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Update App.tsx**

```tsx
import { Header } from './components/Header';
import { TodoSearch } from './components/TodoSearch';
import { FilterTabs } from './components/FilterTabs';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-2xl mx-auto pb-24">
        <Header />
        <TodoSearch />
        <FilterTabs />
      </div>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Verify in browser**

Run `npm run dev`. Expected: search input with magnifier icon; three filter pills (All active in purple, others in dark card style).

- [ ] **Step 5: Commit**

```bash
git add src/components/TodoSearch.tsx src/components/FilterTabs.tsx src/App.tsx
git commit -m "feat: add search input and filter tabs"
```

---

### Task 7: PriorityBadge + DueDateChip + TodoItem

**Files:**
- Create: `src/components/PriorityBadge.tsx`
- Create: `src/components/DueDateChip.tsx`
- Create: `src/components/TodoItem.tsx`

**Interfaces:**
- Consumes: `Todo`, `Priority` types; `useTodo()` → `dispatch`
- Produces: `<PriorityBadge priority={Priority} />`, `<DueDateChip dueDate={string|null} />`, `<TodoItem todo={Todo} />`

- [ ] **Step 1: Create src/components/PriorityBadge.tsx**

```tsx
import type { Priority } from '../types/todo';

const CONFIG: Record<Priority, { label: string; className: string }> = {
  high:   { label: 'High',   className: 'bg-red-500/20 text-red-400 border-red-500/30' },
  medium: { label: 'Medium', className: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  low:    { label: 'Low',    className: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  const { label, className } = CONFIG[priority];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>
      {label}
    </span>
  );
}
```

- [ ] **Step 2: Create src/components/DueDateChip.tsx**

```tsx
import { FiAlertCircle, FiCalendar } from 'react-icons/fi';

export function DueDateChip({ dueDate }: { dueDate: string | null }) {
  if (dueDate === null) return null;
  const today = new Date().toISOString().slice(0, 10);
  const isOverdue = dueDate < today;
  const formatted = new Date(dueDate + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
  return (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${
      isOverdue
        ? 'text-red-400 bg-red-500/10 border-red-500/30'
        : 'text-text-muted bg-bg-card border-border'
    }`}>
      {isOverdue ? <FiAlertCircle className="w-3 h-3" /> : <FiCalendar className="w-3 h-3" />}
      {formatted}
    </span>
  );
}
```

- [ ] **Step 3: Create src/components/TodoItem.tsx**

```tsx
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import type { Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';
import { PriorityBadge } from './PriorityBadge';
import { DueDateChip } from './DueDateChip';

const BORDER: Record<string, string> = {
  high: 'border-l-red-500',
  medium: 'border-l-amber-400',
  low: 'border-l-emerald-400',
};

export function TodoItem({ todo }: { todo: Todo }) {
  const { dispatch } = useTodo();
  return (
    <li className={`flex items-start gap-3 bg-bg-card rounded-xl p-4 border border-border border-l-4 ${
      BORDER[todo.priority] ?? 'border-l-border'
    } transition-opacity ${todo.completed ? 'opacity-50' : ''}`}>
      <button
        onClick={() => dispatch({ type: 'COMPLETE_TODO', payload: todo.id })}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
          todo.completed ? 'bg-accent border-accent' : 'border-border hover:border-accent'
        }`}
      >
        {todo.completed && <FiCheck className="w-3 h-3 text-white" />}
      </button>
      <div className="flex-1 min-w-0">
        <p className={`text-sm text-text-primary ${todo.completed ? 'line-through text-text-muted' : ''}`}>
          {todo.text}
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <PriorityBadge priority={todo.priority} />
          <DueDateChip dueDate={todo.dueDate} />
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        aria-label="Delete task"
        className="text-text-muted hover:text-red-400 transition-colors flex-shrink-0 mt-0.5"
      >
        <FiTrash2 className="w-4 h-4" />
      </button>
    </li>
  );
}
```

- [ ] **Step 4: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/PriorityBadge.tsx src/components/DueDateChip.tsx src/components/TodoItem.tsx
git commit -m "feat: add PriorityBadge, DueDateChip, and TodoItem"
```

---

### Task 8: TodoList with empty states

**Files:**
- Create: `src/components/TodoList.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `useTodo()` → `filteredTodos`, `state`; `<TodoItem todo={Todo} />`
- Produces: `<TodoList />`

- [ ] **Step 1: Create src/components/TodoList.tsx**

```tsx
import { FiCheckCircle, FiInbox } from 'react-icons/fi';
import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { filteredTodos, state } = useTodo();

  if (state.todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-text-muted gap-3">
        <FiInbox className="w-12 h-12 opacity-30" />
        <p className="text-sm">No tasks yet. Hit <span className="text-accent">+</span> to add one.</p>
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-text-muted gap-3">
        <FiCheckCircle className="w-12 h-12 opacity-30" />
        <p className="text-sm">No tasks match your current filter.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-3 px-6 pt-4">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
```

- [ ] **Step 2: Update App.tsx**

```tsx
import { Header } from './components/Header';
import { TodoSearch } from './components/TodoSearch';
import { FilterTabs } from './components/FilterTabs';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-2xl mx-auto pb-24">
        <Header />
        <TodoSearch />
        <FilterTabs />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Expected: inbox icon with "No tasks yet" empty state.

- [ ] **Step 4: Commit**

```bash
git add src/components/TodoList.tsx src/App.tsx
git commit -m "feat: add TodoList with empty state handling"
```

---

### Task 9: Modal + TodoForm + CreateButton — full app wired

**Files:**
- Create: `src/components/Modal.tsx`
- Create: `src/components/TodoForm.tsx`
- Create: `src/components/CreateButton.tsx`
- Modify: `src/App.tsx` (final wiring)

**Interfaces:**
- Consumes: `useTodo()` → `state.isModalOpen`, `dispatch`; `Priority` type
- Produces: `<Modal>`, `<TodoForm />`, `<CreateButton />`

- [ ] **Step 1: Create src/components/Modal.tsx**

```tsx
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTodo } from '../context/TodoContext';

export function Modal({ children }: { children: ReactNode }) {
  const { dispatch } = useTodo();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dispatch({ type: 'CLOSE_MODAL' }); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [dispatch]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
    >
      <div
        className="bg-bg-card border border-border rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create src/components/TodoForm.tsx**

```tsx
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTodo } from '../context/TodoContext';
import type { Priority } from '../types/todo';

export function TodoForm() {
  const { dispatch } = useTodo();
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim().length === 0) { setError('Task text is required.'); return; }
    dispatch({
      type: 'ADD_TODO',
      payload: { text: text.trim(), completed: false, priority, dueDate: dueDate !== '' ? dueDate : null },
    });
    setText(''); setPriority('medium'); setDueDate(''); setError('');
  };

  const inputClass = 'bg-bg-primary border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-text-primary">New Task</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="todo-text" className="text-sm text-text-muted">Task</label>
        <input
          id="todo-text" type="text" placeholder="What needs to be done?"
          value={text} onChange={e => { setText(e.target.value); setError(''); }}
          className={inputClass} autoFocus
        />
        {error !== '' && <p className="text-red-400 text-xs">{error}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="todo-priority" className="text-sm text-text-muted">Priority</label>
        <select
          id="todo-priority" value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
          className={inputClass}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="todo-date" className="text-sm text-text-muted">Due Date (optional)</label>
        <input
          id="todo-date" type="date" value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          className={`${inputClass} [color-scheme:dark]`}
        />
      </div>

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
          className="flex-1 py-2.5 rounded-xl border border-border text-text-muted hover:border-accent hover:text-text-primary transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold transition-colors"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
```

- [ ] **Step 3: Create src/components/CreateButton.tsx**

```tsx
import { FiPlus } from 'react-icons/fi';
import { useTodo } from '../context/TodoContext';

export function CreateButton() {
  const { dispatch } = useTodo();
  return (
    <button
      onClick={() => dispatch({ type: 'OPEN_MODAL' })}
      aria-label="Add new task"
      className="fixed bottom-8 right-8 w-14 h-14 bg-accent hover:bg-accent-hover text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
    >
      <FiPlus className="w-6 h-6" />
    </button>
  );
}
```

- [ ] **Step 4: Final App.tsx**

```tsx
import { Header } from './components/Header';
import { TodoSearch } from './components/TodoSearch';
import { FilterTabs } from './components/FilterTabs';
import { TodoList } from './components/TodoList';
import { CreateButton } from './components/CreateButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { useTodo } from './context/TodoContext';

function App() {
  const { state } = useTodo();
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-2xl mx-auto pb-24">
        <Header />
        <TodoSearch />
        <FilterTabs />
        <TodoList />
      </div>
      <CreateButton />
      {state.isModalOpen && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
```

- [ ] **Step 5: Full app verification**

Run `npm run dev`. Test the full flow:
1. Click `+` — modal opens
2. Enter text, pick priority, pick date → click Add Task — modal closes, task appears
3. Click circle → task gets strikethrough + fades
4. Click trash → task removed
5. Type in search → list filters live
6. Click filter tabs → list switches
7. Refresh page → tasks persist from localStorage
8. Press Escape when modal open → modal closes

- [ ] **Step 6: Commit**

```bash
git add src/components/Modal.tsx src/components/TodoForm.tsx src/components/CreateButton.tsx src/App.tsx
git commit -m "feat: add modal, form, and create button — app fully functional"
```

---

### Task 10: README + build + push

**Files:**
- Modify: `README.md`

**Interfaces:**
- Produces: Professional README; passing `npm run build`; all commits pushed to GitHub; app live on GitHub Pages

- [ ] **Step 1: Replace README.md**

```markdown
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
# → http://localhost:5173/ratopro/
```

## Build & Deploy

```bash
npm run build      # production build into dist/
npm run preview    # preview the build locally
npm run deploy     # push to GitHub Pages
```

## License

MIT
```

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: `dist/` created with no TypeScript or Vite errors.

- [ ] **Step 3: Preview production build**

```bash
npm run preview
```

Expected: app loads at `http://localhost:4173/ratopro/` with all features working.

- [ ] **Step 4: Commit README**

```bash
git add README.md
git commit -m "docs: add RATOPRO README with features, stack, and setup"
```

- [ ] **Step 5: Push all commits to GitHub**

```bash
git push origin master
```

- [ ] **Step 6: Deploy to GitHub Pages**

```bash
npm run deploy
```

Expected: `gh-pages` branch updated. Visit `http://afelopez.github.io/ratopro` — app loads live.
