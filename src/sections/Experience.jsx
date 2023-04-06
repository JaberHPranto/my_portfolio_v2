import React, { useState } from "react";
import { BsOctagonFill } from "react-icons/bs";
import SectionHeader from "../components/common/SectionHeader";
import { experienceData } from "../data";
import useThemeStore from "../store";

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const theme = useThemeStore((state) => state.theme);

  return (
    <section
      className="h-[80vh] md:h-[90vh]"
      style={{
        backgroundColor: theme.background,
        color: theme.headingColor,
      }}
    >
      <SectionHeader serial="02" text={"Where I have worked"} />
      <div className="relative -mt-4 flex items-center justify-center">
        <div
          className="mt-0 flex h-[70vh] w-full flex-col overflow-hidden px-5 py-8 md:mt-10 md:h-[400px] md:w-2/3 md:flex-row lg:w-1/2"
          style={{
            backgroundColor: theme.background,
          }}
        >
          <div
            className="tab-header relative flex w-full items-center justify-center md:block md:h-[280px] md:w-2/5 md:border-r-2"
            style={{
              borderColor: theme.tertiaryColor,
            }}
          >
            {experienceData.map((experience, index) => (
              <div
                className={`cursor-pointer p-2 text-center font-mplus font-semibold transition-all duration-200 ease-in md:text-lg
              ${activeTabIndex === index && "active-tab"} `}
                key={index}
                onClick={() => setActiveTabIndex(index)}
                style={{
                  backgroundColor:
                    activeTabIndex === index ? theme.tertiaryColor : "",
                }}
              >
                {experience.companyName}
              </div>
            ))}
            <div
              className={`tab-indicator hidden md:block`}
              style={{
                backgroundColor: theme.buttonColor.background,
                top: `calc(0px + ${activeTabIndex * 44}px)`,
              }}
            ></div>
          </div>
          <div className="tab-content relative mt-4 w-full md:mt-0">
            {experienceData.map((experience, index) => (
              <div
                className={`absolute px-5 transition-all duration-500 ease-in ${
                  activeTabIndex === index ? "opacity-1 " : " opacity-0"
                }`}
                key={index}
              >
                <h2 className="text-base font-bold">
                  {experience.role}{" "}
                  {/* <span className="ml-1 font-semibold text-red-300">
                    @
                    <a
                      href={experience.companyWebsite}
                      target="_blank"
                      style={{
                        position: "relative",
                        zIndex: `-${index + 1}`,
                        top: `${index * 10}`,
                      }}
                    >
                      {experience.companyName}
                    </a>
                  </span>{" "} */}
                </h2>
                <p className="mb-4 text-sm">
                  {experience.period.startDate} - {experience.period.endDate}
                </p>
                <div>
                  {experience.responsibilities.map((responsibility, index) => (
                    <div key={index} className="mb-2 flex">
                      <div
                        className="mr-2 mt-1.5 text-[11px] md:mt-1"
                        style={{
                          color: theme.buttonColor.background,
                          opacity: 0.8,
                        }}
                      >
                        <BsOctagonFill />
                      </div>
                      <p className="text-sm">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
