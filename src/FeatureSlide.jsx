import React, { useEffect } from "react";
import { useRef } from "react";
import useOnScreen from "./useOnScreen";

const FeatureSlide = ({ title, description, index, updateActiveImage }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref); // intersection observer

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [index, onScreen]);

  return (
    <div ref={ref} className="feature-slide">
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  );
};

export default FeatureSlide;
