import { useState, createContext, useEffect } from "react";
export const FoodContext = createContext();

const food = ["burger.svg", "chicken.svg", "chocolate-bar.svg", "fruitsalad.svg", "sundae.svg", "watermelon.svg"];

export const FoodProvider = ({ children }) => {
  const [fed, setFed] = useState(0);
  const [images, setImages] = useState([]);

  const addFood = () => {
    setFed((prevNum) => prevNum + 1);
  };

  useEffect(() => {
    const imageModules = import.meta.glob("./assets/images/food/*.svg", { eager: true });
    const imageList = Object.entries(imageModules).map(([path, module]) => {
      const alt = path.split("/").pop();
      const isFood = food.includes(alt);
      return {
        src: module.default,
        alt: alt,
        isFood: isFood,
      };
    });

    setImages(imageList);
  }, []);

  return <FoodContext.Provider value={{ fed, setFed, images, setImages }}>{children}</FoodContext.Provider>;
};
