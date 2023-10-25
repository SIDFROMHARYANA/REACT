import { useReducer } from 'react';
import './App.css';


const counterReducer1 = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

 

function App() {
  const [state, dispatch] = useReducer(counterReducer1, { count: 0 });
  console.log('state', state);
  

  return (
    <div className="App">
      <p>Count: {state.count}</p> 
      <button onClick={() => dispatch({type: 'INCREMENT'})}>BADHAA</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>GHAATA</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>ORIGINAL</button>
      
    </div>
  );
}

export default App;


