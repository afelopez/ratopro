import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import '../styles/TodoItem.css';


function TodoItem(props) {
  return (
      <li className={`TodoItem`}>
        <CompleteIcon completed={props.completed} onClick={props.onComplete}/>
        <span  className={`TodoItem-text ${props.completed && "TodoItem-text--completed"}`}>
          {props.text}
        </span>
        <DeleteIcon onClick={props.onDelete}/>
      </li>
    );
  }

export { TodoItem };