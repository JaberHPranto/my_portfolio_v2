import React from "react";
import { projects } from "../../data";
import useThemeStore from "../../store";
import Carousel from "../common/Carousel";

const ProjectsSectionMobile = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      style={{
        backgroundColor: theme.background,
      }}
    >
      <span
        style={{
          color: theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
        }}
        className="ml-5 flex items-center py-5 font-overpass text-xl font-bold"
      >
        Other Noteworthy Projects
      </span>
      <div className="w-full pt-4 pb-20">
        <Carousel />
      </div>
    </div>
  );
};

export default ProjectsSectionMobile;
