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
