import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import Link from 'next/link';
import { cn } from '@/libs/utils';
import { totalExperience } from '@/utils/data/experience';


const Profession = () => {

	return (
		<div id="experience" className=''>
			<div className='flex flex-col items-center'>
				<h2 className="text-2xl lg:text-4xl p-3 font-bold text-[#040c2c] dark:text-slate-400 border-b-4 border-double">
					<Zoom cascade duration={2000}>
						Experience
					</Zoom>
				</h2>
			</div>
			<div className="grid grid-cols-2 divide-x-4 p-5 divide-lime-300">
				{
					totalExperience.map((experience, index) => (
						<div className='p-3' key={index}>
							<LightSpeed left delay={experience.animationDelay}>
								<div className={cn("shadow-2xl rounded-lg p-6 dark:${experience.darkTextColor", experience.darkBgColor, experience.darkTextColor)}>
									<h3 className='text-xl sm:text-2xl font-bold text-rose-400'>{experience.title} ({experience.area})</h3>
									<h4 className=' text-base sm:text-lg font-semibold'><Link href={experience.company_url}>{experience.company}</Link></h4>
									<h5>{experience.duration}</h5>
									<small><b>Technical Stack:</b> {experience.stacks}</small>
								</div>
							</LightSpeed>
							<div className='pt-5'>
								<h4 className='text-xl font-semibold'>Project Lists:</h4>
								{
									experience.projects.map((project, index) => (
										<Bounce cascade duration={project.animationDuration} delay={project.animationDelay} key={index}>
											<div className={cn("p-4 rounded-lg mt-3 flex justify-between", project.bgColor, project.darkBgColor)}>
												<div className="text-base text-gray-500 dark:text-gray-400">
													<Link href="https://apply.bigthinkcapital.com/" target='blank'>{project.name}</Link>
													<div className='pt-2'>
														{
															project.stacks.map((tag, index) => (
																<span className={tag.style} key={index}>{tag.name}</span>
															))
														}
													</div>
												</div>
												<button className="text-sm p-1  hover:bg-white text-white hover:text-black sm:font-bold md:py-2 md:px-4 rounded">
													Details
												</button>
											</div>
										</Bounce>
									))
								}
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default Profession;