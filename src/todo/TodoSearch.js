import '../styles/TodoSearch.css';

function TodoSearch({
    searchTerm,
    setSearchTerm,
}) {
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