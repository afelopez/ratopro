import React, { useContext } from 'react';

import {TodoIcon} from './TodoIcon';
import { TodoContext } from './Context';

function DeleteIcon({text}) {
    const {deleteTodo} = useContext(TodoContext);
    return (
        <TodoIcon type="delete" color={'gray'} onClick={()=> deleteTodo(text)}/>
    );
}

export {DeleteIcon};