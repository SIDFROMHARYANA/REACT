import React, { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3000/companies';
interface ICompany {
    id: number;
    name: string;
    catchPhrase: string;
}
const SelectCompanies = ({handleValue, selectedCompanyId}: {handleValue: any, selectedCompanyId: number}) => {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [company, setCompany] = useState<number>(0)

    useEffect(() => {
        fetchCompaines()
    }, [])

    useEffect(() => {
        setCompany(selectedCompanyId)
    }, [selectedCompanyId])

    const fetchCompaines = async () => {
        const response = await fetch(API_URL);
        const res = await response.json();
        // console.log('users', res)
        setCompanies(res);
    }
console.log('company', company)
    return (<select name="companiesId" value={company} onChange={e => {
        setCompany(Number(e.target.value))
        handleValue(e);
    }}>
        <option value={0} disabled>Select Company</option>
        {
            companies.map(company => <option value={company.id} key={company.id}>{company.name}</option>)
        }
    </select>
    )
}

export default SelectCompanies