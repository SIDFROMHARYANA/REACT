import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';



function App() {
  const [count, setCount] = useState(0);

 

  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count])

  useLayoutEffect(() => {
    // This code runs synchronously after every render and before the browser paints the screen.
    document.title = `Count: ${count}`;
  }, [count])


  const incrementBadhaao = () => {
    setCount(count + 1);
  };


  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={incrementBadhaao}>Increment</button>
    </div>
    
  );
}


export default App;
