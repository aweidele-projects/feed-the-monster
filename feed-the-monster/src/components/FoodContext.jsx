import { useState, createContext } from "react";
export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [fed, setFed] = useState(0);
  const addFood = () => {
    setFed((prevNum) => prevNum + 1);
  };

  return <FoodContext.Provider value={{ fed, setFed }}>{children}</FoodContext.Provider>;
};
