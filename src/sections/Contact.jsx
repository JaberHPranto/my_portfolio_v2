import React from "react";
import AppWrapper from "../components/common/AppWrapper";
import SectionHeader from "../components/common/SectionHeader";
import { Player } from "@lottiefiles/react-lottie-player";
import contactCream from "../assets/lottieFiles/contact-cream.json";
import contactOcean from "../assets/lottieFiles/contact-ocean.json";
import useThemeStore from "../store";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <section className="relative h-screen">
      <SectionHeader serial="05" text="Get In Touch" />
      <div className="mt-10 flex h-full flex-col items-center gap-6 px-4 md:gap-10">
        <h2 className="max-w-lg text-center text-xl leading-relaxed md:text-2xl">
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you! <br />
          <a
            href="mailto:jabearhossain@iut-dhaka.edu"
            className="font-semibold underline underline-offset-4"
            style={{
              color: theme.buttonColor.background,
            }}
          >
            Pop me an email!
          </a>
        </h2>
        <div>
          <Player
            src={theme.theme === "Ocean" ? contactOcean : contactCream}
            className="h-auto w-[300px] md:w-[400px]"
            autoplay
            loop
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:bottom-0 md:left-5 md:translate-x-0">
        <div className="flex flex-row gap-4 md:flex-col">
          <div
            style={{
              backgroundColor: theme.buttonColor.background,
            }}
            className="rounded-md p-2"
          >
            <a
              href="https://github.com/JaberHPranto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-5 w-5 cursor-pointer text-white" />
            </a>
          </div>
          <div
            style={{
              backgroundColor: theme.buttonColor.background,
            }}
            className="rounded-md p-2"
          >
            <a
              href="https://www.linkedin.com/in/jaber-hossain-pranto-ab3728190/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="h-5 w-5 cursor-pointer text-white" />
            </a>
          </div>
          <div
            style={{
              backgroundColor: theme.buttonColor.background,
            }}
            className="rounded-md p-2"
          >
            <a
              href="https://www.facebook.com/jh.pranto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-5 w-5 cursor-pointer text-white" />
            </a>
          </div>
          <div
            className="mx-auto hidden h-32 w-0.5 self-stretch opacity-40 md:inline-block"
            style={{
              backgroundColor:
                theme.theme == "Dark" ? "#fbd38d" : theme.secondaryColor,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AppWrapper(Contact, "contact");
