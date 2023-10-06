import React, { useState } from 'react';
import './App.css';
import Pamphlet from './Components/Pamphlet';
import Component from './Components/ComponentA';
import withLogging from './Components/withLogging';

const pamphlets = ['A', 'B', 'C']
interface Bhai {
  pehlaNaam: string;
  aakhriNaam: string;
  email: string;
}


const EnhasncedCard = withLogging(Pamphlet);
const initialState: Bhai = {
  pehlaNaam: '',
  aakhriNaam: '',
  email: ''
}

interface Error {
  [key: string]: string
}


function App() {
  const [Bhai, setBhai] = useState<Bhai>(initialState);
  const [errors, setErrors] = useState<Error>({})


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setBhai({
      ...Bhai,
      [name]: value
    })
  }


    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const newErrors: Error = {};

    if(!Bhai.pehlaNaam.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if(!Bhai.aakhriNaam.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if(!Bhai.email.trim()) {
      newErrors.email = 'email is required'
    } 

    else if(!/^\S+@\S+\.\S+$/.test(Bhai.email)) {
      newErrors.email = 'Invalid email format';
    }

    console.log('newErrors', newErrors, Bhai);
    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    // API CALLING
    console.log('Form submitted successfully');

  }

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
      <h1>Panjikrit Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pehlaNaam">Pehla Naam:</label>

          <input
          type= "text"
          id= "pehlaNaam"
          name= "pehlaNaam"
          placeholder='Pehla naam'
          value={Bhai.pehlaNaam}
          onChange={handleInputChange}
          />
          {errors.pehlaNaam && <p className='error'>{errors.pehlaNaam}</p>}
        </div>
        <div>
          <label htmlFor="aakhriNaam">Aakhri Naam:</label>
          <input
            type="text"
            id="aakhriNaam"
            name="aakhriNaam"
            placeholder='aakhri Naam'
            value={Bhai.aakhriNaam}
            onChange={handleInputChange}
          />
          {errors.aakhriNaam && <p className='error'>{errors.aakhriNaam}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='email'
            value={Bhai.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div>
          <button type='submit'>Submit karr</button>
        </div>
      </form>
    </div>
  );
}
