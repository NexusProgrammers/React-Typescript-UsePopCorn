import { useState, useEffect } from "react";

const useLocalStorageState = <T,>(
  initialState: T,
  key: string
): [T, (value: T) => void] => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorageState;
