import { useContext } from 'react';

import { TodoContext } from './Context';

import '../styles/CreateButton.css';

function CreateButton() {
    const {addTodo} = useContext(TodoContext);
    return (
        <button className="create-button" onClick={() => addTodo}>+</button>
    );
}

export { CreateButton };
