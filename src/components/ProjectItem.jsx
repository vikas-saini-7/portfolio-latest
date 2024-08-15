import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import React from "react";

const ProjectItem = ({ project }) => {
  // Function to generate random color
  const getRandomColor = () => {
    const colors = [
      "text-red-700",
      "text-green-700",
      "text-blue-700",
      "text-purple-700",
      "text-pink-700",
      "text-gray-700",
    ];
    let colorClass = "";
    const randomNumber = Math.floor(Math.random() * colors.length);
    colorClass += colors[randomNumber];
    return colorClass;
  };
  const { id, type, name, tech, description, links, image } = project;
  return (
    <div className="flex flex-col md:flex-row md:gap-12 overflow-hidden bg-white p-4 rounded-xl shadow-md shadow-black/">
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="project-image-container w-full md:w-2/5 h-[220px] md:h-[180px] lg:h-[320px] overflow-hidden border rounded-xl"
      ></div>
      <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4 mt-4">
        <h1 className="uppercase text-purple-600 font-bold text-xl">{type}</h1>
        <h2 className="font-bold text-3xl text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">
          <b>Tech Stack:</b>{" "}
          {tech.map((item) => (
            <span className={`${getRandomColor()}`}>{item}, </span>
          ))}
        </p>
        {description.map((item) => (
          <p className="text-md text-gray-600">{item}</p>
        ))}
        <div className="flex gap-4 mt-4">
          <a target="_blank" href={links?.live}>
            <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-1">
              {" "}
              <IconLink /> Check Live
            </button>
          </a>
          <a target="_blank" href={links?.github}>
            <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1">
              {" "}
              <IconBrandGithub /> View Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
