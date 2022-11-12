import react from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pages = () => {
	return (
		<div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-10 mt-12">
			<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
				<div className="flex flex-1 justify-between sm:hidden">
					<a
						href="#"
						className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
						Previous
					</a>
					<a
						href="#"
						className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
						Next
					</a>
				</div>
				<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<div>
						<p className="text-sm text-gray-700">
							Showing <span className="font-medium">1</span> to{" "}
							<span className="font-medium">10</span> of{" "}
							<span className="font-medium">100</span> results
						</p>
					</div>
					<div>
						<nav
							className="isolate inline-flex -space-x-px rounded-md shadow-sm"
							aria-label="Pagination">
							<a
								href="#"
								className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
								<span className="sr-only">Previous</span>
								<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
							</a>
							{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
							<a
								href="#"
								aria-current="page"
								className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">
								1
							</a>
							<a
								href="#"
								className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
								<span className="sr-only">Next</span>
								<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pages;
