import React from "react";
import Header from "./Header";
import Jobs from "./Jobs";
import Search from "./Search";
import Pages from "./Pages";

const HomePage = () => {
	return (
		<div>
			<Header />
			<Search />
			<Jobs />
			<Pages />
		</div>
	);
};

export default HomePage;
