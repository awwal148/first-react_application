import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
  <button onClick={() => setCounter((prevCount) => prevCount > 0 ? prevCount -1 : 0)}>-</button>
  <h2>{counter}</h2>
  <button onClick={() => setCounter((nextCount) => nextCount + 1)}>+</button>
    </div>
  );
}

export default App;
