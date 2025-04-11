import { useContext } from "react";
import { Food } from "./Food";
import { FoodContext } from "./FoodContext";
const food = ["burger.svg", "chicken.svg", "chocolate-bar.svg", "fruitsalad.svg", "sundae.svg", "watermelon.svg"];

export const FoodGrid = () => {
  const { images } = useContext(FoodContext);
  console.log(images);

  return (
    <div className="grid grid-cols-4 gap-5 items-center">
      {images.map((img, index) => (
        <Food key={img.alt} {...img} />
      ))}
    </div>
  );
};
