import React, { useEffect, useState } from 'react'



const useFetch = (url:string)=> {

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
   


    async function fetchData() {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])
    return { data, loading }
}

export default useFetch