import '../styles/TodoItem.css';
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
        >🗑</button>
      </li>
    );
  }

export { TodoItem };