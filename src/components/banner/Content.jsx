import gsap from "gsap";
import React, { useEffect } from "react";

const Content = ({ activeData }) => {
  useEffect(() => {
    gsap.to(".button", {
      color: activeData.buttonColor.text,
      backgroundColor: activeData.buttonColor.background,
      ease: "power3.inOut",
      duration: 1,
    });

    gsap.to("p", {
      color: activeData.headingColor,
      ease: "power3.inOut",
      duration: 0.8,
    });

    const tl = gsap.timeline({
      delay: 0.2,
    });
    tl.fromTo(
      ".text",
      { y: 200 },
      {
        y: 0,
        duration: 0.8,
        delay: function (i) {
          return 0.2 * i;
        },
      },
    );

    return () => {};
  }, [activeData]);

  return (
    <div className="flex h-2/5 w-full select-none items-center justify-center lg:h-full lg:w-1/2 lg:justify-end ">
      <div className=" flex w-2/3 flex-col items-start justify-start ">
        <h1 className="relative mb-1 w-full overflow-hidden p-1 text-left text-5xl font-bold md:mb-2 md:text-[7vw] ">
          <p className="text">{activeData.heading}</p>
        </h1>
        <h6 className="font-regular mb-6 w-full overflow-hidden p-1 text-left text-2xl md:text-4xl">
          <p className="text">{activeData.subHeading}</p>
        </h6>
        <h6 className="mb-8 w-full overflow-hidden p-1 text-left text-xs font-medium  md:mb-12 md:text-base ">
          <p className="text">{activeData.text}</p>
        </h6>
        <div className="relative overflow-hidden p-4 ">
          <button className="text button cursor-pointer rounded-2xl bg-[#4A6E6A] px-8 py-2  font-medium  outline-none  md:px-10 md:py-4  ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
