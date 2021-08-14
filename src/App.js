
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to Collatz Conjecture Simulation
        </p>
        <p>
          Some Details about the conjecture
        </p>
        <p>
          A videolink to explain
        </p>
        <p>
          Try it yourself
        </p>
        <form>
        <label>
          Your Number
          <input type="text" name="num" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        
      </header>
    </div>
  );
}

export default App;
