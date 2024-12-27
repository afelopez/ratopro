import React, { useState } from 'react';

import { TodoList } from './todo/TodoList';
import { TodoCounter } from './todo/TodoCounter';
import { TodoSearch } from './todo/TodoSearch';
import { CreateButton } from './todo/CreateButton';
import { TodoItem } from './todo/TodoItem';

const defaultTodos = [
  { text: 'Aprender', completed: true },
  { text: 'Cuestionar', completed: false },
  { text: 'Aplicar', completed: false },
  { text: 'Amar mucho a mi esposa', completed: false },
];

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [todos, setTodos] = useState(defaultTodos);
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  }
  
  return (
    <div className='container'>  
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <hr />
      <TodoList > 
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateButton />
    </div>  
  );
}

export default App;
