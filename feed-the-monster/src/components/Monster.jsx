import { useEffect, useRef, useState } from "react";
import monster from "./assets/images/monster.svg";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

export const Monster = () => {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return dropTargetForElements({
      element: el,
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, []);

  return (
    <div ref={ref} className={isDraggedOver ? "border-b-sky-700 border-2" : null}>
      <img src={monster} />
    </div>
  );
};
