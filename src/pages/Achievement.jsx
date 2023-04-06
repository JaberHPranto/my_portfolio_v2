import React from "react";
import {
  analytics,
  cluster1,
  cluster2,
  marketPlace,
  newsfeed,
  winner1,
  winner2,
  winner3,
  winner4,
} from "../assets/hackathon";
import useThemeStore from "../store";
import { TbBulb, TbLink } from "react-icons/tb";
import { AiOutlineGithub, AiOutlineDatabase } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineHome } from "react-icons/hi";

const Achievement = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <section
      className="px-6 py-4 md:px-24 md:py-8 lg:px-48"
      style={{
        backgroundColor: theme.background,
        color: theme.headingColor,
      }}
    >
      {/* Home page button */}
      <div
        className="absolute hidden items-center gap-1 rounded-md px-4 py-1.5 text-sm md:top-10 md:left-10 md:flex"
        style={{
          backgroundColor: theme.buttonColor.background,
          color: theme.buttonColor.text,
        }}
      >
        <HiOutlineHome />
        <a href="/" className="text-xs">
          Home Page
        </a>
      </div>
      <h1
        className="pb-8 text-center text-xl font-bold leading-relaxed md:text-3xl"
        style={{
          color: theme.buttonColor.background,
        }}
      >
        Champion at the Orbitax SUST SWE Technovent 2023 <br /> BrainStation23
        Hackathon
      </h1>
      {/* Hackathon Winning Pics */}
      <div className="grid-cols grid gap-4 md:grid-cols-2">
        <img src={winner1} alt="Winner-1" className="hackathonImage" />
        <img src={winner2} alt="Winner-2" className="hackathonImage" />
        <img src={winner3} alt="Winner-3" className="hackathonImage" />
        <img src={winner4} alt="Winner-4" className="hackathonImage" />
      </div>
      <div
        className="flex items-center pb-4 pt-16"
        style={{
          color: theme.buttonColor.background,
        }}
      >
        <TbBulb className="mr-1.5 text-2xl" />
        <h3 className="text-2xl font-semibold">Our Idea in a Gist</h3>
        <div
          className="ml-4 block h-[3px] w-1/4 opacity-50"
          style={{
            backgroundColor:
              theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
          }}
        />
      </div>

      {/* Idea Contents */}
      <div className="text-justify text-base leading-relaxed md:text-lg">
        <p>
          We regularly encounter sustainability-related problems in our area.
          Most of the time people do not realize the catastrophic effect these
          problems have on our environment which eventually hampers the quality
          of life. Now as common man, we can’t single-handedly change our
          society but together we can. So to address this problem, we are
          providing a platform where people can share their ideas and thoughts
          about how they overcome some problems related to sustainability, and
          how they follow sustainable habits. Sometimes people want to use
          sustainable services but they don’t know where they will find them or
          how they can use some of the sustainable techniques. Our platform is
          the solution to all of these problems. <br /> <br />
        </p>
        <p>
          Now on our platform, people can post a problem they are facing in
          their area. The problems can be poor waste management, water
          pollution, illegal dumping of construction materials on roads, etc.
          Other people can upvote or downvote the problems to highlight the
          problem or can report the problem if it is irrelevant or out of
          context or even repost the post if they are facing the same problem.
        </p>
        <div className="flex items-center justify-center py-5">
          <img
            src={newsfeed}
            alt="newsfeed"
            className="h-auto w-full rounded-lg md:w-1/2"
          />
        </div>
        <p>
          Now based on the interaction on a post, we will create a cluster and
          showed on the map. The more interaction or activity a post gets, the
          larger the cluster will be. If a cluster gets comparatively large
          enough, that means this problem is significant and needs to cater
          quickly.
        </p>
        <div className="flex flex-col items-center justify-center gap-5 py-5 md:flex-row md:gap-10">
          <img
            src={cluster1}
            alt="cluster1"
            className="h-auto w-full rounded-lg md:w-1/2"
          />
          <img
            src={cluster2}
            alt="cluster2"
            className="h-auto w-full rounded-lg md:w-1/2"
          />
        </div>
        <p>
          Our platform also has a marketplace where people can sell
          sustainability-related products and services.
        </p>
        <div className="flex items-center justify-center py-5">
          <img
            src={marketPlace}
            alt="marketPlace"
            className="h-auto w-full rounded-lg md:w-1/2"
          />
        </div>
        <p>
          We also want to provide real-time analytics of posts so that we can
          track interactivity at any time and if there is an emergency, we can
          immediately inform the concerned authority.
        </p>
        <div className="flex items-center justify-center py-5">
          <img
            src={analytics}
            alt="analytics"
            className="h-auto w-full rounded-lg md:w-1/2"
          />
        </div>
      </div>

      {/* Important Links */}
      <div
        className="flex items-center pb-4 pt-16"
        style={{
          color: theme.buttonColor.background,
        }}
      >
        <TbLink className="mr-1.5 text-2xl" />
        <h3 className="text-2xl font-semibold">Document Links</h3>
        <div
          className="ml-4 block h-[3px] w-1/4 opacity-50"
          style={{
            backgroundColor:
              theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
          }}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg md:ml-6">
          <AiOutlineGithub className="mt-1.5" />
          <a
            href="https://github.com/Sabbir-Rahman/sust-hackathon23-pixel"
            target="_blank"
            className="text-underline"
            style={{
              textDecorationColor: theme.buttonColor.background,
            }}
          >
            Github
          </a>
        </div>
        <div className="flex items-center gap-2 text-lg md:ml-6">
          <HiOutlineDocumentText className="mt-1.5" />
          <a
            href="https://docs.google.com/document/d/1057zojrSR9_rK9akkWc3CNL_75TyYAql0c3Z4f1m88Y/edit?usp=sharing"
            target="_blank"
            className="text-underline"
            style={{
              textDecorationColor: theme.buttonColor.background,
            }}
          >
            System Requirement Specification (SRS)
          </a>
        </div>
        <div className="flex items-center gap-2 text-lg md:ml-6">
          <AiOutlineDatabase className="mt-1.5" />
          <a
            href="https://www.figma.com/file/ezbyOA7JqmbHA2RUFpzmGA/Sust-Hackathon-23-Team-Pixel?node-id=0%3A1&t=VADPOX31jHHFeIkh-1"
            target="_blank"
            className="text-underline"
            style={{
              textDecorationColor: theme.buttonColor.background,
            }}
          >
            Backend Architecture
          </a>
        </div>
        <div className="flex items-center gap-2 text-lg md:ml-6">
          <FaFigma className="mt-1.5" />
          <a
            href="https://www.figma.com/file/vX8VHPLoW6AVwCC05tKD0n/Team-Pixel_SUST_Hackathon?node-id=0%3A1&t=fRUAZY4XLG15jHas-1"
            target="_blank"
            className="text-underline"
            style={{
              textDecorationColor: theme.buttonColor.background,
            }}
          >
            Figma Design File
          </a>
        </div>
        <div className="flex items-center gap-2 text-lg md:ml-6">
          <FaFigma className="mt-1.5" />
          <a
            href="https://www.figma.com/proto/vX8VHPLoW6AVwCC05tKD0n/Team-Pixel_SUST_Hackathon?page-id=0%3A1&node-id=6%3A1664&viewport=179%2C127%2C0.05&scaling=scale-down-width&starting-point-node-id=6%3A1664"
            target="_blank"
            className="text-underline"
            style={{
              textDecorationColor: theme.buttonColor.background,
            }}
          >
            Figma Prototype
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <a
          href="/"
          className="pt-16 font-medium underline decoration-dashed underline-offset-8 md:hidden"
          style={{
            color: theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
          }}
        >
          Go To Home
        </a>
      </div>
    </section>
  );
};

export default Achievement;
