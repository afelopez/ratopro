import '../styles/CreateButton.css';

function AddTodoItem(event) {
    console.log(event);
    console.log(event.target);
}


function CreateButton() {
    return (
        <button className="create-button" onClick={AddTodoItem}>+</button>
    );
}

export { CreateButton };
