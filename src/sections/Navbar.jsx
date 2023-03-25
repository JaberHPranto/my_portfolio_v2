import { useEffect } from "react";
import { Power2, gsap } from "gsap";
import { IoClose } from "react-icons/io5";
import useThemeStore from "../store";

const Navbar = () => {
  const theme = useThemeStore((state) => state.theme);
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
      <div className="absolute top-2 right-2 z-50 md:top-5 md:right-10">
        <div className="menu-div text-[28px] md:text-[32px]">🍔</div>
      </div>

      <div
        className="menu"
        style={{
          backgroundColor: theme.secondaryColor,
        }}
      >
        <div className="background">Menu</div>
        <div className="exit absolute top-8 right-8 z-50 cursor-pointer text-3xl text-white md:top-10 md:right-10">
          <IoClose />
        </div>
        <div className="menu-container">
          <ul className="options">
            <li className="nav">
              <a href="#" className="nav-link">
                About <span className="small-number">01</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                Experience <span className="small-number">02</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                Skill <span className="small-number">03</span>
              </a>
            </li>
            <li className="nav">
              <a href="#" className="nav-link">
                Works <span className="small-number">04</span>
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
