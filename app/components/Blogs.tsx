import React from "react";
import Slide from "react-reveal/Slide";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center py-10" id="blog">
      <div className="flex flex-col items-center border-b-4 border-double">
        <h2 className="text-2xl sm:text-4xl text-[#040c2c] dark:text-slate-400 font-bold">
          <Slide bottom cascade>
            Blogs
          </Slide>
        </h2>
        <h4 className="text-xs sm:text-2xl">
          <Slide left cascade>
            My thoughts on various topics
          </Slide>
        </h4>
      </div>
      <div></div>
    </div>
  );
};

export default Blogs;
