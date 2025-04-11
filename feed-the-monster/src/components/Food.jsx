import { useEffect, useRef, useState } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

const transparentImage = new Image();
transparentImage.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMXB4IiBoZWlnaHQ9IjFweCIgdmlld0JveD0iMCAwIDEgMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMu\nb3JnLzIwMDAvc3ZnIj48L3N2Zz4=";

export const Food = ({ src, alt, isFood }) => {
  const ref = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return draggable({
      element: el,
      getInitialData: () => ({ isFood, alt }),
      onDragStart: ({ source }) => {
        setDragging(true);
        source.setDragImage(transparentImage, { x: 0, y: 0 });
      },
      onDrop: () => setDragging(false),
      getDragPreview: () => ({
        type: "element",
        element: el,
      }),
    });
  }, []);

  return (
    <div ref={ref} className={`transition-transform duration-200 ease-out ${dragging ? "-rotate-[12deg] scale-110 z-50 pointer-events-none" : ""}`}>
      <img src={src} alt={alt} draggable="false" />
    </div>
  );
};
