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
