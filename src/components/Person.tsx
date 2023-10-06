
import React, { useEffect, useState } from 'react'
import PersonList from './PersonList';
import PersonForm from './PersonForm';

export interface IPerson {
    name: string;
    personname: string;
    email: string;
    phone: string;
    companies: ICompany;
    id: number;
}


export interface ICompany {
    id: number;
    name: string;
    catchPhrase: string;
}

const API_URL = 'http://localhost:3000/users';
const Person = () => {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [selectedPerson, setSelectedPerson] = useState<IPerson>();

 


    useEffect(() => {
        // on component load
        // on some props change
        // on unload component
        // console.log('useEffect', users);
        fetchPerson()
    }, [])

    
    
    const fetchPerson = async () => 
    {
       const response = await fetch(`${API_URL}?_expand=companies`);
       const persons = await response.json();
       console.log('persons', persons)
       setPersons(persons);
    } 

    if (persons.length === 0) {
        return <p>There is no Person.</p>
    }  
    

    const handleCreatePerson = async (person:any) =>
    {
        person.username = person.name;

        const response = await fetch(API_URL, 
            {
               method: "POST",
               body: JSON.stringify(person),
               headers: {
                'Content-Type' : 'application/json'
               }
            });
            if(response.ok)
            {
                const persons = await response.json();
                console.log('persons', persons)
                fetchPerson();
            }
    }


    const handleUpdatepersonById = async (person: any, id: number) => {
        person.username = person.name;
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(person),
            headers: {
                'Content-Type': 'application/json'  
            }
        });
        if(response.ok) {
            const persons = await response.json();
            console.log('persons', persons)
            fetchPerson();
        }
    }


    const handleUpdatePerson = (person: IPerson) => {
        setSelectedPerson(person);
    }

    const handleDeletepersonById = async (person: any, id: number) => {
        person.username = person.name;
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            body: JSON.stringify(person),
            headers: {
                'Content-Type': 'application/json'  
            }
        });
        if(response.ok) {
            const persons = await response.json();
            console.log('persons', persons)
            fetchPerson();
        }
    }


    const handleDeletePerson = (person: IPerson) => {
        setSelectedPerson(person);
    }

    
    if (persons.length === 0) {
        return <p>There is no user.</p>
    }


    return (
        <>
            <h3>New user</h3>
            <PersonForm personData={selectedPerson} updatePerson={handleUpdatepersonById} deletePerson={handleDeletepersonById} createPerson={handleCreatePerson}/>
            <PersonList persons ={persons} handleUpdatePerson ={handleUpdatePerson} handleDeletePerson={handleDeletePerson}/>
        </>
    )

    
}

   

export default Person