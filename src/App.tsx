import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div className="App">
      {loading && <div>Rukk jaa Load rohe de....</div>}
      <ul>
        {
          (data || []).map((user: any) => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </div>
  );
}
 

export default App;