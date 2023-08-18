import React from "react";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import Image from "next/image";
import { totalBlogs } from "../../utils/data/blogs";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { BlogCardVariants } from "./ui/BlogCardVariants";

const Blogs = () => {
  return (
    <div
      className="flex flex-col items-center py-10 bg-slate-100 dark:bg-black"
      id="blog"
    >
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
      <div className="h-full">
        <div className="container mx-auto  lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 h-full pb-40">
            {totalBlogs.map((blog) => (
              <Flip key={blog.id} delay={1200}>
                <div className="mx-3 lg:pl-20">
                  <div
                    className={BlogCardVariants({
                      variant: blog.variant,
                    })}
                  >
                    <div className="px-3">
                      <Image
                        src={blog.photo}
                        alt={blog.photo}
                        width={500}
                        height={500}
                        className="object-cover rounded-2xl opacity-80 hover:opacity-100 transition ease-out duration-300"
                      />
                    </div>
                    <div className="px-7 mt-10 text-black">
                      <h1 className="text-sm lg:text-md font-bold group-hover:text-purple-900 transition ease-out duration-300">
                        {blog.name}
                      </h1>
                      <p className="mt-2 opacity-60 group-hover:opacity-70 truncate...">
                        {blog.details}
                      </p>
                    </div>
                    <Link
                      className="bg-orange-500 hover:bg-orange-700 p-3 text-center rounded mt-5 w-1/2"
                      href={blog.link}
                      target="_blank"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </Flip>
            ))}
          </div>
        </div>
      </div>
      <Slide bottom delay={2000}>
        <Link
          className="bg-rose-500 hover:bg-rose-700 p-3 text-center rounded mt-5"
          href="https://sahedthought.hashnode.dev/"
          target="_blank"
        >
          More Blogs
        </Link>
      </Slide>
    </div>
  );
};

export default Blogs;
