import { useContext, useState } from "react";
import { TodoContext } from "../../todo/Context";
import './TodoForm.css'

function TodoForm() {
  const [value, setValue] = useState("");
  const { addTodo, isOpenModal, setIsOpenModal } = useContext(TodoContext)
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    setIsOpenModal(!isOpenModal)
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export {TodoForm};