import React from 'react';
import {TodoIcon} from './TodoIcon';

function CompleteIcon({completed, onClick}) {
    return (
        <TodoIcon type="check" color={completed ? 'green' : 'gray'} onClick={onClick}/>
    );
}

export {CompleteIcon};