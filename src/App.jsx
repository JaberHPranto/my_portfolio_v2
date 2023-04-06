import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Achievement from "./pages/Achievement";
import HomePage from "./pages/HomePage";

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/achievement/hackathon" element={<Achievement />} />
        </Routes>
      )}
    </>
  );
};

export default App;
