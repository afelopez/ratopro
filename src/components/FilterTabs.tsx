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
