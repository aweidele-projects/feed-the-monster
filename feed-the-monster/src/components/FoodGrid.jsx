import { useEffect, useState } from "react";
const food = ["burger.svg", "chicken.svg", "chocolate.bar.svg", "fruitsalad.svg", "sundae.svg", "watermelon.svg"];

export const FoodGrid = () => {
  const [images, setImages] = useState([]);
  console.log(images);
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

  return (
    <div className="grid grid-cols-4 gap-5 items-center">
      {images.map((img, index) => (
        <div>
          <img key={index} src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
};
