import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import useThemeStore from "../../store";

const ProjectCard = ({ project }) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className="flex h-[450px] flex-col rounded-lg shadow-sm"
      style={{
        backgroundColor: theme.cardColor,
        color: theme.headingColor,
      }}
    >
      <img
        alt={project.name}
        src={project.picture}
        className="h-[230px] rounded-md object-cover p-2.5"
      />

      <div className="flex h-2/3 flex-col items-center justify-center gap-1">
        <div className="flex flex-col items-center">
          <h1
            className="text-center text-xl font-bold"
            style={{
              color: theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
            }}
          >
            {project.name}
          </h1>
          {project?.category && (
            <span
              className="text-left text-sm font-semibold"
              style={{ color: theme.buttonColor.background }}
            >
              #FreelanceWork
            </span>
          )}
        </div>
        <div
          className="p-2 text-center text-xs leading-relaxed opacity-75"
          style={{
            backgroundColor: theme.cardColor,
          }}
        >
          {project.description}
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-2 px-4"
          style={{
            color: theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
          }}
        >
          {project.techStack.map((tech) => (
            <div className="text-xs font-semibold" key={tech}>
              {tech}
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2">
          {!project?.category && (
            <button
              className="flex items-center justify-center gap-1 rounded-md px-2 py-1 text-xs"
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
          )}
          {project.isLive && (
            <button
              className="flex items-center justify-center gap-1 rounded-md px-2 py-1 text-xs"
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
  );
};

export default ProjectCard;
