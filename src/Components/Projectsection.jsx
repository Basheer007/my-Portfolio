import React from "react";
import "../Styles/projectsection.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import projectList from "../projectList.json";
const Projectsection = () => {
  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".project-container",
        start: "top center",
        end: "bottom center",
      },
      x: -50,
      duration: 1,
      stagger: 0.2,
    });
  });
  return (
    <section id="projects" className="project-container h-svh w-full ">
      <div className="w-[90%] max-w-[768px] h-full mx-auto relative flex flex-col justify-center gap-20  ">
        <div className="flex flex-col gap-4 ">
          <h3 className="font-italiana text-2xl sm:text-4xl font-black">
            Projects I created
          </h3>
          <p className="text-[15px] font-inter sm:text-[18px]">
            Right now, my projects might be simple — but they’re just the
            beginning. Every line of code I write helps me grow, and I’m
            committed to improving with each project. I believe that with time,
            effort, and curiosity, great things are not just possible — they’re
            inevitable.
          </p>
        </div>

        <div className="grid-container w-full h-fit  ">
          {projectList.map((data) => {
            return (
              <div
                key={data.id}
                className="project-card flex justify-center items-center border-l-2 border-l-red-500 bg-red-950 hover:bg-red-600"
              >
                <a href={data.link} target="_blank">
                  <p className="font-italiana text-[16px] md:text-[18px] font-black">
                    {data.Name}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projectsection;
