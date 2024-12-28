import { useContext } from 'react';

import { TodoContext } from './Context';

import '../styles/TodoSearch.css';

function TodoSearch() {
    const {
        searchTerm, 
        setSearchTerm
    } = useContext(TodoContext);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <input
            className='TodoSearch'
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
}

export { TodoSearch };