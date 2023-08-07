import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { skillLists } from "../../utils/data/skills";

const Skills = () => {
  const getExperience = (start: number) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear - start;
  };

  return (
    <div
      className="skills flex flex-col items-center py-10 dark:bg-black bg-slate-100 mb-10"
      id="skills"
    >
      <div className="flex flex-col items-center border-b-4 border-double">
        <Fade top>
          <h2 className="text-2xl sm:text-4xl text-[#040c2c] dark:text-slate-400 font-bold">
            My Stack
          </h2>
          <p className="text-xs sm:text-2xl">
            Always open to learn new technologies and skills
          </p>
        </Fade>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-2 sm:gap-16 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-10">
          {skillLists.map((item, index) => (
            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border border-white rounded-full"
              key={index}
            >
              <Zoom delay={1000}>
                <div className="h-40 w-40">
                  <Image
                    height={250}
                    width={250}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-full"
                    src={`/images/skills/${item.logo}`}
                    alt="as"
                  />
                </div>
              </Zoom>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-lg text-gray-400 font-bold">
                    {item.name}
                  </span>{" "}
                  <br />
                  <span className="text-sm underline font-bold">
                    {item.level}
                  </span>{" "}
                  <br />
                  <span className="text-sm">
                    Experience: {getExperience(item.start)} years
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
