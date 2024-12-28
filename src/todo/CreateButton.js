import { useContext } from 'react';

import { TodoContext } from './Context';

import '../styles/CreateButton.css';

function CreateButton() {
    const {openModal} = useContext(TodoContext);
    return (
        <button className="create-button" onClick={() => openModal()}>+</button>
    );
}

export { CreateButton };
