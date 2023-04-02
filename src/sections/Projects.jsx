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
            <div className="m-auto flex max-h-[80vh] max-w-[70vw] bg-red-500">
              <img
                src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="2ndimage"
                className="h-[50vh] w-1/2"
              />
              <div className="flex w-1/2 flex-col items-end justify-center gap-5">
                <h1 className="text-center text-2xl font-bold md:text-left md:text-3xl">
                  Awesome Project
                </h1>
                <div className="-ml-12 bg-green-400 p-6 text-right">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit ab corporis voluptas iure voluptatum, corrupti, ipsam
                  soluta odio nisi nostrum non asperiores ipsa. Qui, adipisci
                  minus unde obcaecati assumenda blanditiis.
                </div>
                <div>Tech</div>
                <div>Buttons</div>
              </div>
            </div>
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
