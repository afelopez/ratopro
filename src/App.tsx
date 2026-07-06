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
