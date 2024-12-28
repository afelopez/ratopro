import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';

import '../styles/TodoItem.css';


function TodoItem({completed, text}) {
  return (
      <li className={`TodoItem`}>
        <CompleteIcon completed={completed} text={text}/>
        <span  className={`TodoItem-text ${completed && "TodoItem-text--completed"}`}>
          {text}
        </span>
        <DeleteIcon text={text}/>
      </li>
    );
  }

export { TodoItem };