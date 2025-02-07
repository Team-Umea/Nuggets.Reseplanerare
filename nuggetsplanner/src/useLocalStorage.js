import { useState, useEffect } from "react";
function useLocalStorage(key, initialValue) {
  const item = window.localStorage.getItem(key);
  const parsedItem = item ? JSON.parse(item) : initialValue;

  const [storedValue, setStoredValue] = useState(parsedItem);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;