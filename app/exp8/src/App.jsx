import { useState } from "react";
import "./App.css";

function App()
{
  // state variable
  const [count, setCount] = useState(0);
  // increment function
  const increment = () => {
    setCount(count + 1);
  };
  // decrement function
  const decrement = () => {
    setCount(count - 1);
  };
  // reset function
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container-1">
      <div className="container-2">
        <h1>React Counter App</h1>
        <div className="counter">{count}</div>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
export default App;
