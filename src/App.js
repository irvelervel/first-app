import logo from './logo.svg'
import './App.css'

// un componente React può semplicemente essere una funzione che ritorna
// una sintassi simile all'HTML -> questa sintassi si chiama JSX
// differenze tra HTML e JSX:
// - tutti gli attributi "class" diventano "className"
// - le variabili si iniettano nella sintassi più facilmente, con { }

const myName = 'Stefano'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PRIMO COMPONENTE REACT!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {myName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          EPICODE!
        </a>
      </header>
    </div>
  )
}

export default App
