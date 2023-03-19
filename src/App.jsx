import React, { useState } from "react";
import cn from "classnames";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { featuredSlides } from "./data";
import FeatureSlide from "./FeatureSlide";
import ScrollTrigger from "gsap/ScrollTrigger";

const RenderImage = ({ activeFeatureIndex }) => {
  return featuredSlides.map(({ imageUrl }, index) => (
    <img
      key={index}
      className={cn({ "as-primary": activeFeatureIndex === index })}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ));
};

const App = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureRightSliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureRightSliderRef.current,
          start: "top top",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }

    const master = gsap.timeline();
    master.add(stopTrigger);
  }, []);

  return (
    <div className="feature-slides-container" ref={featureSliderRef}>
      <div className="feature-slides-left">
        {featuredSlides.map((feature, index) => (
          <FeatureSlide
            title={feature.title}
            description={feature.description}
            index={index}
            key={index}
            updateActiveImage={setActiveFeatureIndex}
          />
        ))}
      </div>
      <div className="feature-slides-right" ref={featureRightSliderRef}>
        <RenderImage activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  );
};

export default App;
