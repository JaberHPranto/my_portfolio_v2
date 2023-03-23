import { useEffect, useRef } from "react";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectScroller = useRef();
  const projectRef = useRef();

  useEffect(() => {
    let projectSet = gsap.utils.toArray(".project-set");

    let to = gsap.to(projectSet, {
      xPercent: () => -100 * (projectSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectScroller.current,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (projectSet.length - 1),
        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="flex overflow-hidden">
      <div className="overflow-hidden">
        <div
          id="skills"
          ref={projectScroller}
          className=" relative m-0 flex h-screen w-[400vw] overflow-x-hidden  bg-gray-900 text-white"
        >
          <section
            ref={projectRef}
            className="project-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <img
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="1st image"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={projectRef}
            className="project-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <img
              src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={projectRef}
            className="project-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <img
              src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
          <section
            ref={projectRef}
            className="project-set ns-horizontal-section__item z-50 flex h-full w-screen items-center bg-transparent px-12"
          >
            <img
              src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              className="m-auto max-h-[60vh] max-w-[70vw]"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;
