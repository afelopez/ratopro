import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { Todo, TodoState, TodoAction } from '../types/todo';

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
    default:
      return state;
  }
}

function loadInitialState(): TodoState {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const todos = saved !== null ? (JSON.parse(saved) as Todo[]) : [];
    return { todos, searchTerm: '', activeFilter: 'all', isModalOpen: false };
  } catch {
    return { todos: [], searchTerm: '', activeFilter: 'all', isModalOpen: false };
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
