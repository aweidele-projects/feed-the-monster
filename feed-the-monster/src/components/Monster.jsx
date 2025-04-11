import { useEffect, useRef, useState } from "react";
import monster from "./assets/images/monster.svg";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

export const Monster = () => {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [isFood, setIsFood] = useState(null);
  const [fed, setFed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return dropTargetForElements({
      element: el,
      onDragEnter: ({ source }) => {
        const data = source.data;
        console.log(data?.isFood);
        setIsDraggedOver(true);
        setIsFood(data?.isFood);
      },
      onDragLeave: () => {
        setIsDraggedOver(false);
        setIsFood(null);
      },
      onDrop: ({ source }) => {
        const data = source.data;
        const itemIsFood = data?.isFood;
        console.log(data?.isFood);
        if (itemIsFood) {
          setFed((prev) => prev + 1);
        }
        setIsDraggedOver(false);
        setIsFood(null);
      },
    });
  }, []);

  let borderClass = null;
  if (isDraggedOver) {
    borderClass = isFood ? "border-blue-500 border-4" : "border-red-500 border-4";
  }

  return (
    <div>
      <div ref={ref} className={borderClass}>
        <img src={monster} />
      </div>
      <div className="my-10">
        <progress className="w-full" value={fed} max={6} />
        <p className="mt-2 text-center font-bold text-lg text-green-700">{fed >= 6 ? "The monster is full!" : `Fed: ${fed}`}</p>
      </div>
    </div>
  );
};
