import React, { useState } from "react";
import { tabData } from "../data";

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="relative flex h-screen items-center justify-center bg-[#dde2ef]">
      <div className="flex h-[360px] w-full flex-col overflow-hidden bg-blue-100 px-10 py-8 shadow-lg md:w-2/3 md:flex-row lg:w-1/2">
        <div className="tab-header relative flex w-full items-center justify-center gap-10 md:block md:w-1/4 md:border-r-2 md:border-green-300">
          {tabData.tabHeaders.map((tab, index) => (
            <div
              className={`h-10 cursor-pointer pl-4 text-lg  font-semibold
              ${activeTabIndex === index && "active-tab"}
                  `}
              key={index}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab}
            </div>
          ))}
          <div
            className={`tab-indicator hidden md:block`}
            style={{
              top: `calc(0px + ${activeTabIndex * 40}px)`,
            }}
          ></div>
        </div>
        <div className="tab-content relative w-full">
          {tabData.tabContents.map((tab, index) => (
            <div
              className={`absolute py-10 px-5 transition-all duration-500 ease-in ${
                activeTabIndex === index ? "opacity-1 " : " opacity-0"
              }`}
              key={index}
            >
              <h2 className="text-2xl font-bold">Section - {index}</h2>
              <p>{tab}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
