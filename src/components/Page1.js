import React from 'react'
import { useNavigate } from 'react-router-dom'



const Page1 = () => {
    const navigate = useNavigate();

    const handlePage3RedirectClick = () => {
        navigate("/page3")
    }

    
    return (
        <div>
            <h1>
                Page1
            </h1>
            <button onClick={handlePage3RedirectClick}> Page 3 parr le challo</button>
        </div>
    )
}

  

 
export default Page1