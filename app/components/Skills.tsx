import Image from 'next/image';
import React from 'react';
import Fade from "react-reveal/Fade";

const Skills = () => {

	const skillLists = [{ name: 'React.js', logo: "react3.png", level: 'Core Skill', start: 2020 }, { name: 'Next.js', logo: "react3.png", level: 'Core Skill', start: 2021 }, { name: 'React.js', logo: "react3.png", level: 'Core Skill', start: 2019 }, { name: 'React.js', logo: "react3.png", level: 'Core Skill', start: 2018 }, { name: 'React.js', logo: "react3.png", level: 'Core Skill', start: 1997 }];

	return (
		<div className="skills h-screen flex flex-col items-center p-5 dark:bg-black bg-slate-100" id="skills">
			<div className="flex flex-col items-center border-b-4 border-double">
				<Fade top>
					<h2 className="text-2xl sm:text-4xl">My Stack</h2>
					<p className="text-xs sm:text-2xl">
						Always open to learn new technologies and skills
					</p>
				</Fade>
			</div>
			<div>
				<div class="grid grid-cols-2 gap-2 sm:gap-16 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-10">
					{
						skillLists.map((item, index) => (
							<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 border border-white rounded-full" key={index}>
								<div class="h-40 w-40 sm:h-48 sm:w-48">
									<Image height={250} width={250} class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={`/images/skills/${item.logo}`} alt="as" />
								</div>
								<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
								<div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
									<p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
										<span className='text-2xl text-rose-900/100 font-bold'>{item.name}</span> <br />
										<span className='text-lg underline font-bold'>{item.level}</span> <br />
										<span className='text-lg'>Experience: 3 years</span>
									</p>
								</div>
							</div>
						))
					}
				</div>
			</div>

		</div>
	);
};

export default Skills;
