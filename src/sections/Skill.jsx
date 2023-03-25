import React, { useEffect } from "react";
import AppWrapper from "../components/common/AppWrapper";
import SectionHeader from "../components/common/SectionHeader";
import BallCanvas from "../components/skill/BallCanvas";
import { skillsData } from "../data";
import useThemeStore from "../store";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Skill = () => {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    let elementsToAnimate = [".icon"];
    const tl = gsap.timeline();

    tl.set(".icon", {
      opacity: 0,
      y: 75,
    });

    function showSkills(batch) {
      batch.forEach((item, i) => {
        tl.to(item, {
          // This animates all icons and then all labels within the viewport.
          y: 0,
          opacity: 1,
          stagger: 0.2,
        });
      });
    }

    ScrollTrigger.batch(elementsToAnimate, {
      onEnter: showSkills,
      once: true,
    });
  }, []);

  return (
    <div>
      <SectionHeader serial="03" text="My Skills" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 space-y-5 p-10 md:gap-16 md:p-24">
        {skillsData.map((skill, i) => (
          <div
            className="icon flex h-20 w-20 flex-col items-center justify-center md:h-28 md:w-28"
            key={i}
          >
            <BallCanvas icon={skill.icon} />
            <span
              className="mt-2 text-center text-xs font-bold md:text-sm"
              style={{
                color: theme.buttonColor.background,
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrapper(Skill, "skill");
