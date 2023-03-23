import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useLetterRef } from "../hooks/useLetterRef";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [lettersRef, setLettersRef] = useLetterRef();
  const triggerRef = useRef();

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom 80%",
        scrub: true,
      },
      color: "#202020",
      duration: 5,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident, atque, totam harum blanditiis magnam ex accusantium ipsum, quo illum corrupti veniam assumenda repudiandae quidem dolor minima iste ab accusamus.";
  return (
    <div className="bg-yellow-400">
      <div className="h-[50vh]" />
      <div className=" px-60">
        <div ref={triggerRef}>
          {aboutText.split("").map((letter, index) => (
            <span
              className="reveal-text text-[80px] font-bold"
              key={index}
              ref={setLettersRef}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="h-[50vh]" />
    </div>
  );
};

export default About;
