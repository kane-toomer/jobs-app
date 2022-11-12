import React, { useState, useContext } from "react";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Search = (props) => {
	const [state, setState] = useState({
		description: "",
		location: "",
		full_time: false,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === "full_time") {
			setState((prevState) => ({ ...state, [name]: !prevState.full_time }));
		} else {
			setState({ ...state, [name]: value });
		}
	};

	const handleSearch = (event) => {
		event.preventDefault();
		console.log(state);
	};

	return (
		<div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 bg-gray-300 pt-10">
			<form onSubmit={handleSearch} className="">
				<div className="grid grid-rows-2">
					<div className="flex flex-row gap-5 justify-center">
						{/* SEARCH TERM */}
						<div className="h-11 w-4/12 flex rounded-md shadow-sm">
							<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
								<MagnifyingGlassIcon
									className="block h-6 w-6"
									aria-hidden="true"
								/>
							</span>
							<input
								type="text"
								name="search-term"
								id="search-term"
								className="relative block w-full flex-1 appearance-none rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Job Title or Keywords"
								onChange={handleInputChange}
							/>
						</div>

						{/* LOCATION */}
						<div className="h-11 w-4/12 flex rounded-md shadow-sm">
							<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
								<MapPinIcon className="block h-6 w-6" aria-hidden="true" />
							</span>
							<input
								type="text"
								name="location"
								id="location"
								className="relative block w-full flex-1 appearance-none rounded-none rounded-r-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="City, Country or Postal Code"
								onChange={handleInputChange}
							/>
						</div>

						{/* SEARCH BUTTON */}
						<div className="px-2 text-right">
							<button
								type="submit"
								className="h-11 inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-5 text-md font-md text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
								Search
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Search;
