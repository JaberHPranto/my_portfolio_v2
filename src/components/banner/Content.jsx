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
    <div className="md:-pt-10 flex h-2/5 w-full select-none items-center justify-center lg:ml-12 lg:h-full lg:w-1/2">
      <div className="flex w-full flex-col md:w-2/3 md:items-start md:justify-start">
        <h1 className="relative mb-1 w-full overflow-hidden p-1 text-center text-base md:mb-2 md:text-left md:text-xl">
          <p className="text font-alkatra font-semibold">
            <span className="wave mr-2">👋</span>
            Hello, I am Pranto
          </p>
        </h1>
        <h6 className="font-regular mb-6 w-full overflow-hidden p-2 text-center text-2xl md:text-left md:text-3xl lg:text-5xl">
          <p className="text font-mplus font-semibold leading-tight">
            I love to build fun and interactive things for the web
          </p>
        </h6>

        <div className="relative flex items-center justify-center overflow-hidden bg-transparent py-4 md:block">
          <a
            className="text button cursor-pointer rounded-2xl px-8 py-2 font-medium  outline-none  md:px-10 md:py-4"
            href="#"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
