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
