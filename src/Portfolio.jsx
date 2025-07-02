import React, { useState } from "react";
import LikodPart from "./components/likodPart";
import {
  FaArrowDown,
  FaFacebook,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaTools,
  FaNetworkWired,
  FaVideo,
  FaShieldAlt,
  FaLaptop,
} from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { Link } from "react-router-dom";
import julio from "./assets/IT_LIM_D_IMG_4430.jpg";
import ncii from "./assets/ncii.png";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import resume from "./assets/JARL CV.pdf";
import react from "./assets/logo192.png";
import Typewriter from "typewriter-effect";
import { FaFile } from "react-icons/fa";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("teckStack");

  const teckStack = [
    { icon: <FaReact  color="#02d3f7"/>, label: "React" },
    { icon: <SiTailwindcss  color="#02d3f7" />, label: "TailwindCSS" },
    { icon: <FaNodeJs  color="#82ca25"/>, label: "Node.js" },
    { icon: <SiExpress  />, label: "Express.js" },
    { icon: <SiMongodb  color="#82ca25"/>, label: "MongoDB" },
    { icon: <FaHtml5   color="#de4b24"/>, label: "HTML5" },
    { icon: <FaCss3Alt  color="#1773ac"/>, label: "CSS" },
    { icon: <SiPostman color="#de4b24" />, label: "Postman" },
  ];

  const itSkills = [ 
    { icon: <FaTools color="#DA6C6C" />, label: "Hardware Troubleshooting" },
    { icon: <FaNetworkWired color="#FADA7A" />, label: "Network Cabling" },
    { icon: <FaVideo color="#748873"/>, label: "CCTV Installation" },
    { icon: <FaShieldAlt color="#82ca25" />, label: "Preventive Maintenance" },
    { icon: <FaLaptop  color="#4CC9FE" />, label: "Software Support" },
  ];

  return (
    <body className="bg-black">
      <nav className=" z-10 flex justify-center relative">
        <ul className="flex text-xl py-4 font-bold text-white  space-x-12 ">
          <a href="#about" className="hover:text-[#45FFCA]">
            ABOUT
          </a>
          <a href="#skills" className="hover:text-[#45FFCA]">
            SKILLS
          </a>
          <a href="#contact" className="hover:text-[#45FFCA]">
            CONTACT
          </a>
        </ul>
      </nav>
      <section className="z-10 text-white text-3xl md:text-5xl font-bold mt-26  text-center md:text-start md:ml-26 h-screen">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("WelcomeToMyPage = {<br></br>")
              .typeString(
                '&nbsp;&nbsp;<span class="md:ml-28">name: <strong class="text-[#45FFCA]">"Julio Angelo R. Lim"</strong>,</span><br>'
              )
              .typeString(
                '&nbsp;&nbsp;<span class="md:ml-28 ">location: <strong class="text-[#45FFCA]">"Calamba City, Laguna",</strong></span><br>'
              )
              .typeString(
                '&nbsp;&nbsp;<span class="md:ml-28">occupation: <strong class="text-[#45FFCA]">"Student"</strong> </span><br>'
              )
              .typeString("};")
              .start();
          }}
          options={{
            autoStart: true,
            loop: false,
            delay: 75,
          }}
        />
      </section>
      <a
        href="#about"
        className="w-full z-1 absolute bottom-8 justify-center flex"
      >
        <div className="border-2 size-20 rounded-xl p-2 flex justify-center items-center text-6xl  border-white text-[#45FFCA]">
          <FaArrowDown />
        </div>
      </a>
      {/* ABOOUT */}
      <section
        id="about"
        className=" relative z-10 flex flex-col md:flex-row bg-white py-10 px-6 md:px-28"
      >
        <div className="flex flex-col w-full md:w-1/2 items-center space-y-4">
          <img
            className="w-72 h-72 rounded-lg"
            src={julio}
            alt="Profile photo"
          />
          <img className="w-112 h-auto" src={ncii} alt="NCII" />
        </div>
        <div className="w-full  md:w-1/2">
          <div className=" relative">
            <h2 className="text-[#45FFCA] text-7xl font-bold">About Me</h2>
            <h2 className=" -z-1 font-black opacity-25 absolute top-0 ml-6 mt-6 text-9xl">
              About
            </h2>
          </div>
          <h2 className="mt-12 text-lg font-bold">Introduction</h2>
          <p className="text-lg">
            Motivated and reliable Bachelor of Science in Information Technology
            student with hands-on experience in hardware and software
            troubleshooting, network cabling, CCTV installation, and voucher
            system support. Proven track record providing Preventive Maintenance
            Services (PMS) as a freelance IT technician under JARLTech Fix since
            2019. Skilled in software development using the MERN Stack for
            building dynamic web applications. Strong problem-solving skills,
            attention to detail, and dedication to delivering practical IT
            solutions for both individual clients and business operations.
          </p>
          <div>
            <h2 className="text-lg mt-4 font-bold">Work Experience</h2>
            <p className="font-semibold">
              JARLTech Fix - Freelance IT Technician / Sep 2019 - Present <br />
              digichALLENger - Internship (600 hours) OJT / Jan 2025 - Apr 2025
              <br />
              City College of Calamba - Capstone Research Project <br />
            </p>
            <h2 className="text-lg mt-4 font-bold">Education</h2>
            <p className="font-semibold">
              City College of Calamba - BS INFORMATION TECHNOLOGY / 2021 - 2025
            </p>
            <h2 className="text-lg mt-4 font-bold">Certification</h2>
            <p className="font-semibold">
              Trimex Colleges / National Certificate II in Computer Systems
              Servicing / June 14, 2025 - June 13, 2030
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2 className=" text-[#45FFCA] my-10 text-center text-7xl  font-bold">
          SKILLS
        </h2>
        <div className=" z-10 relative bg-white place-content-center flex space-x-8 text-2xl">
          <button
            onClick={() => setActiveTab("teckStack")}
            className={`px-4 py-2 mx-2  ${
              activeTab === "teckStack"
                ? "border-[#45FFCA] border-b-2"
                : "transition delay-50 duration-300 ease-in-out hover:scale-125 border-b-2 border-b-gray-200 hover:border-[#45FFCA]"
            }`}
          >
            Teck Stack
          </button>
          <button onClick={() => setActiveTab("it")}
          className={`px-4 py-2 mx-2  ${
            activeTab === "it"
              ? "border-[#45FFCA] border-b-2"
              : "transition delay-50 duration-300 ease-in-out hover:scale-125 border-b-2 border-b-gray-200 hover:border-[#45FFCA]"
          }`}>
            IT Skills
          </button>
          
        </div>
        <div className=" pt-8 pb-4 bg-white grid grid-cols-2 md:grid-cols-3 gap-8">
        {(activeTab === "teckStack" ? teckStack : itSkills).map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="mb-2 text-8xl">{item.icon}</div>
            <span className="text-xl font-medium">{item.label}</span>
          </div>
        ))}
      </div>
      </section>
      {/* Contact */}
      <section id="contact" className="mb-20 relative z-10">
        <h1 className=" text-[#45FFCA] my-10 text-center text-7xl  font-bold">
          Get in touch
        </h1>
        <div className="text-white  text-6xl flex justify-center space-x-20">
          <a
            href={resume}
            className=" flex flex-col items-center hover:text-[#45FFCA] "
          >
            <FaFile />
            <strong className="text-4xl">Resume</strong>
          </a>
          <a
            href="https://www.facebook.com/angelo.lim06/"
            className=" flex flex-col items-center hover:text-[#45FFCA] "
          >
            <FaFacebook />
            <strong className="text-4xl">Facebook</strong>
          </a>
        </div>
      </section>

      {/* footer */}
      <footer className="text-white text-lg text-center">
        ©Julio Angelo Lim 2025 All rights reserved.
      </footer>
      {/* bg */}
      <div className="  -z-1">
        <LikodPart />
      </div>
    </body>
  );
};

export default Portfolio;
