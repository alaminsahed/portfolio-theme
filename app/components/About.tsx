"use client";
import { cn } from "@/libs/utils";
import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Link from "next/link";

const About = () => {
  const [activeTab, setActiveTab] = React.useState("aboutMe");

  const aboutNavLists = [
    { label: "About Me", tag: "aboutMe" },
    { label: "Education", tag: "degree" },
    { label: "Skills", tag: "learning" },
    { label: "Experience", tag: "profession" },
  ];

  return (
    <div className="about bg-white/80 dark:bg-[#121212] p-5" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-2/3 flex flex-col mt-16">
            <div className="pb-10">
              <h2 className="text-2xl lg:text-4xl p-3 font-bold text-[#040c2c] dark:text-slate-400">
                <Zoom cascade duration={3000}>
                  About Me
                </Zoom>
              </h2>
              <h3 className="text-lg lg:text-2xl p-3 font-normal dark:text-slate-200/70">
                <Slide bottom cascade>
                  Frontend Developer
                </Slide>
              </h3>
            </div>
            <div className="about-text">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  {aboutNavLists.map((item, index) => (
                    <li className="mr-2" role="presentation" key={index}>
                      <button
                        className={cn(
                          "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 xl:text-2xl",
                          activeTab === item.tag ? "border-gray-300" : ""
                        )}
                        type="button"
                        role="tab"
                        aria-selected="true"
                        id={item.tag}
                        onClick={() => setActiveTab(item.tag)}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="myTabContent" className="p-2">
                <Rotate top left cascade>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "aboutMe" ? "block" : "hidden"
                    )}
                    role="tabpanel"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      I am a passionate web developer with over 4 years of
                      professional experience, specializing in frontend
                      development. My expertise includes JavaScript, React.js,
                      and related technologies.
                      <br />
                      <br />
                      Currently, I lead frontend projects using modern tech
                      stacks, delivering responsive and reusable components that
                      reduce project timelines by 15-20%. I have designed and
                      developed intuitive architecture, user interfaces, and
                      business logic for various projects, including municipal
                      systems, an Automated Distribution System for a global
                      brand, an ERP solution for the garment industry, and
                      several other projects, significantly improving
                      operational efficiency and streamlining data management.
                      <br />
                      <br />
                      Previously, I served as a Software Engineer at SVAM
                      Bangladesh Pvt. Ltd., a subsidiary of SVAM International.
                      In this role, I developed and maintained projects using
                      React.js and TypeScript, integrating RESTful and
                      third-party APIs. I enhanced the user experience by 15-20%
                      through bug fixes and the implementation of business
                      logic, demonstrating a strong understanding of business
                      workflows. I also developed a loan provisioning solution,
                      a tiffin management system, an online learning platform,
                      and various internal and R&D projects, collaborating with
                      developers from diverse backgrounds to ensure successful
                      project delivery.
                      <br />
                      <br />
                      Earlier in my career, I worked as a full-stack web
                      developer at unshopr.com. During this time, I focused on
                      creating reusable components in React.js and TypeScript
                      while integrating APIs on the frontend. On the backend, I
                      developed APIs using Node.js, Express.js, TypeScript,
                      Hasura, and GraphQL.
                      <br />
                      <br />I have a strong passion for learning and constantly
                      expanding my technical expertise. In addition to my
                      development work, I enjoy sharing my knowledge through
                      technical blog posts.
                    </p>
                  </div>
                </Rotate>
                <Bounce cascade duration={4000}>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "degree" ? "block" : "hidden"
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h2 className="font-bold">
                        B.Sc. in Computer Science and Engineering.
                      </h2>
                      <h4>Southeast University, Bangladesh</h4>
                      <p>CGPA: 3.64/4</p>
                      <p>Passing Year: 2021</p>
                    </div>
                  </div>
                </Bounce>
                <Roll cascade>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "learning" ? "block" : "hidden"
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
                      <b>Skills:</b> JavaScript, React.js, TypeScript, Redux,
                      Next.js, REST API, Node.js, Git & Github <br /> <br />
                      <b>Familiar With:</b> Redux-Saga, GraphQL, Hasura,
                      MongoDB, Firebase, Nest.js
                    </div>
                  </div>
                </Roll>
                <Bounce cascade>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800",
                      activeTab === "profession" ? "block" : "hidden"
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h4 className="font-bold">
                        Software Engineer (Frontend)
                      </h4>
                      <h6>SSL Wireless</h6>
                      <p>Duration: 12/2023 - Present</p>
                    </div>
                  </div>
                </Bounce>
                <Bounce cascade duration={4000}>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800 mt-1",
                      activeTab === "profession" ? "block" : "hidden"
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h2 className="font-bold">
                        Software Engineer (Frontend)
                      </h2>
                      <h4>SVAM International</h4>
                      <p>Duration: 7/2022 - 11/2023</p>
                    </div>
                  </div>
                </Bounce>
                <Bounce cascade duration={6000}>
                  <div
                    className={cn(
                      "p-4 rounded-lg bg-gray-50 dark:bg-gray-800 mt-1",
                      activeTab === "profession" ? "block" : "hidden"
                    )}
                    role="tabpanel"
                  >
                    <div className="text-sm md:text-2xl text-gray-500 dark:text-gray-400">
                      <h2 className="font-bold">
                        Junior Web Developer (Full Stack)
                      </h2>
                      <h4>Unishopr.com</h4>
                      <p>Duration: 7/2021 - 6/2022</p>
                    </div>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 flex flex-col justify-center items-center mt-16">
            <div className="m-auto border-white border-4 select-none grayscale hover:filter-none rounded-full h-56 w-56 overflow-hidden">
              <video
                width="250"
                height="250"
                autoPlay={true}
                muted
                loop
                className="h-56 w-56"
              >
                <source src="/video/image-me2.webm" type="video/webm"></source>
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-row">
              <Fade left>
                <Link href="mailto:alaminsahed101@gmail.com" target="blank">
                  <button className="bg-slate-900/100 hover:bg-white border border-white hover:text-black text-white font-bold py-2 px-4 rounded-sm m-2">
                    Hire Me
                  </button>
                </Link>
              </Fade>
              <Fade right>
                <Link
                  href="https://drive.google.com/file/d/1TlbnIBUGk1L6qY3WmEqYsGgf0E4OL778/view?usp=sharing"
                  target="blank"
                >
                  <button className="bg-slate-900/100 hover:bg-white border border-white hover:text-black text-white font-bold py-2 px-4 rounded-sm m-2">
                    {" "}
                    Download CV{" "}
                  </button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
