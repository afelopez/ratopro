import React, { useContext } from 'react';

import {TodoIcon} from './TodoIcon';
import { TodoContext } from './Context';

function CompleteIcon({completed, text}) {
    const {completeTodo} = useContext(TodoContext);
    return (
        <TodoIcon 
            type="check" 
            color={completed ? 'green' : 'gray'} 
            onClick={() => completeTodo(text)}
        />
    );
}

export {CompleteIcon};