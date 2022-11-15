import React, { useContext, useEffect } from "react";
import JobsContext from "../context/jobs";

import {
	BriefcaseIcon,
	BuildingOffice2Icon,
	LinkIcon,
	MapPinIcon,
} from "@heroicons/react/20/solid";

const JobDetails = () => {
	const { details } = useContext(JobsContext);
	const {
		type,
		title,
		description,
		location,
		company,
		company_url,
		how_to_apply,
	} = details;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-10 mt-10">
			<div className="bg-gray-50 px-10 py-5 rounded-md">
				<div className="lg:flex lg:items-center lg:justify-between">
					<div className="min-w-0 flex-1">
						<div>
							{/* <span className="inline-block h-16 w-16 overflow-hidden rounded-full bg-gray-100">
								<img src={company_logo} alt={company} />
							</span> */}
							<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight mb-3">
								{title}
							</h2>
						</div>
						<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<BuildingOffice2Icon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
								{company}
							</div>
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<MapPinIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
								{location}
							</div>
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<BriefcaseIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
								{type}
							</div>
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<LinkIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
								{company_url}
							</div>
						</div>
					</div>
					{/* <div className="mt-5 flex lg:mt-0 lg:ml-4">
						<span className="ml-3 hidden lg:block">
							<button
								type="button"
								className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm 
                                hover:bg-red-500 hover:text-white hover:border-none">
								<HeartIcon
									className="-ml-1 mr-2 h-5 w-5 hover:text-white"
									aria-hidden="true"
								/>
								Save
							</button>
						</span>
					</div> */}
				</div>
				<div className="mt-20">
					<p className="text-xl font-bold underline mb-5">Job Description</p>
					<div dangerouslySetInnerHTML={{ __html: description }}></div>
				</div>
				<div className="mt-20">
					<p className="text-xl font-bold underline mb-5">How to Apply</p>
					<div dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
				</div>
				<div className="mt-10 flex lg:ml-4">
					<span className="ml-auto lg:hidden mr-5">
						<button
							type="button"
							className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-red-500 hover:text-white hover:border-none">
							<HeartIcon
								className="-ml-1 mr-2 h-5 w-5 hover:text-white"
								aria-hidden="true"
							/>
							Save
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
