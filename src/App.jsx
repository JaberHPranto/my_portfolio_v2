import React, { useEffect, useState } from "react";
import {
  About,
  Banner,
  Experience,
  FeaturedProjects,
  Navbar,
  Projects,
  Skill,
} from "./sections";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      {loader ? (
        "Loading"
      ) : (
        <div className="overflow-hidden">
          <Navbar />
          <Banner />
          <About />
          <Skill />
          <Experience />
          <FeaturedProjects />
          <Projects />
        </div>
      )}
    </>
  );
};

export default App;
