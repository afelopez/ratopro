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
