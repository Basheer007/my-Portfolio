import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/aboutsection.css"; // Assuming you have a CSS file for styles
gsap.registerPlugin(ScrollTrigger);
import aboutMe from "../assets/aboutMe.webp"; // Import your image here
const Aboutsection = () => {
  useGSAP(() => {
    gsap.to(".abstarct-svg", {
      scrollTrigger: {
        trigger: ".about-sec",

        start: "top 60%",
        end: "bottom center",
      },
      rotate: 360,
      duration: 5,
      ease: "linear",
      repeat: -1, // repeat indefinitely
    });

    gsap.from(".abstract-triangle-1", {
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 60%",
        end: "bottom center",
      },
      x: "-50%",
      y: "50%",
    });

    gsap.from(".abstract-triangle-2", {
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 60%",
        end: "bottom center",
      },
      x: "100%",
      y: "-50%",
    });
  });
  return (
    <section
      id="about"
      className="about-sec w-full h-[80svh] xl:h-dvh -z-20 bg-black relative overflow-x-hidden max-w-[]"
    >
      <div className="absolute  top-0 -right-5 w-fit h-fit abstarct-svg">
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 xl:w-30 xl:h-30"
          viewBox="0 0 146 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="77.6253"
            cy="73.2011"
            r="59.9394"
            transform="rotate(90 77.6253 73.2011)"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M38 133.622V12.3779L143.001 73L38 133.622Z"
            stroke="#FF0707"
            strokeWidth="3"
          />
          <path
            d="M49.1558 114.153V32.2495L120.086 73.2007L49.1558 114.153Z"
            stroke="#FF0404"
            strokeWidth="5"
          />
          <circle
            cx="25.9421"
            cy="40.8238"
            r="5.42975"
            transform="rotate(90 25.9421 40.8238)"
            fill="#FF0000"
          />
        </svg>
      </div>
      <div className="w-[95%] container h-full mx-auto flex items-center justify-center border-2 border-red-500">
        <div className="w-full h-[80%]  flex lg:w-[70%] ">
          <div className="w-1/2 flex justify-center items-center ">
            <div className="  relative w-[70%] h-[55%] sm:h-[65%] md:h-[70%] max-w-[240px] border-2 border-dashed bg-black rounded-[25px] p-2">
              <div className="absolute -top-8 rotate-10 -right-5 -z-10   md:-top-12 md:-right-7">
                <svg
                  className="abstract-triangle-1 w-15 h-15 md:w-20 md:h-20"
                  viewBox="0 0 115 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M112 129L76.5354 107.277L90.4788 103.355L100.482 109.389L101.088 68.3577L90.4788 56.5912L83.5071 64.1338L92.2974 90.6837L61.0765 99.1314L5 68.3577L45.6176 41.8078L40.7677 60.2117L28.3399 68.3577L61.0765 88.5718L80.4759 83.4428L74.7167 69.8662L65.6232 76.8054L48.3456 68.3577L58.3484 36.6788L112 5V49.6521L101.088 41.8078V24.9124L65.6232 44.5231L61.0765 60.2117L68.0482 64.1338L90.4788 41.8078L112 64.1338V129Z"
                    stroke="#FF0404"
                    strokeWidth="5"
                  />
                </svg>
              </div>
              <img
                src={aboutMe}
                alt="about-img"
                className="about-img w-full h-full  rounded-[20px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute -bottom-9 -left-8 -rotate-50 -z-10 md:-bottom-13 md:-left-10">
                <svg
                  className="abstract-triangle-2 w-15 h-15 md:w-20 md:h-20"
                  viewBox="0 0 115 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M112 129L76.5354 107.277L90.4788 103.355L100.482 109.389L101.088 68.3577L90.4788 56.5912L83.5071 64.1338L92.2974 90.6837L61.0765 99.1314L5 68.3577L45.6176 41.8078L40.7677 60.2117L28.3399 68.3577L61.0765 88.5718L80.4759 83.4428L74.7167 69.8662L65.6232 76.8054L48.3456 68.3577L58.3484 36.6788L112 5V49.6521L101.088 41.8078V24.9124L65.6232 44.5231L61.0765 60.2117L68.0482 64.1338L90.4788 41.8078L112 64.1338V129Z"
                    stroke="#FF0404"
                    strokeWidth="5"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* contents go here */}
          <div className="w-1/2 flex flex-col justify-center gap-4 h-full">
            <div>
              <h2 className="font-italiana text-4xl font-bold">About me</h2>
            </div>
            <p className="text-[11px] sm:text-[15px] md:text-[18px] font-inter">
              I'm a self-taught Full-Stack Developer with a passion for building
              impactful web experiences. After completing my 10th grade, I had
              to discontinue formal education due to financial challenges. But I
              never gave up on my dreams. Driven by curiosity and determination,
              I taught myself web development through online resources—learning
              everything from frontend design to backend logic. It wasn’t easy,
              but with consistent hard work, late nights, and a strong belief in
              my potential, I turned my passion into skill. Today, I build
              clean, responsive, and dynamic websites that solve real problems.
              I believe that your background doesn't define your future—your
              effort does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
