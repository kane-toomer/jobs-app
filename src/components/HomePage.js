import React, { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import _ from "lodash";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { initiateGetJobs } from "../actions/jobs";
import { resetErrors } from "../actions/errors";
import JobDetails from "./JobDetails";
import JobsContext from "../context/jobs";
import Header from "./Header";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";

const HomePage = (props) => {
	const [results, setResults] = useState([]);
	const [errors, setErrors] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [jobId, setJobId] = useState(-1);
	const [page, setPage] = useState("home");
	const [pageNumber, setPageNumber] = useState(1);
	const [selection, setSelection] = useState(null);
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef(null);

	useEffect(() => {
		setResults(props.jobs);
	}, [props.jobs]);

	useEffect(() => {
		setErrors(props.errors);
	}, [props.errors]);

	const loadJobs = (selection) => {
		const { dispatch } = props;
		const { description, location, full_time, page = 1 } = selection;
		let isLoadMore = false;
		if (selection.hasOwnProperty("page")) {
			isLoadMore = true;
		}
		dispatch(resetErrors());
		setIsLoading(true);
		dispatch(
			initiateGetJobs({ description, location, full_time, page }, isLoadMore)
		)
			.then(() => {
				setIsLoading(false);
			})
			.catch(() => setIsLoading(false));
	};

	const handleSearch = (selection) => {
		loadJobs(selection);
		setSelection(selection);
	};

	const handleItemClick = (jobId) => {
		setPage("details");
		setOpen(true);
		setJobId(jobId);
	};

	const handleResetPage = () => {
		setPage("home");
	};

	const handleLoadMore = () => {
		loadJobs({ ...selection, page: pageNumber + 1 });
		setPageNumber(pageNumber + 1);
	};

	let jobDetails = {};
	if (page === "details") {
		jobDetails = results.find((job) => job.id === jobId);
	}

	const value = {
		results,
		details: jobDetails,
		onSearch: handleSearch,
		onItemClick: handleItemClick,
		onResetPage: handleResetPage,
	};

	return (
		<JobsContext.Provider value={value}>
			<div>
				<Header />
				{!_.isEmpty(errors) && (
					<div className="">
						<p>{errors.error}</p>
					</div>
				)}
				<div className="">
					{/* <Results /> */}
					{isLoading && (
						<p className="text-center mb-20 text-xl font-bold">Loading...</p>
					)}
					{results.length > 0 && _.isEmpty(errors) && (
						<div className="flex justify-center">
							<div
								className="text-center bg-indigo-500 w-40 py-3 rounded-md text-white font-medium mb-20"
								onClick={isLoading ? null : handleLoadMore}>
								<button
									disabled={isLoading}
									className={`${isLoading ? "disabled" : ""}`}>
									Load More Jobs
								</button>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* MODAL */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					initialFocus={cancelButtonRef}
					onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center text-center sm:items-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
								<Dialog.Panel className="bg-gray-50 w-full relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full sm:max-w-4xl">
									{/* Close Button */}
									<div className="my-10 ml-10">
										<button
											className="flex items-center text-gray-600"
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}>
											<ArrowLongLeftIcon
												className="mr-2 h-5 w-5 flex-shrink-0"
												aria-hidden="true"
											/>
											Back
										</button>
									</div>

									{/* Job Details */}
									{page === "details" && <JobDetails />}

									{/* Cancel Button */}
									<div className="ml-10 mt-5 mb-10 ">
										<button
											className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/40 hover:ring-gray-900/20"
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</JobsContext.Provider>
	);
};

HomePage.propTypes = {
	jobs: PropTypes.array.isRequired,
	errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
	jobs: state.jobs,
	errors: state.errors,
});

export default connect(mapStateToProps)(HomePage);
