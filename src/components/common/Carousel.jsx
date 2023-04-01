import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const Carousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      containerProps={{
        style: {
          width: "100%",
          userSelect: "none",
          padding: "0 20px",
        },
      }}
      dotsNav={{
        show: true,
        itemBtnProps: {
          style: {
            height: 16,
            width: 16,
            borderRadius: "50%",
            border: 0,
            background: "pink",
          },
        },
        activeItemBtnProps: {
          style: {
            height: 16,
            width: 16,
            borderRadius: "50%",
            border: 0,
            background: "black",
          },
        },
      }}
      speed={400}
      easing="linear"
    >
      <div className="md:w[400px] h-[280px] w-[500px] bg-green-200">
        slide 0
      </div>
      <div className="md:w[400px] h-[280px] w-[500px] bg-green-200">
        slide 1
      </div>
      <div className="md:w[400px] h-[280px] w-[500px] bg-green-200">
        slide 3
      </div>
      <div className="md:w[400px] h-[280px] w-[500px] bg-green-200">
        slide 4
      </div>
    </ReactSimplyCarousel>
  );
};

export default Carousel;
