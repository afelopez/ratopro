import '../styles/TodoItem.css';

import { CiSquareRemove } from "react-icons/ci";


function TodoItem(props) {
    return (
      <li className={`TodoItem`}>
        <input 
          className={`TodoItem-checkbox`} 
          type="checkbox" 
          defaultChecked={props.completed}
          onChange={props.onComplete}
        />
        <span className={`TodoItem-text ${props.completed && "TodoItem-text--completed"}`}>{props.text}</span>
        <button 
          className='DeleteItem'
          onClick={props.onDelete}
        >
          <CiSquareRemove />
        </button>
      </li>
    );
  }

export { TodoItem };