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
