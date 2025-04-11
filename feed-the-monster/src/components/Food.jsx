import { useEffect, useRef, useState } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

export const Food = ({ src, alt, isFood }) => {
  const ref = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return draggable({ element: el, onDragStart: () => setDragging(true), onDrop: () => setDragging(false) });
  }, []);

  return (
    <div ref={ref} className={dragging ? "opacity-50" : null}>
      <img src={src} alt={alt} draggable="false" />
    </div>
  );
};
