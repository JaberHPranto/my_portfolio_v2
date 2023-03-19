import { useEffect } from "react";
import { Power2, gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    let t1 = gsap.timeline({ paused: true });
    t1.to(".menu", {
      opacity: 1,
      duration: 0.8,
      top: 0,
      ease: Power2.easeInOut,
    });
    t1.to(".nav", {
      opacity: 1,
      marginBottom: "16px",
      duration: 0.8,
      ease: Power2.easeInOut,
      stagger: 0.2,
    });

    document.querySelector(".menu-div").addEventListener("click", () => {
      t1.play().timeScale(1);
    });

    document.querySelector(".exit").addEventListener("click", () => {
      t1.timeScale(2);
      t1.reverse();
    });
  }, []);
  return (
    <>
      <div className="absolute top-10 right-10 z-50">
        <div className="menu-div">Menubar</div>
      </div>

      <div className="menu">
        <div className="background">Menu</div>
        <div className="exit">Exit</div>
        <div className="menu-container">
          <ul className="options">
            <li className="nav">
              <a href="#" className="nav-link">
                Home <span className="small-number">01</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                About <span className="small-number">02</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                Work <span className="small-number">03</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                Skill <span className="small-number">04</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                Contact <span className="small-number">05</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                Achievement <span className="small-number">06</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
