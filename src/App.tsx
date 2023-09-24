import './App.css';
import Pamphlet from './Components/Pamphlet';
import Component from './Components/ComponentA';
import withLogging from './Components/withLogging';

const pamphlets = ['A', 'B', 'C']

const EnhasncedCard = withLogging(Pamphlet);

function App() {
  return (
    <div className="App">
      <div className='card-container'>
        {
          pamphlets.map(pamphlet => <Pamphlet key={pamphlet} pamphlet={pamphlet} />)
        }
      </div>

      <hr />
      <Component component="B" />
      <Pamphlet />
      <EnhasncedCard />
    </div>
  );
}

export default App;