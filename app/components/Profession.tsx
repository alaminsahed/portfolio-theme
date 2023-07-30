'use client';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
import Link from 'next/link';
import { cn } from '@/libs/utils';
import { totalExperience } from '@/utils/data/experience';

// export const projectTagVariant = {
// 	dark: "bg-gray-100 text-gray-800 p-10 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
// 	default:
// 		"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400",
// 	red: "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
// 	green:
// 		"bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
// 	yellow:
// 		"bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400",
// 	purple:
// 		"bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
// 	indigo:
// 		"bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
// 	pink: "bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400",
// };



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
			<div className="grid sm:grid-cols-2 sm:divide-x-4 p-5 sm:divide-lime-300">
				{
					totalExperience.map((experience, index) => (
						<div className='p-3' key={index}>
							<LightSpeed left delay={experience.animationDelay}>
								<div className="shadow-2xl rounded-lg p-6 dark:bg-gray-900">
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
											<div className="p-4 rounded-lg mt-3 flex flex-col bg-gray-300 dark:bg-gray-800">
												<div className="text-base text-slate-600 dark:text-gray-400">
													<Link href="https://apply.bigthinkcapital.com/" target='blank'>{project.name}</Link>
													<div>
														<small className='text-xs'>{project.description}</small>
													</div>
													<div className='pt-2'>
														{
															project.stacks.map((tag, index) => (
																<span className={tag.style} key={index}>{tag.name}</span>
															))
														}
													</div>
												</div>
												<button className="text-sm p-1 bg-blue-900 hover:bg-white text-white hover:text-black sm:font-bold md:py-2 md:px-4 rounded mt-2 h-10 w-20">
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