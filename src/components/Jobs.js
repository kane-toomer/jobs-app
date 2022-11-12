import React from "react";
import {
	BriefcaseIcon,
	CalendarIcon,
	LinkIcon,
	MapPinIcon,
} from "@heroicons/react/20/solid";

const Jobs = () => {
	return (
		<div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-10 mt-10">
			<div className="bg-gray-50 px-10 py-5 rounded-md">
				<div className="lg:flex lg:items-center lg:justify-between">
					<div className="min-w-0 flex-1">
						<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight mb-3">
							Job Title
						</h2>
						<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<BriefcaseIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
								Full Time
							</div>
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<MapPinIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
								Job Location
							</div>
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<CalendarIcon
									className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
									aria-hidden="true"
								/>
								Date Created
							</div>
						</div>
					</div>
					<div className="mt-5 flex lg:mt-0 lg:ml-4">
						<span className="ml-3 hidden lg:block">
							<button
								type="button"
								className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
								<LinkIcon
									className="-ml-1 mr-2 h-5 w-5 text-gray-500"
									aria-hidden="true"
								/>
								View
							</button>
						</span>
					</div>
				</div>
				<div className="mt-5 flex lg:mt-0 lg:ml-4">
					<span className="ml-auto lg:hidden">
						<button
							type="button"
							className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<LinkIcon
								className="-ml-1 mr-2 h-5 w-5 text-gray-500"
								aria-hidden="true"
							/>
							View
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Jobs;
