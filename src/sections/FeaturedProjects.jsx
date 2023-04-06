import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import SectionHeader from "../components/common/SectionHeader";
import { featuredProjects } from "../data";
import useThemeStore from "../store";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import useMobileDevice from "../hooks/useMobileDevice";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const mobileDevice = useMobileDevice();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "38% 50%",
        end: "100% 50%",
        pin: true,
        scrub: 2,
      },
      delay: 1,
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
    <section
      id="main"
      className="relative min-h-[150vh] w-[100%]"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className="text absolute top-1/4 w-full">
        <SectionHeader serial="04" text="Featured Projects" />
      </div>
      {featuredProjects.map((project, i) => (
        <div
          className="cards flex flex-col items-center justify-center gap-10 rounded-lg px-4 shadow-2xl md:flex-row md:px-8"
          id={`card-${project.id}`}
          key={project.id}
          style={{
            backgroundColor: theme.cardColor,
          }}
        >
          <div className="w-full md:w-1/2">
            <video
              src={project.video}
              poster={project.poster}
              controls={!mobileDevice}
            >
              Sorry, your browser doesn't support embedded videos
            </video>
          </div>
          <div
            className="flex w-full flex-col items-center justify-center space-y-4 md:w-1/2 md:items-start"
            style={{
              color: theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
            }}
          >
            <h1 className="text-center text-[28px] font-bold md:text-left md:text-[32px]">
              {project.name}
            </h1>
            <p
              className="text-center text-sm md:text-left md:text-base"
              style={{
                backgroundColor: theme.cardColor,
              }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {project.techStack.map((tech) => (
                <div className="font-semibold" key={tech}>
                  {tech}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                className="flex items-center justify-center gap-1 rounded-md px-2.5 py-1.5 text-sm"
                style={{
                  backgroundColor: theme.buttonColor.background,
                  color: theme.buttonColor.text,
                }}
              >
                <AiFillGithub className="" />
                <a href={project.githubLink} target="_blank">
                  Github
                </a>
              </button>
              {project.isLive && (
                <button
                  className="flex items-center justify-center gap-1 rounded-md px-2.5 py-1.5 text-sm"
                  style={{
                    backgroundColor: theme.buttonColor.background,
                    color: theme.buttonColor.text,
                  }}
                >
                  <HiOutlineExternalLink className="" />
                  <a href={project.liveLink} target="_blank">
                    Live
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProjects;
