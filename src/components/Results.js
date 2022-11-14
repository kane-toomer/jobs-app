import React, { useContext } from "react";
import JobsContext from "../context/jobs";
import JobItem from "./JobsCell";

const Results = () => {
	const { results } = useContext(JobsContext);
	return (
		<div className="mb-20">
			{results.map((job, index) => (
				<JobItem key={job.id} {...job} index={index} />
			))}
		</div>
	);
};

export default Results;
