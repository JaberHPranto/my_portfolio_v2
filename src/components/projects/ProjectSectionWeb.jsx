import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projects } from "../../data";
import useThemeStore from "../../store";

gsap.registerPlugin(ScrollTrigger);

function ProjectSectionWeb() {
  const projectScroller = useRef();
  const projectRef = useRef();
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    let projectSet = gsap.utils.toArray(".project-set");

    let to = gsap.to(projectSet, {
      xPercent: () => -100 * (projectSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectScroller.current,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (projectSet.length - 1),
        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="flex overflow-hidden">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={projectScroller}
          className=" relative flex h-screen w-[600vw] overflow-x-hidden"
          style={{
            backgroundColor: theme.background,
            color: theme.headingColor,
          }}
        >
          {projects.map((project, index) => (
            <section
              ref={projectRef}
              key={index}
              className="project-set z-50 flex h-full w-screen items-center bg-transparent px-12"
            >
              <div className="relative m-auto flex max-h-[100vh] max-w-[70vw] flex-col gap-4 lg:flex-row lg:gap-0">
                {project.type === "image" ? (
                  <img
                    src={project.picture}
                    alt={project.name}
                    className="h-[50vh] w-full object-cover shadow-xl lg:w-1/2"
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    <video
                      src={project.video}
                      poster={project.picture}
                      controls
                      className="h-auto w-full lg:h-[50vh]"
                    >
                      Sorry, your browser doesn't support embedded videos
                    </video>
                  </div>
                )}

                <div className="flex w-full flex-col items-center justify-center gap-5 lg:w-1/2 lg:items-end">
                  <div className="flex flex-col items-center gap-1 lg:items-end">
                    <h1
                      className="text-center text-2xl font-bold md:text-3xl lg:text-left"
                      style={{
                        color:
                          theme.theme == "Dark"
                            ? "#fbd38d"
                            : theme.secondaryColor,
                      }}
                    >
                      {project.name}
                    </h1>
                    {project?.category && (
                      <span
                        className="text-left font-semibold"
                        style={{ color: theme.buttonColor.background }}
                      >
                        #FreelanceWork
                      </span>
                    )}
                  </div>
                  <div
                    className="p-4 text-center text-sm leading-relaxed shadow-xl lg:-ml-12 lg:p-5 lg:text-right"
                    style={{
                      backgroundColor: theme.cardColor,
                    }}
                  >
                    {project.description}
                  </div>
                  <div
                    className="flex flex-wrap items-center justify-center gap-5"
                    style={{
                      color:
                        theme.theme == "Dark"
                          ? "#fbd38d"
                          : theme.secondaryColor,
                    }}
                  >
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
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSectionWeb;
