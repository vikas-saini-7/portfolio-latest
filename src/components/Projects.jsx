import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectsData } from "../constants";

const Projects = () => {
  return (
    <div id="projects" className="py-[5%]">
      <h1 className="text-center uppercase text-purple-600 font-bold text-3xl mb-10">
        Projects
      </h1>
      <div className="bg-gray-100 px-2 shadow-md shadow-black/10">
        <div className="custom-project-container flex flex-col gap-12 lg:gap-24 md:gap-16">
          {/* <h1 className='text-2xl font-bold'>New Projects adding soon..</h1> */}
          {ProjectsData?.map((project) => (
            <>
              <ProjectItem key={project.id} project={project} />
            </>
          ))}
          {ProjectsData.length <= 2 && (
            <p className="mt-4 text-center text-xl font-bold">
              {" "}
              😎 Cool Projects adding soon
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
