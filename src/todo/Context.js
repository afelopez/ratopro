import React, {useState} from "react";

import { useLocalStorage } from "../hooks/localStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {items: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1');
    
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));


    const completeTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(todo => todo.text === text);
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    }

    const openModal = () => {        
        setIsOpenModal(!isOpenModal);
    }

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchTerm,
                setSearchTerm,
                filteredTodos,
                completeTodo,
                deleteTodo,
                openModal,
                isOpenModal,
                setIsOpenModal
            }} 
        >
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };