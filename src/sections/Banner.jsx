import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { data } from "../data";
import Loader from "../components/common/Loader";
import Canvas from "../components/banner/Canvas";
import Content from "../components/banner/Content";
import PcCanvas from "../components/banner/PcCanvas";

const Banner = () => {
  const [activeData, setActiveData] = useState(data[0]);
  const [isLoading, setIsLoading] = useState(true);
  const bannerRef = useRef();

  useEffect(() => {
    gsap.to(bannerRef.current, {
      backgroundColor: activeData.background,
      ease: "power3.inOut",
      duration: 0.8,
    });
    gsap.to(".logo", {
      color: activeData.headingColor,
      ease: "power3.inOut",
      duration: 0.8,
    });
  }, [activeData]);

  const handleSwatchClick = (item) => {
    if (activeData.id !== item.id) setActiveData(item);
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <div ref={bannerRef} className="relative h-screen w-screen">
      {/* {isLoading && <Loader />} */}
      {/* Logo */}
      <div className="logo absolute my-2 ml-6 text-left text-2xl font-bold tracking-widest md:ml-28 lg:my-8 lg:ml-[12vw]">
        PRANTO
      </div>
      {/* Content */}
      <div className="flex h-full w-full flex-col items-center justify-between lg:flex-row-reverse">
        {/* <Canvas
          activeData={activeData}
          swatchData={data}
          handleLoading={handleLoading}
          handleSwatchClick={handleSwatchClick}
        /> */}
        <PcCanvas
          activeData={activeData}
          swatchData={data}
          handleLoading={handleLoading}
          handleSwatchClick={handleSwatchClick}
        />
        <Content activeData={activeData} />
      </div>
    </div>
  );
};

export default Banner;
