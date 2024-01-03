import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from "../constants/projectDetails";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="w-full text-white  " id="project">
      <div className="w-[95%] mx-auto border-b border-b-[rgba(134,133,133,0.2)] py-20">
        <h1 className="py-3 text-[#ededed] text-lg md:text-xl w-full">
          Projects
        </h1>
        <div className="flex gap-5 w-full flex-wrap justify-center  ">
          {projects.map((project) => (
            <div
              className="w-full md:w-[48%]  p-4 bg-[#1c1c1c] shadow-md shadow-[#0000003d] border border-[#2d2d2d] rounded h-[150px] md:h-[200px]   hover:border-[#4c4c4c] transition duration-1000  project "
              key={project.id}
            >
              <div className="  flex gap-6 justify-end  ">
                <Link to={project.github}>
                  <div className="text-[#bbbbbb] bg-transparent  ">
                    <FaGithub />
                  </div>
                </Link>
                <Link to={project.link}>
                  <div className="text-[#bbbbbb] " id="link">
                    <FaLink />
                  </div>
                </Link>
              </div>
              <h1 className="text-left sm:text-center text-base uppercase text-[#ededed] py-4 md:py-7">
                {project.title}
              </h1>
              {/* <p className="text-center text-sm text-[#bbbbbb] pt-6">
                {project.techstacks}
              </p> */}
              <div className="flex justify-center flex-wrap">
                {project.techstacks.map((techstack) => (
                  <p className="text-center text-sm text-[#bbbbbb] pt-6 mr-2">
                    {techstack}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
