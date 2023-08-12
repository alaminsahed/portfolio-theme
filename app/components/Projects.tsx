import Image from "next/image";
import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import { projectLists } from "../../utils/data/projects";
import { skillTagsVariants } from "./ui/SkillTags";
import { cn } from "@/libs/utils";
import Link from "next/link";
import ProjectModal from "./ui/ProjectModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState<number>();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleModal = (id: number) => {
    setShowModal(!showModal);
    setProjectId(id);
  };

  const handleSlideChange = (slideIndex: any) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className="flex flex-col items-center py-10" id="portfolio">
      <div className="flex flex-col items-center border-b-4 border-double">
        <h2 className="text-2xl sm:text-4xl text-[#040c2c] dark:text-slate-400 font-bold">
          <Slide up cascade>
            Projects
          </Slide>
        </h2>
        <h4 className="text-xs sm:text-2xl">
          <Slide bottom cascade>
            Some of my personal works
          </Slide>
        </h4>
      </div>
      <div className="p-5">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          {projectLists.map((project, index) => (
            <div
              className="flex flex-col p-8 justify-center items-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <h2>{project.name}</h2>
              <small className="pt-1">{project.details}</small>
              <div className="p-1">
                {project.techTags.map((tag, index) => (
                  <span
                    className={skillTagsVariants({
                      variant: tag.style,
                    })}
                    key={index}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <button
                className="text-sm p-1 bg-blue-900 hover:bg-white text-white hover:text-black sm:font-bold md:py-2 md:px-4 rounded mt-2 h-10 w-20"
                onClick={() => handleModal(project.id)}
              >
                Details
              </button>
              {showModal && project.id === projectId && (
                <ProjectModal
                  project={project}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  parent="projects"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
