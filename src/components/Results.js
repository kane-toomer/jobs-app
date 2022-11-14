import React, { useContext } from "react";
import JobsContext from "../context/jobs";
import JobItem from "./JobsCell";

const Results = () => {
	const { results } = useContext(JobsContext);
	return (
		<div className="">
			{results.map((job, index) => (
				<JobItem key={job.id} {...job} index={index} />
			))}
		</div>
	);
};

export default Results;
