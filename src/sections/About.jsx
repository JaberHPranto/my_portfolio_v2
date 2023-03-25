import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import AppWrapper from "../components/common/AppWrapper";
import SectionHeader from "../components/common/SectionHeader";
import { useLetterRef } from "../hooks/useLetterRef";
import useThemeStore from "../store";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [lettersRef, setLettersRef] = useLetterRef();
  const triggerRef = useRef();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom 80%",
        scrub: true,
      },
      color: theme.headingColor,
      duration: 5,
      stagger: 1,
    });

    return () => {
      reveal.kill();
    };
  }, [theme]);

  const aboutText =
    "I am a huge fan of web development, especially when it comes to creating exceptional web experiences. I enjoy resolving complicated frontend issues. I love to experiment with different technologies and build fun, accessible and engaging UI that bring products to life.";
  return (
    <div>
      <div className="h-[15vh] md:h-[25vh]" />
      <div>
        <SectionHeader serial="01" text={"About Me"} />
      </div>
      <div className="px-12 md:px-44">
        <div ref={triggerRef}>
          {aboutText.split("").map((letter, index) => (
            <span
              className="reveal-text text-[30px] font-bold md:text-[50px] lg:text-[70px]"
              style={{
                color: theme.background,
              }}
              key={index}
              ref={setLettersRef}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="h-[15vh] md:h-[25vh]" />
    </div>
  );
};

export default AppWrapper(About, "about");
