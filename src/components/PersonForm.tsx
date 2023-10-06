

import React, { useEffect, useState } from 'react'
import SelectCompanies from './SelectCompanies'


const PersonForm = ({personData = {} , createPerson , updatePerson , deletePerson}: 

	{personData: any, createPerson: (person: any) => void, updatePerson: (person: any, personId: number) => void, deletePerson: (person: any, personId: number) => void}) => {

    const [person, setPerson] = useState({
        
		name: personData.name ?? "",
        username: personData.username ?? "",
        email: personData.email ?? "",
        phone: personData.phone ?? "",
        companiesId: personData.companiesId ?? "0",
    })

	useEffect(() => {
		if(Object.keys(personData).length) {
			setPerson({...personData, companiesId: personData.companiesId.toString()});
		}
	}, [personData])

	console.log('personData', personData);
 

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPerson({ ...person, [e.target.name]: e.target.value })
	}

	// const handleRemoveField = (personData.id) => {
	// 	const updatedsetPerson = personData.filter((personData) => personData.id !== id);
	// 	setPerson(updatedsetPerson);
	//   };

	

    const submitPerson=(e: any) => {

		e.preventDefault(); 
		if(personData.id) {
			// update
			updatePerson(person, personData.id);
			deletePerson(person, personData.id)
			
		}

		

		else {
			// create
			createPerson(person);
		}
	}

	
    return (
        <form onSubmit={submitPerson} className='row'>
			<input
				type='text'
				name='name'
				value={person.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>

	
			
			<input
				type='email'
				name='email'
				value={person.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
				type='tel'
				name='phone'
				value={person.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>

    <SelectCompanies selectedCompanyId={personData.companiesId || 0} handleValue={handleValue}/>

						
			<input
				className='btn-submit'
				type='submit'
				value={`${!personData.id ? "Add new person" : "Update/Delete person"}`}
			/>			
			
		</form>
    )

	}


export default PersonForm