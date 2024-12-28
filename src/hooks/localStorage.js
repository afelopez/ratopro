import { useState, useEffect } from 'react';

function useLocalStorage(valueName, defaultValue = []) {
    const [items, setItems] = useState(defaultValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => { 
      setTimeout(() => {
        try {
          const itemsFromStorage = window.localStorage.getItem(valueName)
          if (itemsFromStorage) {
            setItems(JSON.parse(itemsFromStorage))
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }, 2000);
    }, []);


  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(valueName, stringifiedItem);
      setItems(newItem);
    }
  
    return {items, saveItem, loading, error};
}

export { useLocalStorage };
