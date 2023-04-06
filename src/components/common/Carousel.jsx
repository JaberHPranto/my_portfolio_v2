import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import { projects } from "../../data";
import ProjectCard from "../projects/ProjectCard";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
