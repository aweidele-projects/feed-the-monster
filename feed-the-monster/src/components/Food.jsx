import { useEffect, useRef } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import invariant from "tiny-invariant";

export const Food = ({ src, alt, isFood }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};
