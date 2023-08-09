import Image from "next/image";
import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import { projectLists } from "../../utils/data/projects";
import { skillTagsVariants } from "./ui/SkillTags";
import { cn } from "@/libs/utils";
import Link from "next/link";

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
                <div
                  className={cn(
                    "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full",
                    showModal ? "block" : "hidden"
                  )}
                  key={index}
                >
                  <div className="relative w-full max-w-7xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-bold text-rose-400">
                          <Link href={project.githubLink}>{project.name}</Link>
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() => setShowModal(false)}
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>

                      <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span className="text-black dark:text-white">
                            Project Description:{" "}
                          </span>
                          {project.details}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <span className="text-black dark:text-white">
                            Project Features:{" "}
                          </span>

                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </p>
                        <div className="py-10 flex flex-col justify-center items-center mt-10">
                          <div
                            id="gallery"
                            className="relative"
                            data-carousel="slide"
                          >
                            <div className="relative overflow-hidden md:h-96">
                              <div
                                className="duration-700 ease-in-out dark:bg-black shadow-2xl flex items-center justify-center w-full h-full"
                                data-carousel-item
                              >
                                {project.images.map((image, index) => (
                                  <div
                                    key={index}
                                    className={`${
                                      activeSlide === index ? "block" : "hidden"
                                    } transition-opacity duration-700 ease-in-out w-full h-full`}
                                  >
                                    <div className="flex flex-col justify-center items-center w-full h-full">
                                      <Image
                                        src={image}
                                        height={80}
                                        width={80}
                                        className="border border-gray-200 dark:border-gray-700 h-56 w-56"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <button
                              type="button"
                              className={cn(
                                "absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
                                activeSlide === 0 ? "hidden" : "block"
                              )}
                              data-carousel-prev
                              disabled={activeSlide === 0}
                              onClick={() => handleSlideChange(activeSlide - 1)}
                            >
                              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                  className="w-4 h-4 text-white dark:text-gray-800"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 1 1 5l4 4"
                                  />
                                </svg>
                                <span className="sr-only">Previous</span>
                              </span>
                            </button>
                            <button
                              type="button"
                              className={cn(
                                "absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
                                activeSlide === project.images.length - 1
                                  ? "hidden"
                                  : "block"
                              )}
                              data-carousel-next
                              disabled={
                                activeSlide === project.images.length - 1
                              }
                              onClick={() => handleSlideChange(activeSlide + 1)}
                            >
                              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                  className="w-4 h-4 text-white dark:text-gray-800"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                                <span className="sr-only">Next</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          type="button"
                          className=" bg-red-600 text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
