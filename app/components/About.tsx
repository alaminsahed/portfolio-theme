"use client";
import { cn } from "@/libs/utils";
import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";



const About = () => {
  const [activeTab, setActiveTab] = React.useState("aboutMe");

  const aboutNavLists = [
    { label: "About Me", tag: "aboutMe" },
    { label: "Education", tag: "education" },
    { label: "Skills", tag: "skills" },
  ];

  return (
    <div className="about h-screen" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-1/2 flex flex-col items-center mt-16">
            <div className="pb-10">
              <Fade bottom>
                <h2 className="text-4xl p-3 font-bold text-[#040c2c] dark:text-slate-400">About Me</h2>
              </Fade>
              <Fade bottom>
                <h6 className="text-2xl p-3 font-normal dark:text-slate-200/70">Frontend Developer</h6>
              </Fade>
            </div>
            <div className="about-text">

              <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                  {
                    aboutNavLists.map((item, index) => (
                      <li class="mr-2" role="presentation" key={index}>
                        <button class={cn("inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300", activeTab === activeTab ? 'underline' : '')} type="button" role="tab" aria-selected="true" id={item.tag} onClick={() => setActiveTab(item.tag)} >{item.label}</button>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div id="myTabContent">
                <div className={cn("p-4 rounded-lg bg-gray-50 dark:bg-gray-800", activeTab === 'aboutMe' ? 'block' : 'hidden')} id="aboutMe" role="tabpanel" aria-labelledby="profile-tab">
                  <p className="text-sm text-gray-500 dark:text-gray-400">hello
                  </p>
                </div>
              </div>

            </div>
            {/* <div className="hire-cv-button">
              <Fade left>
                <button className="theme-fill-btn">Hire Me</button>

                <a href="https://drive.google.com/file/d/1KxGDHZ802k48IswG6SxuZQUILLN_Qoun/view?usp=sharing">
                  <button className="theme-fill-btn"> Download CV </button>
                </a>
              </Fade>
            </div> */}
          </div>
          <div className="md:basis-1/2">col-6</div>
        </div>
      </div>
    </div>
  );
};

export default About;
