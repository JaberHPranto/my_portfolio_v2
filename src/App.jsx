import React, { useEffect, useState } from "react";
import { Banner, FeaturedProjects, Navbar } from "./sections";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const App = () => {
  const [loader, setLoader] = useState(true);

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
        <div>
          <Navbar />
          <Banner />
          <div className="h-screen bg-red-400" />
          <FeaturedProjects />
        </div>
      )}
    </>
  );
};

export default App;
