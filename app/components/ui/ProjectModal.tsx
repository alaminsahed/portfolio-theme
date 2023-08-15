import React from "react";
import { cn } from "@/libs/utils";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  project: any;
  parent: string;
}

const ProjectModal = ({
  showModal,
  setShowModal,
  project,
  parent,
}: ModalProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full",
        showModal ? "block" : "hidden"
      )}
      key={project.id}
    >
      <div className="relative w-full max-w-7xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-bold text-rose-400">
              <Link
                href={
                  parent === "experience"
                    ? project.live_url
                    : project.live_url || project.githubLink
                }
                target="blank"
              >
                {project.name}
              </Link>
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
              {parent === "experience" ? (
                <>
                  <span className="text-black dark:text-white">
                    My core responsibilities:{" "}
                  </span>
                  <ul className="list-disc pl-5">
                    {project.responsibilities.map(
                      (responsibility: any, index: any) => (
                        <div key={index} className="container">
                          <li>{responsibility}</li>
                        </div>
                      )
                    )}
                  </ul>
                </>
              ) : (
                <>
                  <span className="text-black dark:text-white">
                    Project Features:{" "}
                  </span>

                  {project.features.map((feature: any, index: any) => (
                    <li key={index}>{feature}</li>
                  ))}
                </>
              )}
            </p>
            {project.images && <ImageSlider project={project} />}
          </div>
          <div className="flex flex-row justify-between items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              type="button"
              className=" bg-red-600 text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              type="button"
              className={cn(
                " bg-green-600 text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600",
                parent === "projects" && project.live_url === ""
                  ? "hidden"
                  : "block"
              )}
              disabled={project.live_url === ""}
              onClick={() => window.open(project.live_url)}
            >
              {project.live_url === "" && (
                <span className="absolute  transform bg-gray-200 text-gray-600 p-1 rounded text-xs opacity-0 hover:opacity-100">
                  {project.status !== "successful"
                    ? project.status
                    : "This is a internal private project. Not available for live preview."}
                </span>
              )}
              Live
            </button>
            {parent === "projects" && (
              <button
                type="button"
                className=" bg-yellow-600 text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                disabled={project.githubLink === ""}
                onClick={() => window.open(project.githubLink)}
              >
                GitHub
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
