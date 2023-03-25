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
export const data = [
  {
    id: 1,
    theme: "Cream",
    swatchColor: "#E6D3C4",
    background: "#E5E5E5",
    headingColor: "#242526",
    secondaryColor: "#D7B172",
    tertiaryColor: "#d7b17240",
    buttonColor: { text: "#242526", background: "#D7B172" },
  },
  {
    id: 2,
    theme: "Dark",
    swatchColor: "#303133",
    background: "#242526",
    headingColor: "#ffffff",
    secondaryColor: "#3a3b3c",
    tertiaryColor: "#fbd38d40",
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
