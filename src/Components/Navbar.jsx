import React, { useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import "../Styles/navbar.css";
const Navbar = ({ onNavClick }) => {
  const menuContainer = useRef(null);
  const meuIcon = useRef(null);
  const handleMenuClick = () => {
    menuContainer.current.classList.toggle("active");
    meuIcon.current.classList.toggle("active");
  };

  const mobileMenuClose = () => {
    menuContainer.current.classList.remove("active");
    meuIcon.current.classList.remove("active");
  };
  return (
    <header className=" w-full fixed top-0 right-0 left-0 z-50 bg-black text-white">
      <nav className="flex justify-between items-center w-[90%] mx-auto relative">
        <div>
          <a href="./">
            <svg
              className="w-16 h-24 sharingan"
              viewBox="0 0 112 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M112 56C112 86.9279 86.9279 112 56 112C25.0721 112 0 86.9279 0 56C0 25.0721 25.0721 0 56 0C86.9279 0 112 25.0721 112 56Z"
                fill="url(#paint0_radial_99_62)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.6587 19.496C54.5577 19.5293 54.457 19.5652 54.3567 19.6038C51.7551 20.6024 50.1449 23.0695 50.0929 25.7149C36.2063 28.6369 25.7812 40.9577 25.7812 55.7134C25.7812 58.6993 26.2081 61.5855 27.0042 64.3144C23.1125 66.2501 17.0956 70.6382 17.2405 75.0641C17.8912 73.14 20.3325 69.8515 24.9877 72.0586C25.0245 72.1584 25.0639 72.2578 25.1059 72.3568C26.485 75.6056 30.1625 77.183 33.4791 76.0292C39.0955 82.3712 47.2993 86.3691 56.4369 86.3691C65.283 86.3691 73.254 82.6222 78.8494 76.6288C79.9288 77.4649 81.2724 77.9819 82.7354 78.0365C86.2109 78.3277 96.1238 76.8713 98.0233 71.955C96.6726 73.4719 93.1404 75.5451 89.7176 71.6945C89.7227 71.5882 89.7253 71.4813 89.7253 71.3738C89.7253 68.603 88.0188 66.2269 85.5899 65.2204C86.5653 62.2274 87.0926 59.0319 87.0926 55.7134C87.0926 41.1944 76.9992 29.0329 63.4465 25.8627C63.4394 25.1579 63.3213 24.4428 63.0817 23.7415C62.108 20.3925 57.1959 11.6601 51.9255 11.6486C53.8257 12.366 57.027 14.9206 54.6587 19.496ZM50.1004 26.1896C50.136 26.8865 50.2806 27.5904 50.5446 28.2781C51.877 31.7491 55.744 33.4932 59.1818 32.1736C61.6926 31.2097 63.28 28.8782 63.4344 26.3386C76.7336 29.4949 86.6267 41.4488 86.6267 55.7134C86.6267 58.9745 86.1096 62.1148 85.153 65.0569C84.4751 64.8296 83.7487 64.7064 82.9933 64.7064C79.2753 64.7064 76.2612 67.6915 76.2612 71.3738C76.2612 73.3415 77.1218 75.1101 78.4905 76.3305C72.9811 82.2214 65.139 85.9032 56.4369 85.9032C47.5001 85.9032 39.4702 82.0201 33.9425 75.849C37.3412 74.3846 38.9337 70.4741 37.4997 67.0959C36.0942 63.7849 32.3014 62.2099 28.9364 63.4928C28.5108 63.6328 27.9986 63.8409 27.4296 64.1084C26.6597 61.4433 26.247 58.6265 26.247 55.7134C26.247 41.2134 36.4693 29.101 50.1004 26.1896Z"
                fill="black"
              />
              <path
                d="M64.4792 56C64.4792 60.6829 60.6829 64.4792 56 64.4792C51.3171 64.4792 47.5208 60.6829 47.5208 56C47.5208 51.3171 51.3171 47.5208 56 47.5208C60.6829 47.5208 64.4792 51.3171 64.4792 56Z"
                fill="black"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_99_62"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(56 56) rotate(90) scale(56)"
                >
                  <stop stopColor="#FF0000" />
                  <stop offset="1" stopColor="#3C0101" />
                </radialGradient>
              </defs>
            </svg>
          </a>
        </div>
        <ul className="font-inter  flex gap-4 font-medium max-sm:hidden">
          <li className="links">
            <a
              href="#Home"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#Home");
              }}
            >
              Home
            </a>
          </li>
          <li className="links">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#about");
              }}
            >
              About
            </a>
          </li>
          <li className="links">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className="links">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          ref={meuIcon}
          onClick={handleMenuClick}
          className="relative z-50 cursor-pointer menuIcon sm:hidden"
        >
          <RiMenu3Line className="text-2xl " />
        </div>
        <ul
          ref={menuContainer}
          className="font-inter  menuContainer bg-black fixed w-full h-screen left-full top-0 px-20 py-20 flex flex-col gap-4"
        >
          <li onClick={mobileMenuClose} className="mob-links">
            <a
              href="#Home"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#Home");
              }}
            >
              Home
            </a>
          </li>
          <li onClick={mobileMenuClose} className="mob-links">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#about");
              }}
            >
              About
            </a>
          </li>
          <li onClick={mobileMenuClose} className="mob-links">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#projects");
              }}
            >
              Projects
            </a>
          </li>
          <li onClick={mobileMenuClose} className="mob-links">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
