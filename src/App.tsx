 
  import React, { useRef } from 'react';
  import './App.css';
  import Child from './components/Child';
  
  function App() {
  
    const childRef = useRef<any>(null);
    
  
    const handleOpenModal = (value: boolean) => {
      childRef.current?.openModalTrigger(value);
    }
    return (
      <div className="App">
        <button onClick={() => handleOpenModal(true)}>modal khool</button>
        <Child ref={childRef} />
      </div>
    );
  }
  
  export default App;