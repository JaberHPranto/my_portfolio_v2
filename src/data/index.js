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
    buttonColor: { text: "#242526", background: "#D7B172" },
  },
  {
    id: 2,
    theme: "Dark",
    swatchColor: "#303133",
    background: "#242526",
    headingColor: "#ffffff",
    secondaryColor: "#3a3b3c",
    buttonColor: { text: "#242526", background: "#fbd38d" },
  },
  {
    id: 3,
    theme: "Ocean",
    swatchColor: "#4F92B1",
    background: "#C1D6E3",
    headingColor: "#1F333E",
    secondaryColor: "#2f7393",
    buttonColor: { text: "#fff", background: "#2f7393" },
  },
];

export const tabData = {
  tabHeaders: ["Code", "About", "Contact"],
  tabContents: [
    "This is the content of the Code SectionThis is the content of the Code SectionThis is the content of the Code SectionThis is the content of the Code SectionThis is the content of the Code SectionThis is the content of the Code SectionThis is the content of the Code SectionThis is the content of the Code Section",
    "This is the content of the About Section",
    "This is the content of the Contact Section",
  ],
};

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
