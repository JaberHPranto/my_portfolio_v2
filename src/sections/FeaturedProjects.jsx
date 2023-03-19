import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const FeaturedProjects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        markers: true,
        start: "38% 50%",
        end: "100% 50%",
        pin: true,
        scrub: 2,
      },
    });

    tl.to(".text", { top: "-7%" }, "a")
      .to("#card-one", { top: "35%" }, "a")
      .to("#card-two", { top: "130%" }, "a")
      .to("#card-two", { top: "42%" }, "b")
      .to("#card-one", { width: "65%", height: "65vh" }, "b")
      .to("#card-three", { top: "130%" }, "b")
      .to("#card-three", { top: "50%" }, "c")
      .to("#card-two", { width: "70%", height: "70vh" }, "c");
  }, []);
  return (
    <div id="main" className="relative min-h-[150vh] w-[100%] bg-[#202020]">
      <div className="text absolute top-1/4 flex w-full flex-col items-center justify-center text-white">
        <h1 className="text text-4xl font-bold">Featured Projects</h1>
      </div>
      <div className="cards" id="card-one" />
      <div className="cards" id="card-two" />
      <div className="cards" id="card-three" />
    </div>
  );
};

export default FeaturedProjects;
