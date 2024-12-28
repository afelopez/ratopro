import { useContext } from 'react';

import { TodoList } from '../todo/TodoList';
import { TodoCounter } from '../todo/TodoCounter';
import { TodoSearch } from '../todo/TodoSearch';
import { CreateButton } from '../todo/CreateButton';
import { TodoItem } from '../todo/TodoItem';
import { TodoLoading } from '../todo/TodoLoading';
import { Error } from '../todo/Error'; 
import { TodoContext } from '../todo/Context'; 
import { TodoForm } from '../todo/TodoForm'; 
import { Modal } from '../Modal';

function AppUI() {

  const {loading, error, filteredTodos, isOpenModal} = useContext(TodoContext);
  return (
    <div className='container'>
      <TodoCounter />
      <TodoSearch />
      <TodoList> 
          {loading && <TodoLoading />}
          {error && <Error />}
          {filteredTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
            />
          ))}
      </TodoList>        
      <CreateButton />

      {isOpenModal && (
        <Modal>   
          <TodoForm />
        </Modal>
      )}


    </div>  
  );
}

export { AppUI };