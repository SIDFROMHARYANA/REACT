import './App.scss';
import ContactUS from './components/ContactUS';

const person = {
  firstName: 'Ashish',
  lastName: 'Punia',
  city: 'Chandigarh',
  phone: 749006788,
  status: 'Active'
}

const users = [
  {
    firstName: 'Rahul',
    lastName: 'Kumar',
    city: 'Gururgam',
    phone: 943434343
  },
  {
    firstName: 'Ajay',
    lastName: 'Kumar',
    city: 'Gururgam',
    phone: 943434343
  },
  {
    firstName: 'Rakesh',
    lastName: 'Kumar',
    city: 'Gururgam',
    phone: ''
  }
]
const data = [3, 4, 5, 6, 7, 8, 9, 10];

function renderContent(status: string) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Success!</p>;
    case 'error':
      return <p>Error!</p>;
    default:
      return null;
  }
}

function App() {
  const colors = ['RED', 'BLUE', 'GREEN'];

  const getContent = () => {
    return <p>Hi {person.firstName}, REACT IS EASY FOR YOU.</p>
  }

  const getPersonPhone = (userData: any = undefined) => {
    return person?.phone ? `+91 ${person.phone}` : 'phone number is not avaiable'
  }

  return (
   <div className= "App">
      <p> Yeh hai hamaara pehla React App</p>
      {3+6+9}
      <hr />
      <span> Selected Color: {colors[0]} </span>
     
      {getContent()}

      {
        person.city ? `Kahaan Rehta Haai : ${person.city}` : 'Address not avaiable'
      }

      <hr />
      {
        getPersonPhone()
      }
      <hr />
      {
        person.phone ? <p id="text" className='text'>You have phone number. You can subscribe us.</p> : <p>SOrry you dont have phone</p>
      }

      {
        renderContent(person.status)
      }
      {
        new Date().toLocaleTimeString()

      }
      {
        Math.random()
      }
      {
        users.map((user, index) => <ContactUS key={index} user={user} />)
      }
      <hr />
      {
        colors.join(' ')
      }
      <hr />
      {/* Keys help React identify which items have changed, are added,
       or are removed. Keys should be given to the elements inside the array to give the elements a stable identity */}
      {/* {
        colors.map(color => {
          return <p key={color}>{color}</p>
        })
      } */}

      {
        colors.map((color, index) => { 
          return <p key={color}> {index + 1}. {color}</p>    
      })
    }

       
         
      <ul>
       
        {
          colors.map(color => {
            return <li key={color}>{color}</li>
          })
        }
      
      </ul>

      <ul>
       
        {data.map((item) => (
          <li key={item}>{item} - {item % 2 === 0 ? 'Even' : 'Odd'}</li>
        ))}
      
      </ul>

      <ul>
      
        {
          data.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      
      </ul>
     
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
