import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Herosection = () => {
  useGSAP(() => {
    gsap.set(".line", { height: "0%", transformOrigin: "center" });
    let tl = gsap.timeline();
    tl.to(".line", {
      height: "100%",
      duration: 1,
      transformOrigin: "center ",
    });

    gsap.from(".titleone", {
      xPercent: 100,
      delay: 0.5,
    });
    gsap.from(".titletwo", {
      xPercent: -100,
      delay: 0.5,
    });

    gsap.from(".hero-para", {
      opacity: 0,
      duration: 1,
      y: 50,
    });
  });

  return (
    <section
      id="Home"
      className="w-full  h-[80svh] md:h-svh bg-black text-white flex pt-30 xl:pt-10 justify-center"
    >
      <div className="container mx-auto  flex flex-col md:justify-center">
        <div className="flex gap-2 items-center h-[60%] ">
          <div className="w-[50%] h-full overflow-x-hidden relative flex  justify-end items-start ">
            <h1 className="absolute top-20 md:top-20 xl:top-10 ">
              <span className="  font-black  titleone inline-block -right-0 font-italiana text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem]">
                Basheer's
              </span>
            </h1>
          </div>
          <div className="h-[80%]">
            <svg
              className="w-1 h-full animate-pulse line"
              viewBox="0 0 2 296"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="4.37114e-08"
                x2="0.999987"
                y2="296"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="w-[50%]  h-full overflow-x-hidden relative flex justify-end items-end ">
            <h1 className=" absolute w-full bottom-20  md:bottom-20 xl:bottom-10 ">
              <span className="  font-black  titletwo inline-block -left-0 font-italiana text-[2.5rem]  sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem]">
                Portfolio
              </span>
            </h1>
          </div>
        </div>
        <div className="w-[90%] sm:ml-10 mt-10 md:w-[50%] lg:w-[50%] md:ml-20  xl:ml-50 ">
          <p className="text-[15px] hero-para font-inter sm:text-[18px]">
            I'm an aspiring Full-Stack Developer with a passion for building
            smooth, scalable web experiences— from pixel-perfect front-end
            designs to powerful back-end logic. Blending creativity with code,
            I'm learning every day to bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
