"use client";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";

library.add(fas, fab);

const HeaderMain = () => {
  const contactLists = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/md-al-amin-sahed/",
      icon: ["fab", "linkedin"],
    },
    {
      name: "Github",
      link: "https://github.com/alaminsahed",
      icon: ["fab", "github"],
    },
    {
      name: "Blog",
      link: "https://sahedthought.hashnode.dev/",
      icon: ["fab", "medium"],
    },
    {
      name: "email",
      link: "mailto:alaminsahed101@gmail.com",
      icon: ["fas", "envelope"],
    },
  ];

  return (
    <div className="md:h-screen bg-black" id="header">
      <Parallax
        className="md:h-screen"
        blur={5}
        bgImage="/images/background.png"
        bgImageAlt="banner"
        strength={500}
      >
        <div className="flex flex-col justify-center items-center mt-96">
          <Fade top>
            <div className="fadeInUp flex flex-col items-center text-white">
              <h5 className="text-3xl tracking-wide p-3">HELLO</h5>
              <h2 className="md:text-5xl tracking-wide p-3 font-bold">
                I am Md.Al-Amin Sahed
              </h2>
              <h4 className="md:text-2xl tracking-wide p-3">
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "React.js Developer",
                      "Javascript Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="flex flex-row justify-center items-center">
              {contactLists.map((item, index) => (
                <Link
                  href={item.link}
                  className="text-3xl bg-gray-500 text-white border rounded-full transition duration-150 ease-linear m-2 p-2 hover:bg-white hover:text-black"
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={item.icon as IconProp}
                    className="text-center bg-black text-white hover:text-black hover:bg-white p-2 rounded-full"
                  />
                </Link>
              ))}
            </div>
          </Fade>
        </div>
      </Parallax>
    </div>
  );
};

export default HeaderMain;
