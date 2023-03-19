import React from "react";
import BallCanvas from "../components/skill/BallCanvas";
import { skillsData } from "../data";

const Skill = () => {
  return (
    <div className="flex h-screen w-[100%] flex-row flex-wrap items-center justify-center gap-16">
      {skillsData.map((skill, i) => (
        <div className="h-28 w-28" key={i}>
          <BallCanvas icon={skill.icon} />
        </div>
      ))}
    </div>
  );
};

export default Skill;
