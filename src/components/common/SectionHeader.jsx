import React from "react";
import useThemeStore from "../../store";

const SectionHeader = ({ serial, text }) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="my-5 ml-10  flex items-center text-2xl font-semibold md:ml-44 lg:text-3xl">
      <span
        className="mr-2 font-bold"
        style={{
          color: theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
        }}
      >
        {serial}.
      </span>
      <span
        style={{
          color: theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
        }}
        className="font-bold"
      >
        {text}
      </span>
      <div
        className="ml-4 block h-[2px] w-1/4 opacity-20"
        style={{
          backgroundColor:
            theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
        }}
      />
    </div>
  );
};

export default SectionHeader;
