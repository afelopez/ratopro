import {useContext} from 'react';

import { TodoContext } from './Context';

import '../styles/TodoCounter.css';

function TodoCounter() {
    const {
        totalTodos: total, 
        completedTodos: completed
    } = useContext(TodoContext);

    const defaultMessage = 'No tasks to do, add a new task';
    const todo_message = total === 0 ? defaultMessage : `Todo Tasks completed ${completed} of ${total}`;
    const message = total === completed && total > 0 ? "Contratulations, you have finished all the tasks to do!" : todo_message;

    return (
        <div className='todo-counter'>
            <h2>{message}</h2>
        </div>
    );
}

export { TodoCounter };