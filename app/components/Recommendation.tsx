"use client";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import { useState, useEffect } from "react";
import { slides } from "../../utils/data/recommendation";
import { cn } from "@/libs/utils";

const Recommendation = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (slideIndex: any) => {
    setActiveSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="flex flex-col items-center py-10 bg-slate-100  dark:bg-black">
      <div className="flex flex-col items-center border-b-4 border-double">
        <h2 className="text-2xl sm:text-4xl text-[#040c2c] dark:text-slate-400 font-bold">
          <Slide bottom cascade>
            Recommendation
          </Slide>
        </h2>
        <h4 className="text-xs sm:text-2xl">
          <Slide left cascade>
            Colleague Voices: Reflecting Me Through Their Eyes
          </Slide>
        </h4>
      </div>
      <div className="py-10 w-full flex flex-col justify-center items-center mt-10">
        <div id="gallery" className="relative w-full" data-carousel="slide">
          <div className="relative overflow-hidden rounded-lg md:h-96">
            <div
              className="duration-700 ease-in-out dark:bg-black rounded-lg shadow-2xl h-full w-full flex items-center justify-center"
              data-carousel-item
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${
                    activeSlide === index ? "block" : "hidden"
                  } transition-opacity duration-700 ease-in-out`}
                >
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      src={`/images/recommendation/${slide.logo}`}
                      height={80}
                      width={80}
                      className="border border-gray-200 rounded-full dark:border-gray-700"
                      alt=""
                    />
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="text-lg text-[#040c2c] dark:text-white">
                        {slide.name}
                      </h3>
                      <div>
                        <h4 className="text-xs">
                          {" "}
                          {slide.currentProfession.designation} -{" "}
                          {slide.currentProfession.company}
                        </h4>
                      </div>
                      {slide.status === "ex-colleague" && (
                        <div>
                          <p className="text-sm text-[#040c2c] dark:text-slate-400 font-normal">
                            Ex: {slide.exProfession.designation} -{" "}
                            {slide.exProfession.company}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="container p-5">{slide.feedback}</div>
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
              activeSlide === slides.length - 1 ? "hidden" : "block"
            )}
            data-carousel-next
            disabled={activeSlide === slides.length - 1}
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
  );
};

export default Recommendation;
