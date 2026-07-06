import { Header } from './components/Header';
import { TodoSearch } from './components/TodoSearch';
import { FilterTabs } from './components/FilterTabs';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-2xl mx-auto pb-24">
        <Header />
        <TodoSearch />
        <FilterTabs />
      </div>
    </div>
  );
}

export default App;
