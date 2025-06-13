import React from "react";
import "../Styles/contactsection.css";
import { IoLogoInstagram } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
const Contactsection = () => {
  return (
    <section
      id="contact"
      className="contact-container w-full h-[70svh] md:h-dvh "
    >
      <div className="container mx-auto   h-full flex justify-center items-center ">
        <div className="w-[90%] max-w-[768px] h-fit bg-red-900/10 backdrop-blur-lg rounded-md p-6 flex flex-col gap-10 border-2 border-red-900/90">
          <p className="font-italiana font-black text-4xl capitalize">
            contact me
          </p>
          <div className=" h-full mt-10">
            <ul className="flex  gap-4">
              <li>
                <a href="https://www.instagram.com/web___.dev/" target="_blank">
                  <IoLogoInstagram className="w-8 h-8 hover:text-pink-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/basheerahamed2/"
                  target="_blank"
                >
                  <BsLinkedin className="w-8 h-8 hover:text-blue-600" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/917845943253" target="_blank">
                  <IoLogoWhatsapp className="w-8 h-8  hover:text-green-600" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Basheer007" target="_blank">
                  <IoLogoGithub className="w-8 h-8  hover:text-red-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=basheerahamed1n@gmail.com"
                  target="_blank"
                >
                  <MdOutlineAttachEmail className="w-8 h-8  hover:text-yellow-600" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-inter">location: Tamilnadu, chennai</p>
          </div>
        </div>
      </div>
      <footer className="w-full h-20 bg-black fixed bottom-0 left-0 right-0 flex justify-center items-center">
        <p className="font-inter">Design & Crafted by Basheer with Love</p>
      </footer>
    </section>
  );
};

export default Contactsection;
