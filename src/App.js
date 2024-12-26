import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoItem />
      <TodoCounter completed={2} totalx={5} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende para construir un mejor mundo, no para ganar más dinero.
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <input type="checkbox" />
      <span>Texto de ejemplo</span>
      <button>Eliminar</button>
    </li>
  );
}

function TodoCounter(props) {
  return <h2>Has completado {props.completed} de {props.totalx} TODOs</h2>;
}
export default App;
