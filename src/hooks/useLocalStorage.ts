import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string) {
    const storedValue = localStorage.getItem(key);

    
    const [value, setValue] = useState(() => {
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });


    const setStoredValue = (newValue: string) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setStoredValue];
}

export default useLocalStorage;