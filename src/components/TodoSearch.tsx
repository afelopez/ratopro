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
