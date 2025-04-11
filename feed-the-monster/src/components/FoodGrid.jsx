import { useEffect, useState } from "react";

export const FoodGrid = () => {
  const [images, setImages] = useState([]);
  console.log(images);
  useEffect(() => {
    const imageModules = import.meta.glob("./assets/images/food/*.svg", { eager: true });
    const imageList = Object.entries(imageModules).map(([path, module]) => ({
      src: module.default,
      alt: path.split("/").pop(),
    }));

    setImages(imageList);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {images.map((img, index) => (
        <div>
          <img key={index} src={img.src} />
        </div>
      ))}
    </div>
  );
};
