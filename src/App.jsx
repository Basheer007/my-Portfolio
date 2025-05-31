import Aboutsection from "./Components/Aboutsection";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import { useEffect, useRef, useState } from "react";
import { PiSpeakerHigh } from "react-icons/pi";
import { PiSpeakerSimpleSlash } from "react-icons/pi";
import itachiTheme from "./assets/itachiTheme.mp3";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Projectsection from "./Components/Projectsection";
import Contactsection from "./Components/Contactsection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const audioRef = useRef(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // ScrollSmoother setup
  useEffect(() => {
    // Only initialize once
    let smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 1.2, // adjust for your preference
      effects: true,
      smoothTouch: 0.1, // adjust for touch devices
    });

    return () => {
      // Cleanup on unmount
      if (smoother) smoother.kill();
    };
  }, []);

  const handleSmoothScroll = (target) => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top top");
    } else {
      // fallback
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAudioPlay = () => {
    if (audioRef.current) {
      if (!audioPlaying) {
        audioRef.current.play();
        setAudioPlaying(true);
      } else {
        audioRef.current.pause();
        setAudioPlaying(false);
      }
    }
  };

  return (
    <div id="wrapper">
      <div id="content">
        <Herosection />
        <Aboutsection />
        <Projectsection />
        <Contactsection />
      </div>
      <Navbar onNavClick={handleSmoothScroll} />
      <div
        onClick={handleAudioPlay}
        className="border-2 border-red-800 w-fit h-fit p-2 rounded-full cursor-pointer fixed bottom-4 right-4 z-60"
      >
        <audio ref={audioRef} loop>
          <source src={itachiTheme} type="audio/mpeg" preload="auto" />
        </audio>
        {audioPlaying ? (
          <PiSpeakerSimpleSlash className="h-8 w-8" />
        ) : (
          <PiSpeakerHigh className="h-8 w-8" />
        )}
      </div>
    </div>
  );
}

export default App;
