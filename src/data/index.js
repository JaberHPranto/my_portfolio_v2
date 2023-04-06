import {
  html,
  css,
  javascript,
  typescript,
  react,
  redux,
  tailwind,
  three,
  mongodb,
  node,
  motion,
  git,
  next,
} from "../assets/skills";
import {
  flipClipImage,
  flipClipVideo,
  plantLandImage,
  plantLandVideo,
  snappyImage,
  snappyVideo,
} from "../assets/featuredProjects";

import {
  gamesStation,
  healthDiary,
  iutCSVideo,
  iutCSImage,
  markInk,
  medibeeVideo,
  medibeeImage,
  mirchiDhabaImage,
  mirchiDhabaVideo,
} from "../assets/projects";

export const data = [
  {
    id: 1,
    theme: "Cream",
    swatchColor: "#E6D3C4",
    background: "#E5E5E5",
    headingColor: "#242526",
    secondaryColor: "#D7B172",
    tertiaryColor: "#d7b17240",
    cardColor: "#EEDDC1",
    buttonColor: { text: "#fff", background: "#D7B172" },
  },
  {
    id: 2,
    theme: "Dark",
    swatchColor: "#303133",
    background: "#242526",
    headingColor: "#ffffff",
    secondaryColor: "#3a3b3c",
    tertiaryColor: "#fbd38d40",
    cardColor: "#323333",
    buttonColor: { text: "#242526", background: "#fbd38d" },
  },
  {
    id: 3,
    theme: "Ocean",
    swatchColor: "#4F92B1",
    background: "#C1D6E3",
    headingColor: "#1F333E",
    secondaryColor: "#2f7393",
    tertiaryColor: "#2f739340",
    cardColor: "#90c4dc",
    buttonColor: { text: "#fff", background: "#2f7393" },
  },
];

export const experienceData = [
  {
    companyName: "Kernel Int'L Limited",
    companyWebsite: "https://www.kernelinternational.com",
    role: "Frontend Developer (Part Time)",
    period: {
      startDate: "November 2022",
      endDate: "Present",
    },
    responsibilities: [
      "Developed an admin dashboard of a learning-based app that serves content to more than 20K users. Enhanced website performance by caching data and optimizing page contents to reduce page load time by about 30%.",
      "Used modern technologies like React, SWR and Redux. Developed a real-time support system by using Socket.IO.",
      "Identified and resolved bugs and issues in the admin dashboard to improve its reliability and maintainability as well as collaborated with stakeholders to identify new requirements and improve the user experience of the admin dashboard.",
    ],
  },
  {
    companyName: "DreamOnline Limited",
    companyWebsite: "https://dreamonline.com.bd",
    role: "Full Stack Developer (Intern)",
    period: {
      startDate: "May 2022",
      endDate: "September 2022",
    },
    responsibilities: [
      "Worked as a frontend developer on an ed-tech platform, collaborating with other team members to maintain the platform’s functionality and introduce new features using technologies like Nextjs and Tailwind CSS.",
      "Worked on adding custom integrations with third-party tools such as Google Auth, Google Sheets and Zoom.",
      "Improved the user experience of the ed-tech platform by implementing responsive design and accessibility features.",
      "Worked on migrating a old site which is written in vanilla JavaScript to a React based website",
    ],
  },
];

export const skillsData = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Framer Motion",
    icon: motion,
  },
];

export const featuredProjects = [
  {
    id: "one",
    name: "Plant Land",
    description:
      "A full-stack web application that provides a single platform for tree enthusiasts which comprises of a Marketplace, a Blog area, and uses external APIs for Plant Identification and Plant Search.",
    techStack: ["React", "Nodejs", "Express", "MongoDB", "Redux"],
    isLive: true,
    liveLink: "https://plantland.netlify.app/",
    githubLink: "https://github.com/JaberHPranto/Plant-Land",
    video: plantLandVideo,
    poster: plantLandImage,
  },
  {
    id: "two",
    name: "Snappy",
    description:
      "A real-time collaborative whiteboard with an inbuilt chat system. The project was developed without the use of anylibraries for canvas drawing. Canvas API was used for drawing, resizing, and moving objects on the canvas",
    techStack: ["React", "Nodejs", "Socket.IO", "RoughJs", "Recoil"],
    isLive: false,
    githubLink: "https://github.com/JaberHPranto/Snappy",
    video: snappyVideo,
    poster: snappyImage,
  },
  {
    id: "three",
    name: "FlipClip Chrome Extension",
    description:
      "Developed a Google Chrome extension that allows users to build flashcards from websites. Chorme storage API was used to store the data for the flashcards, and chorme message passing API was used to communicate between the background and content scripts. Embed iframes to create cards and take sessions",
    techStack: ["HTML", "CSS", "JavaScript", "JQuery"],
    isLive: false,
    githubLink: "https://github.com/JaberHPranto/Flip-Clip",
    video: flipClipVideo,
    poster: flipClipImage,
  },
];

export const projects = [
  {
    name: "Health Diary",
    description:
      " A web-based telemedicine service that connects doctors and patients and allows patients to receive care at a distance. Patients can schedule appointments with specialists and communicate with them in real-time",
    techStack: ["React", "Nodejs", "Express", "MongoDB", "Redux"],
    type: "image",
    isLive: false,
    githubLink: "https://github.com/JaberHPranto/HealthDiary",
    picture: healthDiary,
  },
  {
    name: "MarkInk",
    description:
      "A github flavored markdown editor.Integrate popular code-mirror editor which enhance the writing experience of the users. Implemented quick shortcuts for common markdown syntax which lets users write markdown in a efficient and effective way.",
    techStack: ["React", "React Markdown", "Code Mirror"],
    type: "image",
    isLive: true,
    liveLink: "https://markink.netlify.app/",
    githubLink: "https://github.com/JaberHPranto/MarkInk",
    picture: markInk,
  },
  {
    name: "Game Station",
    description:
      "A video game informational application that allows users to learn everything there is to know about their favorite video games and discover new ones. For video games data, I used Rapid API and React-query to effectively fetch and cache over 5000 records.",
    techStack: ["React", "React Query", "Rapid API"],
    type: "image",
    isLive: true,
    liveLink: "https://gamesstation.netlify.app/",
    githubLink: "https://github.com/JaberHPranto/Game-Station",
    picture: gamesStation,
  },
  {
    name: "IUTCS Website",
    description:
      "Develop the website for IUT Computer Society (IUTCS) where every thing related to the society - about, activities, committee members, achievements, sponors has been outlined.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    type: "video",
    isLive: false,
    githubLink: "https://github.com/iut-cse/iutcs-website-22",
    picture: iutCSImage,
    video: iutCSVideo,
  },
  {
    name: "Mirchi Dhaba",
    description:
      "Mirchi Dhaba is an online tiffin delivery service. The application has a client side version where normal users can buy food packages and track their package status and also an admin side where admins can perform crud operations on food packages, users, carousel images etc.",
    techStack: ["Next js", "Tailwind CSS", "SWR", "Zustand"],
    type: "video",
    category: "Freelance Work",
    isLive: false,
    picture: mirchiDhabaImage,
    video: mirchiDhabaVideo,
  },
  {
    name: "Medibee Admin Dashboard",
    description:
      "Developed the admin dashboard of Medibee (learning-based app for medical students) that serves content to more than 20K users. Implemented crud operation for users, courses, quizzes, mcqs, resources and subscription packages. Integrated a real time support system using Scoket.IO.",
    techStack: ["React", "Redux", "SWR", "Socket.IO"],
    type: "video",
    category: "Freelance Work",
    isLive: false,
    picture: medibeeImage,
    video: medibeeVideo,
  },
];
