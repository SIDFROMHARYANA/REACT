
import {IPerson } from './Person'

const PersonList = ({ persons , handleUpdatePerson, handleDeletePerson } : { persons: IPerson[], handleUpdatePerson: (person: IPerson) => void, handleDeletePerson: (person: IPerson) => void }) =>
{

    const Row = ({ person }: { person: IPerson }) => {
        return <div className='row'>
            <div>{person.name}</div>
            <div>{person.email}</div>
            <div>{person.phone}</div>
            <div>{person.companies.name}</div>
           
            <div className='buttons'>
            <button onClick={() => handleUpdatePerson(person)}>Update</button>
            <button onClick={() => handleDeletePerson(person)}>Delete</button>


            </div>
        </div>
    }



    return (
        <div className='table'>
            <div className='titles'>
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Company</div>
                <div>Actions</div>
            </div>
                 
            
            <div className='rows'>
                {
                    persons.map((person: IPerson) => <Row key={person.id} person={person} />)
                }
            </div>      
        </div>
    )
}

export default PersonList