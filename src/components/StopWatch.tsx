
import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
    const [count, setCount] = useState(0);
     const intervalIdRef = useRef<any>();

   

    const startHandler = () => { 
        if (intervalIdRef.current) { 
            return; 
        }


        intervalIdRef.current = setInterval(() => setCount(prev => { // keep calling after 1 sec
            return prev + 1;
        }), 1000)
       
    }

    const stopHandler = () => { 
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = 0;
    }



    useEffect(() => {
        // on component unmount clear internal
        return () => clearInterval(intervalIdRef.current);
    }, [])

    return (
        <div>
            <div>Timer: {count}s</div>
            <div>
                <button onClick={startHandler}>Shuru hojaa</button>
                <button onClick={stopHandler}>Ruk jaa</button>
            </div>
        </div>
    )
}

export default StopWatch