"use client";
import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import LightSpeed from "react-reveal/LightSpeed";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { totalExperience } from "@/utils/data/experience";

const Profession = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState("");

  console.log(showModal);

  const handleModal = (id: string) => {
    setShowModal(!showModal);
    setProjectId(id);
  };

  console.log(projectId, showModal);

  return (
    <div id="experience" className="">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl p-3 font-bold text-[#040c2c] dark:text-slate-400 border-b-4 border-double">
          <Zoom cascade duration={2000}>
            Experience
          </Zoom>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 sm:divide-x-4 p-5 sm:divide-lime-300">
        {totalExperience.map((experience, index) => (
          <div className="p-3" key={experience.id}>
            <LightSpeed left delay={experience.animationDelay}>
              <div className="shadow-2xl rounded-lg p-6 dark:bg-gray-900">
                <h3 className="text-xl sm:text-2xl font-bold text-rose-400">
                  {experience.title} ({experience.area})
                </h3>
                <h4 className=" text-base sm:text-lg font-semibold">
                  <Link href={experience.company_url}>
                    {experience.company}
                  </Link>
                </h4>
                <h5>{experience.duration}</h5>
                <small>
                  <b>Technical Stack:</b> {experience.stacks}
                </small>
              </div>
            </LightSpeed>
            <div className="pt-5">
              <h4 className="text-xl font-semibold">Project Lists:</h4>
              {experience.projects.map((project, index) => (
                <>
                  <Bounce
                    cascade
                    duration={project.animationDuration}
                    delay={project.animationDelay}
                    key={project.id}
                  >
                    <div className="p-4 rounded-lg mt-3 flex flex-col bg-gray-300 dark:bg-gray-800">
                      <div className="text-base text-slate-600 dark:text-gray-400">
                        <Link
                          href="https://apply.bigthinkcapital.com/"
                          target="blank"
                          className="text-base font-semibold text-blue-900 dark:text-white"
                        >
                          {project.name}
                        </Link>
                        <div>
                          <small className="text-xs">
                            {project.description}
                          </small>
                        </div>
                        <div className="pt-2">
                          {project.stacks.map((tag, index) => (
                            <span className={tag.style} key={index}>
                              {tag.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        className="text-sm p-1 bg-blue-900 hover:bg-white text-white hover:text-black sm:font-bold md:py-2 md:px-4 rounded mt-2 h-10 w-20"
                        onClick={() => handleModal(project.id)}
                      >
                        Details
                      </button>
                      {project.name}
                    </div>
                  </Bounce>
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
                              {project.name}
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
                              {project.description}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              <span className="text-black dark:text-white">
                                My core responsibility:{" "}
                              </span>
                              {project.description}
                            </p>
                          </div>
                          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                              type="button"
                              className=" bg-red-600 text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                              onClick={() => setShowModal(false)}
                            >
                              close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profession;
