import { useState, useEffect } from "react";
const useLocalStorage = (initialValue, id) => {
  const [data, setter] = useState(() => {
    const savedValue = localStorage.getItem(id);
    if (savedValue) {
      return JSON.parse(savedValue);
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(data));
  }, [data, id]);
  return [data, setter];
};
export default useLocalStorage;