import React from "react";
import {
  About,
  Banner,
  Contact,
  Experience,
  FeaturedProjects,
  Navbar,
  Projects,
  Skill,
} from "../sections";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Skill />
      <FeaturedProjects />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
