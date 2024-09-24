import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Hero = () => {
  return (
    <div className=" pt-[200px] relative z-30 py-[8%] shadow-md shadow-black/10 min-h-[70vh]">
      <div className="absolute z-40 inset-0 hero-bg"></div>
      <div className="custom-container relative z-50">
        <div className="flex px-4 flex-col-reverse md:flex-row item-center justify-center gap-12 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold text-gray-800">
              Full Stack Web Developer
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Hi, I'm Vikas Saini. A passionate Full Stack Web Developer based
              in Pune, India. 📍
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vikas-saini-602b96227"
              >
                <IconBrandLinkedin size={36} />
              </a>
              <a target="_blank" href="https://github.com/vikas-saini-7">
                <IconBrandGithub size={36} />
              </a>
            </div>
            <p className="mt-4 md:w-fit">
              <a
                className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded mt-6 block"
                href="./resume/Vikas_Saini_Full_Stack_Resume.pdf"
                target="_blank"
              >
                Download Resume
              </a>
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center rounded-xl">
            <img
              className="w-1/2 md:w-full h-auto object-contain rounded-xl "
              src="images/profile.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex px-4 items-center justify-center md:justify-start gap-8 mt-[10%]">
          <h2 className="font-semibold text-lg text-gray-800 hidden md:block">
            Tech Stack
          </h2>
          <div className="text-3xl hidden md:block">|</div>
          <div className="flex items-cneter justify-center md:justify-start flex-wrap gap-8">
            {/* <img src="images/icons.svg" alt="" />
            <img src="images/icons-2.svg" alt="" />
            <img src="images/icons-3.svg" alt="" />
            <img src="images/icons-4.svg" alt="" /> */}
            MERN, ReactJS, NextJS, Redux Toolkit, PostgreSql, Prisma, Aws and
            more..
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
