
import './App.css';
import Problem from './problem';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to Collatz Conjecture Simulation
        </p>
        <p>
          The Collatz Conjecture is currently without a proof, but without a number which doesn't disprove. 
          For this reason it has been the bane of many a mathematician. So don't you want to try it?
        </p>
        <p>
          If you need more information this video explains the conjecture more:
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/094y1Z2wpJg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>
          Try it yourself
        </p>
        <Problem/>
      </header>
    </div>
  );
}

export default App;
