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
